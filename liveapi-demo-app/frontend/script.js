/**
 * Maruti Suzuki AI Live Virtual Showroom Experience
 * Real-Time Multimodal Avatar & Dynamic Vehicle Showroom
 * Includes ARENA, NEXA, and COMMERCIAL channels
 */

// --- Official Maruti Suzuki Complete Vehicle Knowledge Base with Multilingual Keywords ---
const MARUTI_VEHICLES = {
    "victoris": {
        id: "victoris",
        name: "Victoris",
        channel: "ARENA",
        category: "suv",
        categoryLabel: "All-New Launch SUV",
        tagline: "Your Victoris, Built To Your Vision. Bold Stance & Dynamic Presence.",
        price: "₹10.49 Lakh*",
        mileage: "Up to 21.50 km/l (Petrol) | 26.50 km/kg (S-CNG)",
        engine: "1.5L K-Series DualJet Dual VVT Engine",
        transmission: "6-Speed AT with Paddle Shifters / 5-Speed MT",
        highlights: "Wrap-Around Aerodynamic Design, Bold-Cut LED DRLs & Headlamps, Segmented Rear LED Tail Lamps, Precision-Cut R17 Alloy Wheels, 9-inch SmartPlay Pro+, 6 Airbags",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e9333d51-7e6e-4332-b704-811262b78ba0/as/Car-Details-Page_desktop.jpg?height=1171&width=2000&preferwebp=true",
        keywords: ["victoris", "victories", "victor", "new launch suv", "victoris suv", "विक्टोरिस", "विक्टर", "विक्टोरियस"]
    },
    "grand-vitara": {
        id: "grand-vitara",
        name: "Grand Vitara",
        channel: "NEXA",
        category: "suv",
        categoryLabel: "Flagship Strong Hybrid SUV",
        tagline: "Rule Every Terrain. Intelligent Electric Hybrid & ALLGRIP AWD.",
        price: "₹10.76 Lakh*",
        mileage: "Up to 27.97 km/l (Hybrid) | 26.6 km/kg (CNG)",
        engine: "1.5L Intelligent Electric Hybrid / 1.5L K15C Smart Hybrid",
        transmission: "e-CVT / 6-Speed AT / 5-Speed MT",
        highlights: "Panoramic Sunroof, ALLGRIP SELECT 4WD, Head-Up Display (HUD), 360 View Camera, Ventilated Front Seats, 6 Airbags",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:88fa185a-917c-4284-aa87-546b65d38888/as/GV_8_Sec_Desktop_Image.png?height=1440&width=2560",
        keywords: ["grand vitara", "vitara", "grandvitara", "hybrid suv", "allgrip", "ग्रैंड विटारा", "विटारा", "ग्रैंडविटारा"]
    },
    "swift": {
        id: "swift",
        name: "Epic New Swift",
        channel: "ARENA",
        category: "hatchback",
        categoryLabel: "Iconic Sporty Hatchback",
        tagline: "The Epic New Swift. Thrill in Every Drive.",
        price: "₹5.79 Lakh*",
        mileage: "Up to 25.75 km/l (Petrol) | 32.85 km/kg (S-CNG)",
        engine: "All-New 1.2L Z-Series 3-Cylinder Engine",
        transmission: "5-Speed MT / AGS (Automatic)",
        highlights: "6 Airbags Standard across all variants, 9-inch SmartPlay Pro+ Infotainment, LED Projector Headlamps, Wireless Charger, Cruise Control",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:32eca14a-3c99-4d68-9056-57c4bb6f8234/as/AR-AM-Swift-SMP-OP02-SHOT-2024-v4.jpg?height=1667&width=2500",
        keywords: ["swift", "new swift", "epic swift", "epic new swift", "z-series", "स्विफ्ट", "स्वीफ्ट", "नई स्विफ्ट"]
    },
    "brezza": {
        id: "brezza",
        name: "New Brezza",
        channel: "ARENA",
        category: "suv",
        categoryLabel: "Compact Urban SUV",
        tagline: "More Power To Your Play. India's Favorite Compact SUV.",
        price: "₹8.34 Lakh*",
        mileage: "Up to 19.89 km/l (Petrol) | 25.51 km/kg (S-CNG)",
        engine: "1.5L K-Series DualJet Dual VVT Engine with Smart Hybrid",
        transmission: "6-Speed AT with Paddle Shifters / 5-Speed MT",
        highlights: "Electric Sunroof, Head-Up Display (HUD), 360 View Camera, SmartPlay Pro+ 9-inch Display with Arkamys sound, 6 Airbags, Wireless Charging",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:88eb5a34-6769-4fe9-8435-714c88f6338d/as/TB-dual-tone.png?height=1440&width=2560",
        keywords: ["brezza", "new brezza", "vitara brezza", "urban suv", "ब्रेज़ा", "ब्रेजा", "नई ब्रेजा"]
    },
    "fronx": {
        id: "fronx",
        name: "FRONX",
        channel: "NEXA",
        category: "suv",
        categoryLabel: "Turbo Crossover Coupe SUV",
        tagline: "Shape New Trends. Aerodynamic Coupe Stance & Boosterjet Power.",
        price: "₹6.85 Lakh*",
        mileage: "Up to 22.89 km/l (Petrol) | 28.51 km/kg (CNG)",
        engine: "1.0L Turbo Boosterjet / 1.2L K-Series DualJet",
        transmission: "6-Speed AT with Paddle Shifters / 5-Speed MT / AGS",
        highlights: "1.0L Turbo Boosterjet Acceleration, Head-Up Display, 360 View Camera, Sculpted Aerodynamic Silhouette, 9-inch SmartPlay Pro+",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:cbaaf7a8-eef9-4137-9e91-8e914f6ba4f2/as/fronx_fold_Desktop_Image.png?width=2000&id=1&preferwebp=true",
        keywords: ["fronx", "boosterjet", "turbo fronx", "crossover", "coupe", "फ्रोंक्स", "फ्रांक्स"]
    },
    "jimny": {
        id: "jimny",
        name: "Jimny",
        channel: "NEXA",
        category: "suv",
        categoryLabel: "Authentic 4x4 Off-Road Legend",
        tagline: "Purity of Function. Conquering Global Trails since 1970.",
        price: "₹12.32 Lakh*",
        mileage: "Up to 16.94 km/l",
        engine: "1.5L K15B Petrol Engine with Optimized Off-Road Torque",
        transmission: "4-Speed AT / 5-Speed MT with Low-Range 4WD Transfer Case",
        highlights: "ALLGRIP PRO 4WD, Heavy-Duty Ladder Frame Chassis, 3-Link Rigid Axle Suspension, Hill Descent & Hold Control, 6 Airbags",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5716197a-a15e-424a-ad05-52b52dada745/as/JIMNY_fold_desktop_image.png?width=2000&id=1&preferwebp=true",
        keywords: ["jimny", "jimmy", "4x4", "allgrip pro", "offroad", "off-road", "जिम्नी", "जिम्मी"]
    },
    "invicto": {
        id: "invicto",
        name: "Invicto",
        channel: "NEXA",
        category: "mpv",
        categoryLabel: "Opulent Strong Hybrid Luxury MUV",
        tagline: "The Art of Opulence. Unmatched Comfort and Hybrid Tech.",
        price: "₹24.97 Lakh*",
        mileage: "21.19 km/l (Intelligent Electric Hybrid)",
        engine: "2.0L Intelligent Electric Hybrid System",
        transmission: "e-CVT (Electric Continuous Variable Transmission)",
        highlights: "Captain Ottoman 2nd-Row Seats, Panoramic Sunroof with Ambient Mood Lighting, Powered Tailgate, Dual-Zone Climate Control, Suzuki Connect with 50+ Features",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:93db3aba-c00e-45a0-b973-12cfe59f25d9/as/Invicto_Banner_Image.png?width=2000&id=1&preferwebp=true",
        keywords: ["invicto", "invecto", "luxury mpv", "strong hybrid muv", "ottoman", "इनविक्टो", "इन्विक्टो"]
    },
    "dzire": {
        id: "dzire",
        name: "All-New Dzire",
        channel: "ARENA",
        category: "sedan",
        categoryLabel: "India's #1 Sedan (5-Star Safety)",
        tagline: "India's Most Loved Sedan. 5-Star 2026 Global NCAP Safety.",
        price: "₹6.25 Lakh*",
        mileage: "Up to 25.71 km/l (Petrol) | 33.73 km/kg (S-CNG)",
        engine: "All-New 1.2L Z-Series 3-Cylinder Engine",
        transmission: "5-Speed MT / AGS (Automatic)",
        highlights: "5-Star Global NCAP Safety Rating, Electric Sunroof, 360-Degree View Camera, Wireless Phone Charger, LED Crystal Vision Headlamps, Rear AC Vents",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:dcb80bf0-b7be-4ddc-9ba0-1b248acf6654/as/Dzire_TVC_Desktop_Dummy.png?width=2000&preferwebp=true",
        keywords: ["dzire", "desire", "sedan", "new dzire", "5-star", "डिजायर", "डिज़ायर"]
    },
    "baleno": {
        id: "baleno",
        name: "Baleno",
        channel: "NEXA",
        category: "hatchback",
        categoryLabel: "Premium Intelligent Hatchback",
        tagline: "Tech Goes Bold. India's Top Premium Hatchback.",
        price: "₹5.99 Lakh*",
        mileage: "Up to 22.94 km/l (Petrol) | 30.61 km/kg (CNG)",
        engine: "1.2L DualJet Dual VVT Engine with Idle Start-Stop",
        transmission: "AGS (Auto Gear Shift) / 5-Speed MT",
        highlights: "Head-Up Display (HUD), 360 View Camera, 9-inch SmartPlay Pro+ with Surround Sense by Arkamys, 6 Airbags, UV Cut Glass",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:d1f6c965-1ce7-46c9-b3d5-46cac019f825/as/Baleno_Fold_Desktop_Image.png?width=2000&id=1&preferwebp=true",
        keywords: ["baleno", "nexa baleno", "premium hatchback", "बलेनो", "बलेनो"]
    },
    "ertiga": {
        id: "ertiga",
        name: "Ertiga",
        channel: "ARENA",
        category: "mpv",
        categoryLabel: "India's Best-Selling 7-Seater MPV",
        tagline: "Move Together in Comfort. Space and Efficiency for Families.",
        price: "₹8.80 Lakh*",
        mileage: "Up to 20.51 km/l (Petrol) | 26.11 km/kg (S-CNG)",
        engine: "Next-Gen 1.5L K-Series DualJet Smart Hybrid Engine",
        transmission: "6-Speed AT with Paddle Shifters / 5-Speed MT",
        highlights: "3-Row Flexible Seating, Cooled Cup Holders, 7-inch SmartPlay Pro Display, Cruise Control, S-CNG Factory Fitted Option",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:25689afa-3e3d-4980-913f-03f695a1a37f/as/Key-Visual_2000x1171.jpg?height=1171&width=2000&preferwebp=true",
        keywords: ["ertiga", "artiga", "7 seater", "7-seater", "family mpv", "अर्टिगा", "अर्टीगा"]
    },
    "xl6": {
        id: "xl6",
        name: "XL6",
        channel: "NEXA",
        category: "mpv",
        categoryLabel: "Premium 6-Seater MPV with Captain Seats",
        tagline: "Feels Just Right. Sophisticated Comfort and Luxury.",
        price: "₹11.52 Lakh*",
        mileage: "Up to 20.97 km/l (Petrol) | 26.32 km/kg (CNG)",
        engine: "1.5L K15C DualJet Dual VVT Smart Hybrid",
        transmission: "6-Speed AT with Paddle Shifters / 5-Speed MT",
        highlights: "2nd-Row Captain Seats, Ventilated Front Seats, 360 View Camera, Tire Pressure Monitoring System (TPMS), All-Black Interior with Stone Finish",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f4a1c81c-8c3a-4a7b-94d3-d407e2d86ac5/as/XL6_Banner_Image_Desktop.png?width=2000&id=1&preferwebp=true",
        keywords: ["xl6", "xl-6", "captain seats", "6 seater", "एक्सएल6", "एक्सएल 6"]
    },
    "wagonr": {
        id: "wagonr",
        name: "WagonR",
        channel: "ARENA",
        category: "hatchback",
        categoryLabel: "Iconic Tallboy Hatchback",
        tagline: "Dil Se Strong. India's Favorite Spacious Tallboy.",
        price: "₹5.54 Lakh*",
        mileage: "Up to 24.35 km/l (Petrol) | 34.05 km/kg (S-CNG)",
        engine: "Advanced 1.0L and 1.2L K-Series DualJet Engines",
        transmission: "AGS / 5-Speed MT",
        highlights: "Spacious Tall Boy Stance, Split Folding Rear Seats, 7-inch SmartPlay Studio, Dual Airbags, Unmatched Legroom & Headroom",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e4d500dc-a6ea-458f-8940-867a1ae4a10e/as/wagenr_TVC-Banner_2000x1171.jpg?height=1171&width=2000&preferwebp=true",
        keywords: ["wagonr", "wagon-r", "wagon r", "tall boy", "tallboy", "वैगनआर", "वैगन आर"]
    },
    "alto-k10": {
        id: "alto-k10",
        name: "Alto K10",
        channel: "ARENA",
        category: "city",
        categoryLabel: "Smart Urban City Car",
        tagline: "Peheli Matlab Maruti. India's Most Accessible Car.",
        price: "₹3.69 Lakh*",
        mileage: "Up to 24.90 km/l (Petrol) | 33.85 km/kg (S-CNG)",
        engine: "Next-Gen 1.0L K-Series DualJet Dual VVT Engine",
        transmission: "AGS / 5-Speed MT",
        highlights: "Compact & Nimble for City Traffic, SmartPlay Studio, Digital Speedometer, High Fuel Efficiency, S-CNG Factory Fitted",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:17671701-80a4-42fa-a1f1-b3425350e910/as/TVC-Banner_desktop_2000x1171.jpg?height=1171&width=2000&preferwebp=true",
        keywords: ["alto", "alto k10", "alto 800", "k10", "ऑल्टो", "अल्टो", "के10"]
    },
    "celerio": {
        id: "celerio",
        name: "Celerio",
        channel: "ARENA",
        category: "city",
        categoryLabel: "Mileage Champion Hatchback",
        tagline: "Drive With Drive. India's Most Fuel Efficient Petrol Car.",
        price: "₹4.69 Lakh*",
        mileage: "Up to 26.68 km/l (Petrol) | 35.60 km/kg (S-CNG)",
        engine: "DualJet 1.0L K10C with Idle Start-Stop",
        transmission: "AGS / 5-Speed MT",
        highlights: "Segment-Best Petrol Mileage, 3D Organic Sculpted Design, Push Start-Stop Button with Smart Key, 7-inch Touchscreen",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:ed83cc03-2b30-4383-ba46-b52ca89fc2df/as/Variant-Banner-TVC-2000-1171.png?width=2000&preferwebp=true",
        keywords: ["celerio", "highest mileage", "best mileage", "सेलेरियो", "सिलेरियो"]
    },
    "s-presso": {
        id: "s-presso",
        name: "S-Presso",
        channel: "ARENA",
        category: "city",
        categoryLabel: "Bold Mini-SUV",
        tagline: "Live Bold. Mini-SUV with High Ground Clearance.",
        price: "₹3.49 Lakh*",
        mileage: "Up to 25.30 km/l (Petrol) | 32.73 km/kg (S-CNG)",
        engine: "1.0L K-Series DualJet Dual VVT Engine",
        transmission: "AGS / 5-Speed MT",
        highlights: "SUV-Inspired Bold Design, 180mm High Ground Clearance, Dynamic Center Console, Digital Instrument Cluster, S-CNG",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:384b5c9e-5053-4518-9c28-e98f5da702f5/as/spresso_mob_750x1458.png?width=750&preferwebp=true",
        keywords: ["s-presso", "spresso", "mini suv", "एस-प्रेसो", "एसप्रेसो"]
    },
    "eeco": {
        id: "eeco",
        name: "Eeco",
        channel: "ARENA",
        category: "mpv",
        categoryLabel: "Multi-Purpose Family & Utility Van",
        tagline: "Hamesha Saath Nibhaye. India's Trusted Multi-Purpose Van.",
        price: "₹5.18 Lakh*",
        mileage: "Up to 19.71 km/l (Petrol) | 26.78 km/kg (S-CNG)",
        engine: "Advanced 1.2L K-Series Engine",
        transmission: "5-Speed MT",
        highlights: "5-Seater & 7-Seater Seating Options, Flat Rear Cargo Floor, Digital Instrument Cluster, Dual Airbags, ABS with EBD",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:d0ee7111-dcb5-479c-b354-d01b87744c0c/as/Eeco_varient_2000x1117_desktop.png?width=2000&preferwebp=true",
        keywords: ["eeco", "van", "ambulance", "cargo", "multi-purpose", "ईको", "इको"]
    },
    "super-carry": {
        id: "super-carry",
        name: "Super Carry",
        channel: "COMMERCIAL",
        category: "commercial",
        categoryLabel: "Mini-Truck & Commercial Goods Carrier",
        tagline: "Pragati Ka Dumdaar Saathi. India's Trusted Mini-Truck.",
        price: "₹5.15 Lakh*",
        mileage: "High Fuel Economy | S-CNG Dual Fuel Technology",
        engine: "Advanced 4-Cylinder 1.2L K-Series Engine",
        transmission: "5-Speed MT with High Torque Delivery",
        highlights: "Spacious Flat Cargo Deck, 740kg Payload Capacity, Front Disc Brakes, Reverse Parking Sensor, Large 70L CNG Tank",
        bgImage: "https://www.marutisuzukicommercial.com/adobe/assets/urn:aaid:aem:75571ab6-5405-4fb1-b884-e1b5a7640f2e/as/supercarry-petrol.png?width=2000&id=1&preferwebp=true",
        keywords: ["super carry", "supercarry", "mini truck", "commercial truck", "goods carrier", "chota hathi", "सुपर कैरी", "छोटा हाथी"]
    },
    "tour-s": {
        id: "tour-s",
        name: "Tour S (Dzire Fleet)",
        channel: "COMMERCIAL",
        category: "commercial",
        categoryLabel: "Commercial Fleet Sedan",
        tagline: "The Reliable Business Sedan. Exceptional Mileage & Passenger Comfort.",
        price: "₹6.51 Lakh*",
        mileage: "Up to 31.12 km/kg (S-CNG) | 23.15 km/l (Petrol)",
        engine: "1.2L K-Series DualJet Dual VVT Engine",
        transmission: "5-Speed MT with Speed Limiting Function",
        highlights: "Speed Limiter (80 km/h), Factory-Fitted S-CNG, Spacious Boot Space, Dual Airbags, ABS with EBD, Low Maintenance Cost",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:dcb80bf0-b7be-4ddc-9ba0-1b248acf6654/as/Dzire_TVC_Desktop_Dummy.png?width=2000&preferwebp=true",
        keywords: ["tour s", "tour-s", "dzire tour", "commercial dzire", "taxi sedan", "टूर एस"]
    },
    "tour-m": {
        id: "tour-m",
        name: "Tour M (Ertiga Fleet)",
        channel: "COMMERCIAL",
        category: "commercial",
        categoryLabel: "Commercial 7-Seater Fleet MPV",
        tagline: "Move More, Earn More. The Ultimate 7-Seater Fleet Solution.",
        price: "₹9.75 Lakh*",
        mileage: "Up to 26.11 km/kg (S-CNG) | 20.51 km/l (Petrol)",
        engine: "1.5L K-Series Smart Hybrid Engine",
        transmission: "5-Speed MT",
        highlights: "7-Seater Passenger Layout, Dual AC Vents across all rows, Factory Fitted S-CNG, Speed Limiting Governor, Unmatched Passenger Legroom",
        bgImage: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:25689afa-3e3d-4980-913f-03f695a1a37f/as/Key-Visual_2000x1171.jpg?height=1171&width=2000&preferwebp=true",
        keywords: ["tour m", "tour-m", "ertiga tour", "commercial ertiga", "fleet mpv", "टूर एम"]
    },
    "tour-v": {
        id: "tour-v",
        name: "Tour V (Eeco Fleet)",
        channel: "COMMERCIAL",
        category: "commercial",
        categoryLabel: "Commercial Multi-Passenger & Utility Van",
        tagline: "Trusted Van for School, Staff & Commercial Transit.",
        price: "₹5.24 Lakh*",
        mileage: "Up to 26.78 km/kg (S-CNG) | 19.71 km/l (Petrol)",
        engine: "1.2L Advanced K-Series DualJet Engine",
        transmission: "5-Speed MT",
        highlights: "5-Seater & 7-Seater Options, Large Sliding Doors, High Headroom, Dual Airbags, ABS with EBD, Factory Fitted S-CNG",
        bgImage: "https://www.marutisuzukicommercial.com/adobe/assets/urn:aaid:aem:5b236c91-89c1-4810-8a0c-3000f474c8fa/as/tourv1282x503-desktop.png?height=503&width=1282",
        keywords: ["tour v", "tour-v", "eeco tour", "commercial eeco", "school van", "टूर वी"]
    },
    "e-vitara": {
        id: "e-vitara",
        name: "e-Vitara (eVX)",
        channel: "NEXA",
        category: "ev",
        categoryLabel: "Upcoming Global Electric SUV",
        tagline: "The Future is Electric. Maruti Suzuki's Global Pure EV.",
        price: "Upcoming Preview",
        mileage: "500+ km Range per charge",
        engine: "Dedicated Pure EV Architecture (49kWh & 61kWh Battery Options)",
        transmission: "eAxle with ALLGRIP-e Electric 4WD",
        highlights: "Global Electric SUV, Dual-Motor ALLGRIP-e AWD, Dual Integrated Cockpit Screens, Fast DC Charging, Level 2 ADAS",
        bgImage: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:eee483e3-af04-4551-9d42-9d1c9d94a077/as/evitara-updated-31-3-desktop_image.png?width=2000&id=1&preferwebp=true",
        keywords: ["e-vitara", "evitara", "evx", "electric", "ev", "electric car", "ई-विटारा", "इलेक्ट्रिक"]
    }
};

