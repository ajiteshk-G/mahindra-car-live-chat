/**
 * Mahindra Auto AI Live Virtual Showroom Experience
 * Real-Time Multimodal Avatar & Dynamic Vehicle Showroom
 * Includes Authentic SUVs, Tech SUVs, Born Electric, and Tough Utility/Commercial Range
 */

// --- Official Mahindra Auto & Mahindra Electric SUV Complete Vehicle Knowledge Base ---
const MAHINDRA_VEHICLES = {
    "thar-roxx": {
        id: "thar-roxx",
        name: "Thar ROXX",
        channel: "AUTHENTIC",
        category: "4x4",
        categoryLabel: "Flagship 5-Door 4x4 SUV",
        tagline: "The SUV of SUVs. Unmatched Presence, Luxury & Unstoppable 4x4 Capability.",
        price: "₹12.52 Lakh* – ₹23.52 Lakh*",
        priceRange: "₹12.52 Lakh* to ₹23.52 Lakh* (Ex-Showroom)",
        fuelTypes: "mStallion Turbo Petrol & mHawk Diesel",
        variantRange: "MX1, MX3, AX3L, MX5, AX5L, AX7L",
        mileage: "5-Star Bharat NCAP (Highest Ever Rated Body-on-Frame SUV)",
        engine: "2.0L mStallion Turbo Petrol (177PS, 380Nm) & 2.2L mHawk Diesel (175PS, 370Nm)",
        transmission: "6-Speed AISIN Torque Converter Automatic / 6-Speed Manual",
        highlights: "Panoramic Skyroof, Level 2 ADAS (10 Active Safety Features), Twin 10.25-inch HD Digital Screens, Harman Kardon 9-Speaker Audio with QuantumLogic 3D, Ventilated Front Seats, 4XPLOR Intelligent Terrain Management with Electronic Locking Differential, 5-Door Practicality",
        bgImage: "/frontend/assets/thar-roxx.jpg",
        keywords: ["thar roxx", "roxx", "5 door thar", "5-door thar", "thar 5 door", "thar 5-door", "थार रॉक्स", "रॉक्स", "5 डोर थार"]
    },
    "be-6e": {
        id: "be-6e",
        name: "BE 6e",
        channel: "EV",
        category: "ev",
        categoryLabel: "Born Electric Sport SUV Coupe",
        tagline: "Unlimit Tomorrow. Pure Electric INGLO Architecture with 682 km Range.",
        price: "₹18.90 Lakh* – ₹26.90 Lakh*",
        priceRange: "₹18.90 Lakh* to ₹26.90 Lakh* (Ex-Showroom Introductory)",
        fuelTypes: "100% Born Electric (INGLO Dedicated Platform)",
        variantRange: "Pack ONE, Pack TWO, Pack THREE (59kWh & 79kWh Battery Packs)",
        mileage: "Up to 682 km per charge (MIDC Part 1+2)",
        engine: "High-Performance Rear-Wheel Drive Electric Motor (285PS, 380Nm, 0-100 km/h in 6.7s)",
        transmission: "Single-Speed High-Efficiency e-Drive with Semi-Active Suspension",
        highlights: "Born Electric INGLO Platform, 175kW Ultra-Fast DC Charging (20-80% in 20 mins), Integrated Dual Cockpit Screens, Level 2+ ADAS, 16-Speaker Harman Kardon Sound with Dolby Atmos, Aircraft-Inspired Halo Cockpit, 5-Star Bharat NCAP Ready",
        bgImage: "/frontend/assets/be-6e.jpg",
        keywords: ["be 6e", "be6e", "be 6", "be6", "be.05", "born electric", "mahindra electric", "electric suv", "बीई 6e", "बीई6e"]
    },

    "xev-9e": {
        id: "xev-9e",
        name: "XEV 9e",
        channel: "EV",
        category: "ev",
        categoryLabel: "Electric Origin Luxury SUV Coupe",
        tagline: "Unlimit Luxury. Triple Panoramic Cockpit Screens & 656 km Range.",
        price: "₹21.90 Lakh* – ₹29.90 Lakh*",
        priceRange: "₹21.90 Lakh* to ₹29.90 Lakh* (Ex-Showroom Introductory)",
        fuelTypes: "100% Born Electric (INGLO Dedicated Luxury Platform)",
        variantRange: "Pack ONE, Pack TWO, Pack THREE",
        mileage: "Up to 656 km per charge (MIDC)",
        engine: "High-Output INGLO Electric Powertrain (285PS, 380Nm, 0-100 km/h in 6.8s)",
        transmission: "Single-Speed e-Drive with Intelligent Dynamic Drive Modes",
        highlights: "World-First Triple Integrated 12.3-inch Panoramic Cockpit Displays (Driver + Infotainment + Co-Driver Entertainment), Harman Kardon 16-Speaker 3D Audio with Dolby Atmos, Level 2+ ADAS, Infinity Panoramic Glass Roof, 79kWh Blade Battery, 175kW DC Fast Charging",
        bgImage: "/frontend/assets/xev-9e.jpg",
        keywords: ["xev 9e", "xev9e", "xev", "luxury ev", "electric coupe", "एक्सईवी 9e", "एक्सईवी9e"]
    },
    "xev-9s": {
        id: "xev-9s",
        name: "XEV 9S",
        channel: "EV",
        category: "ev",
        categoryLabel: "Executive Electric Origin Luxury SUV",
        tagline: "Executive First-Class Luxury. Grand Stance & Futuristic Origin Platform.",
        price: "₹23.50 Lakh* – ₹31.00 Lakh*",
        priceRange: "₹23.50 Lakh* to ₹31.00 Lakh* (Ex-Showroom)",
        fuelTypes: "100% Born Electric Executive Platform",
        variantRange: "Executive Pack ONE, Executive Pack TWO",
        mileage: "Up to 656 km per charge (MIDC)",
        engine: "High-Output INGLO Electric Motor with Dynamic Ride Control (285PS, 380Nm)",
        transmission: "Single-Speed e-Drive with Adaptive Air-Damper Suspension",
        highlights: "Executive Lounge Seating with First-Class Rear Recline, Triple 12.3-inch Panoramic Infotainment Screens, Level 2+ Intelligent Autonomous Driving, Harman Kardon 16-Speaker 3D Immersive Sound, 79kWh Battery with 175kW DC Fast Charge",
        bgImage: "/frontend/assets/xev-9s.jpg",
        keywords: ["xev 9s", "xev9s", "9s", "executive ev", "एक्सईवी 9एस", "एक्सईवी 9s"]
    },
    "scorpio-n": {
        id: "scorpio-n",
        name: "Scorpio-N",
        channel: "AUTHENTIC",
        category: "luxury",
        categoryLabel: "The Big Daddy of SUVs",
        tagline: "Makes Way For No One. Unrivalled Road Presence & 4XPLOR Terrain Capability.",
        price: "₹13.69 Lakh* – ₹25.49 Lakh*",
        priceRange: "₹13.69 Lakh* to ₹25.49 Lakh* (Ex-Showroom)",
        fuelTypes: "mStallion Turbo Petrol & mHawk Diesel",
        variantRange: "Z2, Z4, Z6, Z8, Z8 Select, Z8L (6 & 7-Seater Options)",
        mileage: "5-Star Global NCAP & Bharat NCAP Safety",
        engine: "2.0L mStallion Turbo Petrol (200PS) & 2.2L mHawk Diesel (175PS, 400Nm)",
        transmission: "6-Speed Automatic & 6-Speed Manual with 4XPLOR 4WD",
        highlights: "Commanding High Seating, 4XPLOR Intelligent Terrain Modes (Normal, Grass/Gravel/Snow, Mud/Ruts, Sand), Sony 12-Speaker 3D Immersive Sound with Dual Channel Subwoofer, Electric Sunroof, Dual-Zone Climate Control, Alexa Built-in",
        bgImage: "/frontend/assets/scorpio-n.jpg",
        keywords: ["scorpio-n", "scorpio n", "scorpion", "big daddy", "scorpio-n 4x4", "स्कॉर्पियो एन", "स्कॉर्पियो n", "बिग डैडी"]
    },
    "xuv700": {
        id: "xuv700",
        name: "XUV700",
        channel: "TECH",
        category: "luxury",
        categoryLabel: "Flagship Tech & Luxury SUV",
        tagline: "Rush of Pure Adrenaline. Level 2 ADAS, Dual Superscreens & All-Wheel Drive.",
        price: "₹13.99 Lakh* – ₹25.94 Lakh*",
        priceRange: "₹13.99 Lakh* to ₹25.94 Lakh* (Ex-Showroom)",
        fuelTypes: "mStallion Turbo Petrol & mHawk Diesel",
        variantRange: "MX, AX3, AX5, AX5 Select, AX7, AX7L (5 & 7 Seater with AWD)",
        mileage: "5-Star Global NCAP (Safer Choice Award)",
        engine: "2.0L mStallion Turbo Petrol (200PS) & 2.2L mHawk Diesel (185PS, 450Nm)",
        transmission: "6-Speed Automatic / 6-Speed Manual with Optional All-Wheel Drive (AWD)",
        highlights: "Dual 10.25-inch Floating Superscreen Cockpit, Level 2 ADAS (Adaptive Cruise Control, Auto Emergency Braking, Lane Departure Prevention), Panoramic Skyroof, Sony 3D Sound with 12 Speakers, Flush Smart Door Handles, Wireless Apple CarPlay & Android Auto",
        bgImage: "/frontend/assets/xuv700.jpg",
        keywords: ["xuv700", "xuv 700", "xuv", "700", "xuv 7xo", "xuv7xo", "adas", "एक्सयूवी 700", "एक्सयूवी700"]
    },
    "xuv-3xo": {
        id: "xuv-3xo",
        name: "XUV 3XO",
        channel: "TECH",
        category: "compact",
        categoryLabel: "Next-Gen Tech Compact SUV",
        tagline: "Everything You Want & More. Segment-First Skyroof & Level 2 ADAS.",
        price: "₹7.79 Lakh* – ₹15.04 Lakh*",
        priceRange: "₹7.79 Lakh* to ₹15.04 Lakh* (Ex-Showroom)",
        fuelTypes: "Turbo Petrol (TCMPFi / TGDi) & mHawk Diesel",
        variantRange: "MX1, MX2, MX3, MX3 Pro, AX5, AX5L, AX7, AX7L",
        mileage: "Up to 21.2 km/l (Diesel) | 20.1 km/l (Petrol)",
        engine: "1.2L mStallion Turbo Petrol (111PS), 1.2L TGDi Turbo (130PS) & 1.5L Diesel (117PS)",
        transmission: "AISIN 6-Speed Torque Converter AT & 6-Speed Manual",
        highlights: "Segment-Largest Panoramic Skyroof, Level 2 ADAS with 360-Degree Surround Camera, Dual-Zone Climate Control, 6 Airbags Standard across all variants, Harman Kardon Premium Audio, Dual 10.25-inch High-Definition Displays",
        bgImage: "/frontend/assets/xuv-3xo.jpg",
        keywords: ["xuv 3xo", "xuv3xo", "3xo", "xuv 300", "xuv300", "compact suv", "एक्सयूवी 3एक्सओ", "3एक्सओ"]
    },
    "thar": {
        id: "thar",
        name: "Thar (3-Door)",
        channel: "AUTHENTIC",
        category: "4x4",
        categoryLabel: "Iconic 4x4 Off-Roader",
        tagline: "Explore The Impossible. Born For Extreme Adventure & Off-Road Trails.",
        price: "₹10.32 Lakh* – ₹18.00 Lakh*",
        priceRange: "₹10.32 Lakh* to ₹18.00 Lakh* (Ex-Showroom)",
        fuelTypes: "mStallion Turbo Petrol & mHawk Diesel",
        variantRange: "AX Opt & LX (Hard Top & Convertible Top Options with 4x4 / RWD)",
        mileage: "4-Star Global NCAP Safety Rating",
        engine: "2.0L mStallion TGDi Petrol (150PS) / 2.2L mHawk Diesel (130PS) / 1.5L Diesel",
        transmission: "6-Speed AT / 6-Speed MT with Shift-on-Fly 4WD Transfer Case",
        highlights: "Iconic 2-Door Stance, Mechanical Locking Rear Differential (MLD), 650mm Water Wading Capacity, Removable Roof Top, IP54 Drizzle-Resistant Interior Switches, Washable Floor with Drain Plugs",
        bgImage: "/frontend/assets/thar.jpg",
        keywords: ["thar", "thar 3 door", "3 door thar", "classic thar", "4x4", "off road", "offroader", "थार", "3 डोर थार"]
    },
    "scorpio-classic": {
        id: "scorpio-classic",
        name: "Scorpio Classic",
        channel: "AUTHENTIC",
        category: "luxury",
        categoryLabel: "The Undisputed Legend",
        tagline: "The Legend Is Back. Robust mHawk Power & Timeless Macho Character.",
        price: "₹13.37 Lakh* – ₹17.40 Lakh*",
        priceRange: "₹13.37 Lakh* to ₹17.40 Lakh* (Ex-Showroom)",
        fuelTypes: "All-Aluminum 2.2L GEN-2 mHawk Diesel",
        variantRange: "Classic S & Classic S11 (7-Seater & 9-Seater Options)",
        mileage: "High Torque & Robust Long-Haul Highway Efficiency",
        engine: "2.2L All-Aluminum GEN-2 mHawk Diesel Engine (132PS, 300Nm torque)",
        transmission: "6-Speed Cable-Shift Manual Transmission with Rear-Wheel Drive (RWD)",
        highlights: "Signature Tower Tail Lamps, New Redefined Grille with Twin Peaks Logo, 9-inch Touchscreen Infotainment with Bluetooth/Phone Mirroring, Micro-Hybrid Technology, Durable Ladder-Frame Chassis, Available in 7 and 9-Seater layouts",
        bgImage: "/frontend/assets/scorpio-classic.jpg",
        keywords: ["scorpio classic", "scorpio s11", "classic scorpio", "scorpio", "स्कॉर्पियो क्लासिक", "स्कॉर्पियो एस11"]
    },
    "bolero-neo": {
        id: "bolero-neo",
        name: "Bolero Neo",
        channel: "UTILITY",
        category: "compact",
        categoryLabel: "Tough Modern RWD Compact SUV",
        tagline: "Tough Jo Dikhe, Tough Jo Kare. Authentic SUV with Multi-Terrain Technology.",
        price: "₹8.99 Lakh* – ₹10.79 Lakh*",
        priceRange: "₹8.99 Lakh* to ₹10.79 Lakh* (Ex-Showroom)",
        fuelTypes: "1.5L mHawk100 Diesel",
        variantRange: "N4, N8, N10, N10 (O) with Multi-Terrain Technology",
        mileage: "Up to 17.29 km/l (Diesel)",
        engine: "1.5L mHawk100 Turbo Diesel (100PS, 260Nm torque)",
        transmission: "5-Speed Manual Transmission with Rear-Wheel Drive (RWD)",
        highlights: "Authentic Body-on-Frame Construction, Multi-Terrain Technology (Mechanical Locking Differential - MLD on N10(O)), 7-Seater Layout, Micro-Hybrid Engine System, Premium Italian Themed Interiors, 7-inch Touchscreen",
        bgImage: "/frontend/assets/bolero-neo.jpg",
        keywords: ["bolero neo", "neo", "bolero n10", "n10", "बोलेरो नियो", "नियो"]
    },
    "bolero-neo-plus": {
        id: "bolero-neo-plus",
        name: "Bolero Neo+",
        channel: "UTILITY",
        category: "utility",
        categoryLabel: "9-Seater Family & Commercial SUV",
        tagline: "Space For The Whole World. The Ultimate 9-Seater SUV with 2.2L mHawk Power.",
        price: "₹11.39 Lakh* – ₹13.49 Lakh*",
        priceRange: "₹11.39 Lakh* to ₹13.49 Lakh* (Ex-Showroom)",
        fuelTypes: "2.2L mHawk Diesel",
        variantRange: "P4 & P10 (9-Seater 2+3+4 Configuration)",
        mileage: "Powerful & Reliable Long-Distance Cruiser",
        engine: "2.2L mHawk Diesel Engine (120PS, 280Nm torque)",
        transmission: "6-Speed Manual with Rear-Wheel Drive",
        highlights: "Spacious 9-Seater Seating Arrangement (2 Front + 3 Middle + 4 Side-Facing Rear), 9-Inch Touchscreen Infotainment, Heavy Duty Suspension, Micro Hybrid Start-Stop System, ABS with EBD & Dual Airbags",
        bgImage: "/frontend/assets/bolero-neo-plus.jpg",
        keywords: ["bolero neo plus", "bolero neo+", "bolero 9 seater", "9 seater", "9-seater", "बोलेरो नियो प्लस", "9 सीटर बोलेरो"]
    },
    "bolero": {
        id: "bolero",
        name: "Bolero",
        channel: "UTILITY",
        category: "utility",
        categoryLabel: "The Undisputed Rural Metal Legend",
        tagline: "India's Most Trusted Tough SUV. Solid Metal Construction & Unmatched Reliability.",
        price: "₹8.49 Lakh* – ₹9.99 Lakh*",
        priceRange: "₹8.49 Lakh* to ₹9.99 Lakh* (Ex-Showroom)",
        fuelTypes: "1.5L mHawk75 Diesel",
        variantRange: "B4, B6, B6 (Opt)",
        mileage: "Up to 16.0 km/l (Diesel)",
        engine: "1.5L mHawk75 Turbocharged Diesel Engine (75PS, 210Nm torque)",
        transmission: "5-Speed Manual Transmission with Heavy Duty Rear-Wheel Drive",
        highlights: "Solid Metal Front Bumper & High Ground Clearance, 7-Seater Configuration, Micro-Hybrid Technology, Unmatched Rural & Semi-Urban Durability, Proven Low Maintenance Cost, Driver Airbag, ABS with EBD",
        bgImage: "/frontend/assets/bolero.jpg",
        keywords: ["bolero", "classic bolero", "bolero b6", "bolero power plus", "बोलेरो", "क्लासिक बोलेरो"]
    },
    "xuv400-ev": {
        id: "xuv400-ev",
        name: "XUV400 EV",
        channel: "EV",
        category: "ev",
        categoryLabel: "All-Electric Performance SUV",
        tagline: "The Future of Electric SUVs. 0 to 100 in 8.3 Seconds with 456 km Range.",
        price: "₹15.49 Lakh* – ₹19.39 Lakh*",
        priceRange: "₹15.49 Lakh* to ₹19.39 Lakh* (Ex-Showroom)",
        fuelTypes: "100% Pure Electric (Zero Tailpipe Emissions)",
        variantRange: "EC Pro (34.5kWh) & EL Pro (39.4kWh)",
        mileage: "Up to 456 km per charge (MIDC)",
        engine: "Permanent Magnet Synchronous Electric Motor (150PS, 310Nm instant torque)",
        transmission: "Single-Speed Automatic Transmission (0-100 km/h in 8.3s)",
        highlights: "Fast 50kW DC Fast Charging (0 to 80% in 50 minutes), Dual 10.25-inch Floating Display Cockpit, Dual-Zone Climate Control with Memory, Wireless Apple CarPlay & Android Auto, Copper-Accented EV Exterior Styling",
        bgImage: "/frontend/assets/xuv400-ev.jpg",
        keywords: ["xuv400", "xuv 400", "xuv400 ev", "xuv ev", "electric suv", "ev", "electric car", "एक्सयूवी400", "इलेक्ट्रिक एसयूवी"]
    },
    "marazzo": {
        id: "marazzo",
        name: "Marazzo",
        channel: "AUTHENTIC",
        category: "luxury",
        categoryLabel: "Smooth & Spacious 7/8 Seater MPV",
        tagline: "Smooth Like A Shark. Quietest Cabin & Surround Cool Technology.",
        price: "₹14.39 Lakh* – ₹16.80 Lakh*",
        priceRange: "₹14.39 Lakh* to ₹16.80 Lakh* (Ex-Showroom)",
        fuelTypes: "1.5L D15 4-Cylinder Turbo Diesel",
        variantRange: "M2+, M4+, M6+ (7 & 8-Seater Options)",
        mileage: "Up to 17.3 km/l (Diesel)",
        engine: "1.5L 4-Cylinder D15 Turbo Diesel Engine (121PS, 300Nm torque)",
        transmission: "6-Speed Manual Transmission with Front-Wheel Drive",
        highlights: "Shark-Inspired Aerodynamic Silhouette, Industry-First Surround Cool Roof AC System, 4-Star Global NCAP Safety Rating, Ultra-Quiet Cabin Insulation, Aircraft-Inspired Parking Brake, 7 and 8 Passenger Seating Flexibility",
        bgImage: "/frontend/assets/marazzo.jpg",
        keywords: ["marazzo", "mahindra marazzo", "mpv", "7 seater", "8 seater", "मराज़ो", "मराजो"]
    },
    "bolero-camper": {
        id: "bolero-camper",
        name: "Bolero Camper & Maxx Pik-Up",
        channel: "COMMERCIAL",
        category: "utility",
        categoryLabel: "Heavy Duty Commercial Pick-Up Range",
        tagline: "India's #1 Commercial Pickup Range. Maxx Payload, Double Cab & 4x4 Power.",
        price: "₹9.27 Lakh* – ₹10.61 Lakh*",
        priceRange: "₹9.27 Lakh* to ₹10.61 Lakh* (Ex-Showroom)",
        fuelTypes: "2.5L m2DiCR Turbo Diesel & CNG",
        variantRange: "Camper 4x4, Camper Gold, Maxx Pik-Up HD, City Pik-Up",
        mileage: "Maxx Mileage & Heavy-Duty Commercial Reliability",
        engine: "2.5L m2DiCR Turbocharged Diesel Engine (75PS, 200Nm torque)",
        transmission: "5-Speed Heavy Duty Manual with 4x4 & 4x2 Options",
        highlights: "Double Cabin 5-Seater + Large Cargo Bed, 4x4 All-Terrain Commercial Capability, 1.3 to 2.0 Ton Payload Options, Heavy Duty Leaf Spring Suspension, Power Steering and Air Conditioning Options",
        bgImage: "/frontend/assets/bolero-camper.jpg",
        keywords: ["bolero camper", "camper", "pikup", "pickup", "bolero pikup", "maxx pikup", "chota hathi", "कैम्पर", "पिकअप", "बोलेरो पिकअप"]
    }
};

