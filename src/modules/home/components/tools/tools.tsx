import { motion } from "framer-motion";

const NUM_ITEMS = 10;

export function Tools() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="text-2xl font-black">Ferramentas</h2>

      <motion.div
        initial="hidden"
        className="py flex flex-wrap items-center justify-center gap-4 sm:justify-start"
      >
        {Array.from({ length: NUM_ITEMS }).map((_, i) => (
          <motion.div
            className="h-28 w-28 rounded border bg-zinc-900"
            key={i}
            initial={{ opacity: 0, translateX: 50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
