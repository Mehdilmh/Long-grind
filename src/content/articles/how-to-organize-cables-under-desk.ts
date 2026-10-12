import type { ArticleInput } from "@/lib/schema";

const article: ArticleInput = {
  slug: "how-to-organize-cables-under-desk",
  title: "How to Organize Cables Under a Desk: A Step-by-Step Plan That Stays Tidy",
  seoTitle: "How to Organize Cables Under a Desk (Step-by-Step)",
  description:
    "A safety-first plan for organizing cables under any desk: where to put the power strip, how to route and bundle cables, plus renter and standing-desk options.",
  dek: "Start with power, route in one direction, leave slack. A plan for a cable setup that still works the next time you add a device.",
  type: "how-to",
  category: "lighting-organization",
  tags: ["cable-management", "desk-organization", "safety", "standing-desk", "budget"],
  status: "published",
  authorId: "longgrind-editors",
  publishedAt: "2026-10-12",
  method: "research-based",
  hero: {
    illustration: "cables",
    alt: "Illustration of a desk seen from below with a cable tray, a mounted power strip and a single bundle of cables running down one leg.",
  },
  answer:
    "To organize cables under a desk, decide where power will live first: mount one properly rated power strip under the back of the desk, then run every power cable to it along the shortest path, using a tray or basket to carry the strip and excess length. Route data cables separately, bundle runs with reusable hook-and-loop ties, send everything to the floor through a single drop point, and leave enough slack for devices and sit-stand desks to move. Don't plug one power strip into another or bury cords under rugs.",
  keyTakeaways: [
    "Power placement decides everything else. Fix the power strip's position before routing a single cable.",
    "One under-desk tray or basket plus hook-and-loop ties handles most setups; adhesive clips and raceways fill the gaps.",
    "Plug the power strip directly into a wall outlet. University safety offices, citing UL listing rules and OSHA, say strips shouldn't be chained together or fed from extension cords.",
    "Leave service slack at every device and at the desk-to-floor drop, especially on a standing desk.",
    "Use removable fasteners where possible so the next upgrade is a five-minute job, not a rebuild.",
  ],
  body: [
    { type: "h2", id: "what-you-need", text: "What you'll need (and what you can skip)" },
    {
      type: "p",
      text: "Cable management products are cheap and plentiful, which makes it easy to buy far more than a desk needs. Most setups are covered by three things: somewhere to hold the power strip and spare cable, something to bundle runs together, and a way to get cables from the desk to the floor neatly. Everything else is optional.",
    },
    {
      type: "table",
      caption: "Common under-desk cable management hardware and when it's worth using",
      columns: ["Item", "What it does", "Worth it when", "Skip it if"],
      rows: [
        ["Under-desk cable tray or basket", "Holds the power strip, power bricks and excess cable off the floor", "You have more than three or four powered devices", "Your desk has a built-in cable channel"],
        ["Hook-and-loop (Velcro-style) ties", "Bundle cables in a way you can undo", "Almost always; they're the default fastener", "—"],
        ["Adhesive cable clips", "Guide single cables along the underside or back edge", "You can't drill, or only need to guide one or two cables", "The surface is dusty, textured or very cold; adhesive fails"],
        ["Cable spine or sleeve", "Carries the bundle from desk to floor in one neat run", "Your outlet is away from the desk leg, or on standing desks", "The outlet is right behind the desk and the drop is hidden"],
        ["Raceway / J-channel", "A rigid channel that hides several cables along a path", "Long runs along the back edge or a wall", "A tray already covers the route"],
        ["Zip ties", "Permanent bundling", "Runs you will genuinely never change", "Anything near devices you might upgrade"],
      ],
      note: "We don't list prices because they change frequently. Check the current listing before buying.",
    },
    {
      type: "figure",
      illustration: "cables",
      alt: "Diagram of an under-desk layout: a tray along the back edge holds a power strip, with cables running from it in one direction to a single drop point at the desk leg.",
      caption: "The layout this guide builds toward: one power hub at the back, short runs to each device, one drop to the floor.",
    },

    { type: "h2", id: "step-1-audit", text: "Step 1: Unplug everything and take an inventory" },
    {
      type: "p",
      text: "It's tempting to tidy cables in place, but untangling a live setup usually just relocates the mess. Shut devices down, unplug everything and lay the cables out on the floor. Then sort them into two piles.",
    },
    {
      type: "ul",
      items: [
        "**Power cables**: anything that ends at an outlet, including power bricks and chargers.",
        "**Data and signal cables**: display cables, USB, Ethernet, audio and anything that runs between two devices.",
      ],
    },
    {
      type: "p",
      text: "While they're out, label both ends of anything that's hard to identify. A strip of masking tape and a pen is enough. Discard cables you no longer use; an unused cable is the easiest one to manage.",
    },

    { type: "h2", id: "step-2-power", text: "Step 2: Decide where power lives" },
    {
      type: "p",
      text: "Every powered device on your desk needs a route to an outlet, so the power strip is the hub the rest of the layout is built around. For most desks the best location is under the back edge, roughly in line with where most of your devices sit. That keeps power cable runs short and keeps the strip off the floor, where it collects dust and gets kicked.",
    },
    {
      type: "p",
      text: "Choose one strip with enough outlets for everything that sits on the desk, and plug it directly into a wall outlet. If you're short of outlets, the safer fix is a single strip with more outlets or moving the desk closer to the wall outlet, not adding a second strip.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Don't daisy-chain power strips",
      text: "University safety offices such as Harvard's Environmental Health and Safety explain that plugging one power strip into another, or into an extension cord, conflicts with the strips' UL listing and with OSHA's requirement that listed equipment be used according to its instructions. They also advise against covering cords or running them under rugs. Look for a strip listed by a Nationally Recognized Testing Laboratory, and keep it where it can't be crushed or covered.",
    },

    { type: "h2", id: "step-3-mount", text: "Step 3: Mount the tray or basket" },
    {
      type: "p",
      text: "Hold the tray against the underside of the desk before you fix anything, and check three things: that it clears your knees when you sit, that it doesn't foul drawers or a keyboard tray, and that on a standing desk it doesn't interfere with the frame's cross-bar or motor.",
    },
    {
      type: "p",
      text: "Screw-mounted trays are the most secure on wood or particleboard desks. Clamp-on trays avoid drilling but need a clear back edge. Adhesive mounts are the least reliable for a loaded tray; we'd reserve them for very light duty. If your desk is glass or metal, a clamp-on or freestanding solution is usually the only option.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Check screw length before you drill",
      text: "Desk tops vary in thickness. Measure yours and choose screws comfortably shorter than the thickness so they can't break through the top surface.",
    },

    { type: "h2", id: "step-4-route", text: "Step 4: Route power cables first, data cables second" },
    {
      type: "p",
      text: "Put the power strip and any power bricks in the tray, then connect each device's power cable, coiling the excess loosely in the tray. Power cables are the bulkiest, so placing them first stops the tray filling up before you've finished.",
    },
    {
      type: "p",
      text: "Once power is done, run data cables. Keep them along a parallel path where you can, which makes it easier to trace a single cable later. Gather runs heading the same way and fasten them every 20 to 30 cm with hook-and-loop ties or adhesive clips along the underside.",
    },
    {
      type: "steps",
      items: [
        { title: "Work from the hub outward", text: "Start at the power strip and finish at the device. That way excess length ends up in the tray, not dangling under the desk." },
        { title: "Coil, don't knot", text: "Loop excess cable loosely and secure the loop with a tie. Tight bends and knots stress cables and make them harder to remove." },
        { title: "Group by destination", text: "Cables going to the monitor travel together; cables going to the floor travel together. Avoid one giant bundle that touches everything." },
      ],
    },

    { type: "h2", id: "step-5-drop", text: "Step 5: Create a single drop to the floor" },
    {
      type: "p",
      text: "The one cable that must reach the floor is the power strip's own cord, plus any network cable or desktop PC cables. Bring them together at one point, ideally a desk leg on the outlet side, and run them down together inside a cable spine, a sleeve or simply ties along the leg. A single drop is what makes a desk look tidy from across the room.",
    },

    { type: "h2", id: "step-6-slack", text: "Step 6: Bundle, label and leave slack" },
    {
      type: "p",
      text: "Before tightening anything, move each device through its normal range: swing the monitor, slide the laptop, raise the desk if it's adjustable. Any cable that pulls tight needs more slack. Then tighten your ties just enough to hold, not compress, the bundle.",
    },
    {
      type: "p",
      text: "Labels at the strip end are the habit that pays off most. When you later need to unplug one device, you won't be pulling cables at random.",
    },

    { type: "h2", id: "standing-desks", text: "Extra steps for standing desks" },
    {
      type: "p",
      text: "A sit-stand desk changes the job: everything on the desk moves up and down together, but the outlet stays on the wall. The fix is to keep almost everything attached to the desk, including the power strip, and to give the one or two cables that reach the floor a flexible path.",
    },
    {
      type: "ul",
      items: [
        "Mount the power strip and tray to the desk top, not the frame's moving legs or the floor.",
        "Use a flexible cable spine or a loose sleeve for the drop to the floor so it can extend and compress.",
        "Raise the desk to its maximum height and check that the drop cable still has slack before tidying the bundle.",
        "Keep cables clear of the frame's cross-bar and moving leg sections.",
      ],
    },

    { type: "h2", id: "renters", text: "No-drill options for renters and shared desks" },
    {
      type: "p",
      text: "If you can't drill, combine a clamp-on tray (where the desk edge allows it) with adhesive clips for guiding individual cables. A freestanding cable box on the floor can hide the power strip when a desk-mounted tray isn't possible; keep it ventilated and don't cover it with anything.",
    },
    {
      type: "choice",
      options: [
        {
          title: "Under-desk tray or basket",
          chooseIf: ["You have several powered devices", "You can screw or clamp to the desk", "You want the power strip off the floor"],
        },
        {
          title: "Adhesive clips only",
          chooseIf: ["You only need to guide a few light cables", "You can't drill or clamp", "The desk underside is smooth and clean"],
        },
        {
          title: "Raceway or J-channel",
          chooseIf: ["You have a long run along the back edge or wall", "You want cables completely hidden from view", "A tray won't fit under the desk"],
        },
      ],
    },

    { type: "h2", id: "mistakes", text: "Common mistakes to avoid" },
    {
      type: "ul",
      items: [
        "**Cable-tying everything with permanent zip ties.** The next device you add means cutting them all.",
        "**Pulling cables tight for a cleaner look.** Tension stresses connectors and makes devices impossible to move.",
        "**Leaving the power strip on the floor.** It collects dust and is easy to kick or cover.",
        "**Adding a second power strip when you run out of outlets.** Replace it with one larger strip instead.",
        "**Running cords under a rug or through a doorway.** Safety guidance consistently advises against covered or high-traffic cord runs.",
      ],
    },

    { type: "h2", id: "keep-it-tidy", text: "How to keep it tidy" },
    {
      type: "p",
      text: "Leave one or two empty outlets and a few spare ties in the tray. When a new device arrives, connect it the same way you built the rest of the setup: power to the strip, excess coiled in the tray, data along its parallel path. If your desk also struggles with screen clutter, our guide to [monitor arms versus monitor stands](/desk-workspace/monitor-arm-vs-monitor-stand) covers how mounting a screen can clear surface space and simplify cable routing at the same time.",
    },
    {
      type: "verdict",
      title: "The short version",
      text: "One power strip, mounted high and plugged straight into the wall. One tray. Reusable ties. One drop to the floor. Slack everywhere something moves. That's a cable setup you can maintain, not just admire on the day you finish it.",
    },
  ],
  faq: [
    {
      q: "Are zip ties or Velcro ties better for cable management?",
      a: "For most desk setups, hook-and-loop (Velcro-style) ties are the better default because you can undo and reuse them when you change devices. Zip ties are fine for runs you will never touch again, but they have to be cut to make changes and can crush cables if pulled too tight.",
    },
    {
      q: "Is it safe to mount a power strip under a desk?",
      a: "Mounting a strip under the desk is a common way to keep it off the floor and away from feet. Use a strip listed by a recognized testing laboratory, follow its mounting instructions, keep it ventilated and uncovered, and plug it directly into a wall outlet rather than into another strip or an extension cord.",
    },
    {
      q: "How do I hide cables under a desk without drilling?",
      a: "Use a clamp-on cable tray if your desk has a clear back edge, adhesive clips for individual cables, and a fabric sleeve to bundle the drop to the floor. A ventilated cable box on the floor can hide the power strip if nothing can be mounted to the desk.",
    },
    {
      q: "How much slack should I leave on a standing desk?",
      a: "Raise the desk to its maximum height, then make sure the cables running to the floor still hang loosely rather than pulling tight. Mounting the power strip to the desk itself means only one or two cables need that extra length.",
    },
  ],
  sources: [
    {
      title: "Daisy Chaining Fact Sheet",
      publisher: "Harvard University Environmental Health & Safety",
      url: "https://www.ehs.harvard.edu/sites/default/files/daisy_chaining_fact_sheet.pdf",
      accessed: "2026-10-12",
      supports: "Daisy-chaining power strips conflicts with UL listing and 29 CFR 1910.303(b)(2).",
    },
    {
      title: "Daisy Chaining Fact Sheet",
      publisher: "Oklahoma State University Environmental Health & Safety",
      url: "https://ehs.okstate.edu/site-files/documents/daisy_chaining_factsheet.pdf",
      accessed: "2026-10-12",
      supports: "Overloading risks from plugging power strips into extension cords or other strips.",
    },
    {
      title: "Computer Workstations eTool",
      publisher: "U.S. Occupational Safety and Health Administration (OSHA)",
      url: "https://www.osha.gov/etools/computer-workstations",
      accessed: "2026-10-12",
      supports: "General workstation guidance; OSHA notes eTools do not create new requirements.",
    },
  ],
  related: ["monitor-arm-vs-monitor-stand", "mechanical-keyboard-sizes-explained"],
  pinterest: {
    title: "How to Organize Cables Under a Desk — a 6-step plan",
    description:
      "A safety-first, step-by-step plan for hiding cables under any desk: power strip placement, tray mounting, routing, a single floor drop and slack for standing desks. Includes no-drill options for renters.",
    board: "Desk Cable Management",
    template: "steps",
  },
};

export default article;
