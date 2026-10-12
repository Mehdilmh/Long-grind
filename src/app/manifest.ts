import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#F5F2EB",
    theme_color: site.themeColor,
    icons: [
      { src: "/brand/longgrind-mark-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/longgrind-mark-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
