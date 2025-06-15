"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { useBreakpoint } from "@/app/_components/hooks/useBreakpoint";

export function PortraitAndWavingHand() {
  const isLargerThanMd = useBreakpoint("md");

  const portraitVariants = {
    rest: {
      translateX: 0,
    },
    move: {
      translateX: -30,
      transition: { duration: 0.3 },
    },
  };

  const waveVariants = {
    rest: {
      rotate: 0,
      translateX: 0,
    },
    move: {
      rotate: [0, 14, -8, 14, -4, 10, 0, 0],
      translateX: [0, -20, -20, -20, -20, -20, -20, -20],
      transition: {
        duration: 1.7,
        ease: "easeOut",
        times: [0, 0.15, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
      },
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="move"
      whileInView={!isLargerThanMd ? "move" : undefined}
      className="relative flex justify-self-center md:justify-self-start"
    >
      <motion.div
        className="z-10 touch-callout-none select-none"
        variants={portraitVariants}
      >
        <Image
          className="m-0 w-52 md:w-60 aspect-square justify-self-center md:justify-self-start rounded-full bg-main border-4 border-border dark:border-foreground touch-callout-none select-none"
          src="/portrait.jpeg"
          alt="portrait"
          width={400}
          height={400}
        />
      </motion.div>
      <motion.div
        variants={waveVariants}
        className="absolute md:-right-12 -right-8 w-fit select-none text-5xl md:text-7xl pb-5 pr-5 translate-y-5 md:pb-10 md:pr-10 justify-self-center md:justify-self-end self-center -scale-x-100"
      >
        👋
      </motion.div>
    </motion.div>
  );
}