let currentSelectedCarId = "victoris";

// --- System Instruction Prompt for Maruti Suzuki Consultant "Kabir" ---
const MARUTI_SYSTEM_INSTRUCTION = `You are Kabir, a male AI Showroom Specialist and Virtual Consultant for Maruti Suzuki India across all retail and commercial business channels: ARENA, NEXA, and COMMERCIAL / TOUR FLEET.

*** MALE GENDER & IDENTITY INSTRUCTIONS (STRICT REQUIREMENT) ***
- YOU MUST ALWAYS SPEAK AS A MALE. NEVER SPEAK OR REFER TO YOURSELF AS A FEMALE.
- YOUR NAME IS KABIR.
- IN HINDI, ALWAYS USE MASCULINE GRAMMATICAL ENDINGS AND VERBS:
  - Say: "नमस्ते! मैं कबीर हूँ, मारुति सुजुकी वर्चुअल शोरूम से। मैं आपकी पूरी मदद करूँगा। आप कौन सी गाड़ी देखना चाहते हैं?"
  - Use masculine verbs: "बताता हूँ", "दिखाता हूँ", "करूँगा", "समझता हूँ".
  - NEVER use feminine verb endings (e.g. NEVER say "करूँगी", "बताती हूँ", "दिखाती हूँ").
- IN ENGLISH OR OTHER LANGUAGES, ALWAYS MAINTAIN A CONFIDENT, ENTHUSIASTIC, PROFESSIONAL MALE SHOWROOM EXPERT PERSONA.

*** LANGUAGE INSTRUCTIONS ***
- YOU MUST START THE CONVERSATION IN HINDI.
- IF THE USER RESPONDS IN ENGLISH OR ANY OTHER INDIAN LANGUAGE (E.G., KANNADA, TAMIL, TELUGU, MARATHI, GUJARATI, BENGALI), SWITCH TO THAT LANGUAGE AND CONTINUE.
- IF SPEAKING IN HINDI, SAY NUMBERS IN HINDI (E.G., TEES HAZAAR RUPAY, PACHAS HAZAAR RUPAY, DAS LAKH PACHAS HAZAAR RUPAY, GYARAH LAKH, PANDRAH HAZAAR). FOR OTHER LANGUAGES, USE THEIR NATURAL NUMBER CONVENTIONS.

*** STRICT BRAND EXCLUSIVITY POLICY ***
- YOU REPRESENT MARUTI SUZUKI EXCLUSIVELY.
- TALK ONLY ABOUT MARUTI SUZUKI CARS (ARENA, NEXA, AND COMMERCIAL / TOUR).
- NEVER MENTION, ACKNOWLEDGE, DISCUSS, OR COMPARE AGAINST ANY OTHER BRAND OR COMPETITOR CAR (E.G., HYUNDAI, TATA, HONDA, MAHINDRA, KIA, TOYOTA, ETC.).
- IF A USER ASKS ABOUT ANOTHER BRAND OR A COMPETITOR CAR, POLITELY REFOCUS AND REDIRECT THEM EXCLUSIVELY TO SUITABLE MARUTI SUZUKI VEHICLES.
- YOU CAN AND SHOULD FREELY COMPARE TWO OR MORE MARUTI SUZUKI CARS WITH EACH OTHER (E.G., VICTORIS VS BREZZA VS GRAND VITARA, SWIFT VS BALENO, ERTIGA VS XL6, DZIRE VS TOUR S).

*** DYNAMIC SHOWROOM BACKDROP SYNC RULE ***
- WHENEVER the user asks about, discusses, compares, or transitions to any Maruti Suzuki car model, you MUST call the tool "switch_vehicle_showroom" with the corresponding car_name key (e.g. victoris, grand-vitara, swift, brezza, dzire, fronx, jimny, invicto, baleno, ertiga, xl6, wagonr, alto-k10, celerio, s-presso, eeco, super-carry, tour-s, tour-m, tour-v, e-vitara).

*** CONVERSATIONAL & LISTENING PROTOCOL ***
- ITS VERY IMPORTANT IN YOUR JOB TO LISTEN, PAUSE AND ANSWER. IF USER SPEAKS, STOP AND LISTEN.
- IF USER SPEAKS PLEASE DO NOT SPEAK. WAIT FOR USER TO FINISH.
- REMEMBER FOLLOWING INSTRUCTION IS IMPORTANT FOR YOU TO DO YOUR JOB.
- Keep your spoken responses concise (2-3 sentences), warm, engaging, and conversational for an interactive live avatar.
- Always mention the vehicle model name clearly so the showroom stage can display it.

*** OFFICIAL VEHICLE KNOWLEDGE BASE ***

1. ALL-NEW LAUNCH HIGHLIGHT:
- Maruti Suzuki Victoris (Starts ₹10.49 Lakh* / Das Lakh Unchaas Hazaar Rupay): All-new launch SUV with wrap-around aerodynamic design, bold-cut LED DRLs and headlamps, segmented rear LED tail lamps, precision-cut R17 alloy wheels, 1.5L K-Series DualJet engine (up to 21.5 km/l & 26.5 km/kg S-CNG), 6-speed AT with paddle shifters, 6 airbags.

2. ARENA LINEUP:
- Swift (Starts ₹5.79 Lakh* / Paanch Lakh Unasi Hazaar Rupay): Epic New Swift with all-new 1.2L Z-Series 3-cylinder engine (25.75 km/l & 32.85 km/kg CNG), 6 airbags standard, 9-inch screen, cruise control.
- New Brezza (Starts ₹8.34 Lakh* / Aath Lakh Chautis Hazaar Rupay): Compact urban SUV with 1.5L DualJet Smart Hybrid, electric sunroof, 360 camera, HUD, wireless charging, 6 airbags.
- All-New Dzire (Starts ₹6.25 Lakh* / Chheh Lakh Pachis Hazaar Rupay): India's #1 sedan with 5-Star Global NCAP safety rating, electric sunroof, 360 camera, 1.2L Z-Series engine (33.73 km/kg S-CNG).
- Ertiga (Starts ₹8.80 Lakh* / Aath Lakh Assi Hazaar Rupay): India's best-selling 7-seater MPV with 1.5L Smart Hybrid (20.51 km/l & 26.11 km/kg S-CNG), 3-row flexible seating.
- WagonR (Starts ₹5.54 Lakh* / Paanch Lakh Chauwan Hazaar Rupay): Spacious tallboy hatchback with 1.0L and 1.2L engines, high mileage (34.05 km/kg CNG).
- Alto K10 (Starts ₹3.69 Lakh* / Teen Lakh Unhattar Hazaar Rupay): Smart urban city car, 1.0L DualJet engine, AGS option.
- Celerio (Starts ₹4.69 Lakh* / Chaar Lakh Unhattar Hazaar Rupay): Segment-highest petrol fuel efficiency (up to 26.68 km/l & 35.6 km/kg CNG).
- S-Presso (Starts ₹3.49 Lakh* / Teen Lakh Unchaas Hazaar Rupay): Bold mini-SUV with 180mm high ground clearance, digital cockpit.
- Eeco (Starts ₹5.18 Lakh* / Paanch Lakh Atharah Hazaar Rupay): Multi-purpose family and utility van, 5/7 seater options, 1.2L K-series engine.

3. NEXA PREMIUM LINEUP:
- Grand Vitara (Starts ₹10.76 Lakh* / Das Lakh Chhihattar Hazaar Rupay): Flagship SUV with Intelligent Electric Hybrid (27.97 km/l), Smart Hybrid, ALLGRIP SELECT AWD, Panoramic Sunroof, HUD, 360 Camera, ventilated seats.
- FRONX (Starts ₹6.85 Lakh* / Chheh Lakh Pachasi Hazaar Rupay): Crossover coupe SUV with 1.0L Turbo Boosterjet & 1.2L DualJet.
- Jimny (Starts ₹12.32 Lakh* / Baarah Lakh Battis Hazaar Rupay): Authentic 4x4 off-roader with ALLGRIP PRO 4WD (low-range transfer case), ladder frame chassis, 3-link rigid axle.
- Invicto (Starts ₹24.97 Lakh* / Chaubis Lakh Satanve Hazaar Rupay): Luxury strong hybrid MUV with 2.0L hybrid engine (21.19 km/l), captain ottoman seats, panoramic sunroof.
- Baleno (Starts ₹5.99 Lakh* / Paanch Lakh Ninnanve Hazaar Rupay): Premium hatchback with 1.2L DualJet (22.94 km/l & 30.61 km/kg CNG), HUD, 360 camera.
- XL6 (Starts ₹11.52 Lakh* / Gyaarah Lakh Baavan Hazaar Rupay): Premium 6-seater MPV with 2nd-row captain seats, ventilated front seats.
- e-Vitara / eVX (Upcoming Preview): Maruti's global electric SUV with 49kWh/61kWh battery options, 500+ km range, ALLGRIP-e electric 4WD.

4. COMMERCIAL & TOUR FLEET CHANNEL:
- Super Carry (Starts ₹5.15 Lakh* / Paanch Lakh Pandrah Hazaar Rupay): Powerful 4-cylinder 1.2L mini-truck, 740kg payload, flat cargo deck, S-CNG.
- Tour S (Starts ₹6.51 Lakh* / Chheh Lakh Ikkyawan Hazaar Rupay): Dzire commercial fleet sedan for taxi operators, speed limiter, 31.12 km/kg CNG.
- Tour M (Starts ₹9.75 Lakh* / Nau Lakh Pachhattar Hazaar Rupay): Ertiga 7-seater commercial fleet MPV, dual AC, 26.11 km/kg CNG.
- Tour V (Starts ₹5.24 Lakh* / Paanch Lakh Chaubis Hazaar Rupay): Eeco commercial passenger van for school & staff transit, 5/7 seater.`;

