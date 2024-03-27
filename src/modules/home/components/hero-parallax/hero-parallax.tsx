"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";
import { HeaderParallax, ItemParallax, type ItemProps } from ".";

type HeroParallaxProps = {
  items: ItemProps[];
};

export function HeroParallax({ items = [] }: HeroParallaxProps) {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-750, 300]),
    springConfig,
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [1100, 0]),
    springConfig,
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [12, 0]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );

  const firstRowPaddingBlock = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [250, -2]),
    springConfig,
  );

  return (
    <main
      ref={ref}
      className="relative flex min-h-[--view-height] flex-col self-auto overflow-hidden p-6 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeaderParallax />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div
          className="space-x flex w-full flex-row space-x-20"
          style={{
            paddingBlock: firstRowPaddingBlock,
          }}
        >
          {items[0] && <ItemParallax item={items[0]} translate={translateX} />}
        </motion.div>

        <motion.div className="mb-20 flex flex-row space-x-20">
          {items[1] && (
            <ItemParallax item={items[1]} translate={translateXReverse} />
          )}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {items[2] && <ItemParallax item={items[2]} translate={translateX} />}
        </motion.div>
      </motion.div>
    </main>
  );
}