let currentSelectedCarId = "thar-roxx";
let activeCustomerName = "";
let activeModelOfInterest = "";

// --- System Instruction Prompt for Mahindra Auto Consultant "Kabir" with Flow & Guardrails ---
const MAHINDRA_SYSTEM_INSTRUCTION = `You are Kabir, the expert AI Showroom Specialist and Virtual Consultant for Mahindra Auto India across all SUV and utility vehicle categories: Authentic 4x4 SUVs, Tech & Luxury SUVs, Born Electric, and Tough Commercial Utilities.

*** MALE GENDER & IDENTITY (STRICT REQUIREMENT) ***
- YOU MUST ALWAYS SPEAK AS A MALE. NEVER SPEAK OR REFER TO YOURSELF AS A FEMALE.
- YOUR NAME IS KABIR.
- IN HINDI, ALWAYS USE MASCULINE GRAMMATICAL ENDINGS AND VERBS:
  - Say: "नमस्ते! मैं कबीर हूँ, महिंद्रा ऑटो वर्चुअल शोरूम से। मैं आपकी पूरी मदद करूँगा।"
  - Use masculine verbs: "बताता हूँ", "दिखाता हूँ", "करूँगा", "समझता हूँ".
  - NEVER use feminine verb endings (e.g. NEVER say "करूँगी", "बताती हूँ", "दिखाती हूँ").
- IN ENGLISH OR OTHER LANGUAGES, ALWAYS MAINTAIN A CONFIDENT, ENTHUSIASTIC, PROFESSIONAL MALE SHOWROOM EXPERT PERSONA.

*** MANDATORY INITIAL CALL FLOW & LEAD CAPTURE ***
- The conversation MUST start with:
  1. Greet customer in Hindi warmly as Kabir.
  2. Ask for the Customer's Name.
  3. Ask which Mahindra SUV or model they are interested in exploring.
- Once the customer provides their name and car model (or if they give their name / model in their reply), you MUST IMMEDIATELY execute the tool:
  record_customer_lead(customer_name, model_of_interest)
  This auto-qualifies the customer inquiry in the CRM database.
- ALSO call switch_vehicle_showroom(car_name) to display the vehicle on stage.

*** GUARDRAIL 1: OFFERS & ON-ROAD PRICE RULES (STRICT REQUIREMENT) ***
1. CONSUMER / FESTIVE / EXCHANGE OFFERS:
   - If a customer asks about consumer offers, festive discounts, exchange bonuses, corporate schemes, or any other offer:
     Do NOT quote specific discount amounts. Politely inform the customer:
     "हमारे सभी स्पेशल ऑफर्स, एक्सचेंज बोनस और डिस्काउंट्स की विस्तृत जानकारी हमारी महिंद्रा अधिकृत सेल्स टीम आपके शोरूम विज़िट या बुकिंग के समय आपके साथ साझा करेगी।"
2. ON-ROAD PRICE:
   - If a customer asks for the ON-ROAD price of any car:
     Do NOT quote or calculate on-road price. Politely inform them:
     "ऑन-रोड कीमत में राज्य आरटीओ (RTO) टैक्स, इंश्योरेंस और स्थानीय रजिस्ट्रेशन शामिल होते हैं, इसलिए सटीक ऑन-रोड कीमत हमारी सेल्स टीम आपके साथ साझा करेगी।"
3. EX-SHOWROOM PRICE:
   - You CAN and SHOULD provide the official EX-SHOWROOM price range starting from the entry-level variant up to the top variant (e.g. "थार रॉक्स की एक्स-शोरूम कीमत 12.52 लाख रुपये से शुरू होकर टॉप वैरिएंट के लिए 23.52 लाख रुपये तक है।").

*** GUARDRAIL 2: COMPETITION COMPARISON DEFLECTION (STRICT REQUIREMENT) ***
- If a customer asks for a comparison with ANY competitor model or other brand (such as Tata Safari/Harrier/Nexon/Punch/Curvv, Hyundai Creta/Alcazar/Venue, Kia Seltos/Sonet/Carens, Toyota Fortuner/Innova/Hyryder, MG Hector, Maruti Brezza/Grand Vitara/Jimny, etc.):
  1. NEVER provide any specs, analysis, or numbers for the competitor model.
  2. NEVER say negative or derogatory comments about the competitor brand.
  3. INSTEAD, POLITELY DEFLECT and SUGGEST the relevant market-leading Mahindra SUV in that segment.
  - Segment Deflection Guide:
    * Asked about Creta / Seltos / Grand Vitara / Elevate -> Suggest Mahindra XUV 3XO and XUV700.
    * Asked about Safari / Harrier / Alcazar / Hector -> Suggest Mahindra XUV700 and Scorpio-N.
    * Asked about Fortuner / Gloster / Endeavour -> Suggest Mahindra Scorpio-N (Big Daddy) and Thar ROXX.
    * Asked about Innova / Carens / Ertiga -> Suggest Mahindra Scorpio-N, XUV700 (7-Seater), and Marazzo.
    * Asked about Jimny / Gurkha / Off-roaders -> Suggest Mahindra Thar (3-Door) and Thar ROXX 4x4.
    * Asked about Nexon EV / Curvv EV -> Suggest Mahindra XUV400 EV (Born Electric).
- NOTE: You ARE fully encouraged to compare two or more Mahindra SUVs with each other (e.g. Thar ROXX vs Scorpio-N vs XUV700).

*** GUARDRAIL 4: MODEL-RELATED INFORMATION STRUCTURED FLOW ***
When answering any car model query, present the details in this clear, structured order:
1. Available Fuel Types: Mention mStallion Turbo Petrol, mHawk Diesel, or 100% Pure EV.
2. Variant Range: Mention the variant lineup (e.g., MX1 to AX7L for Thar Roxx; Z2 to Z8L for Scorpio-N; MX to AX7L for XUV700).
3. Ex-Showroom Price Range: Quote starting entry-level price up to the top variant.
4. Key Features & Highlights: Mention safety (5-Star Bharat/Global NCAP), comfort (Panoramic Skyroof, Level 2 ADAS, Harman Kardon / Sony 3D Sound), and 4x4 capability (4XPLOR).

*** CALL CONCLUSION, THANKS & ENDING THE CALL (MANDATORY REQUIREMENT) ***
- When the customer indicates they do not have any more questions/queries, say they don't have anything else, or say thank you / bye / bas itna hi / no questions / nothing else / no:
  1. Speak a warm, polite thank you and heartfelt farewell in the customer's language:
     (In Hindi): "महिंद्रा ऑटो वर्चुअल शोरूम में पधारने के लिए आपका बहुत-बहुत धन्यवाद! हमारे नजदीकी डीलरशिप से हमारी टीम आपसे संपर्क करेगी। आपका दिन शुभ और मंगलमय हो!"
     (In other languages): deliver the corresponding warm thank you and farewell.
  2. IMMEDIATELY call the tool: end_call_session(reason) so the call concludes cleanly and ends.

*** ALL INDIAN LANGUAGES & MULTILINGUAL PROTOCOL (MANDATORY) ***
- YOU MUST SUPPORT AND SPEAK ALL INDIAN LANGUAGES WITH NATIVE FLUENCY:
  * Hindi (हिन्दी)
  * English & Hinglish
  * Tamil (தமிழ்)
  * Telugu (తెలుగు)
  * Kannada (ಕನ್ನಡ)
  * Malayalam (മലയാളം)
  * Marathi (मराठी)
  * Gujarati (ગુજરાતી)
  * Bengali (বাংলা)
  * Punjabi (ਪੰਜਾਬੀ)
  * Odia (ଓଡ଼ିଆ)
  * Urdu (اردو)
  * Assamese (অসমীয়া)
- If the customer speaks or asks in ANY Indian language, IMMEDIATELY respond in that EXACT SAME Indian language with native fluency, cultural politeness, and appropriate regional phrasing.
- If the customer asks in English or mixed Hinglish/Tanglish/etc., respond naturally in that same mixed style.
- State all vehicle prices, numbers, and specifications in the natural numbering system of that chosen language.

*** CONVERSATIONAL & LISTENING PROTOCOL ***
- ITS VERY IMPORTANT IN YOUR JOB TO LISTEN, PAUSE AND ANSWER. IF USER SPEAKS, STOP AND LISTEN.
- IF USER SPEAKS PLEASE DO NOT SPEAK. WAIT FOR USER TO FINISH.
- Keep spoken responses concise (2-3 sentences), warm, engaging, and clear.`;

