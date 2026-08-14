class GeminiLiveResponseMessage {
    constructor(data) {
        this.data = "";
        this.type = "";
        this.raw = data;

        const serverContent = data?.serverContent || data?.server_content;
        this.endOfTurn = serverContent?.turnComplete || serverContent?.turn_complete;
        this.interrupt = serverContent?.interrupted;

        const modelTurn = serverContent?.modelTurn || serverContent?.model_turn;
        const parts = modelTurn?.parts;
        const tool_calls = data?.toolCall?.functionCalls || data?.tool_call?.function_calls;

        if (data?.setupComplete || data?.setup_complete) {
            this.type = "SETUP COMPLETE";
            this.data = data.setupComplete || data.setup_complete;
        } else if (tool_calls) {
            this.data = tool_calls;
            this.type = "FUNCTION_CALL";
        } else if (data?.voiceActivityDetectionSignal || data?.voice_activity_detection_signal) {
            this.type = "VAD_SIGNAL";
        } else if (parts?.length && parts[0].text) {
            this.data = parts[0].text;
            this.type = "TEXT";
        } else if (parts?.length && (parts[0].inlineData || parts[0].inline_data || parts[0].video)) {
            const inlineData = parts[0].inlineData || parts[0].inline_data || parts[0].video;
            this.data = inlineData.data;
            const mimeType = inlineData.mimeType || inlineData.mime_type;
            if (
                mimeType &&
                (mimeType.startsWith("video/") || mimeType.startsWith("image/"))
            ) {
                this.type = "VIDEO";
                this.mimeType = mimeType;
            } else {
                this.type = "AUDIO";
                this.mimeType = mimeType || "audio/pcm;rate=24000";
            }
        } else if (data?.sessionResumptionUpdate || data?.session_resumption_update) {
            this.type = "RESUMPTION";
            const sessionResumptionUpdate = data?.sessionResumptionUpdate || data?.session_resumption_update;
            this.data = sessionResumptionUpdate?.newHandle || sessionResumptionUpdate?.new_handle;
        } else if (serverContent?.inputTranscription || serverContent?.input_transcription) {
            this.type = "INPUT_TRANSCRIPTION";
            const inputTranscription = serverContent?.inputTranscription || serverContent?.input_transcription;
            if (inputTranscription?.text) {
                this.data = inputTranscription?.text;
            } else if (inputTranscription?.finished) {
                this.data = inputTranscription?.finished;
            }
        } else if (serverContent?.outputTranscription || serverContent?.output_transcription) {
            this.type = "OUTPUT_TRANSCRIPTION";
            const outputTranscription = serverContent?.outputTranscription || serverContent?.output_transcription;
            if (outputTranscription?.text) {
                this.data = outputTranscription?.text;
            } else if (outputTranscription?.finished) {
                this.data = outputTranscription?.finished;
            }
        } else if (this.endOfTurn) {
            this.data = "END OF TURN";
            this.type = "END_OF_TURN";
        } else if (this.interrupt) {
            this.data = "INTERRUPT";
            this.type = "INTERRUPT";
        }
    }
}

class GeminiLiveAPI {
    constructor(proxyUrl, controlUrl, frUrl) {
        this.proxyUrl = proxyUrl;
        this.controlUrl = controlUrl;
        this.frUrl = frUrl;

        this.sessionId = crypto.randomUUID();
        this.projectId = null;
        this.model = "gemini-3.1-flash-live-preview-04-2026";
        this.environment = "prod";

        this.responseModalities = ["VIDEO"];
        this.systemInstructions = "";
        this.endPoint = "aiplatform.googleapis.com";

        this.onReceiveResponse = (message) => {
            console.log("Default message received callback", message);
        };

        this.onConnectionStarted = () => {
            console.log("Default onConnectionStarted");
        };

        this.onErrorMessage = (message) => {
            console.error("GeminiLiveAPI Error:", message);
        };

        this.websocket = null;
        this.location = "us-central1";
        this.avatarMode = true;

        this.enableInputTranscript = true;
        this.enableOutputTranscript = true;
        this.voiceName = "orus";
        this.voiceLocale = "hi-IN";
        this.enableSessionResumption = false;
        this.customVoiceSample = "";
        this.resumptionHandle = "";
        this.disableDetection = false;
        this.disableInterruption = false;
        this.startSensitivity = "";
        this.endSensitivity = "";
        this.enableProactiveVideo = false;
        this.enableS2ST = false;
        this.s2stTargetLanguage = "";
        this.functionCallDefinition = null;
        this.customizedAvatarData = "";
        this.customizedAvatarMimeType = "image/png";

        console.log("Created Gemini Live API object:", this);
    }