// Media Managers
const liveAudioOutputManager = new LiveAudioOutputManager();
let liveVideoOutputManager = null;

// --- UI Initialization ---
window.addEventListener("load", () => {
    console.log("Maruti Suzuki Virtual Showroom Loaded");
    
    // Inject system instructions
    const systemInstructionsInput = document.getElementById("systemInstructions");
    if (systemInstructionsInput) {
        systemInstructionsInput.value = MARUTI_SYSTEM_INSTRUCTION;
    }

    renderLineupCarousel("all");
    switchCarBackground("victoris");
    setupChannelPills();
    setAvailableCamerasOptions();
    setAvailableMicrophoneOptions();
    setAppStatus("disconnected");
});

// Setup Channel Switcher in Header
function setupChannelPills() {
    const pills = document.querySelectorAll(".channel-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            const channel = pill.getAttribute("data-channel");
            if (channel === "all") {
                filterLineup("all");
            } else if (channel === "nexa") {
                filterLineupByChannel("NEXA");
            } else if (channel === "arena") {
                filterLineupByChannel("ARENA");
            } else if (channel === "commercial") {
                filterLineupByChannel("COMMERCIAL");
            }
        });
    });
}

// Render Interactive Vehicle Cards with Image Thumbnails
function renderLineupCarousel(filterCategory = "all") {
    const carousel = document.getElementById("lineup-carousel");
    if (!carousel) return;

    carousel.innerHTML = "";
    const vehicleEntries = Object.values(MARUTI_VEHICLES);

    vehicleEntries.forEach(vehicle => {
        if (filterCategory !== "all") {
            if (filterCategory === "ev" && vehicle.category !== "ev" && !vehicle.categoryLabel.includes("Hybrid")) {
                return;
            } else if (filterCategory === "commercial" && vehicle.channel !== "COMMERCIAL") {
                return;
            } else if (filterCategory !== "ev" && filterCategory !== "commercial" && vehicle.category !== filterCategory) {
                return;
            }
        }

        const card = document.createElement("div");
        card.className = `car-card-item ${vehicle.id === currentSelectedCarId ? 'active' : ''}`;
        card.id = `card-${vehicle.id}`;
        card.onclick = () => selectCar(vehicle.id);

        const channelClass = vehicle.channel.toLowerCase();

        card.innerHTML = `
            <div class="card-thumb-wrapper">
                <img src="${vehicle.bgImage}" alt="${vehicle.name}" class="card-thumb-img" loading="lazy">
            </div>
            <div class="card-top-row">
                <span class="card-channel-pill ${channelClass}">${vehicle.channel}</span>
                <span class="card-category-text">${vehicle.category.toUpperCase()}</span>
            </div>
            <div class="card-car-name">${vehicle.name}</div>
            <div class="card-car-price">${vehicle.price}</div>
        `;

        carousel.appendChild(card);
    });
}

