import { motion } from "motion/react";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        <div className="flex h-screen items-center justify-between overflow-hidden px-10 py-16 lg:px-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 3 }}
          >
            <h1 className="text-primary text-2xl md:text-4xl">
              {`Hi, I'm`}
              <span className="text-primary ml-2">-</span>
            </h1>
            <span className="text-primary my-4 flex text-5xl font-extrabold md:text-6xl">
              <b className="text-orange-400">C</b>lark &nbsp; <b>A</b>mor
            </span>
            <h2 className="text-primary text-2xl md:text-4xl">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter: TypewriterClass) => {
                  typewriter
                    .typeString("Fullstack Developer.")
                    .pauseFor(3000)
                    .start();
                }}
              />
            </h2>
            <a
              download
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary my-6 cursor-pointer rounded-full px-7 py-3 text-lg duration-300 ease-in hover:scale-105 hover:border"
              >
                Download CV
              </Button>
            </a>
          </motion.div>
          <motion.div
            className="relative mb-20 hidden md:flex"
            initial={{ x: 0, opacity: 0.1 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="border-primary absolute h-full w-full rounded-full bg-orange-500/70"></div>
            <img
              src="/image.png"
              alt="image"
              width={350}
              height={0}
              className="z-10 h-96 w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
