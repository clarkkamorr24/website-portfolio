import { useEffect } from "react";
import { WHITE_LOGO, BLACK_LOGO } from "@/constant/logo";

function updateFaviconForTheme() {
  const favicon = document.getElementById("favicon");
  const isDark = document.documentElement.classList.contains("dark");
  const newFavicon = isDark ? WHITE_LOGO : BLACK_LOGO;

  if (favicon && favicon.getAttribute("href") !== newFavicon) {
    favicon.setAttribute("href", newFavicon);
  }
}

export default function useFaviconTheme() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      updateFaviconForTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    updateFaviconForTheme();

    return () => observer.disconnect();
  }, []);
}
