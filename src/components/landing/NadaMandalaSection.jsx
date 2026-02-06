"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const NadaMandalaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nada-mandala" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237A1F2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="ornament text-3xl mb-6 block">✦</span>
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Avyukta Presents</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4 leading-tight">
            Nāda-Maṇḍala
          </h2>
          <p className="font-heading text-xl md:text-2xl text-foreground/80 italic">
            A Sacred Field of Indian Classical Sound
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Nāda-Maṇḍala is an intimate gathering where Indian classical music unfolds as a living field of sound. Rooted in the philosophy of nāda and the sacred geometry of the maṇḍala, these baithaks invite deep listening—where Khayal, Dhrupad, and instrumental music are experienced not as performance, but as presence.
          </p>
          <div className="bg-secondary/50 border border-gold/20 rounded-none p-8 text-center">
            <p className="font-heading text-xl text-primary mb-4">Nāda-Maṇḍala presents a Divine, Spiritual and Devotional Hindustani Khayal Baithak.</p>
            <p className="text-muted-foreground leading-relaxed">
              An intimate gathering where rāga unfolds as prayer, imagination, and inward listening. Rooted in the contemplative depth of Khayal, this baithak invites the listener into a sacred field of sound—unhurried, meditative, and deeply resonant. The evening culminates in a Classical Kīrtan Session, where melody becomes collective devotion and the boundary between performer and listener gently dissolves.
            </p>
            <p className="text-gold font-medium mt-6">A shared experience of Nāda, Bhāva, Devotion and Stillness.</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Hindustani classical music especially Khayal adds an extraordinary spiritual depth. This form is not just the music but Living Meditation in Sound, carrying centuries of devotion, mindfulness, and sacred vibration. <span className="italic text-foreground/80">The Sound of Stillness.</span>
          </p>
        </motion.div>

        {/* Bullet Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-heading text-2xl text-primary text-center mb-10">The Experience</h3>
          <ul className="space-y-6 text-muted-foreground">
            {[
              "At Nāda-Maṇḍala, each session unfolds into a serene classical music baithak. These are not mere performances; they are offerings in sound—a journey inward through the vibration of Naad (sacred sound). As the sun rises and sets, the music becomes a bridge between silence and awareness, soothing the mind and awakening the heart.",
              "It invites the listener into stillness through the slow unfolding of sound — the Alaap — where each note is infused with intention. It aligns the mind with the breath and the heart with the rhythm of creation.",
              "Khayal — The Song of the Soul. Khayal, which means imagination or contemplation, is more fluid and emotive. It expresses the subtler shades of human feeling — longing, surrender, joy, and expansion — all as paths toward the divine within. Each raga carries a specific mood (rasa) that resonates with the time of day and emotional state of being, gently harmonizing the listener's inner world.",
              "When you listen in presence, music becomes meditation. The vibrations of these ragas directly affect the nervous system and subtle energy body (chakras).",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-gold shrink-0 mt-1">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-heading text-2xl text-primary text-center mb-8">Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Balances the nervous system",
              "Opens the heart center — Khayal's emotive improvisation evokes compassion, love, and inner softness",
              "Enhances meditative awareness — rhythmic cycles (taals) and tonal purity draw the listener into the now",
              "Bridges silence and sound — it prepares the mind for meditation or reflection, allowing insights to surface",
              "Creates energetic harmony — the ragas, when rendered at their appropriate time, align the listener with natural cycles — dawn, dusk, night — reconnecting them to universal rhythm",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-card border border-border/50">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote / Naad Yoga */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="font-heading text-xl text-primary italic mb-4">As Khayal takes form, emotion breathes into melody — longing, surrender, joy — flowing effortlessly like the river meeting the sea.</p>
          <p className="text-gold font-medium mb-2">No performance. No audience. Only presence.</p>
          <p className="text-muted-foreground mb-6">You are no longer listening to the music — you are inside it.</p>
          <p className="font-heading text-lg text-primary">This is Naad Yoga — the yoga of sacred sound. Where vibration becomes meditation, and every note reminds you of your own essence.</p>
        </motion.div>




      </div>
    </section>
  );
};

export default NadaMandalaSection;