// Media Managers
const liveAudioOutputManager = new LiveAudioOutputManager();
let liveVideoOutputManager = null;
let currentSessionTranscript = [];

// --- UI Initialization ---
window.addEventListener("load", () => {
    console.log("Mahindra Auto Virtual Showroom Loaded with Lead Capture & Guardrails");
    
    // Inject system instructions
    const systemInstructionsInput = document.getElementById("systemInstructions");
    if (systemInstructionsInput) {
        systemInstructionsInput.value = MAHINDRA_SYSTEM_INSTRUCTION;
    }

    renderLineupCarousel("all");
    switchCarBackground("thar-roxx");
    setupChannelPills();
    setAvailableCamerasOptions();
    setAvailableMicrophoneOptions();
    initSpeechRecognition();
    setAppStatus("disconnected");
    updateLeadsCountBadge();
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
            } else if (channel === "authentic") {
                filterLineupByChannel("AUTHENTIC");
            } else if (channel === "tech") {
                filterLineupByChannel("TECH");
            } else if (channel === "ev") {
                filterLineupByChannel("EV");
            } else if (channel === "utility") {
                filterLineupByChannel("UTILITY");
            }
        });
    });
}

// Render Interactive Vehicle Cards with Image Thumbnails
function renderLineupCarousel(filterCategory = "all") {
    const carousel = document.getElementById("lineup-carousel");
    if (!carousel) return;

    carousel.innerHTML = "";
    const vehicleEntries = Object.values(MAHINDRA_VEHICLES);

    vehicleEntries.forEach(vehicle => {
        if (filterCategory !== "all") {
            if (filterCategory === "4x4" && vehicle.category !== "4x4") {
                return;
            } else if (filterCategory === "luxury" && vehicle.category !== "luxury") {
                return;
            } else if (filterCategory === "compact" && vehicle.category !== "compact") {
                return;
            } else if (filterCategory === "ev" && vehicle.channel !== "EV" && vehicle.category !== "ev") {
                return;
            } else if (filterCategory === "utility" && vehicle.channel !== "UTILITY" && vehicle.channel !== "COMMERCIAL") {
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
                <span class="card-category-text">${vehicle.categoryLabel}</span>
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
    Object.values(MAHINDRA_VEHICLES).forEach(vehicle => {
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
                    <span class="card-category-text">${vehicle.categoryLabel}</span>
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
    const cleanId = String(carId).toLowerCase().trim().replace(/\s+/g, "-");
    let matchedId = null;

    if (MAHINDRA_VEHICLES[cleanId]) {
        matchedId = cleanId;
    } else {
        for (const [id, vehicle] of Object.entries(MAHINDRA_VEHICLES)) {
            if (id === cleanId || vehicle.name.toLowerCase() === cleanId || vehicle.keywords.some(kw => kw === cleanId || cleanId.includes(kw))) {
                matchedId = id;
                break;
            }
        }
    }

    if (!matchedId || !MAHINDRA_VEHICLES[matchedId]) return;

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
    const vehicle = MAHINDRA_VEHICLES[carId];
    if (!vehicle) return;

    const bgLayer = document.getElementById("backdrop-image");
    const bgLayerNext = document.getElementById("backdrop-image-next");

    if (bgLayer && bgLayerNext) {
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
    const fuelEl = document.getElementById("car-fuel");
    const variantsEl = document.getElementById("car-variants");
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
    if (priceEl) priceEl.textContent = vehicle.priceRange || vehicle.price;
    if (fuelEl) fuelEl.textContent = vehicle.fuelTypes || "Petrol & Diesel";
    if (variantsEl) variantsEl.textContent = vehicle.variantRange || "Multiple Variants";
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
        heroCarImg.alt = `Mahindra ${vehicle.name}`;
    }
    if (visualCaption) {
        visualCaption.textContent = `Official Visual - Mahindra ${vehicle.name}`;
    }
    if (visualChannelTag) {
        visualChannelTag.textContent = vehicle.channel;
    }
}

// Real-Time Vehicle Detection from Spoken Audio Transcript or Text
function detectCarInTranscript(text) {
    if (!text) return;
    const lower = text.toLowerCase();

    for (const [carId, vehicle] of Object.entries(MAHINDRA_VEHICLES)) {
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
    const vehicle = MAHINDRA_VEHICLES[currentSelectedCarId];
    if (vehicle) {
        askQuickPrompt(`Tell me about the Mahindra ${vehicle.name}, its fuel types, variant range, ex-showroom price, and key highlights.`);
    }
}

function bookTestDriveCurrentCar() {
    const vehicle = MAHINDRA_VEHICLES[currentSelectedCarId];
    if (vehicle) {
        askQuickPrompt(`I would like to schedule a test drive for the Mahindra ${vehicle.name}. My name is ${activeCustomerName || 'Customer'}.`);
    }
}

function toggleSettingsModal() {
    const modal = document.getElementById("settings-modal");
    if (modal) {
        modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "flex" : "none";
    }
}

// Detect if loaded via HTTP-only proxy.googlers.com
if (window.location.hostname.includes("proxy.googlers.com")) {
    console.warn("Detected proxy.googlers.com environment. Note: proxy.googlers.com does not support WebSocket upgrades. Please access via direct Cloudtop URL: http://ajiteshk.c.googlers.com:8081");
}

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
    if (message.includes("closed") || message.includes("ended") || message.includes("failed") || message.includes("error")) {
        setAppStatus("disconnected");
        stopAudioInput();
        const connectBtn = document.getElementById("connectBtn");
        const disconnectBtn = document.getElementById("disconnectBtn");
        if (connectBtn) connectBtn.style.display = "inline-flex";
        if (disconnectBtn) disconnectBtn.style.display = "none";
        const placeholder = document.getElementById("avatar-placeholder");
        if (placeholder) placeholder.classList.remove("hidden");

        if (window.location.hostname.includes("proxy.googlers.com")) {
            newSystemNotice("⚠️ Notice: The *.proxy.googlers.com web preview does not support WebSockets. Please open http://ajiteshk.c.googlers.com:8081 directly in your browser.");
        }
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
    return systemInstructionsInput ? systemInstructionsInput.value : MAHINDRA_SYSTEM_INSTRUCTION;
}

async function connectBtnClick() {
    setAppStatus("connecting");
    console.log("Connecting to Gemini Live API...");
    currentSessionTranscript = [];

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

        // Auto-create initial session record in Datastore
        saveLeadToBackend(activeCustomerName || "Valued Customer", currentSelectedCarId);
    };
}

function disconnectBtnClick() {
    // Finalize any active speaker buffers
    if (typeof finalizeUserStreamTurn === "function") finalizeUserStreamTurn();
    if (typeof finalizeModelStreamTurn === "function") finalizeModelStreamTurn();

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

    // Immediately flush final full transcript to database and refresh leads dashboard
    syncTranscriptImmediate();
    setTimeout(() => {
        updateLeadsCountBadge();
        const leadsModal = document.getElementById("leads-modal");
        if (leadsModal && leadsModal.style.display !== "none") {
            fetchAndRenderLeads();
        }
    }, 400);
}

let speakingTimeout = null;
let isAgentSpeaking = false;
let agentSpeakingTimeout = null;

function setAgentSpeaking(speaking) {
    if (speaking) {
        isAgentSpeaking = true;
        if (agentSpeakingTimeout) clearTimeout(agentSpeakingTimeout);
        if (currentInterimBubble) {
            currentInterimBubble.remove();
            currentInterimBubble = null;
        }
    } else {
        if (agentSpeakingTimeout) clearTimeout(agentSpeakingTimeout);
        agentSpeakingTimeout = setTimeout(() => {
            isAgentSpeaking = false;
        }, 1200);
    }
}

function triggerSpeakingGlow() {
    const previewContainer = document.getElementById("video-preview-container");
    if (!previewContainer) return;

    previewContainer.classList.add("active-speaking");
    setAppStatus("speaking");
    setAgentSpeaking(true);

    if (speakingTimeout) {
        clearTimeout(speakingTimeout);
    }

    speakingTimeout = setTimeout(() => {
        previewContainer.classList.remove("active-speaking");
        setAppStatus("connected");
        setAgentSpeaking(false);
    }, 1400);
}

let isFirstTurn = true;

let speechRecognizer = null;
let currentInterimBubble = null;
let currentSpeechLang = "hi-IN";

function setSpeechLanguage(lang) {
    currentSpeechLang = lang || "hi-IN";
    const langSelect = document.getElementById("active-indian-lang-select");
    if (langSelect && langSelect.value !== currentSpeechLang) {
        langSelect.value = currentSpeechLang;
    }

    const voiceLocaleSelect = document.getElementById("voiceLocale");
    if (voiceLocaleSelect) voiceLocaleSelect.value = currentSpeechLang;

    if (speechRecognizer) {
        try {
            speechRecognizer.abort();
        } catch (e) {}
        initSpeechRecognition();
        if (micBtn && !micBtn.hidden && !isAgentSpeaking) {
            try { speechRecognizer.start(); } catch (e) {}
        }
    }
    console.log("Speech recognition language set to:", currentSpeechLang);
}

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn("Web Speech Recognition not supported in this browser");
        return;
    }

    try {
        if (speechRecognizer) {
            try { speechRecognizer.abort(); } catch (e) {}
        }

        speechRecognizer = new SpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.maxAlternatives = 1;
        speechRecognizer.lang = currentSpeechLang || "hi-IN";

        speechRecognizer.onresult = (event) => {
            // Strictly reject any recognition if the avatar / speaker is active
            if (isAgentSpeaking) {
                console.log("Ignoring speech chunk during avatar audio playback (echo suppression)");
                if (currentInterimBubble) {
                    currentInterimBubble.remove();
                    currentInterimBubble = null;
                }
                return;
            }

            let interimText = "";
            let finalText = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                const item = event.results[i];
                if (item.isFinal) {
                    finalText += item[0].transcript + " ";
                } else {
                    interimText += item[0].transcript;
                }
            }

            const textChat = document.getElementById("text-chat");

            // Live interim speech indicator bubble
            if (interimText.trim() && !isAgentSpeaking) {
                if (!currentInterimBubble && textChat) {
                    currentInterimBubble = document.createElement("p");
                    currentInterimBubble.className = "user-bubble interim";
                    textChat.appendChild(currentInterimBubble);
                }
                if (currentInterimBubble) {
                    currentInterimBubble.textContent = "🎙️ " + interimText.trim() + "...";
                    textChat.scrollTop = textChat.scrollHeight;
                }
            }

            if (finalText.trim() && !isAgentSpeaking) {
                if (currentInterimBubble) {
                    currentInterimBubble.remove();
                    currentInterimBubble = null;
                }

                const speechStr = finalText.trim();
                console.log("Customer Final Speech Received:", speechStr);

                const lower = speechStr.toLowerCase();
                const isEcho = (lower.includes("कबीर हूं") || lower.includes("कबीर हूँ") || lower.includes("kabir")) && (lower.includes("महिंद्रा") || lower.includes("शोरूम"));
                if (!isEcho) {
                    newUserTranscriptMessage(speechStr);
                }
            }
        };

        speechRecognizer.onerror = (event) => {
            console.log("Speech recognition notice:", event.error);
            if (currentInterimBubble) {
                currentInterimBubble.remove();
                currentInterimBubble = null;
            }
            if (event.error === 'no-speech' || event.error === 'network') {
                if (micBtn && !micBtn.hidden) {
                    setTimeout(() => {
                        try { speechRecognizer.start(); } catch (e) {}
                    }, 400);
                }
            }
        };

        speechRecognizer.onend = () => {
            if (currentInterimBubble) {
                currentInterimBubble.remove();
                currentInterimBubble = null;
            }
            // Automatically restart if microphone and session are active and avatar is not speaking
            if (geminiLiveApi && geminiLiveApi.webSocket && geminiLiveApi.webSocket.readyState === WebSocket.OPEN && micBtn && !micBtn.hidden && !isAgentSpeaking) {
                try { speechRecognizer.start(); } catch (e) {}
            }
        };

        console.log("Speech recognition initialized for:", speechRecognizer.lang);
    } catch (e) {
        console.error("Speech recognition init error:", e);
    }
}

async function processCustomerDialogueTurn(messageText) {
    if (!messageText || !messageText.trim()) return;
    const cleanText = messageText.trim();

    detectCarInTranscript(cleanText);
    extractCustomerDetailsFromText(cleanText);

    // Generate Kabir's response turn via backend for exact transcript synchronization
    if (geminiLiveApi && geminiLiveApi.sessionId) {
        try {
            const resp = await fetch("/api/dialogue_turn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_id: geminiLiveApi.sessionId,
                    customer_message: cleanText,
                    customer_name: activeCustomerName || "Valued Customer",
                    model_of_interest: activeModelOfInterest || currentSelectedCarId,
                    channel: (MAHINDRA_VEHICLES[currentSelectedCarId] || {}).channel || "AUTHENTIC"
                })
            });
            const data = await resp.json();
            if (data && data.agent_response) {
                newModelMessage(data.agent_response);
            }
            if (data && data.is_call_ended) {
                newSystemNotice("📞 Consultation Concluded - Thank you for visiting Mahindra Auto");
                setTimeout(() => {
                    console.log("Auto-ending call session after conclusion response...");
                    disconnectBtnClick();
                }, 3500);
            }
        } catch (e) {
            console.warn("Failed to generate dialogue turn:", e);
        }
    }
}

