import React from "react";
import { motion } from "framer-motion";
import { Link } from "../../Link";

interface HoveredLinkProps {
  href: string;
  children: React.ReactNode;
}

export function HoveredLink({ href, children }: HoveredLinkProps) {
  return (
    <Link href={href} className="text-neutral-700 dark:text-neutral-200">
      <motion.span
        className="relative rounded-full px-4 py-2 transition-all duration-500 ease-out hover:bg-slate-100 dark:hover:bg-slate-800"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  );
}