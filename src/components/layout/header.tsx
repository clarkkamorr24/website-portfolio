import type { Navigation } from "@/types/navigation";
import { Menu } from "lucide-react";
import { navigation } from "@/constant/navigation";
import logo from "../../assets/logo.webp";
import ModeToggle from "@/components/mode-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const handleWindowScroll = () => {
    const pageScrollPosition = window.scrollY;
    const targetPosition = 100;
    if (pageScrollPosition >= targetPosition) {
      setIsActiveNav(true);
    } else {
      setIsActiveNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "bg-background fixed top-0 z-50 flex h-20 w-full items-center",
        isActiveNav && "shadow-primary/10 shadow",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="" />
        </div>
        <nav className="hidden items-center gap-x-6 sm:flex md:gap-x-8 lg:gap-x-12">
          {navigation.map((item: Navigation) => (
            <a
              key={item.id}
              href={item.href}
              className="text-primary hover:text-amber-600"
            >
              {item.name}
            </a>
          ))}
          <ModeToggle />
        </nav>
        <nav className="flex items-center gap-x-4 sm:hidden">
          <Menu className="cursor-pointer" />
        </nav>
      </div>
    </header>
  );
}