// Extract customer name & car from spoken voice or text
function extractCustomerDetailsFromText(text) {
    if (!text) return;
    const namePatterns = [
        /(?:मेरा नाम|मैं|नाम है|name is|i am|this is|myself)\s+([a-zA-Z\u0900-\u097F]+)/i,
        /([a-zA-Z\u0900-\u097F]+)\s+(?:बात कर रहा हूँ|बात कर रहा हूं|बोल रहा हूँ|here)/i
    ];
    
    for (const pattern of namePatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            const potentialName = match[1].trim();
            const stopWords = ["mahindra", "kabir", "thar", "scorpio", "xuv", "bolero", "car", "gaadi", "gadi", "auto", "namaste", "hello", "hi", "sir", "bhai", "ji", "ek", "yeh", "woh", "the", "a", "an", "here"];
            if (potentialName.length >= 2 && !stopWords.includes(potentialName.toLowerCase())) {
                console.log("Auto-extracted customer name:", potentialName);
                activeCustomerName = potentialName;
                saveLeadToBackend(activeCustomerName, activeModelOfInterest || currentSelectedCarId);
                break;
            }
        }
    }
}

// Lead Submission Handler to Backend
async function saveLeadToBackend(customerName, modelOfInterest) {
    activeCustomerName = customerName || activeCustomerName || "Valued Customer";
    activeModelOfInterest = modelOfInterest || activeModelOfInterest || currentSelectedCarId;

    const vehicle = MAHINDRA_VEHICLES[activeModelOfInterest.toLowerCase().trim().replace(/\s+/g, "-")] || Object.values(MAHINDRA_VEHICLES).find(v => v.name.toLowerCase().includes(activeModelOfInterest.toLowerCase())) || MAHINDRA_VEHICLES[currentSelectedCarId];
    const channel = vehicle ? vehicle.channel : "AUTHENTIC";
    const carName = vehicle ? vehicle.name : activeModelOfInterest;

    const transcriptText = currentSessionTranscript.join("\n");
    const payload = {
        session_id: geminiLiveApi.sessionId,
        customer_name: activeCustomerName,
        model_of_interest: carName,
        channel: channel,
        transcript: transcriptText,
        status: "Auto-Qualified Inquiry"
    };

    try {
        console.log("Submitting lead to backend Datastore database:", payload);
        const resp = await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await resp.json();
        console.log("Lead database response:", data);
        updateLeadsCountBadge();
    } catch (e) {
        console.error("Failed to save lead to backend:", e);
    }
}

