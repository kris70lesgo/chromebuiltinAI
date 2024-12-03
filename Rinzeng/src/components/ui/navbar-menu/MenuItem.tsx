import React from "react";
import { motion } from "framer-motion";

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
}

export function MenuItem({ setActive, active, item, children }: MenuItemProps) {
  return (
    <div className="relative">
      <motion.button
        onHoverStart={() => setActive(item)}
        className="p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        {item}
      </motion.button>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full pt-4"
        >
          <div className="w-96 bg-white dark:bg-neutral-950 rounded-xl shadow-lg ring-1 ring-black/5 p-6">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
}