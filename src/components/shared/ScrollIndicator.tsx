"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-dim-text"
    >
      <span className="text-xs uppercase tracking-widest text-cyan-primary/70">Scroll</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-cyan-primary" />
      </motion.div>
    </motion.div>
  );
}