function getLiveTranscriptFromChat() {
    const textChat = document.getElementById("text-chat");
    if (!textChat) return currentSessionTranscript.join("\n");

    const lines = [];
    const bubbles = textChat.querySelectorAll("p.user-bubble:not(.interim), p.model-bubble");
    bubbles.forEach(b => {
        const text = b.textContent.trim();
        if (!text) return;
        if (b.classList.contains("user-bubble")) {
            lines.push(`Customer: ${text.replace(/^🎙️\s*/, "")}`);
        } else if (b.classList.contains("model-bubble")) {
            lines.push(`Kabir: ${text}`);
        }
    });

    if (lines.length > 0) {
        return lines.join("\n");
    }
    return currentSessionTranscript.join("\n");
}

let syncDebounceTimer = null;
function syncTranscriptToBackend() {
    if (!geminiLiveApi || !geminiLiveApi.sessionId) return;

    const fullTranscript = getLiveTranscriptFromChat();
    if (!fullTranscript || !fullTranscript.trim()) return;

    const modelKey = ((activeModelOfInterest || currentSelectedCarId || "thar-roxx") + "").toLowerCase().trim().replace(/\s+/g, "-");
    const vehicle = MAHINDRA_VEHICLES[modelKey] || MAHINDRA_VEHICLES[currentSelectedCarId] || MAHINDRA_VEHICLES["thar-roxx"];
    const channel = vehicle ? vehicle.channel : "AUTHENTIC";
    const carName = vehicle ? vehicle.name : (activeModelOfInterest || "Thar ROXX");

    if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
    syncDebounceTimer = setTimeout(async () => {
        try {
            await fetch("/api/leads/transcript", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_id: geminiLiveApi.sessionId,
                    transcript: fullTranscript,
                    customer_name: activeCustomerName || "Valued Customer",
                    model_of_interest: carName || "Thar ROXX",
                    channel: channel
                })
            });
            console.log("Synced live chat transcript to Datastore (" + fullTranscript.split("\n").length + " turns)");
        } catch (e) {
            console.warn("Failed to sync transcript:", e);
        }
    }, 200);
}

