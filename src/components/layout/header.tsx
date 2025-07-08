import type { Navigation } from "@/types/navigation";
import { Menu } from "lucide-react";
import { navigation } from "@/constant/navigation";
import logo from "../../assets/logo.webp";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="" />
      </div>
      <nav className="hidden items-center gap-x-10 sm:flex">
        {navigation.map((item: Navigation) => (
          <a
            key={item.id}
            href={item.href}
            className="text-primary hover:text-amber-600"
          >
            {item.name}
          </a>
        ))}
      </nav>
      <nav className="flex items-center gap-x-4 sm:hidden">
        <Menu className="cursor-pointer" />
      </nav>
    </header>
  );
}
