import { motion, type MotionValue } from "framer-motion";
import React from "react";

export type ItemProps = {
  id: string;
  content: React.ReactNode;
};

export type ItemParallaxProps = {
  item: ItemProps;
  translate: MotionValue<number>;
};

export function ItemParallax({ item, translate }: ItemParallaxProps) {
  return (
    <motion.div
      id={item.id}
      key={item.id}
      style={{ x: translate }}
      className="relative h-full w-full flex-shrink-0"
    >
      {item.content}
    </motion.div>
  );
}
