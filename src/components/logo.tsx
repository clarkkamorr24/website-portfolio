import { useTheme } from "@/hooks/useTheme";
import logoBlack from "../assets/black_logo.png";
import logoWhite from "../assets/white_logo.png";
import { useEffect, useState } from "react";
import type { Theme } from "@/types/theme";

export default function Logo() {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<Theme>("light");

  useEffect(() => {
    const getResolved = () => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return theme;
    };

    setResolvedTheme(getResolved());

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        setResolvedTheme(e.matches ? "dark" : "light");
      };
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
  }, [theme]);

  return (
    <div className="flex items-center">
      <img
        src={resolvedTheme === "dark" ? logoWhite : logoBlack}
        alt="logo"
        height={40}
        width={40}
      />
    </div>
  );
}
