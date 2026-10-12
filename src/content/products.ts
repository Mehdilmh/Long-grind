import type { Product } from "@/lib/schema";

/**
 * Product catalog.
 *
 * Rules (enforced by `npm run content:check`):
 * - Specs are verified facts only and each one cites a source.
 * - Opinions live in summary / bestFor / considerInsteadIf / benefits / limitations.
 * - `affiliate.destinationUrl` must be copied from Amazon (SiteStripe or the product
 *   page while signed in to Associates). Never construct one from a guessed ASIN.
 * - No prices, ratings, review counts, stock or shipping claims are stored here.
 * - No product images until the rights are confirmed (see docs/IMAGES.md).
 */

const ACCESSED = "2026-10-12";

export const products: Product[] = [
  {
    id: "logitech-mx-keys-s",
    name: "Logitech MX Keys S",
    brand: "Logitech",
    category: "keyboards-peripherals",
    summary:
      "A full-size, low-profile wireless keyboard with a number pad, multi-device switching and backlighting. It is a useful reference for how much desk width a full layout takes.",
    bestFor: "People who type numbers every day and want one keyboard for up to three devices.",
    considerInsteadIf: "Your mouse hand feels cramped or your desk is narrow; a compact layout frees width for the mouse.",
    benefits: [
      "Dedicated number pad and navigation keys, so nothing hides behind a function layer",
      "Switches between up to three paired devices with dedicated keys",
      "Connects over Bluetooth Low Energy or the included Logi Bolt receiver",
    ],
    limitations: [
      "Uses scissor-style keys rather than mechanical switches",
      "Its width pushes the mouse further from the centre of the body than a compact board",
      "Logi Bolt only; not compatible with older Logitech Unifying receivers",
    ],
    specs: [
      { label: "Layout", value: "Full-size with numeric keypad", sourceIndex: 1 },
      { label: "Width", value: "430.2 mm", sourceIndex: 0 },
      { label: "Height (front to back)", value: "131.63 mm", sourceIndex: 0 },
      { label: "Weight", value: "810 g", sourceIndex: 0 },
      { label: "Connectivity", value: "Bluetooth Low Energy or Logi Bolt USB receiver", sourceIndex: 0 },
      { label: "Multi-device", value: "Easy-Switch for up to 3 devices", sourceIndex: 0 },
      { label: "Battery", value: "Rechargeable via USB-C; up to 10 days, or up to 5 months with backlighting off (manufacturer figure)", sourceIndex: 0 },
    ],
    sources: [
      { title: "MX Keys S — Specs & Details", publisher: "Logitech", url: "https://www.logitech.com/en-gb/products/keyboards/mx-keys-s.html", accessed: ACCESSED },
      { title: "Logitech MX Keys S Keyboard — specifications", publisher: "SHI", url: "https://www.shi.com/product/47016937/Logitech-MX-Keys-S-Keyboard", accessed: ACCESSED },
    ],
    lastVerified: ACCESSED,
    status: "verified",
    variantNote: "Regional versions use different key layouts (for example US ANSI vs UK ISO). Check the layout listed for your country.",
  },
  {
    id: "logitech-mx-keys-mini",
    name: "Logitech MX Keys Mini",
    brand: "Logitech",
    category: "keyboards-peripherals",
    summary:
      "A compact, low-profile wireless keyboard without a number pad. Placed next to the MX Keys S, it shows how much width a compact layout saves within the same product family.",
    bestFor: "Small desks, laptops-plus-keyboard setups and people who rarely use a number pad.",
    considerInsteadIf: "You enter numbers often or rely on dedicated Home, End, Page Up and Page Down keys.",
    benefits: [
      "About 134 mm narrower than the full-size MX Keys S, based on Logitech's published widths",
      "Switches between up to three devices",
      "Rechargeable over USB-C",
    ],
    limitations: [
      "No number pad",
      "Some versions don't include the Logi Bolt receiver; Bluetooth pairing can be blocked before login on Macs with FileVault enabled, per Logitech",
      "Scissor-style keys, not mechanical switches",
    ],
    specs: [
      { label: "Layout", value: "Compact, no numeric keypad", sourceIndex: 0 },
      { label: "Width", value: "295.99 mm", sourceIndex: 0 },
      { label: "Height (front to back)", value: "131.95 mm", sourceIndex: 0 },
      { label: "Weight", value: "506.4 g", sourceIndex: 0 },
      { label: "Connectivity", value: "Bluetooth Low Energy; Logi Bolt compatible", sourceIndex: 0 },
      { label: "Multi-device", value: "Up to 3 devices", sourceIndex: 0 },
      { label: "Battery", value: "Rechargeable via USB-C; up to 10 days, or up to 5 months with backlighting off (manufacturer figure)", sourceIndex: 0 },
    ],
    sources: [
      { title: "MX Keys Mini", publisher: "Logitech", url: "https://logitech.com/en-hk/shop/p/mx-keys-mini", accessed: ACCESSED },
    ],
    lastVerified: ACCESSED,
    status: "verified",
    variantNote: "The standard and \"for Business\" versions differ in whether a Logi Bolt receiver is included.",
  },
  {
    id: "keychron-k8",
    name: "Keychron K8",
    brand: "Keychron",
    category: "keyboards-peripherals",
    summary:
      "A tenkeyless (TKL) wireless mechanical keyboard. It keeps the function row, arrows and navigation cluster while dropping the number pad.",
    bestFor: "People moving from a full-size board who want to keep every key except the number pad.",
    considerInsteadIf: "You want the smallest footprint possible; a 75% layout keeps the same keys in a tighter grid.",
    benefits: [
      "Full function row and a separate navigation cluster, so most shortcuts work without layers",
      "Bluetooth for up to three devices, or wired",
      "Supports macOS, Windows and Linux according to Keychron",
    ],
    limitations: [
      "Several versions exist with different switches, frames and firmware",
      "Wider than 75% and 65% boards because of the gap around the navigation cluster",
    ],
    specs: [
      { label: "Layout", value: "80% tenkeyless (TKL), ANSI", sourceIndex: 0 },
      { label: "Connectivity", value: "Bluetooth (up to 3 devices) and wired", sourceIndex: 0 },
      { label: "Compatibility", value: "macOS, Windows, Linux", sourceIndex: 0 },
    ],
    sources: [
      { title: "Keychron K8 Tenkeyless Wireless Mechanical Keyboard", publisher: "Keychron", url: "https://www.keychron.com/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard", accessed: ACCESSED },
    ],
    lastVerified: ACCESSED,
    status: "verified",
    variantNote: "Keychron sells multiple K8 versions (including a Version 2 with QMK firmware). Switch type, frame material and Bluetooth version vary, so check the exact variant.",
  },
  {
    id: "keychron-k2",
    name: "Keychron K2",
    brand: "Keychron",
    category: "keyboards-peripherals",
    summary:
      "A 75% wireless mechanical keyboard that keeps the function row and arrow keys in a compressed grid with no gaps between sections.",
    bestFor: "Compact desks where you still want arrow keys and a function row.",
    considerInsteadIf: "You rely on a separate Home/End/Page Up/Page Down cluster in its familiar position; a TKL keeps it.",
    benefits: [
      "Keeps the function row and arrows in a footprint close to a 65% board",
      "Bluetooth for up to three devices, or wired",
      "Supports macOS, Windows and Linux according to Keychron",
    ],
    limitations: [
      "Navigation keys move into a single column on the right, which takes some adjustment",
      "Multiple hardware versions exist with different switches",
    ],
    specs: [
      { label: "Layout", value: "75%", sourceIndex: 0 },
      { label: "Connectivity", value: "Bluetooth (up to 3 devices) and wired", sourceIndex: 0 },
      { label: "Dimensions (plastic frame)", value: "313 × 123 mm", sourceIndex: 0 },
      { label: "Compatibility", value: "macOS, Windows, Linux", sourceIndex: 0 },
    ],
    sources: [
      { title: "Keychron K2 Wireless Mechanical Keyboard", publisher: "Keychron", url: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard", accessed: ACCESSED },
    ],
    lastVerified: ACCESSED,
    status: "verified",
    variantNote: "Specs above are for the Version 2 listed on Keychron's site; the original 2019 model and later K2 Pro/K2 Max differ.",
  },
  {
    // Example of the draft workflow: hidden from the site until facts are reconciled.
    id: "ergotron-lx-desk-arm",
    name: "Ergotron LX Desk Monitor Arm",
    brand: "Ergotron",
    category: "desk-workspace",
    summary: "A single-monitor desk-mounted arm frequently recommended for monitors up to 34 inches.",
    bestFor: "Single monitors that need height and depth adjustment.",
    benefits: ["Height, tilt, pan and rotation adjustment"],
    limitations: ["Weight capacity must be checked against your monitor"],
    specs: [],
    sources: [
      { title: "Ergotron LX Desk Mount LCD Arm (45-241-026) listing", publisher: "Staples", url: "https://www.staples.com/product_454300", accessed: ACCESSED },
    ],
    lastVerified: ACCESSED,
    status: "draft",
    variantNote: "Retailer listings conflict on weight capacity and height range. Verify against Ergotron's official datasheet before publishing.",
  },
];
