import { motion } from "motion/react";

type ContainerMenuProps = {
  title?: string;
  description?: string;
};

export default function ContainerMenu({
  title,
  description,
}: ContainerMenuProps) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-250, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-foreground mt-10 rounded-xl py-4 text-center"
    >
      <span className="text-primary-foreground text-[30px] font-bold lg:text-[40px]">
        {title && (
          <>
            <b className="text-orange-400">{title.charAt(0)}</b>
            {title.substring(1)}
          </>
        )}
      </span>
      <p className="text-primary-foreground mx-auto mt-3 max-w-sm text-xs tracking-widest lg:mt-5 lg:text-sm">
        {`- ${description} -`}
      </p>
    </motion.div>
  );
}