async function syncTranscriptImmediate() {
    if (!geminiLiveApi || !geminiLiveApi.sessionId) return;
    const fullTranscript = getLiveTranscriptFromChat();
    if (!fullTranscript || !fullTranscript.trim()) return;

    const modelKey = ((activeModelOfInterest || currentSelectedCarId || "thar-roxx") + "").toLowerCase().trim().replace(/\s+/g, "-");
    const vehicle = MAHINDRA_VEHICLES[modelKey] || MAHINDRA_VEHICLES[currentSelectedCarId] || MAHINDRA_VEHICLES["thar-roxx"];
    const channel = vehicle ? vehicle.channel : "AUTHENTIC";
    const carName = vehicle ? vehicle.name : (activeModelOfInterest || "Thar ROXX");

    try {
        await fetch("/api/leads/transcript", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_id: geminiLiveApi.sessionId,
                transcript: fullTranscript,
                customer_name: activeCustomerName || "Valued Customer",
                model_of_interest: carName || "Thar ROXX",
                channel: channel
            })
        });
        console.log("Immediate final transcript flush completed (" + fullTranscript.split("\n").length + " turns)");
    } catch (e) {
        console.warn("Failed to sync immediate transcript:", e);
    }
}

function newSystemNotice(text) {
    const textChat = document.getElementById("text-chat");
    if (!textChat) return;

    const p = document.createElement("p");
    p.className = "system-bubble";
    p.textContent = text;
    textChat.appendChild(p);
    textChat.scrollTop = textChat.scrollHeight;
}

