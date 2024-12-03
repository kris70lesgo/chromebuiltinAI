import React from "react";
import { motion } from "framer-motion";

interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

export function ProductItem({ title, description, href, src }: ProductItemProps) {
  return (
    <motion.a
      href={href}
      className="flex flex-col gap-2 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={src} alt={title} className="rounded-xl w-full aspect-video object-cover" />
      <div>
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
    </motion.a>
  );
}