    setLocation(location) {
        this.location = location;
        this.setApiHost(this.environment);
    }

    setProjectId(projectId) {
        this.projectId = projectId;
    }

    setModel(model) {
        this.model = model;
    }

    setApiHost(environment) {
        this.environment = environment;
        if (this.environment === "autopush") {
            this.endPoint = `autopush-aiplatform.sandbox.googleapis.com`;
        } else if (this.environment === "staging") {
            this.endPoint = `staging-aiplatform.sandbox.googleapis.com`;
        } else {
            this.endPoint = `aiplatform.googleapis.com`;
        }
    }

    setTranscript(input, output) {
        this.enableInputTranscript = input;
        this.enableOutputTranscript = output;
    }

    setVoice(name, locale) {
        this.voiceName = name || "orus";
        this.voiceLocale = locale || "hi-IN";
    }

    setFunctionCall(fcDefinition) {
        this.functionCallDefinition = fcDefinition;
    }

    setCustomVoice(base64Wav) {
        this.customVoiceSample = base64Wav;
    }

    setResumption(enable, handle) {
        this.enableSessionResumption = enable;
        this.resumptionHandle = handle;
    }

    setVad(disableInterruption, disableDetection, startSen, endSen) {
        this.disableDetection = disableDetection;
        this.disableInterruption = disableInterruption;
        this.startSensitivity = startSen;
        this.endSensitivity = endSen;
    }

    setProactiveVideo(enable) {
        this.enableProactiveVideo = enable;
    }

    setS2ST(enable, language) {
        this.enableS2ST = enable;
        this.s2stTargetLanguage = language;
    }

    setCustomizedAvatar(imageData, mimeType = "image/png") {
        this.customizedAvatarData = imageData;
        this.customizedAvatarMimeType = mimeType;
    }

    connect() {
        console.log("Connecting via initBackendService...");
        this.initBackendService()
            .then(() => {
                return this.setupFuncDeclarationToService();
            })
            .then(() => {
                this.setupWebSocketToService();
            })
            .catch((error) => {
                console.error("connect() failed:", error);
                this.onErrorMessage("Connection failed: " + error.message);
            });
    }

    initBackendService() {
        const postRequestBody = {
            command: "connect",
            session_id: this.sessionId,
            endpoint: this.endPoint,
            location: this.location,
        };
        return this.sendPostRequest(this.controlUrl, postRequestBody)
            .then((response) => {
                if (response && response.project_id) {
                    this.setProjectId(response.project_id);
                }
            })
            .catch((error) => {
                console.error("Error in initBackendService:", error);
                this.onErrorMessage("Error initializing backend service.");
                throw error;
            });
    }

    setupFuncDeclarationToService() {
        if (this.functionCallDefinition) {
            const funcDeclarationMessage = {
                objective: "fc_definition",
                session_id: this.sessionId,
                functionDefinition: this.functionCallDefinition,
            };
            return this.sendPostRequest(
                this.frUrl,
                funcDeclarationMessage
            ).catch((error) => {
                console.error("Error in setupFuncDeclarationToService:", error);
                throw error;
            });
        }
        return Promise.resolve();
    }

    disconnect() {
        if (this.webSocket) {
            this.webSocket.close();
        }
    }