geminiLiveApi.onReceiveResponse = (messageResponse) => {
    if (messageResponse.type === "SETUP COMPLETE") {
        console.log("Live Avatar Setup complete! Ready for voice/text.");
        setAppStatus("connected");
        startAudioInput();
        micBtn.hidden = false;
        micOffBtn.hidden = true;

        // Proactively greet customer in Hindi and ask for Name and Model of Interest
        if (isFirstTurn) {
            isFirstTurn = false;
            currentSessionTranscript = ["Kabir: Namaste! Main Kabir hoon, Mahindra Auto Virtual Showroom se. Aapka shubh naam kya hai aur aap kaun si Mahindra SUV dekhna chahte hain?"];
            syncTranscriptToBackend();
            setTimeout(() => {
                geminiLiveApi.sendTextMessage("Start the conversation now. Greet the customer warmly in Hindi as Kabir, male AI Showroom Specialist from Mahindra Auto Virtual Showroom. Politely ask for their Name and which Mahindra SUV model they would like to explore today.");
            }, 600);
        }
    } else if (messageResponse.type === "TOOL_CALL_RECORD_LEAD") {
        console.log("Gemini Live Tool Call: record_customer_lead ->", messageResponse.customerName, messageResponse.modelOfInterest);
        saveLeadToBackend(messageResponse.customerName, messageResponse.modelOfInterest);
        selectCar(messageResponse.modelOfInterest);
        newSystemNotice(`📋 Lead Auto-Qualified: ${messageResponse.customerName} (${messageResponse.modelOfInterest})`);

        // Acknowledge tool execution
        if (messageResponse.callId) {
            geminiLiveApi.sendMessage({
                tool_response: {
                    function_responses: [
                        {
                            response: { output: { success: true, lead_status: "Auto-Qualified in CRM Database", customer: messageResponse.customerName } },
                            id: messageResponse.callId,
                        },
                    ],
                },
            });
        }
    } else if (messageResponse.type === "TOOL_CALL_SWITCH_CAR") {
        console.log("Gemini Live Tool Call: switch_vehicle_showroom ->", messageResponse.carName);
        selectCar(messageResponse.carName);
        
        const carKey = messageResponse.carName.toLowerCase().trim().replace(/\s+/g, "-");
        const vehicle = MAHINDRA_VEHICLES[carKey] || Object.values(MAHINDRA_VEHICLES).find(v => v.name.toLowerCase().includes(messageResponse.carName.toLowerCase()));
        if (vehicle) {
            newSystemNotice(`🚗 Showroom Backdrop: Mahindra ${vehicle.name}`);
        }

        if (messageResponse.callId) {
            geminiLiveApi.sendMessage({
                tool_response: {
                    function_responses: [
                        {
                            response: { output: { success: true, active_vehicle: messageResponse.carName } },
                            id: messageResponse.callId,
                        },
                    ],
                },
            });
        }
    } else if (messageResponse.type === "TOOL_CALL_END_CALL") {
        console.log("Gemini Live Tool Call: end_call_session ->", messageResponse.reason);
        newSystemNotice("📞 Consultation Concluded - Thank you for visiting Mahindra Auto");

        if (messageResponse.callId) {
            geminiLiveApi.sendMessage({
                tool_response: {
                    function_responses: [
                        {
                            response: { output: { success: true, call_status: "Concluded" } },
                            id: messageResponse.callId,
                        },
                    ],
                },
            });
        }

        // Allow Kabir's spoken thanks to finish, then end the call session cleanly
        setTimeout(() => {
            console.log("Auto-ending call session on conclusion...");
            disconnectBtnClick();
        }, 3500);
    } else if (messageResponse.type === "AUDIO") {
        triggerSpeakingGlow();
        liveAudioOutputManager.playAudioChunk(messageResponse.data);
    } else if (messageResponse.type === "VIDEO") {
        triggerSpeakingGlow();
        if (liveVideoOutputManager) {
            liveVideoOutputManager.playVideoChunk(messageResponse.data);
        }
    } else if (messageResponse.type === "END_OF_TURN") {
        finalizeUserStreamTurn();
        finalizeModelStreamTurn();
        setAgentSpeaking(false);
    } else if (messageResponse.type === "TEXT") {
        newModelMessage(messageResponse.data);
        detectCarInTranscript(messageResponse.data);
    } else if (messageResponse.type === "OUTPUT_TRANSCRIPTION") {
        appendModelStreamText(messageResponse.data);
    } else if (messageResponse.type === "INPUT_TRANSCRIPTION") {
        appendUserStreamText(messageResponse.data);
    } else if (messageResponse.type === "INTERRUPT") {
        console.log("Consultant Interrupted - Listening to user");
        liveAudioOutputManager.interrupt();
        finalizeModelStreamTurn();
        setAgentSpeaking(false);
    }
};

let currentModelStreamBubble = null;
let currentModelStreamText = "";

let currentUserStreamBubble = null;
let currentUserStreamText = "";

function appendModelStreamText(chunk) {
    if (!chunk) return;
    const textChat = document.getElementById("text-chat");
    if (!textChat) return;

    if (currentUserStreamText.trim()) {
        finalizeUserStreamTurn();
    }

    if (!currentModelStreamBubble) {
        currentModelStreamBubble = document.createElement("p");
        currentModelStreamBubble.className = "model-bubble";
        textChat.appendChild(currentModelStreamBubble);
        currentModelStreamText = "";
    }

    currentModelStreamText += chunk;
    currentModelStreamBubble.textContent = currentModelStreamText;
    textChat.scrollTop = textChat.scrollHeight;
}

function finalizeModelStreamTurn() {
    if (currentModelStreamText.trim()) {
        const text = currentModelStreamText.trim();
        currentSessionTranscript.push("Kabir: " + text);
        detectCarInTranscript(text);
        syncTranscriptToBackend();
    }
    currentModelStreamBubble = null;
    currentModelStreamText = "";
}

function appendUserStreamText(chunk) {
    if (!chunk) return;
    const textChat = document.getElementById("text-chat");
    if (!textChat) return;

    if (currentModelStreamText.trim()) {
        finalizeModelStreamTurn();
    }

    if (!currentUserStreamBubble) {
        currentUserStreamBubble = document.createElement("p");
        currentUserStreamBubble.className = "user-bubble";
        textChat.appendChild(currentUserStreamBubble);
        currentUserStreamText = "";
    }

    currentUserStreamText += chunk;
    currentUserStreamBubble.textContent = currentUserStreamText;
    textChat.scrollTop = textChat.scrollHeight;
}

function finalizeUserStreamTurn() {
    if (currentUserStreamText.trim()) {
        const text = currentUserStreamText.trim();
        currentSessionTranscript.push("Customer: " + text);
        detectCarInTranscript(text);
        extractCustomerDetailsFromText(text);
        syncTranscriptToBackend();
    }
    currentUserStreamBubble = null;
    currentUserStreamText = "";
}

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

// --- Chat Messages Display & Transcript Sync ---
function newModelMessage(text) {
    const textChat = document.getElementById("text-chat");
    if (!textChat) return;

    const p = document.createElement("p");
    p.className = "model-bubble";
    p.textContent = text;
    textChat.appendChild(p);
    textChat.scrollTop = textChat.scrollHeight;

    currentSessionTranscript.push("Kabir: " + text);
    syncTranscriptToBackend();
}

function newUserMessage() {
    const input = document.getElementById("text-message");
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    input.value = "";

    const textChat = document.getElementById("text-chat");
    if (textChat) {
        const p = document.createElement("p");
        p.className = "user-bubble";
        p.textContent = text;
        textChat.appendChild(p);
        textChat.scrollTop = textChat.scrollHeight;
    }

    currentSessionTranscript.push("Customer: " + text);
    detectCarInTranscript(text);
    extractCustomerDetailsFromText(text);
    syncTranscriptToBackend();

    if (geminiLiveApi && geminiLiveApi.webSocket && geminiLiveApi.webSocket.readyState === WebSocket.OPEN) {
        geminiLiveApi.sendTextMessage(text);
    } else {
        processCustomerDialogueTurn(text);
    }
}

