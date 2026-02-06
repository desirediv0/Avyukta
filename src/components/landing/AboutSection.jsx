"use client"; import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24  bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="ornament text-3xl mb-6 block">✦</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              About the Brand
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-8"
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground/90 italic leading-relaxed">
              Avyukta is a luxury house rooted in the timeless wisdom of Indian soul and sacred living.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We believe that true luxury lies not in excess, but in the profound beauty of intentional living.
              Through our curated offerings of fragrance, ritual, music, and mindfulness, we invite you to
              reconnect with the sacred rhythms that have guided generations of seekers.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Each element of Avyukta is crafted to awaken the senses, nurture the spirit, and
              transform the everyday into the extraordinary. We are not simply a brand—we are
              a sanctuary for those who seek depth, meaning, and the gentle art of slow living.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8"
            >
              <p className="font-heading text-xl text-gold tracking-wide">
                Where heritage meets the contemporary soul.
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="ornament text-2xl">❦</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
