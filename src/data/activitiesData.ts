export interface ActivityItem {
  id: string;
  title: string;
  category: "Mountaineering" | "Canyoneering" | "Rescue" | "Marine" | "Arborist" | "Tactical";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert Only";
  recommendedGauge: string;
  recommendedType: string;
  safetyFactor: string;
  description: string;
  keyTechniques: string[];
  essentialGear: string[];
  image: string;
  badge: string;
}

export const activitiesData: ActivityItem[] = [
  {
    id: "rock-climbing-lead",
    title: "Sport & Trad Lead Rock Climbing",
    category: "Mountaineering",
    difficulty: "Intermediate",
    recommendedGauge: "9.5 mm - 9.8 mm",
    recommendedType: "Dynamic Single Rope (EN 892)",
    safetyFactor: "UIAA Impact Force < 8.9 kN",
    description: "Ascending vertical granite and limestone faces with lead belay systems. Requires high-elasticity dynamic ropes that absorb severe leader fall kinetic energy while maintaining supple clip control.",
    keyTechniques: ["Dynamic Belay Mechanics", "Lead Clipping Geometry", "Fall Force Dissipation", "Anchor Equalization"],
    essentialGear: ["9.8mm Dynamic Rope", "Assisted-Braking Belay Device", "Quickdraws", "Climbing Harness", "Climbing Helmet"],
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80",
    badge: "Most Popular",
  },
  {
    id: "alpine-expedition",
    title: "Alpine Mountaineering & Glacier Traverse",
    category: "Mountaineering",
    difficulty: "Advanced",
    recommendedGauge: "9.0 mm - 10.2 mm",
    recommendedType: "Dry-Treated Static & Half Ropes",
    safetyFactor: "8:1 Static / Dual Redundant System",
    description: "High-altitude ascents across frozen seracs, glaciers, and mixed rock/ice gullies. Hydrophobic treatments prevent rope freezing, weight accumulation, and internal fiber abrasion in sub-zero temp.",
    keyTechniques: ["Crevasse Self-Rescue Pulleys", "Running Belays on Snow Ridges", "Ice Screw Anchors", "Short-Roping Guides"],
    essentialGear: ["10.2mm Static Nylon Adventure Rope", "Crampons", "Technical Ice Axes", "Deadman Snow Pickets", "Prusik Cords"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    badge: "Extreme Cold",
  },
  {
    id: "canyoneering-abseiling",
    title: "Technical Canyoneering & Waterfall Rappelling",
    category: "Canyoneering",
    difficulty: "Advanced",
    recommendedGauge: "9.0 mm - 10.0 mm",
    recommendedType: "HydroShield Static Floating Rope",
    safetyFactor: "High Abrasion Resistance Over Sharp Sandstone",
    description: "Descending slot canyons and surging waterfalls. Uses specialized buoyant static ropes that shed water rapidly, resist hydraulic entrapment, and withstand harsh rock abrasion in wet gritty slurry.",
    keyTechniques: ["Contingency Rigging (FiddleStick / Joker)", "Waterfall Rope Retrievability", "Friction Variable Descents", "Swiftwater Egress"],
    essentialGear: ["9.0mm HydroShield Floating Rope", "Canyon Figure 8 / Critr", "Waterproof Pack", "Anchor Webbing", "Neoprene Wetsuit"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    badge: "Hydrophobic",
  },
  {
    id: "search-and-rescue",
    title: "High-Angle Search & Rescue (SAR) Extraction",
    category: "Rescue",
    difficulty: "Expert Only",
    recommendedGauge: "10.2 mm - 11.5 mm",
    recommendedType: "NFPA Certified Low-Stretch Static Kernmantle",
    safetyFactor: "10:1 Minimum Working Load Factor (30+ kN)",
    description: "Critical patient evacuation and vertical stretcher raising across sheer cliffs, industrial towers, and gorges. Demands zero-bounce static ropes with maximum tensile stability and redundant anchor setups.",
    keyTechniques: ["3:1 & 5:1 Mechanical Advantage Pulleys", "High-Line Tyrolean Traverse", "Two-Tensioned Rope Systems (TTRS)", "Edge Roller Protection"],
    essentialGear: ["10.2mm Static Adventure Rope", "Titanium Litter Stretcher", "Heavy Haul Pulleys", "Clutch / MPD Descenders", "Tripod Gin-Pole"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    badge: "Life Safety",
  },
  {
    id: "marine-rigging-sailing",
    title: "Offshore Blue-Water Sailing & Running Rigging",
    category: "Marine",
    difficulty: "Intermediate",
    recommendedGauge: "10.0 mm - 12.0 mm",
    recommendedType: "Pre-Stretched Double Braid Polyester / Dyneema",
    safetyFactor: "5:1 Safe Working Ratio",
    description: "Navigating high-seas winds and heavy ocean swells. Requires high-strength, UV-stable lines with near-zero stretch that run smoothly through deck winches, clutches, and masthead sheaves.",
    keyTechniques: ["Eye Splicing & Whipping", "Halyard Clutch Tensioning", "Boom Vang Rigging", "Heavy Mooring Bridles"],
    essentialGear: ["12.0mm OceanGrip Double Braid", "Self-Tailing Winches", "Rope Clutches", "Rigging Knife", "Splicing Fid Kit"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    badge: "Saltwater Proof",
  },
  {
    id: "arborist-canopy-care",
    title: "Tree Canopy Ascents & Heavy Timber Rigging",
    category: "Arborist",
    difficulty: "Advanced",
    recommendedGauge: "11.8 mm - 14.0 mm",
    recommendedType: "16-Strand / 24-Strand Braided Rigging Line",
    safetyFactor: "7:1 Safety Factor for Dynamic Wood Loads",
    description: "Precision tree trimming and heavy branch lowering over residential structures. Thick gauge bull ropes absorb massive shock-loading when cut timber logs swing into the drop zone.",
    keyTechniques: ["Stationary Rope Technique (SRT)", "Port-a-Wrap Friction Braking", "Speedline Chippers", "False Crotch Rigging Blocks"],
    essentialGear: ["14.0mm ArborTitan Bull Rope", "Tree Climbing Saddle", "Throwline & Weight Bag", "Rigging Blocks & Slings", "Friction Saver"],
    image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1200&q=80",
    badge: "Heavy Duty",
  },
  {
    id: "caving-speleology",
    title: "Deep Cave Exploration & Single Rope Technique (SRT)",
    category: "Mountaineering",
    difficulty: "Expert Only",
    recommendedGauge: "9.0 mm - 10.2 mm",
    recommendedType: "Semi-Static / Low-Elongation Polyamide",
    safetyFactor: "10:1 Redundant Bolt Hanger Anchor",
    description: "Descending hundreds of meters into pitch-black vertical cave pits and underground river chambers. Mud, sharp calcite crystals, and perpetual moisture test rope sheath longevity to its limits.",
    keyTechniques: ["Single Rope Technique (SRT)", "Frog System Pitch Ascents", "Rebelays & Deviation Anchors", "Mud Jammer Maintenance"],
    essentialGear: ["10.2mm Static Nylon Adventure Rope", "Chest Croll & Hand Ascender", "Stop Descender", "Cave Harness & Cowstails", "Waterproof Headlamp"],
    image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80",
    badge: "Underground SRT",
  },
  {
    id: "tactical-rope-insertion",
    title: "Tactical Fast Roping & Helo Extraction",
    category: "Tactical",
    difficulty: "Expert Only",
    recommendedGauge: "11.5 mm - 13.0 mm",
    recommendedType: "Aramid / Technora Heat-Resistant Line",
    safetyFactor: "Friction Heat Withstand > 400°C",
    description: "Rapid deployment of tactical personnel from hovering aircraft or high structures. Heavy glove friction generates intense thermal heat that would melt normal nylon ropes instantly.",
    keyTechniques: ["Helicopter Skid Step-Off", "Heavy-Glove Hand Braking", "Rapid Stack Deployment", "Immediate Rope Jettison"],
    essentialGear: ["11.5mm TechRescue Kevlar Rope", "Heavy Leather Fast-Rope Gloves", "Tactical Body Harness", "Grommet Anchor Eye"],
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80",
    badge: "Mil-Grade",
  },
];
