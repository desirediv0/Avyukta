"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Gift, Music } from "lucide-react";

const learnings = [
  "The most important proactive steps to manifest your desires",
  "The missing links in the Law of Attraction",
  "How to receive from the Universe",
  "The art of allowing",
  "How to create deliberately and consciously",
  "The fastest way to raise your vibration",
  "How to create a personalized Vision Board",
  "How to work with your Vision Board daily",
];

const features = [
  {
    icon: Calendar,
    title: "DATE",
    value: "1st March 2026, Sunday",
  },
  {
    icon: Clock,
    title: "TIME",
    value: "10:00 AM - 6:00 PM",
  },
  {
    icon: MapPin,
    title: "VENUE",
    value: "Healing with Feeling, D-333, Block D, Defence Colony, New Delhi – 110024",
  },
];

const WorkshopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = () => {
    window.open("https://wa.me/917503896608?text=Hi, I'm interested in the Manifestation Workshop on 1st March 2026", "_blank");
  };

  return (
    <section id="workshop" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237A1F2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Workshop Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="ornament text-3xl mb-6 block">✦</span>
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Upcoming Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
            Manifestation with Vision Board Workshop
          </h2>
          <p className="font-heading text-2xl md:text-3xl text-gold italic">
            Turn Intention into Reality
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-secondary/50 border border-gold/20 rounded-none p-8 md:p-12 text-center">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Are you feeling stuck or unclear about your next steps? Are you seeking alignment rather than hustle? 
              Do you feel your affirmations are not working even after knowing the Law of Attraction?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your answer is yes, this immersive workshop will guide you through a step-by-step manifestation 
              process that truly works. Manifestation is not just about wishing — it is about aligning your inner 
              world with the life you desire.
            </p>
          </div>
        </motion.div>

        {/* What You'll Learn */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-heading text-3xl text-primary text-center mb-10">What You Will Learn</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {learnings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-card border border-border/50 hover:border-gold/30 transition-colors"
              >
                <span className="text-gold text-lg">✧</span>
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Vision Board Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h3 className="font-heading text-2xl text-primary mb-6">Why a Vision Board Works</h3>
          <p className="text-muted-foreground text-lg leading-relaxed italic">
            Images bypass logic and directly communicate with the subconscious mind — the space where 
            habits, emotions, beliefs, and identity live.
          </p>
        </motion.div>

        {/* Workshop Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-sacred text-center rounded-none">
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <p className="text-xs tracking-widest text-muted-foreground mb-2">{feature.title}</p>
                  <p className="text-foreground font-medium">{feature.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="bg-primary text-primary-foreground overflow-hidden rounded-none">
            <CardContent className="p-8 md:p-12 text-center relative">
              {/* Early Bird Badge */}
              <div className="absolute top-4 right-4 bg-gold text-maroon-dark text-xs font-bold px-4 py-1 tracking-wider">
                EARLY BIRD
              </div>

              <p className="text-sm tracking-widest text-primary-foreground/70 mb-4">ENERGY EXCHANGE</p>
              
              <div className="mb-6">
                <span className="text-5xl font-heading">₹7,000</span>
                <span className="text-primary-foreground/70 line-through ml-4">₹9,000</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6">
                Save ₹2,000 if booked by 17th February 2026
              </p>

              <p className="text-sm text-primary-foreground/70 mb-8">
                Reserve your seat with ₹2,000 advance. Balance payable at venue.
              </p>

              {/* Bonus */}
              <div className="bg-gold/20 border border-gold/30 p-4 mb-8 flex items-center justify-center gap-3">
                <Gift className="w-5 h-5 text-gold" />
                <span>Vision Board Workshop worth ₹3,500 — <strong>FREE</strong></span>
              </div>

              <p className="text-xs text-primary-foreground/60 mb-8">
                *Includes Lunch, High Tea & All Workshop Materials
              </p>

              <Button
                size="lg"
                onClick={openWhatsApp}
                className="btn-gold px-12 py-6 text-sm tracking-widest uppercase font-semibold rounded-none w-full md:w-auto"
              >
                Register via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Musical Baithak Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <Card className="bg-secondary/50 border-gold/20 rounded-none">
            <CardContent className="p-8">
              <Music className="w-10 h-10 text-gold mx-auto mb-4" />
              <h4 className="font-heading text-2xl text-primary mb-4">Coming Soon: Musical Baithak</h4>
              <p className="text-muted-foreground">
                This workshop will be concluded with a soulful Classical Musical Baithak, offering a deeply 
                calming and elevated closing experience. The Musical Baithak will also be promoted separately 
                for evening attendees.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Facilitator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm tracking-widest text-muted-foreground mb-4">YOUR FACILITATOR</p>
          <h4 className="font-heading text-3xl text-primary mb-4">Reenu Sharma</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
            <span>Law of Attraction Teacher</span>
            <span className="text-gold">•</span>
            <span>Manifestation Coach</span>
            <span className="text-gold">•</span>
            <span>Inner Transformation Coach</span>
            <span className="text-gold">•</span>
            <span>Emotional & Spiritual Alchemist</span>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">Organized by</p>
            <p className="font-heading text-xl text-primary mt-2">Avyukta Enterprises</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopSection;
