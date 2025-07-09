import type { Navigation } from "@/types/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constant/navigation";
import ModeToggle from "@/components/mode-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/useScroll";
import Logo from "@/components/logo";

export default function Header() {
  const activeSection = useScroll();
  const [nav, setNav] = useState(false);
  const [isActiveNav, setIsActiveNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && nav) {
        setNav(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nav]);

  return (
    <header
      className={cn(
        "bg-background fixed top-0 z-50 flex h-20 w-full items-center",
        isActiveNav && "shadow-primary/10 shadow",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center sm:flex">
          {navigation.map((item: Navigation, index) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "ml-10 hover:text-orange-400",
                activeSection === index
                  ? "text-orange-400 duration-700"
                  : "text-primary",
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="ml-8">
            <ModeToggle />
          </div>
        </nav>
        <div className="flex w-full items-center justify-end px-2 sm:hidden">
          <div className="mr-4">
            <ModeToggle />
          </div>
          {!nav && (
            <Menu className="cursor-pointer" size={25} onClick={handleNav} />
          )}
        </div>
        {/*  Mobile Navigation */}
        <nav
          className={
            nav
              ? "bg-foreground/70 fixed top-0 left-0 h-screen w-full sm:hidden"
              : "sm:hidden"
          }
        >
          <div
            className={
              nav
                ? "bg-background fixed top-0 left-0 h-screen w-[75%] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
                : "fixed top-0 left-[-100%] p-10 duration-500 ease-in"
            }
          >
            <div>
              <div className="flex w-full items-center justify-end">
                <div
                  onClick={handleNav}
                  className="shadow-primary cursor-pointer rounded-full p-3 shadow"
                >
                  <X size="15" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center py-4"
              onClick={handleNav}
            >
              <ul>
                {navigation.map((item: Navigation, index) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "flex w-48 justify-center rounded-xl py-4 text-sm hover:text-orange-400",
                      activeSection === index
                        ? "bg-container-bg border text-orange-400 duration-700"
                        : "text-primary",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
