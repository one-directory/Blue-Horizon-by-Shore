import Image from "next/image";
import { site } from "@/config/site";

/**
 * The Blue Horizon by Shore logo with a transparent background.
 * "dark" = navy artwork for light backgrounds, "light" = cream artwork for dark backgrounds and photos.
 */
export default function Logo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const h = size === "lg" ? "h-24 md:h-28" : "h-14 lg:h-[4.75rem]";
  return (
    <Image
      src={tone === "light" ? "/images/logo-light.webp" : "/images/logo.webp"}
      alt={site.name}
      width={700}
      height={562}
      priority
      sizes="120px"
      className={`${h} w-auto ${tone === "light" ? "drop-shadow-[0_2px_10px_rgb(0_0_0/0.45)]" : ""}`}
    />
  );
}
