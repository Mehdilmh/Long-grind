import type { ArticleInput } from "@/lib/schema";

const article: ArticleInput = {
  slug: "mechanical-keyboard-sizes-explained",
  title: "Mechanical Keyboard Sizes Explained: Full-Size, TKL, 75%, 65% and 60%",
  seoTitle: "Mechanical Keyboard Sizes Explained (Full-Size to 60%)",
  description:
    "What full-size, TKL, 75%, 65% and 60% keyboards include, how much desk width each saves, and how to pick the right size for work, coding, gaming or a small desk.",
  dek: "Keyboard size is really a question of which keys you're willing to give up for desk space. Here's what each layout keeps and what it costs.",
  type: "explainer",
  category: "keyboards-peripherals",
  tags: ["keyboards", "mechanical-keyboards", "small-desk", "programmers", "gaming"],
  status: "published",
  authorId: "longgrind-editors",
  publishedAt: "2026-10-12",
  method: "research-based",
  hero: {
    illustration: "keyboard",
    alt: "Illustration of a compact 75% keyboard with highlighted arrow keys next to a mouse on a dark desk.",
  },
  answer:
    "Keyboard sizes describe how much of a full-size layout remains. A full-size (100%) board has about 104 keys including a number pad. Tenkeyless (TKL, about 80%) removes the number pad and has 87 keys. A 75% board keeps the function row and arrows in a compressed grid of around 84 keys. A 65% board drops the function row (about 66–68 keys) but keeps arrows. A 60% board has about 61 keys and moves arrows and navigation onto a function layer. Smaller sizes free desk space for your mouse; larger sizes keep more keys one press away.",
  keyTakeaways: [
    "The percentage is shorthand, not a measurement. Key counts vary by brand and by regional layout.",
    "The biggest single width saving comes from dropping the number pad. Logitech's own figures put the full-size MX Keys S about 134 mm wider than the compact MX Keys Mini.",
    "75% is the most common compromise for people who want a small board but still use the function row and arrows.",
    "60% boards rely on layers for arrows and navigation; that suits some users and frustrates others.",
    "Check the regional layout (for example ANSI or ISO) before buying, especially if you'll replace keycaps.",
  ],
  body: [
    { type: "h2", id: "how-sizes-work", text: "How keyboard sizes work" },
    {
      type: "p",
      text: "Keyboard sizes are named relative to a **full-size** keyboard, the layout with a function row, a main typing area, a navigation cluster (Insert, Home, Page Up and the arrows) and a number pad. Each smaller size removes or compresses one of those sections. The percentages are approximate: manufacturers round them, and key counts shift a little between brands and regional layouts.",
    },
    {
      type: "p",
      text: "Although the terms are most common in mechanical keyboard circles, they describe layouts, not switch types. A low-profile scissor-switch keyboard can be full-size or compact too, which is why we use one brand's scissor-switch models below to show real-world width differences.",
    },
    {
      type: "figure",
      illustration: "keyboard-sizes",
      alt: "Diagram of five keyboard layouts drawn to relative scale, showing the number pad removed at TKL, the gaps closed at 75%, the function row removed at 65% and the arrows removed at 60%.",
      caption: "Approximate relative widths, drawn in standard key units. Real products vary by a few millimetres depending on bezels and frame.",
    },

    { type: "h2", id: "size-by-size", text: "Each size at a glance" },
    {
      type: "table",
      caption: "Common keyboard sizes, what they keep and who they suit",
      columns: ["Size", "Typical keys (US layout)", "What's removed", "Often suits"],
      rows: [
        ["Full-size (100%)", "About 104", "Nothing", "Data entry, spreadsheets, anyone who uses the number pad daily"],
        ["96% / 1800", "About 96–100", "Gaps between sections; navigation keys rearranged", "Number pad users who want a slightly narrower board"],
        ["Tenkeyless (TKL, ~80%)", "87", "Number pad", "A first step down from full-size with no relearning"],
        ["75%", "About 84", "Number pad; gaps compressed; navigation keys moved to a column", "Small desks while keeping the function row and arrows"],
        ["65%", "About 66–68", "Number pad and function row", "Compact setups where F-keys are rarely used"],
        ["60%", "About 61", "Number pad, function row, arrows and navigation cluster (moved to layers)", "Minimal setups and maximum mouse space"],
      ],
      note: "Key counts are typical for US ANSI layouts and vary by model. Sources: manufacturer listings and layout guides cited below.",
    },

    { type: "h3", id: "full-size", text: "Full-size (100%)" },
    {
      type: "p",
      text: "Everything is present and in its familiar place. If you enter numbers often, the number pad is genuinely faster than the top number row, and there's no layer to learn. The cost is width. That width sits between your typing hand and your mouse, so your mouse hand ends up further to the side.",
    },
    { type: "h3", id: "tkl", text: "Tenkeyless (TKL)" },
    {
      type: "p",
      text: "A TKL removes only the number pad. Every other key stays where you expect it, which makes it the easiest size to switch to. It's a good default if you're unsure: you gain mouse space without changing how you type or use shortcuts.",
    },
    { type: "h3", id: "75-percent", text: "75%" },
    {
      type: "p",
      text: "A 75% keeps the same keys as a TKL in a tighter arrangement: the gaps between sections disappear and the navigation keys move into a single column on the right. The function row and arrow keys remain dedicated keys, which is why 75% is such a common choice for compact desks.",
    },
    { type: "h3", id: "65-percent", text: "65%" },
    {
      type: "p",
      text: "A 65% drops the function row. Arrow keys stay, along with a few navigation keys in a column. F-keys move to a function layer, usually by holding a Fn key with the number row. That works well if you rarely use F-keys, and less well if your software relies on them.",
    },
    { type: "h3", id: "60-percent", text: "60%" },
    {
      type: "p",
      text: "A 60% keeps the main typing block and moves arrows, F-keys and navigation onto layers. It's the smallest size most people consider for daily work, and it gives the most room for a mouse. If you edit text, code or spreadsheets heavily, expect to depend on layers constantly.",
    },

    { type: "h2", id: "how-much-space", text: "How much desk space does a smaller keyboard actually save?" },
    {
      type: "p",
      text: "Comparing two keyboards from the same product family removes most of the variation from frames and materials. Logitech lists its full-size **MX Keys S at 430.2 mm wide** and its compact **MX Keys Mini at 295.99 mm wide**. That's a difference of about **134 mm, or roughly 5.3 inches**, nearly all of it the number pad and navigation cluster.",
    },
    {
      type: "p",
      text: "Keychron lists the plastic-frame version of its 75% **K2 at 313 × 123 mm**, which shows how close a 75% board, with a full function row and arrow keys, can get to a compact low-profile board.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Measure your own mouse space",
      text: "Put your current keyboard where you type, then mark where your mouse usually sits. If your mouse arm drifts outward or you run out of pad during wide movements, a smaller layout will help more than a bigger mouse pad.",
    },
    {
      type: "productPicks",
      heading: "Real examples of each size",
      picks: [
        { productId: "logitech-mx-keys-s", label: "Full-size reference", why: "A full layout with number pad and three-device switching. Useful as a benchmark for how much width a full-size board takes." },
        { productId: "keychron-k8", label: "Tenkeyless example", why: "Keeps the function row and the separate navigation cluster, dropping only the number pad." },
        { productId: "keychron-k2", label: "75% example", why: "Function row and arrows in a compressed grid; a common choice for compact desks." },
        { productId: "logitech-mx-keys-mini", label: "Compact low-profile example", why: "Shows the width saving of a compact layout within the same family as the MX Keys S." },
      ],
    },

    { type: "h2", id: "layers", text: "Function layers: the trade-off behind small keyboards" },
    {
      type: "p",
      text: "Smaller keyboards don't remove functions, they move them. A **layer** is a second set of key assignments reached by holding a modifier, usually labeled Fn. On a 65% board, Fn plus the number row typically produces F1 to F12. On a 60% board, Fn plus a cluster of letter keys often acts as the arrow keys.",
    },
    {
      type: "p",
      text: "Some keyboards let you remap layers with software or open-source firmware such as QMK or VIA, which can make a small board fit your habits closely. Check the manufacturer's documentation for what a specific model supports.",
    },

    { type: "h2", id: "choose-by-use", text: "Choosing a size by how you work" },
    { type: "h3", id: "office-work", text: "Office work and spreadsheets" },
    {
      type: "p",
      text: "If you type numbers all day, keep the number pad: choose a full-size or a 96% board. If you only occasionally enter numbers, a TKL with a separate numpad that lives in a drawer can give you both.",
    },
    { type: "h3", id: "programming", text: "Programming" },
    {
      type: "p",
      text: "Developers lean on arrow keys, Home/End and the function row. In Visual Studio Code, for example, F5 starts debugging, F10 steps over and F11 steps into a function, according to Microsoft's documentation. That makes **TKL or 75%** the comfortable choice for most programmers. A 65% or 60% can work well once layers become habit, especially with customizable firmware.",
    },
    { type: "h3", id: "gaming", text: "Gaming" },
    {
      type: "p",
      text: "Players who use low mouse sensitivity sweep the mouse across a wide area, so a narrower keyboard leaves more room. TKL, 75% and 65% boards are popular for this reason. Make sure any keys your games use, including F-keys for some titles, aren't buried in a layer you'll need mid-game.",
    },
    { type: "h3", id: "small-desks", text: "Small desks and laptops" },
    {
      type: "p",
      text: "On a narrow or shallow desk, a 75% board usually gives the best balance of size and dedicated keys. If you also need to clear surface space for the screen, our comparison of [monitor arms and monitor stands](/desk-workspace/monitor-arm-vs-monitor-stand) explains how mounting your monitor can free up the area behind the keyboard.",
    },
    {
      type: "choice",
      options: [
        { title: "Full-size or 96%", chooseIf: ["You use the number pad every day", "You don't want to learn any layers", "Desk width isn't a constraint"] },
        { title: "TKL or 75%", chooseIf: ["You want more mouse space without losing keys", "You code or use F-keys and arrows often", "You're stepping down from full-size for the first time"] },
        { title: "65% or 60%", chooseIf: ["Desk space or portability is the priority", "You rarely use F-keys", "You're happy to learn and customize layers"] },
      ],
    },

    { type: "h2", id: "ansi-iso", text: "Layout vs size: ANSI, ISO and regional differences" },
    {
      type: "p",
      text: "Size and layout are different things. Size describes which sections exist; layout describes the shape and position of individual keys. The two most common physical layouts are **ANSI**, common in the United States, with a wide horizontal Enter key and a long left Shift, and **ISO**, common in much of Europe, with a tall Enter key and a shorter left Shift beside an extra key. Regional versions also change legends and some key positions. This matters most if you plan to buy replacement keycaps, which must match the layout.",
    },

    { type: "h2", id: "before-you-buy", text: "Before you buy: a short checklist" },
    {
      type: "ol",
      items: [
        "List the keys you press without looking. Make sure each one survives in the size you choose, either as a dedicated key or a layer you're willing to learn.",
        "Measure the space between your keyboard and mouse, and how far your mouse arm reaches outward.",
        "Confirm the regional layout (for example US ANSI) matches what you're used to.",
        "Check connectivity: wired, Bluetooth, a USB receiver, and how many devices it can pair with.",
        "Check operating system support for the keys and any configuration software you need.",
        "Check the exact model version. Several popular keyboards are sold in multiple versions with different switches and features.",
      ],
    },
    {
      type: "verdict",
      title: "Our take",
      text: "If you're unsure, start with a TKL or 75%. You keep every key you're used to, gain meaningful mouse space and avoid learning layers. Go full-size only if you truly use the number pad, and go 65% or 60% if desk space matters more to you than dedicated keys.",
    },
  ],
  faq: [
    {
      q: "Is a 75% keyboard the same as a TKL?",
      a: "No. Both keep the function row and arrow keys and drop the number pad, but a 75% board removes the gaps between sections and moves navigation keys into a single column, making it narrower than a TKL.",
    },
    {
      q: "Is 60% too small for everyday work?",
      a: "It depends on how often you use arrows, F-keys and navigation keys. On a 60% board those live on a function layer. Many people adapt, especially with remappable firmware, but if you edit text or code heavily, a 65% or 75% keeps arrows as dedicated keys.",
    },
    {
      q: "What keyboard size is best for a small desk?",
      a: "A 75% layout is usually the best balance for small desks because it keeps the function row and arrows while removing most of the width of a full-size board. A 65% board is narrower still if you rarely use F-keys.",
    },
    {
      q: "Do keyboard sizes only apply to mechanical keyboards?",
      a: "No. The terms describe layout, not switch type. Low-profile and membrane keyboards come in full-size and compact layouts too, though the percentage names are most common for mechanical boards.",
    },
  ],
  sources: [
    {
      title: "The ultimate guide to keyboard layouts and form factors",
      publisher: "Wooting",
      url: "https://wooting.io/post/the-ultimate-guide-to-keyboard-layouts-and-form-factors/",
      accessed: "2026-10-12",
      supports: "Typical key counts and what each form factor removes.",
    },
    {
      title: "MX Keys S — Specs & Details",
      publisher: "Logitech",
      url: "https://www.logitech.com/en-gb/products/keyboards/mx-keys-s.html",
      accessed: "2026-10-12",
      supports: "MX Keys S width of 430.2 mm.",
    },
    {
      title: "MX Keys Mini",
      publisher: "Logitech",
      url: "https://logitech.com/en-hk/shop/p/mx-keys-mini",
      accessed: "2026-10-12",
      supports: "MX Keys Mini width of 295.99 mm.",
    },
    {
      title: "Keychron K2 Wireless Mechanical Keyboard",
      publisher: "Keychron",
      url: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
      accessed: "2026-10-12",
      supports: "K2 (Version 2) plastic-frame dimensions of 313 × 123 mm.",
    },
    {
      title: "Debugging in Visual Studio Code",
      publisher: "Microsoft",
      url: "https://code.visualstudio.com/docs/editor/debugging",
      accessed: "2026-10-12",
      supports: "Default debugging shortcuts F5, F10 and F11.",
    },
  ],
  related: ["monitor-arm-vs-monitor-stand", "how-to-organize-cables-under-desk"],
  pinterest: {
    title: "Keyboard Sizes Explained: Full-Size vs TKL vs 75% vs 65% vs 60%",
    description:
      "A visual guide to keyboard sizes: what each layout keeps, how much desk width it saves, and which size suits office work, programming, gaming and small desks.",
    board: "Keyboards & Desk Gear",
    template: "roundup",
  },
};

export default article;