function newUserTranscriptMessage(text) {
    if (!text || !text.trim()) return;
    const cleanText = text.trim();

    const textChat = document.getElementById("text-chat");
    if (textChat) {
        const p = document.createElement("p");
        p.className = "user-bubble";
        p.textContent = cleanText;
        textChat.appendChild(p);
        textChat.scrollTop = textChat.scrollHeight;
    }

    currentSessionTranscript.push("Customer: " + cleanText);
    detectCarInTranscript(cleanText);
    extractCustomerDetailsFromText(cleanText);
    syncTranscriptToBackend();
}

// --- Leads & CRM Inquiries Modal & Data Fetching ---
function toggleLeadsModal() {
    const modal = document.getElementById("leads-modal");
    if (!modal) return;

    const isHidden = (modal.style.display === "none" || modal.style.display === "");
    modal.style.display = isHidden ? "flex" : "none";

    if (isHidden) {
        fetchAndRenderLeads();
    }
}

async function fetchAndRenderLeads() {
    const tbody = document.getElementById("leads-table-body");
    if (!tbody) return;

    tbody.innerHTML = `<tr><td colspan="6" class="leads-loading">Loading captured leads from database...</td></tr>`;

    try {
        const resp = await fetch("/api/leads");
        const data = await resp.json();
        const leads = data.leads || [];

        if (leads.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="leads-empty">No leads captured yet. Start a session with Kabir to auto-qualify customer inquiries.</td></tr>`;
            return;
        }

        tbody.innerHTML = "";
        leads.forEach(lead => {
            const tr = document.createElement("tr");
            const dateStr = lead.call_date ? new Date(lead.call_date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : "Just now";
            const channelBadge = lead.channel ? `<span class="leads-badge ${lead.channel.toLowerCase()}">${lead.channel}</span>` : `<span class="leads-badge authentic">AUTHENTIC</span>`;
            
            tr.innerHTML = `
                <td class="leads-time-cell">${dateStr}</td>
                <td class="leads-name-cell"><strong>${escapeHtml(lead.customer_name || 'Valued Customer')}</strong></td>
                <td class="leads-model-cell">${escapeHtml(lead.model_of_interest || 'Thar ROXX')}</td>
                <td>${channelBadge}</td>
                <td><span class="leads-status-pill">${escapeHtml(lead.status || 'Auto-Qualified')}</span></td>
                <td>
                    <button class="btn-view-transcript" onclick="viewLeadTranscript('${lead.session_id}')">
                        <span class="material-icons">chat</span> View
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        // Store leads in window cache for quick modal transcript viewing
        window.cachedLeads = leads;
        updateLeadsBadgeCountNumber(leads.length);
    } catch (e) {
        console.error("Failed to fetch leads from backend:", e);
        tbody.innerHTML = `<tr><td colspan="6" class="leads-error">Failed to load leads: ${e.message}</td></tr>`;
    }
}

async function updateLeadsCountBadge() {
    try {
        const resp = await fetch("/api/leads");
        const data = await resp.json();
        const leads = data.leads || [];
        updateLeadsBadgeCountNumber(leads.length);
    } catch (e) {
        console.warn("Failed to update leads count badge:", e);
    }
}

function updateLeadsBadgeCountNumber(count) {
    const badge = document.getElementById("leads-count-badge");
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? "inline-flex" : "none";
    }
}

function viewLeadTranscript(sessionId) {
    const viewer = document.getElementById("transcript-viewer");
    const body = document.getElementById("transcript-viewer-body");
    const title = document.getElementById("transcript-viewer-title");
    if (!viewer || !body) return;

    let lead = (window.cachedLeads || []).find(l => l.session_id === sessionId);
    if (!lead && geminiLiveApi && geminiLiveApi.sessionId === sessionId) {
        lead = {
            customer_name: activeCustomerName || "Valued Customer",
            model_of_interest: activeModelOfInterest || "Thar ROXX",
            transcript: currentSessionTranscript.join("\n")
        };
    }

    if (lead) {
        if (title) title.textContent = `Transcript: ${lead.customer_name} (${lead.model_of_interest})`;
        body.textContent = lead.transcript || "(No recorded dialogue turns yet)";
        viewer.style.display = "block";
        viewer.scrollIntoView({ behavior: 'smooth' });
    }
}

function closeTranscriptViewer() {
    const viewer = document.getElementById("transcript-viewer");
    if (viewer) viewer.style.display = "none";
}

function escapeHtml(text) {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// --- Audio & Media Streaming Engine ---
let mediaStream = null;
let audioContext = null;
let audioProcessor = null;
let audioInput = null;

async function startAudioInput() {
    try {
        console.log("Starting Audio Input Stream...");
        audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
        
        const constraints = {
            audio: {
                deviceId: micSelect.value ? { exact: micSelect.value } : undefined,
                channelCount: 1,
                sampleRate: 16000,
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }
        };

        mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        audioInput = audioContext.createMediaStreamSource(mediaStream);
        
        // Use ScriptProcessor for 16kHz PCM streaming
        const bufferSize = 2048;
        audioProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);

        audioProcessor.onaudioprocess = (e) => {
            if (!geminiLiveApi.webSocket || geminiLiveApi.webSocket.readyState !== WebSocket.OPEN) return;
            const inputData = e.inputBuffer.getChannelData(0);
            
            // Convert Float32 to 16-bit PCM Int16
            const pcm16 = new Int16Array(inputData.length);
            for (let i = 0; i < inputData.length; i++) {
                let s = Math.max(-1, Math.min(1, inputData[i]));
                pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            }

            // Convert to Base64
            const uint8 = new Uint8Array(pcm16.buffer);
            let binary = '';
            for (let i = 0; i < uint8.byteLength; i++) {
                binary += String.fromCharCode(uint8[i]);
            }
            const base64Audio = btoa(binary);

            geminiLiveApi.sendAudioChunk(base64Audio);
        };

        audioInput.connect(audioProcessor);
        audioProcessor.connect(audioContext.destination);
        console.log("Audio input recording and streaming active at 16kHz");
    } catch (e) {
        console.error("Failed to start audio input stream:", e);
    }
}

function stopAudioInput() {
    if (audioProcessor) {
        try { audioProcessor.disconnect(); } catch (e) {}
        audioProcessor = null;
    }
    if (audioInput) {
        try { audioInput.disconnect(); } catch (e) {}
        audioInput = null;
    }
    if (audioContext) {
        try { audioContext.close(); } catch (e) {}
        audioContext = null;
    }
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        mediaStream = null;
    }
    if (speechRecognizer) {
        try { speechRecognizer.stop(); } catch (e) {}
    }
}

function micBtnClick() {
    micBtn.hidden = true;
    micOffBtn.hidden = false;
    if (mediaStream) {
        mediaStream.getAudioTracks().forEach(track => track.enabled = false);
    }
}

function micOffBtnClick() {
    micBtn.hidden = false;
    micOffBtn.hidden = true;
    if (mediaStream) {
        mediaStream.getAudioTracks().forEach(track => track.enabled = true);
    }
}

async function setAvailableMicrophoneOptions() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioDevices = devices.filter(device => device.kind === "audioinput");
        if (micSelect) {
            micSelect.innerHTML = `<option value="">Default Microphone</option>`;
            audioDevices.forEach((device, i) => {
                const opt = document.createElement("option");
                opt.value = device.deviceId;
                opt.textContent = device.label || `Microphone ${i + 1}`;
                micSelect.appendChild(opt);
            });
        }
    } catch (e) {
        console.warn("Could not enumerate audio devices:", e);
    }
}

async function setAvailableCamerasOptions() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === "videoinput");
        if (cameraSelect) {
            cameraSelect.innerHTML = `<option value="">Default Camera</option>`;
            videoDevices.forEach((device, i) => {
                const opt = document.createElement("option");
                opt.value = device.deviceId;
                opt.textContent = device.label || `Camera ${i + 1}`;
                cameraSelect.appendChild(opt);
            });
        }
    } catch (e) {
        console.warn("Could not enumerate video devices:", e);
    }
}

function newMicSelected() {
    if (mediaStream) {
        stopAudioInput();
        startAudioInput();
    }
}

function newCameraSelected() {
    console.log("Camera selected:", cameraSelect.value);
}

function cameraBtnClick() {
    cameraBtn.hidden = true;
    cameraOffBtn.hidden = false;
    const pip = document.getElementById("camera-pip");
    if (pip) pip.style.display = "none";
}

function cameraOffBtnClick() {
    cameraBtn.hidden = false;
    cameraOffBtn.hidden = true;
    const pip = document.getElementById("camera-pip");
    if (pip) pip.style.display = "flex";
}

function screenShareBtnClick() {
    console.log("Screen share requested");
}
