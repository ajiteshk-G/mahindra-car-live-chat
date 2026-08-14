class LiveAudioOutputManager {
    constructor() {
        this.audioInputContext = null;
        this.workletNode = null;
        this.initialized = false;
        this.audioQueue = [];
        this.isPlaying = false;
    }

    async playAudioChunk(base64AudioChunk) {
        try {
            if (!this.initialized) {
                await this.initializeAudioContext();
            }

            if (this.audioInputContext && this.audioInputContext.state === "suspended") {
                await this.audioInputContext.resume();
            }

            if (!this.workletNode) return;

            const arrayBuffer = LiveAudioOutputManager.base64ToArrayBuffer(base64AudioChunk);
            const float32Data = LiveAudioOutputManager.convertPCM16LEToFloat32(arrayBuffer);

            this.workletNode.port.postMessage(float32Data);
        } catch (error) {
            console.error("Error processing audio chunk:", error);
        }
    }

    async initializeAudioContext() {
        if (this.initialized && this.audioInputContext && this.audioInputContext.state !== "closed") {
            if (this.audioInputContext.state === "suspended") {
                await this.audioInputContext.resume();
            }
            return;
        }

        console.log("initializeAudioContext starting...");
        try {
            this.audioInputContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 24000
            });
            await this.audioInputContext.audioWorklet.addModule("/frontend/pcm-processor.js");
            this.workletNode = new AudioWorkletNode(this.audioInputContext, "pcm-processor");
            this.workletNode.connect(this.audioInputContext.destination);
            this.initialized = true;
            console.log("initializeAudioContext ready at 24kHz.");
        } catch (e) {
            console.error("Failed to initialize AudioContext:", e);
        }
    }

    interrupt() {
        if (this.workletNode) {
            this.workletNode.port.postMessage("interrupt");
        }
    }

    static base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    static convertPCM16LEToFloat32(pcmData) {
        const inputArray = new Int16Array(pcmData);
        const float32Array = new Float32Array(inputArray.length);
        for (let i = 0; i < inputArray.length; i++) {
            float32Array[i] = inputArray[i] / 32768;
        }
        return float32Array;
    }
}

class LiveVideoOutputManager {
    constructor() {
        this.mediaSource = null;
        this.sourceBuffer = null;
        this.chunkQueue = [];
        this.initialized = false;
        this.codec = 'video/mp4; codecs="avc1.42c020, mp4a.40.2"';
        this.recordedChunks = [];

        this.initMediaSource();
    }

    initMediaSource() {
        const video = document.getElementById('video_player');
        if (!video) {
            console.error("video_player element not found for LiveVideoOutputManager");
            return;
        }

        video.muted = false;

        if ('MediaSource' in window && MediaSource.isTypeSupported(this.codec)) {
            this.mediaSource = new MediaSource();
            video.src = URL.createObjectURL(this.mediaSource);

            this.mediaSource.addEventListener('sourceopen', () => {
                console.log('MediaSource opened for video avatar streaming');
                try {
                    this.sourceBuffer = this.mediaSource.addSourceBuffer(this.codec);
                    this.sourceBuffer.mode = 'sequence';
                    this.sourceBuffer.addEventListener('updateend', () => {
                        this.processQueue();
                    });
                    this.initialized = true;
                    this.processQueue();
                } catch (e) {
                    console.error("Error adding source buffer:", e);
                }
            });

            this.mediaSource.addEventListener('sourceclose', () => console.log('MediaSource closed'));
            this.mediaSource.addEventListener('error', e => console.error('MediaSource error', e));
        } else {
            console.error('Unsupported MIME type or codec:', this.codec);
        }
    }

    playVideoChunk(base64Chunk) {
        const arrayBuffer = LiveVideoOutputManager.base64ToArrayBuffer(base64Chunk);
        this.chunkQueue.push(arrayBuffer);
        this.recordedChunks.push(arrayBuffer);
        this.processQueue();

        const video = document.getElementById('video_player');
        if (video && video.paused) {
            video.play().catch(e => {
                console.log("Video auto play catch (waiting for buffer):", e);
            });
        }
    }

    processQueue() {
        if (!this.initialized || !this.sourceBuffer) return;
        if (this.sourceBuffer.updating) return;

        if (this.chunkQueue.length > 0) {
            const chunk = this.chunkQueue.shift();
            try {
                this.sourceBuffer.appendBuffer(chunk);
            } catch (e) {
                console.error("Error appending buffer:", e);
            }
        }
    }

    getRecordedBlob() {
        return new Blob(this.recordedChunks, { type: "video/mp4" });
    }

    clearRecordedChunks() {
        this.recordedChunks = [];
    }

    static base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }
}

console.log("loaded live-media-manager.js with audio/video support");
