import AppDecoration from "@/components/layout/app-decoration";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type AppSectionProps = {
  title?: string;
  children: ReactNode;
  decoration?: boolean;
  noSeparator?: boolean;
};

export default function AppSection({
  title = "",
  children,
  decoration = true,
  noSeparator = false,
}: AppSectionProps) {
  const splitTitleColor = () => {
    const titleBase = title.split(" ");
    const titleStart = titleBase.slice(0, -1).join(" ");
    const titleEnd = titleBase[titleBase.length - 1] || "";
    return (
      <h2 className="mb-0 text-center text-xl font-bold lg:text-2xl">
        {titleStart}
        <span className="text-primary"> {titleEnd}</span>
      </h2>
    );
  };

  return (
    <section
      className={`px-3 py-10 lg:py-16 ${
        noSeparator ? "" : "border-light-gray border-opacity-50 border-b"
      }`}
    >
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {splitTitleColor()}
      </motion.div>

      {decoration && <AppDecoration type="threeline" />}
      {children}
    </section>
  );
}
