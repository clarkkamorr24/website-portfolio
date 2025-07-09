import { useEffect } from "react";

function updateFaviconForTheme() {
  const favicon = document.getElementById("favicon");
  const isDark = document.documentElement.classList.contains("dark");
  const newFavicon = isDark
    ? "/src/assets/white_logo.png"
    : "/src/assets/black_logo.png";

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

    updateFaviconForTheme(); // Initial load

    return () => observer.disconnect();
  }, []);
}
