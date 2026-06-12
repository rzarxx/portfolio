"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function TerminalIntro() {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    "INITIALIZING SYSTEM...",
    "LOADING MODULES: [OK]",
    "ESTABLISHING CONNECTION: [OK]",
    "SYSTEM READY."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm text-cyan-primary/70 glass p-4 rounded-md mb-6 inline-block">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          &gt; {line}
        </motion.div>
      ))}
      {lines.length < bootSequence.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-cyan-primary ml-1"
        />
      )}
    </div>
  );
}
