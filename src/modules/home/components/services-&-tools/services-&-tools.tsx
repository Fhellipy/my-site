import { SERVICES_TOOLS_DATA } from "@modules/home/mock";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Tools() {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref);

  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <h2 className="text-2xl font-black">Serviços & Ferramentas</h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap items-center justify-center gap-4 sm:justify-start"
      >
        {isInView &&
          SERVICES_TOOLS_DATA.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: 50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              className="flex h-28 w-28 items-center justify-center rounded border bg-zinc-800 p-2"
            >
              <Image
                className="object-cover"
                src={icon.src}
                alt={icon.alt}
                title={icon.alt}
                width={70}
                height={70}
              />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