// Filter Lineup by Category
function filterLineup(category, btnElement = null) {
    if (btnElement) {
        document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
        btnElement.classList.add("active");
    }
    renderLineupCarousel(category);
}

function filterLineupByChannel(channel) {
    const carousel = document.getElementById("lineup-carousel");
    if (!carousel) return;

    carousel.innerHTML = "";
    Object.values(MARUTI_VEHICLES).forEach(vehicle => {
        if (vehicle.channel.toUpperCase() === channel.toUpperCase()) {
            const card = document.createElement("div");
            card.className = `car-card-item ${vehicle.id === currentSelectedCarId ? 'active' : ''}`;
            card.id = `card-${vehicle.id}`;
            card.onclick = () => selectCar(vehicle.id);
            const channelClass = vehicle.channel.toLowerCase();

            card.innerHTML = `
                <div class="card-thumb-wrapper">
                    <img src="${vehicle.bgImage}" alt="${vehicle.name}" class="card-thumb-img" loading="lazy">
                </div>
                <div class="card-top-row">
                    <span class="card-channel-pill ${channelClass}">${vehicle.channel}</span>
                    <span class="card-category-text">${vehicle.category.toUpperCase()}</span>
                </div>
                <div class="card-car-name">${vehicle.name}</div>
                <div class="card-car-price">${vehicle.price}</div>
            `;
            carousel.appendChild(card);
        }
    });
}

