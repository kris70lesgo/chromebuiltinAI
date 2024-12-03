import React from "react";
import { motion } from "framer-motion";

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export function Menu({ setActive, children }: MenuProps) {
  return (
    <motion.div
      onHoverEnd={() => setActive(null)}
      className="relative rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-md py-2 px-4"
    >
      <nav className="flex gap-4 justify-center text-sm font-medium">
        {children}
      </nav>
    </motion.div>
  );
}