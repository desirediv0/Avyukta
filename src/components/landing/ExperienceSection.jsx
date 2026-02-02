"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Sensory Awakening",
    description: "Engage all five senses in a journey of discovery. From the first note of fragrance to the last echo of sacred sound, every moment is designed to awaken.",
  },
  {
    title: "Spiritual Connection",
    description: "Reconnect with the divine within and around you. Our offerings create bridges between the material and the sacred, the everyday and the eternal.",
  },
  {
    title: "Mindful Living",
    description: "Transform routine into ritual. Learn the art of being fully present, finding beauty in simplicity, and cultivating inner peace amidst life's chaos.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-3xl mb-6 block">✧</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            The Avyukta Experience
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-6">
            Immerse yourself in a world where every detail is crafted for transcendence
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              {/* Number */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/40 text-gold font-heading text-xl group-hover:bg-gold/10 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/70 leading-relaxed">
                {exp.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-px w-12 mx-auto bg-gold/30 group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="font-heading text-2xl md:text-3xl text-primary-foreground/90 italic max-w-3xl mx-auto">
            &quot;In the stillness of sacred practice, we discover the infinite within.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