// Switch Active Car & Background
function selectCar(carId) {
    // Normalize car ID if formatted differently by LLM
    const cleanId = String(carId).toLowerCase().trim().replace(/\s+/g, "-");
    let matchedId = null;

    if (MARUTI_VEHICLES[cleanId]) {
        matchedId = cleanId;
    } else {
        // Match against keywords or partial ids
        for (const [id, vehicle] of Object.entries(MARUTI_VEHICLES)) {
            if (id === cleanId || vehicle.name.toLowerCase() === cleanId || vehicle.keywords.some(kw => kw === cleanId || cleanId.includes(kw))) {
                matchedId = id;
                break;
            }
        }
    }

    if (!matchedId || !MARUTI_VEHICLES[matchedId]) return;

    currentSelectedCarId = matchedId;
    switchCarBackground(matchedId);

    // Highlight card in carousel
    document.querySelectorAll(".car-card-item").forEach(card => card.classList.remove("active"));
    const activeCard = document.getElementById(`card-${matchedId}`);
    if (activeCard) {
        activeCard.classList.add("active");
        activeCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

// Dynamic Background Transition and Hero Card Update
function switchCarBackground(carId) {
    const vehicle = MARUTI_VEHICLES[carId];
    if (!vehicle) return;

    const bgLayer = document.getElementById("backdrop-image");
    const bgLayerNext = document.getElementById("backdrop-image-next");

    if (bgLayer && bgLayerNext) {
        // Crossfade animation
        bgLayerNext.style.backgroundImage = `url('${vehicle.bgImage}')`;
        bgLayerNext.classList.add("active");
        bgLayer.classList.remove("active");

        setTimeout(() => {
            bgLayer.style.backgroundImage = `url('${vehicle.bgImage}')`;
            bgLayer.classList.add("active");
            bgLayerNext.classList.remove("active");
        }, 700);
    }

    // Update Hero Information Card
    const titleEl = document.getElementById("car-title");
    const taglineEl = document.getElementById("car-tagline");
    const priceEl = document.getElementById("car-price");
    const mileageEl = document.getElementById("car-mileage");
    const engineEl = document.getElementById("car-engine");
    const transmissionEl = document.getElementById("car-transmission");
    const highlightsEl = document.getElementById("car-highlights");
    const channelBadge = document.getElementById("car-channel-badge");
    const categoryBadge = document.getElementById("car-category-badge");
    const heroCarImg = document.getElementById("hero-car-img");
    const visualCaption = document.getElementById("visual-caption");
    const visualChannelTag = document.getElementById("visual-channel-tag");

    if (titleEl) titleEl.textContent = vehicle.name;
    if (taglineEl) taglineEl.textContent = vehicle.tagline;
    if (priceEl) priceEl.textContent = vehicle.price;
    if (mileageEl) mileageEl.textContent = vehicle.mileage;
    if (engineEl) engineEl.textContent = vehicle.engine;
    if (transmissionEl) transmissionEl.textContent = vehicle.transmission;
    if (highlightsEl) highlightsEl.textContent = vehicle.highlights;

    if (channelBadge) {
        channelBadge.textContent = vehicle.channel;
        channelBadge.className = `channel-badge ${vehicle.channel.toLowerCase()}`;
    }
    if (categoryBadge) {
        categoryBadge.textContent = vehicle.categoryLabel;
    }

    if (heroCarImg) {
        heroCarImg.src = vehicle.bgImage;
        heroCarImg.alt = `Maruti Suzuki ${vehicle.name}`;
    }
    if (visualCaption) {
        visualCaption.textContent = `Official Visual - Maruti Suzuki ${vehicle.name}`;
    }
    if (visualChannelTag) {
        visualChannelTag.textContent = vehicle.channel;
    }
}

// Real-Time Vehicle Detection from Spoken Audio Transcript or Text
function detectCarInTranscript(text) {
    if (!text) return;
    const lower = text.toLowerCase();

    for (const [carId, vehicle] of Object.entries(MARUTI_VEHICLES)) {
        for (const kw of vehicle.keywords) {
            if (lower.includes(kw.toLowerCase())) {
                console.log(`Detected vehicle mention: "${kw}" -> Switching showroom to ${vehicle.name}`);
                selectCar(carId);
                return carId;
            }
        }
    }
    return null;
}

// Quick Prompt Handler
function askQuickPrompt(promptText) {
    const input = document.getElementById("text-message");
    if (input) {
        input.value = promptText;
        newUserMessage();
    }
}

function askAboutCurrentCar() {
    const vehicle = MARUTI_VEHICLES[currentSelectedCarId];
    if (vehicle) {
        askQuickPrompt(`Tell me more about the ${vehicle.name}, its features, pricing, and why I should buy it.`);
    }
}

function bookTestDriveCurrentCar() {
    const vehicle = MARUTI_VEHICLES[currentSelectedCarId];
    if (vehicle) {
        askQuickPrompt(`I would like to book a test drive for the Maruti Suzuki ${vehicle.name}. Can you help me schedule it?`);
    }
}

function toggleSettingsModal() {
    const modal = document.getElementById("settings-modal");
    if (modal) {
        modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "flex" : "none";
    }
}

// --- Live WebSocket Protocol & Media Setup ---
const isHttps = window.location.protocol === "https:";
const wsProtocol = isHttps ? "wss:" : "ws:";
const host = window.location.host;

const PROXY_URL = `${wsProtocol}//${host}/ws`;
const CONTROL_URL = `/api/control`;
const FR_SERVICE_URL = `/api/post_endpoint`;

const systemInstructionsInput = document.getElementById("systemInstructions");
const locationInput = document.getElementById("location");

const disconnected = document.getElementById("disconnected");
const connecting = document.getElementById("connecting");
const connected = document.getElementById("connected");
const speaking = document.getElementById("speaking");

const micBtn = document.getElementById("micBtn");
const micOffBtn = document.getElementById("micOffBtn");
const cameraBtn = document.getElementById("cameraBtn");
const cameraOffBtn = document.getElementById("cameraOffBtn");
const screenBtn = document.getElementById("screenBtn");

const cameraSelect = document.getElementById("cameraSource");
const micSelect = document.getElementById("audioSource");

const envApiHost = document.getElementById("envApiHost");
const liveApiModel = document.getElementById("liveApiModel");
const voiceName = document.getElementById("voiceName");
const voiceLocale = document.getElementById("voiceLocale");

const geminiLiveApi = new GeminiLiveAPI(PROXY_URL, CONTROL_URL, FR_SERVICE_URL);

geminiLiveApi.onErrorMessage = (message) => {
    console.warn("Live API Notice:", message);
    if (message.includes("closed") || message.includes("ended") || message.includes("failed")) {
        setAppStatus("disconnected");
        stopAudioInput();
        const connectBtn = document.getElementById("connectBtn");
        const disconnectBtn = document.getElementById("disconnectBtn");
        if (connectBtn) connectBtn.style.display = "inline-flex";
        if (disconnectBtn) disconnectBtn.style.display = "none";
        const placeholder = document.getElementById("avatar-placeholder");
        if (placeholder) placeholder.classList.remove("hidden");
    }
};

function getSelectedResponseModality() {
    const radioButtons = document.querySelectorAll('input[name="responseModality"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            return radioButton.value;
        }
    }
    return "VIDEO";
}

function getSystemInstructions() {
    return systemInstructionsInput ? systemInstructionsInput.value : MARUTI_SYSTEM_INSTRUCTION;
}

async function connectBtnClick() {
    setAppStatus("connecting");
    console.log("Connecting to Gemini Live API...");

    // Initialize Video Output Manager on user gesture
    if (!liveVideoOutputManager) {
        liveVideoOutputManager = new LiveVideoOutputManager();
    }
    
    // Unlock Audio on user gesture
    await liveAudioOutputManager.initializeAudioContext();

    const videoEl = document.getElementById("video_player");
    if (videoEl) {
        videoEl.muted = false;
        videoEl.play().catch(e => console.log("Init video unlock:", e));
    }

    geminiLiveApi.responseModalities = [getSelectedResponseModality()];
    geminiLiveApi.systemInstructions = getSystemInstructions();
    geminiLiveApi.setModel(liveApiModel ? liveApiModel.value : "gemini-3.1-flash-live-preview-04-2026");
    geminiLiveApi.setVoice(voiceName ? voiceName.value : "orus", voiceLocale ? voiceLocale.value : "hi-IN");
    geminiLiveApi.setLocation(locationInput ? locationInput.value : "us-central1");
    geminiLiveApi.setApiHost(envApiHost ? envApiHost.value : "prod");

    geminiLiveApi.connect();

    geminiLiveApi.onConnectionStarted = () => {
        console.log("Gemini Live WebSocket opened.");
        const connectBtn = document.getElementById("connectBtn");
        const disconnectBtn = document.getElementById("disconnectBtn");
        if (connectBtn) connectBtn.style.display = "none";
        if (disconnectBtn) disconnectBtn.style.display = "inline-flex";

        const placeholder = document.getElementById("avatar-placeholder");
        if (placeholder) placeholder.classList.add("hidden");

        micOffBtn.querySelector('button').disabled = false;
        cameraOffBtn.querySelector('button').disabled = false;
        screenBtn.disabled = false;
    };
}

function disconnectBtnClick() {
    geminiLiveApi.disconnect();
    setAppStatus("disconnected");
    stopAudioInput();

    const connectBtn = document.getElementById("connectBtn");
    const disconnectBtn = document.getElementById("disconnectBtn");
    if (connectBtn) connectBtn.style.display = "inline-flex";
    if (disconnectBtn) disconnectBtn.style.display = "none";

    const placeholder = document.getElementById("avatar-placeholder");
    if (placeholder) placeholder.classList.remove("hidden");

    micBtn.hidden = true;
    micOffBtn.hidden = false;
    micOffBtn.querySelector('button').disabled = true;
    cameraBtn.hidden = true;
    cameraOffBtn.hidden = false;
    cameraOffBtn.querySelector('button').disabled = true;
    screenBtn.disabled = true;
}

let speakingTimeout = null;
function triggerSpeakingGlow() {
    const previewContainer = document.getElementById("video-preview-container");
    if (!previewContainer) return;

    previewContainer.classList.add("active-speaking");
    setAppStatus("speaking");

    if (speakingTimeout) {
        clearTimeout(speakingTimeout);
    }

    speakingTimeout = setTimeout(() => {
        previewContainer.classList.remove("active-speaking");
        setAppStatus("connected");
    }, 1200);
}

let isFirstTurn = true;

geminiLiveApi.onReceiveResponse = (messageResponse) => {
    if (messageResponse.type === "SETUP COMPLETE") {
        console.log("Live Avatar Setup complete! Ready for voice/text.");
        setAppStatus("connected");
        startAudioInput();
        micBtn.hidden = false;
        micOffBtn.hidden = true;

        // Proactively greet customer in Hindi as requested
        if (isFirstTurn) {
            isFirstTurn = false;
            setTimeout(() => {
                geminiLiveApi.sendTextMessage("Start the conversation now. Greet the customer warmly in Hindi as Kabir, the male AI Showroom Specialist from Maruti Suzuki Virtual Showroom, and ask which car they would like to explore today.");
            }, 600);
        }
    } else if (messageResponse.type === "TOOL_CALL_SWITCH_CAR") {
        console.log("Gemini Live Tool Call: switch_vehicle_showroom ->", messageResponse.carName);
        selectCar(messageResponse.carName);
        
        // Return tool response to Gemini Live API
        if (messageResponse.callId) {
            const toolResponseMsg = {
                tool_response: {
                    function_responses: [
                        {
                            response: { output: { success: true, active_vehicle: messageResponse.carName } },
                            id: messageResponse.callId,
                        },
                    ],
                },
            };
            geminiLiveApi.sendMessage(toolResponseMsg);
        }
    } else if (messageResponse.type === "AUDIO") {
        triggerSpeakingGlow();
        liveAudioOutputManager.playAudioChunk(messageResponse.data);
    } else if (messageResponse.type === "VIDEO") {
        triggerSpeakingGlow();
        if (liveVideoOutputManager) {
            liveVideoOutputManager.playVideoChunk(messageResponse.data);
        }
    } else if (messageResponse.type === "TEXT") {
        newModelMessage(messageResponse.data);
        detectCarInTranscript(messageResponse.data);
    } else if (messageResponse.type === "OUTPUT_TRANSCRIPTION") {
        newModelMessage("Kabir: " + messageResponse.data);
        detectCarInTranscript(messageResponse.data);
    } else if (messageResponse.type === "INPUT_TRANSCRIPTION") {
        newUserTranscriptMessage(messageResponse.data);
        detectCarInTranscript(messageResponse.data);
    } else if (messageResponse.type === "INTERRUPT") {
        console.log("Consultant Interrupted - Listening to user");
        liveAudioOutputManager.interrupt();
    }
};

function setAppStatus(status) {
    const states = {
        disconnected: document.getElementById("disconnected"),
        connecting: document.getElementById("connecting"),
        connected: document.getElementById("connected"),
        speaking: document.getElementById("speaking")
    };

    for (const [key, el] of Object.entries(states)) {
        if (!el) continue;
        if (key === status) {
            el.hidden = false;
            el.style.display = "inline-flex";
        } else {
            el.hidden = true;
            el.style.display = "none";
        }
    }
}

// --- Chat Messages Display ---
function newModelMessage(message) {
    const textChat = document.getElementById("text-chat");
    if (!textChat) return;

    const p = document.createElement("p");
    p.className = "model-bubble";
    p.textContent = message;
    textChat.appendChild(p);
    textChat.scrollTop = textChat.scrollHeight;
}

function newUserMessage() {
    const textMessage = document.getElementById("text-message");
    if (!textMessage || textMessage.value.trim() === "") return;

    const message = textMessage.value.trim();
    geminiLiveApi.sendTextMessage(message);

    const textChat = document.getElementById("text-chat");
    if (textChat) {
        const p = document.createElement("p");
        p.className = "user-bubble";
        p.textContent = message;
        textChat.appendChild(p);
        textChat.scrollTop = textChat.scrollHeight;
    }

    detectCarInTranscript(message);
    textMessage.value = "";
}

function newUserTranscriptMessage(text) {
    const textChat = document.getElementById("text-chat");
    if (!textChat) return;

    const p = document.createElement("p");
    p.className = "user-bubble";
    p.textContent = "🎙️ " + text;
    textChat.appendChild(p);
    textChat.scrollTop = textChat.scrollHeight;
}

// --- Audio & Media Streaming Input ---
let inputAudioContext = null;
let inputWorkletNode = null;
let inputMediaStream = null;

async function startAudioInput() {
    try {
        console.log("Initializing microphone capture...");
        if (!inputAudioContext || inputAudioContext.state === "closed") {
            inputAudioContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 16000,
            });
        }

        if (inputAudioContext.state === "suspended") {
            await inputAudioContext.resume();
        }

        const selectedMic = micSelect ? micSelect.value : null;
        const constraints = {
            audio: selectedMic ? { deviceId: { exact: selectedMic } } : true,
        };

        inputMediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        const source = inputAudioContext.createMediaStreamSource(inputMediaStream);

        await inputAudioContext.audioWorklet.addModule("/frontend/input-processor.js");
        inputWorkletNode = new AudioWorkletNode(inputAudioContext, "input-processor");

        inputWorkletNode.port.onmessage = (event) => {
            const pcm16Data = event.data;
            const uint8Data = new Uint8Array(pcm16Data.buffer);
            let binary = "";
            const len = uint8Data.byteLength;
            const chunkSize = 0x8000;
            for (let i = 0; i < len; i += chunkSize) {
                binary += String.fromCharCode.apply(null, uint8Data.subarray(i, Math.min(i + chunkSize, len)));
            }
            const base64Pcm = window.btoa(binary);
            geminiLiveApi.sendAudioChunk(base64Pcm, inputAudioContext.sampleRate);
        };

        source.connect(inputWorkletNode);
        const dummyGain = inputAudioContext.createGain();
        dummyGain.gain.value = 0;
        inputWorkletNode.connect(dummyGain);
        dummyGain.connect(inputAudioContext.destination);

        console.log("Microphone live streaming active at rate:", inputAudioContext.sampleRate);
    } catch (err) {
        console.error("Microphone access error:", err);
    }
}

