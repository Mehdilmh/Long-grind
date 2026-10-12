import type { Category } from "@/lib/schema";

export const categories: Category[] = [
  {
    slug: "desk-workspace",
    name: "Desk & Workspace",
    shortName: "Desk & Workspace",
    seoTitle: "Desk & Workspace Guides: Monitors, Arms and Desk Layout",
    description:
      "Practical guides to desks, monitor arms, stands and workspace layout for home offices, small rooms and shared spaces, focused on comfort and usable surface area.",
    kicker: "Section 01",
    intro: [
      "A desk setup is mostly a geometry problem: where your eyes land, where your hands rest, and how much surface is left once everything is in place. Most upgrades that genuinely help solve one of those three things.",
      "This section covers the furniture and mounting hardware that shapes a workspace: desks, monitor arms and stands, risers and the layout decisions behind them. We explain the trade-offs in plain terms and point to the published guidance and manufacturer documentation behind our claims.",
    ],
    illustration: "desk",
    subtopics: [
      { name: "Monitor mounting", description: "Arms, stands, risers and VESA compatibility.", tag: "monitor-setup" },
      { name: "Small spaces", description: "Making a compact desk or corner work harder.", tag: "small-desk" },
      { name: "Comfort & ergonomics", description: "Screen height, distance and reach.", tag: "ergonomics" },
      { name: "Dual monitors", description: "Planning width, angles and mounting for two screens.", tag: "dual-monitor" },
    ],
    primer: {
      title: "Before you buy anything for your desk",
      points: [
        { title: "Measure the real surface", text: "Note desk width, depth and thickness, and whether the back edge is free for a clamp. Many mounting decisions come down to these four numbers." },
        { title: "Fix screen position first", text: "Getting the monitor to a comfortable height and distance tends to change what else you need, so solve it before buying accessories." },
        { title: "Count what lives on the desk", text: "List the items you use every day. Anything you use weekly or less is a candidate for a drawer, shelf or wall." },
      ],
    },
    comingUp: ["Desk setup ideas for small rooms", "Practical accessories for a standing desk", "Monitor risers and desk space organization"],
  },
  {
    slug: "keyboards-peripherals",
    name: "Keyboards & Peripherals",
    shortName: "Keyboards",
    seoTitle: "Keyboard & Peripheral Guides: Sizes, Layouts and Mice",
    description:
      "Clear explanations of keyboard sizes, layouts and peripherals, with guidance on choosing a keyboard and mouse that fit your desk, your hands and the way you work.",
    kicker: "Section 02",
    intro: [
      "The keyboard and mouse are the parts of a setup you touch thousands of times a day, so small differences in size and layout add up. A board that is too wide pushes your mouse hand outward; a board that is too small can hide keys you rely on.",
      "We focus on the decisions that matter before brand or switch preferences: form factor, layout, connectivity and how a peripheral fits the space you actually have.",
    ],
    illustration: "keyboard",
    subtopics: [
      { name: "Keyboard sizes", description: "Full-size, TKL, 75%, 65% and 60% explained.", tag: "keyboards" },
      { name: "Mechanical keyboards", description: "What changes when you go mechanical.", tag: "mechanical-keyboards" },
      { name: "Compact desks", description: "Peripherals that suit tight spaces.", tag: "small-desk" },
      { name: "For programmers", description: "Layouts and keys developers rely on.", tag: "programmers" },
    ],
    primer: {
      title: "Three questions to answer before choosing a keyboard",
      points: [
        { title: "Do you use a number pad?", text: "If you enter numbers daily, a full-size board or a separate numpad is worth the width. If not, a smaller layout frees space for your mouse." },
        { title: "Which keys do you press without looking?", text: "Arrow keys, Function keys, Home/End and Delete disappear on the smallest layouts. Check that the keys you rely on survive." },
        { title: "How many devices do you switch between?", text: "Multi-device Bluetooth pairing is useful if one keyboard serves a laptop, a desktop and a tablet." },
      ],
    },
    comingUp: ["Best keyboard for a compact desk setup", "Keyboard and mouse combinations for different work styles"],
  },
  {
    slug: "lighting-organization",
    name: "Lighting & Organization",
    shortName: "Lighting & Organization",
    seoTitle: "Desk Lighting, Cable Management & Organization Guides",
    description:
      "Step-by-step guides to cable management, desk organization and workspace lighting, written to help you build a cleaner, safer and easier-to-maintain setup.",
    kicker: "Section 03",
    intro: [
      "Clutter and cable mess are usually symptoms of a setup that grew one device at a time. Fixing them is less about buying organizers and more about deciding where power, cables and everyday items should live.",
      "Our organization guides start with planning and safety, then suggest the simplest hardware that does the job. Lighting coverage focuses on reducing glare and making a desk comfortable to use after dark.",
    ],
    illustration: "cables",
    subtopics: [
      { name: "Cable management", description: "Routing, trays, ties and power placement.", tag: "cable-management" },
      { name: "Desk organization", description: "Reducing clutter without hiding what you need.", tag: "desk-organization" },
      { name: "Desk lighting", description: "Task lamps, monitor lights and glare.", tag: "lighting" },
      { name: "Budget fixes", description: "Low-cost improvements that make a visible difference.", tag: "budget" },
    ],
    primer: {
      title: "Principles we use for every organization project",
      points: [
        { title: "Power first", text: "Decide where the power strip lives before routing a single cable. Everything else follows from that point." },
        { title: "Leave service slack", text: "Cables need a little spare length so devices can move, and so a sit-stand desk can rise without pulling plugs." },
        { title: "Make it reversible", text: "Prefer hook-and-loop ties and removable mounts so changing a device later doesn't mean cutting and re-doing everything." },
      ],
    },
    comingUp: ["Best desk lighting for a home office", "How to reduce desk clutter", "How to build a clean desk setup on a budget"],
  },
  {
    slug: "productivity-gear",
    name: "Productivity Gear",
    shortName: "Productivity",
    seoTitle: "Productivity Gear Guides for Home Offices and Students",
    description:
      "Guides to productivity accessories for remote workers, students and programmers, focused on specific workspace problems rather than gadgets for their own sake.",
    kicker: "Section 04",
    intro: [
      "A useful productivity accessory removes a specific source of friction: a laptop screen that sits too low, a mouse hand that runs out of room, a desk with nowhere to put the notebook you use every day.",
      "In this section we start from the problem, explain the options, and only then talk about products. If the honest answer is that you don't need to buy anything, we'll say so.",
    ],
    illustration: "productivity",
    subtopics: [
      { name: "Home office", description: "Setups for full-time remote work.", tag: "home-office" },
      { name: "Students", description: "Compact, budget-aware workspace ideas.", tag: "students" },
      { name: "Programmers", description: "Accessories for long coding sessions.", tag: "programmers" },
      { name: "Ergonomics", description: "Comfort-focused changes backed by published guidance.", tag: "ergonomics" },
    ],
    primer: {
      title: "How to tell a useful accessory from a gadget",
      points: [
        { title: "Name the problem", text: "Write down the friction in one sentence. If you can't, the accessory probably won't help." },
        { title: "Check what you already own", text: "A stack of books can test a laptop height before you buy a stand. A free test is a good test." },
        { title: "Count the daily uses", text: "Accessories you touch every day earn their place on the desk. Occasional tools belong in a drawer." },
      ],
    },
    comingUp: ["Best accessories for programmers", "Desk accessories for students", "Productivity accessories that solve specific workspace problems"],
  },
  {
    slug: "gaming-setups",
    name: "Gaming Setups",
    shortName: "Gaming",
    seoTitle: "Gaming Setup Guides: Desk Upgrades, Peripherals and Layout",
    description:
      "Guides for gamers who care about how their workspace looks and works, from compact keyboards and mouse space to cable management and budget desk upgrades.",
    kicker: "Section 05",
    intro: [
      "A good gaming desk is also a good working desk: the screen at a comfortable height, enough room for wide mouse movements and cables that stay out of the way. The difference is usually in priorities, not principles.",
      "We cover the parts of a gaming setup that affect space and comfort. For performance claims we rely on manufacturer specifications and say clearly when something hasn't been independently measured.",
    ],
    illustration: "gaming",
    subtopics: [
      { name: "Mouse space", description: "Why compact keyboards are popular with gamers.", tag: "keyboards" },
      { name: "Clean setups", description: "Cable routing for consoles, PCs and lighting.", tag: "cable-management" },
      { name: "Budget upgrades", description: "Improvements that don't require a new desk.", tag: "budget" },
      { name: "Screens", description: "Mounting and positioning gaming monitors.", tag: "monitor-setup" },
    ],
    primer: {
      title: "Where gaming setups usually run out of room",
      points: [
        { title: "Mouse travel", text: "Low-sensitivity players need horizontal space. Keyboard width directly reduces how much is left." },
        { title: "Extra devices", text: "Consoles, capture cards, controllers and headsets add cables quickly. Plan routing before adding RGB lighting." },
        { title: "Screen distance", text: "Large monitors on shallow desks can end up too close. Measure desk depth before buying a bigger screen." },
      ],
    },
    comingUp: ["Budget-friendly gaming desk upgrades", "Headset versus speakers for a desk setup"],
  },
  {
    slug: "creator-equipment",
    name: "Creator Equipment",
    shortName: "Creators",
    seoTitle: "Creator & Streaming Setup Guides for Small Spaces",
    description:
      "Guides for streamers and content creators building a setup at a desk: microphones, cameras, lighting, mounting and cable management in limited space.",
    kicker: "Section 06",
    intro: [
      "Creator setups add equipment fast: a microphone arm, a camera, a key light, maybe a second screen for chat. Each one competes for desk edge, power and cable routes.",
      "This section focuses on fitting creator equipment into a normal desk without turning it into a tangle, and on helping beginners understand what each piece actually does before they spend money.",
    ],
    illustration: "creator",
    subtopics: [
      { name: "Streaming basics", description: "What a beginner setup actually needs.", tag: "streaming" },
      { name: "Mounting", description: "Arms and clamps that free up desk space.", tag: "monitor-setup" },
      { name: "Cables & power", description: "Managing extra devices safely.", tag: "cable-management" },
      { name: "Lighting", description: "Lighting yourself and your desk.", tag: "lighting" },
    ],
    primer: {
      title: "Plan a creator desk in this order",
      points: [
        { title: "Audio before video", text: "In our view, clear audio matters more than a sharp image for most beginners, so microphone placement is the first decision we plan around." },
        { title: "Mount, don't stack", text: "Arms and clamps on the desk edge keep the work surface clear and make positioning repeatable." },
        { title: "Budget for power", text: "Lights, cameras and interfaces need outlets. Plan a single, properly rated power strip rather than chaining several." },
      ],
    },
    comingUp: ["Essential equipment for a beginner streaming setup"],
  },
  {
    slug: "buying-guides",
    name: "Buying Guides & Comparisons",
    shortName: "Guides",
    seoTitle: "Buying Guides & Comparisons for Desk Setups",
    description:
      "Every LongGrind buying guide and head-to-head comparison in one place, with clear trade-offs, transparent methods and no invented scores or prices.",
    kicker: "Section 07",
    intro: [
      "Buying guides and comparisons are where we make recommendations, so they're also where we're most careful. Each one explains who a product type suits, who should choose something else, and what evidence the advice is based on.",
      "We don't publish star ratings, invented scores or prices that change by the hour. Instead you'll find the criteria that actually separate the options, and links to the sources we checked.",
    ],
    illustration: "guides",
    subtopics: [
      { name: "Comparisons", description: "Two approaches, side by side.", tag: "monitor-setup" },
      { name: "Keyboards", description: "Choosing a size and layout.", tag: "keyboards" },
      { name: "Organization", description: "Cable and clutter projects.", tag: "cable-management" },
      { name: "Budget", description: "Spending carefully.", tag: "budget" },
    ],
    primer: {
      title: "How to read a LongGrind buying guide",
      points: [
        { title: "Facts are sourced", text: "Specifications come from manufacturer documentation and link to the source with the date we checked it." },
        { title: "Opinions are labeled", text: "\"Best for\" and \"Consider instead if\" are editorial judgments, kept separate from the specification tables." },
        { title: "Method is stated", text: "Every guide says whether it is a research-based overview or based on hands-on use." },
      ],
    },
    comingUp: ["Practical gifts for people who work from home", "How to choose accessories for a dual-monitor workspace"],
  },
];

/** Article types that are also surfaced on the Buying Guides & Comparisons hub. */
export const buyingGuideTypes = ["best-of", "comparison", "roundup", "budget-guide", "gift-guide", "review"] as const;
