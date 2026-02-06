"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Gift, Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorkshop = () => {
    const element = document.querySelector("#workshop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/917503896608?text=Hi%2C%20I%20would%20like%20to%20book%20%2F%20get%20more%20information.", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex p-5 items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/3 to-transparent rounded-full" />
      </div>

      {/* Ornamental Border */}
      <div className="absolute top-32 left-8 right-8 bottom-8 border border-gold/10 rounded-sm pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="ornament text-4xl">❧</span>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-primary mb-4 text-nowrap"
          >
            Avyukta Enterprises
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-lg md:text-xl text-gold tracking-[0.3em] uppercase mb-4"
          >
            Luxury House of Indian Soul
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="section-divider my-4"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/80 italic mb-10 leading-relaxed"
          >
            &quot;Experience the art of sacred living&quot;
          </motion.p>



          {/* Offerings Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-muted-foreground mb-5"
          >
            {["Fragrance", "Ritual", "Music", "Mindfulness"].map((item, index) => (
              <span key={item} className="flex items-center gap-4">
                <span className="text-sm md:text-base tracking-widest uppercase">{item}</span>
                {index < 3 && <span className="text-gold">•</span>}
              </span>
            ))}
          </motion.div>


        </div>
      </div>


    </section>
  );
};

export default HeroSection;