function stopAudioInput() {
    if (inputMediaStream) {
        inputMediaStream.getTracks().forEach((track) => track.stop());
        inputMediaStream = null;
    }
    if (inputWorkletNode) {
        inputWorkletNode.disconnect();
        inputWorkletNode = null;
    }
    if (inputAudioContext && inputAudioContext.state !== "closed") {
        inputAudioContext.close();
        inputAudioContext = null;
    }
}

function micBtnClick() {
    stopAudioInput();
    micBtn.hidden = true;
    micOffBtn.hidden = false;
}

function micOffBtnClick() {
    startAudioInput();
    micBtn.hidden = false;
    micOffBtn.hidden = true;
}

// --- Camera & Video Sharing ---
let videoStream;
let videoIntervalId;

async function startCameraInput() {
    const selectedCamera = cameraSelect ? cameraSelect.value : null;
    const constraints = {
        video: selectedCamera ? { deviceId: { exact: selectedCamera } } : true,
    };

    try {
        videoStream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.getElementById("video");
        const cameraPip = document.getElementById("camera-pip");
        if (videoElement) {
            videoElement.srcObject = videoStream;
            if (cameraPip) cameraPip.style.display = "block";
        }
        startVideoFrameSender();
    } catch (err) {
        console.error("Camera access error:", err);
    }
}

