"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1200); // Tampil selama 1.2 detik

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none"
      }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
    >
      {/* Subtle animated background grid/noise could go here */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #00D4FF 0%, transparent 60%)' }} />
           
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: isLoading ? 1 : 1.1, 
          opacity: isLoading ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold font-sans tracking-tighter text-white">
            Rz<span className="text-cyan-primary">.</span>
          </h1>
          <motion.div 
            className="absolute -inset-4 border border-cyan-primary/30 rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        <motion.div 
          className="mt-8 h-1 w-32 bg-white/10 rounded-full overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="absolute inset-y-0 left-0 bg-cyan-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
