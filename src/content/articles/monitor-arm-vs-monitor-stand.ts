import type { ArticleInput } from "@/lib/schema";

const article: ArticleInput = {
  slug: "monitor-arm-vs-monitor-stand",
  title: "Monitor Arm vs Monitor Stand: Which Is Right for Your Desk?",
  seoTitle: "Monitor Arm vs Monitor Stand: Which Should You Choose?",
  description:
    "Monitor arm or monitor stand? Compare desk space, adjustability, compatibility and installation, with clear checks for VESA, weight and desk type before you buy.",
  dek: "An arm frees up your desk and adds adjustment, but only if your monitor and desk can take one. Here's how to decide in five minutes.",
  type: "comparison",
  category: "desk-workspace",
  tags: ["monitor-setup", "ergonomics", "small-desk", "dual-monitor", "standing-desk"],
  status: "published",
  authorId: "longgrind-editors",
  publishedAt: "2026-10-12",
  method: "research-based",
  hero: {
    photo: "cover-monitor-arm-vs-stand",
    illustration: "monitor",
    alt: "Illustration comparing a monitor on a desk stand with a monitor floating on a clamp-mounted arm above a clear desk surface.",
  },
  answer:
    "Choose a monitor arm if you need more height or depth adjustment than your current stand offers, want to clear desk space, run two monitors or use a standing desk, and your monitor has a VESA mount and a weight within the arm's range. Choose a stand or riser if your monitor's included stand already reaches a comfortable height, your desk can't take a clamp (glass tops, no overhang, thick or reinforced edges), your monitor has no VESA mount, or you want something that needs no installation.",
  keyTakeaways: [
    "Decide where your screen should be first. OSHA's workstation guidance puts the top line of the screen at or below eye level and the screen 20 to 40 inches from your eyes.",
    "An arm's biggest advantages are free desk surface and independent height, depth and angle adjustment.",
    "Check three compatibility points before buying an arm: VESA pattern, monitor weight (including the arm's minimum), and desk edge or grommet hole.",
    "A good stand or riser is the better choice when it already puts the screen in the right place; you don't need an arm to fix a problem you don't have.",
  ],
  body: [
    { type: "h2", id: "the-difference", text: "What's the actual difference?" },
    {
      type: "p",
      text: "A **monitor stand** sits on the desk surface and holds the screen from below. It might be the stand that came with your monitor, a separate stand, or a riser shelf that lifts the monitor higher. A **monitor arm** attaches to the desk edge with a clamp or through a hole (a grommet mount) and holds the screen from behind via the monitor's VESA mounting holes. Most arms let you move the screen up, down, forward, back and sideways without moving anything on the desk.",
    },
    {
      type: "table",
      caption: "Monitor arm vs monitor stand at a glance",
      columns: ["Criterion", "Monitor arm", "Monitor stand or riser"],
      rows: [
        ["Desk surface used", "Only the clamp or grommet footprint at the edge", "The stand's full base, often in prime space under the screen"],
        ["Height adjustment", "Usually wide; varies by model", "Depends on the stand: none, limited or good"],
        ["Depth (closer / further)", "Yes, the screen can be pulled forward or pushed back", "Only by moving the whole stand"],
        ["Installation", "Clamp or bolt to desk, attach to monitor's VESA mount, tune tension", "None or minimal"],
        ["Desk requirements", "Suitable edge overhang and thickness, or a grommet hole", "Any stable, level surface"],
        ["Monitor requirements", "VESA mount; weight within the arm's minimum and maximum", "Fits the monitor it came with; risers just need space"],
        ["Moving it later", "Re-clamp and re-tune", "Pick it up"],
        ["Relative cost", "Usually more than a riser; quality varies widely", "Often free (included) or low-cost for a riser"],
      ],
      note: "These are general patterns, not measurements of specific products. Always check the specifications of the model you're considering.",
    },

    { type: "h2", id: "where-should-screen-be", text: "Start with where your screen should be" },
    {
      type: "p",
      text: "Buying either product only makes sense if you know where you want the screen to end up. The U.S. Occupational Safety and Health Administration's computer workstation guidance is a useful, freely available reference. It recommends placing the monitor so the **top line of the screen is at or below eye level**, and a viewing distance of **20 to 40 inches (50 to 100 cm)** from your eyes to the screen. It notes that screens too far away can make you lean forward and strain to read, while screens too close make your eyes work harder to focus.",
    },
    {
      type: "steps",
      items: [
        { title: "Sit the way you normally work", text: "Use your usual chair height, with your feet supported and your keyboard where you type." },
        { title: "Look straight ahead", text: "Note where your eye line meets the screen. If the top line of text is well below it and you tilt your head down, the screen is too low." },
        { title: "Check the distance", text: "Extend your arm: if your fingertips touch the screen, it's on the close side of OSHA's suggested range. Many people prefer somewhat further away, especially with larger screens." },
        { title: "Test before buying", text: "Raise the screen temporarily with sturdy books under its stand. If that fixes the problem, a riser may be all you need." },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Guidance, not rules",
      text: "OSHA states that its eTools are guidance and don't create new legal requirements. Comfortable positions vary by person, eyewear and screen size; people who wear bifocal or progressive lenses often prefer a lower screen. If you have pain or a medical condition, a qualified professional is the right person to advise.",
    },

    { type: "h2", id: "compatibility", text: "Check compatibility before anything else" },
    {
      type: "p",
      text: "Most monitor-arm disappointments are compatibility problems that could have been caught in advance. Check these four things.",
    },
    { type: "h3", id: "vesa", text: "1. Does your monitor have a VESA mount?" },
    {
      type: "p",
      text: "Look for four threaded holes in a square on the back of the monitor. Most desktop monitors use the VESA MIS-D pattern, a **75 × 75 mm or 100 × 100 mm** square with M4 screws. Many arms support both. Some monitors, especially slim or curved models, have no VESA holes; manufacturers sometimes sell an adapter, and third-party brackets exist, but check that an adapter is designed for your exact model.",
    },
    { type: "h3", id: "weight", text: "2. Is your monitor's weight inside the arm's range?" },
    {
      type: "p",
      text: "Arm specifications list a weight range, and the **minimum matters as much as the maximum**: a spring-loaded arm tuned for heavier screens may not hold a light monitor in position. Use the monitor's weight **without** its stand, which manufacturers usually publish separately. Large ultrawide and heavy curved monitors are where single arms are most likely to fall short.",
    },
    { type: "h3", id: "desk", text: "3. Can your desk take a clamp or grommet?" },
    {
      type: "p",
      text: "A clamp needs a clear back edge, a desktop thickness within the clamp's range, and a top strong enough to take concentrated load. A grommet mount needs a hole through the desk, either existing or drilled. Glass desks, desks with a back panel or a lip, and very thin tops are common problem cases. Thin or soft tops can sometimes be helped with a reinforcement plate where the arm's manufacturer recommends one.",
    },
    { type: "h3", id: "space", text: "4. Is there space behind the desk?" },
    {
      type: "p",
      text: "Arms need room to fold back. If your desk is against a wall, check that the arm can reach the screen position you want without hitting the wall when the monitor is tilted or rotated.",
    },

    { type: "h2", id: "when-arm", text: "When a monitor arm is worth it" },
    {
      type: "ul",
      items: [
        "**Your stand can't reach a comfortable height.** Many basic included stands offer tilt only.",
        "**Your desk is shallow.** Pushing the screen back over the desk edge, or pulling it forward, is something only an arm can do.",
        "**You need the surface back.** A stand's base often sits exactly where you'd put a notebook or a laptop.",
        "**You run two monitors.** A dual arm or two single arms make it easier to align the screens at the same height and angle.",
        "**You use a standing desk.** An arm moves with the desk and lets you fine-tune the screen between sitting and standing positions.",
        "**You share the desk.** People of different heights can reposition the screen in seconds.",
      ],
    },

    { type: "h2", id: "when-stand", text: "When a stand or riser is the better choice" },
    {
      type: "ul",
      items: [
        "**Your current stand already adjusts height** and puts the screen in the right place.",
        "**Your desk can't take a clamp safely**: glass, a back lip, or an unsuitable thickness.",
        "**Your monitor has no VESA mount** and no adapter is available for it.",
        "**You move your setup often** or work at different desks.",
        "**You want storage underneath.** A riser shelf can lift the screen and create a slot for a keyboard or notebook.",
      ],
    },
    {
      type: "choice",
      options: [
        {
          title: "Choose a monitor arm if…",
          chooseIf: [
            "Your monitor has a VESA mount and its weight falls inside the arm's range",
            "Your desk has a suitable edge or grommet hole",
            "You need height or depth adjustment your stand can't provide",
            "You want to free up desk surface or align two screens",
          ],
        },
        {
          title: "Choose a stand or riser if…",
          chooseIf: [
            "Your included stand already reaches a comfortable height",
            "Your desk is glass, lipped or otherwise unsuitable for a clamp",
            "Your monitor lacks VESA holes",
            "You want zero installation and easy relocation",
          ],
        },
      ],
    },

    { type: "h2", id: "dual-monitors", text: "Dual monitors: arm or stand?" },
    {
      type: "p",
      text: "With two screens the main goals are matching heights and placing the screen you use most directly in front of you. Two identical monitors on their own stands can work well if the stands adjust height. Different monitors often sit at different heights on their stands, which is where an arm (or a riser under the shorter one) helps. Check the total weight a dual arm supports, and whether each side is rated separately.",
    },

    { type: "h2", id: "cables", text: "Arms and cable management" },
    {
      type: "p",
      text: "Most arms include clips or a channel for routing display and power cables along the arm. Leave enough slack at the monitor end for the full range of movement, then follow the same principles as our [guide to organizing cables under a desk](/lighting-organization/how-to-organize-cables-under-desk): power first, one route, one drop to the floor.",
    },

    { type: "h2", id: "mistakes", text: "Common mistakes" },
    {
      type: "ul",
      items: [
        "**Setting the screen too high.** Floating the screen feels premium, but OSHA's guidance puts the top line of the screen at or below eye level.",
        "**Ignoring the minimum weight.** A light monitor on a heavy-duty arm may drift upward.",
        "**Forgetting to tune tension.** Most gas-spring arms need adjustment after the monitor is attached; follow the manufacturer's instructions.",
        "**Clamping to a weak edge.** Concentrated load on a thin or hollow top can damage it over time.",
      ],
    },
    {
      type: "verdict",
      title: "Our take",
      text: "If your current stand already puts the screen at the right height and distance, keep it and spend the money elsewhere. If it doesn't, or you need the desk surface back, an arm is one of the most useful upgrades a desk can get, provided you check VESA, weight and desk compatibility first. Pairing a better screen position with a narrower keyboard can also free up room; see [mechanical keyboard sizes explained](/keyboards-peripherals/mechanical-keyboard-sizes-explained).",
    },
  ],
  faq: [
    {
      q: "Are monitor arms better for ergonomics than stands?",
      a: "Not automatically. An arm makes it easier to put the screen where published guidance suggests (top line at or below eye level, roughly arm's length or further away), but a height-adjustable stand or a riser can achieve the same position. The position matters more than the hardware.",
    },
    {
      q: "Will a monitor arm work on any desk?",
      a: "No. Clamp mounts need a clear back edge and a desktop thickness within the clamp's range; grommet mounts need a hole through the desk. Glass tops and desks with a rear lip or panel are common exceptions. Check the arm's mounting specifications against your desk before buying.",
    },
    {
      q: "What if my monitor doesn't have VESA holes?",
      a: "Some manufacturers sell VESA adapters for specific models, and third-party brackets exist. Only use an adapter designed for your monitor. If no reliable adapter exists, a stand or riser is the safer option.",
    },
    {
      q: "Do I need a monitor arm for a standing desk?",
      a: "No, but it helps. Because an arm moves with the desk and adjusts independently, it's easier to fine-tune the screen between sitting and standing. A good height-adjustable stand also works.",
    },
  ],
  sources: [
    {
      title: "Computer Workstations eTool — Monitors",
      publisher: "U.S. Occupational Safety and Health Administration (OSHA)",
      url: "https://www.osha.gov/etools/computer-workstations/components/monitors",
      accessed: "2026-10-12",
      supports: "Top line of screen at or below eye level; 20–40 inch viewing distance; effects of too-near and too-far screens.",
    },
    {
      title: "Computer Workstations eTool",
      publisher: "U.S. Occupational Safety and Health Administration (OSHA)",
      url: "https://www.osha.gov/etools/computer-workstations",
      accessed: "2026-10-12",
      supports: "eTools are guidance and do not create new OSHA requirements.",
    },
    {
      title: "VESA Mounting Standards Explained",
      publisher: "RackSolutions",
      url: "https://www.racksolutions.com/news/blog/vesa-mounting-standards-explained/",
      accessed: "2026-10-12",
      supports: "MIS-D 75 × 75 mm and 100 × 100 mm hole patterns with M4 screws.",
    },
  ],
  related: ["how-to-organize-cables-under-desk", "mechanical-keyboard-sizes-explained"],
  pinterest: {
    title: "Monitor Arm vs Monitor Stand: how to choose",
    description:
      "A clear comparison of monitor arms and monitor stands: desk space, adjustability, VESA and weight compatibility, and which suits small desks, dual monitors and standing desks.",
    board: "Desk Setup Ideas",
    template: "comparison",
    photo: "pin-monitor-arm",
  },
};

export default article;