function stopCameraInput() {
    if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
    }
    const cameraPip = document.getElementById("camera-pip");
    if (cameraPip) cameraPip.style.display = "none";
    clearInterval(videoIntervalId);
}

function startVideoFrameSender() {
    const videoElement = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    if (!canvas || !videoElement) return;
    const context = canvas.getContext("2d");

    videoIntervalId = setInterval(() => {
        if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const base64Data = canvas.toDataURL("image/jpeg", 0.6).split(",")[1];
            geminiLiveApi.sendImageChunk(base64Data);
        }
    }, 1000);
}

function cameraBtnClick() {
    stopCameraInput();
    cameraBtn.hidden = true;
    cameraOffBtn.hidden = false;
}

function cameraOffBtnClick() {
    startCameraInput();
    cameraBtn.hidden = false;
    cameraOffBtn.hidden = true;
}

async function screenShareBtnClick() {
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const videoElement = document.getElementById("video");
        const cameraPip = document.getElementById("camera-pip");
        if (videoElement) {
            videoElement.srcObject = screenStream;
            if (cameraPip) cameraPip.style.display = "block";
        }
        startVideoFrameSender();
    } catch (err) {
        console.error("Screen share error:", err);
    }
}

async function setAvailableCamerasOptions() {
    if (!cameraSelect) return;
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter((device) => device.kind === "videoinput");

        cameraSelect.innerHTML = '<option value="">Default Camera</option>';
        videoDevices.forEach((device) => {
            const option = document.createElement("option");
            option.value = device.deviceId;
            option.textContent = device.label || `Camera ${cameraSelect.options.length}`;
            cameraSelect.appendChild(option);
        });
    } catch (e) {
        console.log("Device enumeration error:", e);
    }
}

async function setAvailableMicrophoneOptions() {
    if (!micSelect) return;
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioDevices = devices.filter((device) => device.kind === "audioinput");

        micSelect.innerHTML = '<option value="">Default Mic</option>';
        audioDevices.forEach((device) => {
            const option = document.createElement("option");
            option.value = device.deviceId;
            option.textContent = device.label || `Mic ${micSelect.options.length}`;
            micSelect.appendChild(option);
        });
    } catch (e) {
        console.log("Mic enumeration error:", e);
    }
}

function newCameraSelected() {
    if (!cameraBtn.hidden) {
        stopCameraInput();
        startCameraInput();
    }
}

function newMicSelected() {
    if (!micBtn.hidden) {
        stopAudioInput();
        startAudioInput();
    }
}
