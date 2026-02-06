"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Sparkles, Music, Heart } from "lucide-react";

const offerings = [
  {
    title: "Fragrance",
    description: "Sacred scents that transport the soul. Our fragrances are crafted from the finest natural essences, honoring ancient traditions of Indian perfumery.",
    icon: Flower2,
    accent: "from-primary/10 to-gold/10",
  },
  {
    title: "Ritual",
    description: "Transform daily moments into sacred ceremonies. Our ritual offerings guide you in creating meaningful practices that nurture body and spirit.",
    icon: Sparkles,
    accent: "from-gold/10 to-primary/10",
  },
  {
    title: "Music",
    description: "Melodies that heal and elevate. Experience the profound power of Indian classical and devotional music, curated for inner harmony.",
    icon: Music,
    accent: "from-primary/10 to-gold/10",
  },
  {
    title: "Mindfulness",
    description: "The art of present living. Our mindfulness practices draw from ancient Indian wisdom to bring clarity, peace, and purposeful awareness.",
    icon: Heart,
    accent: "from-gold/10 to-primary/10",
  },
];

const OfferingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offerings" className="pb-10 bg-cream relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="ornament text-3xl mb-6 block">✿</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Our Offerings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Four pillars of sacred living, each designed to elevate your daily experience
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="card-sacred group h-full overflow-hidden rounded-none border-gold/20">
                <CardContent className="p-8 md:p-10 relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                      <offering.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4 group-hover:text-maroon-dark transition-colors duration-300">
                      {offering.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {offering.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold/40 to-transparent group-hover:w-24 transition-all duration-500" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