    sendMessage(message) {
        if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(message));
        } else {
            console.warn("WebSocket not open, cannot send message:", message);
        }
    }

    onReceiveMessage(messageEvent) {
        let messageData;
        if (typeof messageEvent.data === "string") {
            try {
                messageData = JSON.parse(messageEvent.data);
            } catch (e) {
                console.warn("Error parsing message JSON:", e);
                return;
            }
        } else {
            return;
        }

        // Handle tool calls (switch_vehicle_showroom, record_customer_lead, end_call_session)
        const toolCalls = messageData?.toolCall?.functionCalls || messageData?.tool_call?.function_calls;
        if (toolCalls && toolCalls.length > 0) {
            for (const call of toolCalls) {
                if (call.name === "switch_vehicle_showroom" && call.args) {
                    this.onReceiveResponse({
                        type: "TOOL_CALL_SWITCH_CAR",
                        carName: call.args.car_name,
                        callId: call.id,
                        raw: messageData
                    });
                } else if (call.name === "record_customer_lead" && call.args) {
                    this.onReceiveResponse({
                        type: "TOOL_CALL_RECORD_LEAD",
                        customerName: call.args.customer_name,
                        modelOfInterest: call.args.model_of_interest,
                        callId: call.id,
                        raw: messageData
                    });
                } else if (call.name === "end_call_session" && call.args) {
                    this.onReceiveResponse({
                        type: "TOOL_CALL_END_CALL",
                        reason: call.args.reason || "Customer completed inquiry",
                        callId: call.id,
                        raw: messageData
                    });
                }
            }
        }

        const serverContent = messageData?.serverContent || messageData?.server_content;
        const turnComplete = serverContent?.turnComplete || serverContent?.turn_complete || serverContent?.endOfTurn || serverContent?.end_of_turn;
        if (turnComplete) {
            this.onReceiveResponse({
                type: "END_OF_TURN",
                raw: messageData
            });
        }

        const modelTurn = serverContent?.modelTurn || serverContent?.model_turn;
        const parts = modelTurn?.parts;

        // If multiple parts exist (e.g. text AND video/audio in the same turn), dispatch each
        if (parts && parts.length > 0) {
            for (const part of parts) {
                if (part.text) {
                    this.onReceiveResponse({
                        type: "TEXT",
                        data: part.text,
                        raw: messageData
                    });
                }
                if (part.inlineData || part.inline_data || part.video) {
                    const inlineData = part.inlineData || part.inline_data || part.video;
                    const mimeType = inlineData.mimeType || inlineData.mime_type || "";
                    const isVideo = mimeType.startsWith("video/") || mimeType.startsWith("image/");
                    this.onReceiveResponse({
                        type: isVideo ? "VIDEO" : "AUDIO",
                        data: inlineData.data,
                        mimeType: mimeType,
                        raw: messageData
                    });
                }
            }
        }

        const message = new GeminiLiveResponseMessage(messageData);
        if (message.type && (!parts || parts.length === 0 || message.type === "SETUP COMPLETE" || message.type === "INPUT_TRANSCRIPTION" || message.type === "OUTPUT_TRANSCRIPTION")) {
            this.onReceiveResponse(message);
        }
    }

    setupWebSocketToService() {
        const wsUrl = new URL(this.proxyUrl, window.location.href);
        wsUrl.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        wsUrl.searchParams.append("session_id", this.sessionId);
        
        console.log("Opening WebSocket connection to:", wsUrl.toString());
        this.webSocket = new WebSocket(wsUrl.toString());

        this.webSocket.onclose = (event) => {
            console.log("WebSocket closed:", event);
            this.onErrorMessage("Session ended.");
        };

        this.webSocket.onerror = (event) => {
            console.error("WebSocket error:", event);
            this.onErrorMessage("Connection error.");
        };

        this.webSocket.onopen = (event) => {
            console.log("WebSocket opened successfully:", event);
            this.sendInitialSetupMessages();
            this.onConnectionStarted();
        };

        this.webSocket.onmessage = this.onReceiveMessage.bind(this);
    }

    sendInitialSetupMessages() {
        console.log("Sending initial Gemini Live setup message with showroom & lead capture tools...");

        const modelUri = `projects/${this.projectId || "mb-poc-352009"}/locations/${this.location}/publishers/google/models/${this.model}`;
        
        const showroomTools = {
            function_declarations: [
                {
                    name: "switch_vehicle_showroom",
                    description: "Call this tool to switch the showroom backdrop and display specs whenever the user asks about, compares, or mentions any Maruti Suzuki car model.",
                    parameters: {
                        type: "object",
                        properties: {
                            car_name: {
                                type: "string",
                                description: "The normalized key of the vehicle (e.g. victoris, grand-vitara, swift, brezza, dzire, fronx, jimny, invicto, baleno, ertiga, xl6, wagonr, alto-k10, celerio, s-presso, eeco, super-carry, tour-s, tour-m, tour-v, e-vitara)"
                            }
                        },
                        required: ["car_name"]
                    }
                },
                {
                    name: "record_customer_lead",
                    description: "Mandatory lead qualification tool. Call this tool immediately when the customer shares their name and vehicle model of interest to record and auto-qualify the lead in the inquiry database.",
                    parameters: {
                        type: "object",
                        properties: {
                            customer_name: {
                                type: "string",
                                description: "The customer's full or first name as provided"
                            },
                            model_of_interest: {
                                type: "string",
                                description: "The Maruti Suzuki vehicle model the customer is interested in (e.g. Victoris, Grand Vitara, Swift, Brezza, Dzire, Jimny, Fronx, Invicto, Baleno, Ertiga, XL6, WagonR, Alto K10, Celerio, S-Presso, Eeco, Super Carry, Tour S, Tour M, Tour V, e-Vitara)"
                            }
                        },
                        required: ["customer_name", "model_of_interest"]
                    }
                },
                {
                    name: "end_call_session",
                    description: "Call this tool to end the call when the customer says they do not have any more questions/queries, are satisfied, say thanks, bye, no more questions, or that's all.",
                    parameters: {
                        type: "object",
                        properties: {
                            reason: {
                                type: "string",
                                description: "Reason for concluding the call, e.g. 'Customer confirmed no more questions'"
                            }
                        }
                    }
                }
            ]
        };

        const sessionSetupMessage = {
            setup: {
                model: modelUri,
                generation_config: {
                    response_modalities: this.responseModalities,
                    speech_config: {
                        voice_config: this.customVoiceSample
                            ? {
                                replicated_voice_config: {
                                    voice_sample_audio: this.customVoiceSample,
                                    mime_type: "audio/pcm;rate=24000",
                                },
                              }
                            : {
                                prebuilt_voice_config: {
                                    voice_name: this.voiceName || "orus",
                                },
                              },
                        language_code: this.voiceLocale || "hi-IN",
                    },
                },
                tools: [showroomTools],
                input_audio_transcription: {},
                output_audio_transcription: {},
                avatar_config: {
                    avatar_name: "Jay"
                }
            },
        };

        if (this.systemInstructions && this.systemInstructions.trim()) {
            sessionSetupMessage.setup.system_instruction = {
                parts: [{ text: this.systemInstructions }],
            };
        }

        if (this.enableSessionResumption && this.resumptionHandle) {
            sessionSetupMessage.setup.session_resumption = {
                handle: this.resumptionHandle,
            };
        }

        console.log("Setup message payload:", JSON.stringify(sessionSetupMessage));
        this.sendMessage(sessionSetupMessage);
    }

    sendTextMessage(text) {
        const textMessage = {
            client_content: {
                turns: [
                    {
                        role: "user",
                        parts: [{ text: text }],
                    },
                ],
                turn_complete: true,
            },
        };
        this.sendMessage(textMessage);
    }

    sendAudioChunk(base64PcmData, sampleRate = 16000) {
        if (!this.webSocket || this.webSocket.readyState !== WebSocket.OPEN) return;
        const audioMessage = {
            realtime_input: {
                media_chunks: [
                    {
                        mime_type: `audio/pcm;rate=${sampleRate}`,
                        data: base64PcmData,
                    },
                ],
            },
        };
        this.sendMessage(audioMessage);
    }

    sendImageChunk(base64ImageData) {
        if (!this.webSocket || this.webSocket.readyState !== WebSocket.OPEN) return;
        const imageMessage = {
            realtime_input: {
                media_chunks: [
                    {
                        mime_type: "image/jpeg",
                        data: base64ImageData,
                    },
                ],
            },
        };
        this.sendMessage(imageMessage);
    }

    sendPostRequest(url, body) {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(`HTTP error ${response.status}: ${text}`);
                });
            }
            return response.json();
        });
    }
}
