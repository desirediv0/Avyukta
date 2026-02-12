"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/917011092564?text=Hi%2C%20I%20would%20like%20to%20join%20manifestation%20workshop.";

export default function FloatingBookNow() {
  const [showFloating, setShowFloating] = useState(true);

  useEffect(() => {
    const el = document.getElementById("hero-book-now-cta");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <AnimatePresence>
      {showFloating && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          onClick={openWhatsApp}
          className="fixed inline-flex items-center justify-center gap-3 bottom-12 right-5 z-50 px-4 py-3 text-sm tracking-widest uppercase font-medium rounded-none bg-primary text-primary-foreground border-2 border-gold/30 shadow-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          aria-label="Book now via WhatsApp"
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="shrink-0" />
          BOOK NOW
        </motion.button>
      )}
    </AnimatePresence>
  );
}
