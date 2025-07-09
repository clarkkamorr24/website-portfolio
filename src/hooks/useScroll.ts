import { useEffect, useState } from "react";

export default function useScroll() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section, index) => {
        const sectionHeight = section.offsetHeight - 500;
        const sectionTop = section.offsetTop - 100;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return activeSection;
}
