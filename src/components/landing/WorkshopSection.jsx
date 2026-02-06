"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Gift, Music } from "lucide-react";
import Image from "next/image";

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
    value: "10:00 AM - 7:30 PM",
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
    window.open("https://wa.me/917011092564?text=Hi, I'm interested in the Manifestation Workshop on 1st March 2026", "_blank");
  };

  const openWhatsAppNada = () => {
    window.open("https://wa.me/917011092564?text=Hi%2C%20I%20would%20like%20to%20book%20my%20spot%20for%20N%C4%81da-Ma%E1%B9%87%E1%B8%8Dala%20Baithak%20on%201st%20March%202026.", "_blank");
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
                Book By 17th February 2026 and Save Rs 2000
              </p>

              <p className="text-sm text-primary-foreground/70 mb-8">
                Reserve your seat with ₹2,500 advance. Balance payable at venue.
              </p>

              {/* Bonus */}
              <div className="bg-gold/20 border border-gold/30 p-4 mb-4 flex items-center justify-center gap-3">
                <Gift className="w-5 h-5 text-gold shrink-0" />
                <span>Vision Board Workshop worth Rs 3500 Included.</span>
              </div>
              <div className="bg-gold/20 border border-gold/30 p-4 mb-8 flex items-center justify-center gap-3">
                <Gift className="w-5 h-5 text-gold shrink-0" />
                <span>Nāda-Maṇḍala Classical Baithak worth Rs 2000 Included.</span>
              </div>

              <p className="text-xs text-primary-foreground/60 mb-8">
                *Includes Lunch, High Tea & All Workshop Materials
              </p>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[280px] px-10 py-6 text-sm tracking-widest uppercase font-semibold rounded-none bg-[#d4af37] text-[#2c0a0f] border-2 border-white/30 shadow-lg hover:bg-[#e5c54a] hover:text-[#2c0a0f] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="shrink-0" />
                  Register via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>


        {/* About Our Teacher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >

          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center md:items-start">
            <div className="shrink-0 w-full md:w-80 aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30">
              <Image
                src="/t-4.jpg"
                alt="Reenu Sharma"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-sm tracking-widest text-muted-foreground mb-8 text-left">About Our Facilitator</p>
              <h4 className="font-heading text-3xl text-primary">Reenu Sharma</h4>
              <p className="text-muted-foreground leading-relaxed">
                I am Reenu Sharma based in Delhi. I am a certified Law of Attraction Teacher and Life Coach. With 8 years of experience my expertise lies in helping individuals unleash their own inner power, which is the only cooperative component anyone needs to manifest the life of their dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialise in the deep work of Emotional Healing, Shadow work and Inner Child Healing facilitating the transformation from inside out.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my personal sessions and 125+ immersive workshops I have helped hundreds of individuals rewrite their inner narrative which has made them master the science and spirituality of manifestation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have led some very powerful and hugely successful Law of Attraction sessions in Corporate sector and prominent educational institutions including Barista head office and YWCA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My unique strength lies in facilitating a profound shift in perspective empowering my clients to move from the state of survival to one of conscious creation. I am on a mission to help seekers heal their emotions and step into a life of alignment and power.
              </p>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">Organized by</p>
                <p className="font-heading text-xl text-primary mt-2">Avyukta Enterprises</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Classical Musical Baithak */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto my-16"
        >
          <Card className="bg-secondary/50 border-gold/20 rounded-none">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Music className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="font-heading text-2xl text-primary mb-2">Most Awaited:  Spiritual, Divine & Devotional Indian Classical Musical Baithak</h4>
                <p className="text-muted-foreground mb-4">
                  This workshop will be concluded with a soulful Classical Musical Baithak, offering a deeply
                  calming and elevated closing experience.
                </p>

              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30 mb-4 relative">
                    <Image src="/rp%20(1).jpeg" alt="Shri Ravikant Pandeya Ji" fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                  </div>
                  <p className="font-heading text-lg text-primary">Shri Ravikant Pandeya Ji</p>
                  <p className="text-sm text-muted-foreground">Tabla</p>
                </div>
                <div className="text-center">
                  <div className="aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30 mb-4 relative">
                    <Image src="/ad%20(1).jpeg" alt="Shri Anuj Dangwal Ji" fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                  </div>
                  <p className="font-heading text-lg text-primary">Shri Anuj Dangwal Ji</p>
                  <p className="text-sm text-muted-foreground">Khayal Vocal</p>
                </div>
                <div className="text-center">
                  <div className="aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30 mb-4 relative">
                    <Image src="/m.jpeg" alt="Shri Munee Malviya Ji" fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                  </div>
                  <p className="font-heading text-lg text-primary">Shri Munee Malviya Ji</p>
                  <p className="text-sm text-muted-foreground">Harmonium</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* About Artists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-sm tracking-widest text-muted-foreground mb-10 md:mb-5 text-left md:pl-60">About Artists</p>
          <div className="space-y-12">
            {/* Shri Anuj Dangwal Ji - Khayal Vocal */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-full md:w-56 aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30 relative">
                <Image src="/ad%20(1).jpeg" alt="Shri Anuj Dangwal Ji" fill className="object-cover" sizes="224px" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-2xl text-primary mb-2">Shri Anuj Dangwal Ji</h4>
                <p className="text-gold text-sm mb-4">Gwalior Gharana — Khayal Vocal</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Learning Hindustani Khayal Since 2017 from well known Guru Vidushi Manjusha Patil Ji and Dr Swapnil Chafekar Ji.
                </p>
                <p className="text-xs font-medium text-foreground/80 mb-2">Education:</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• B.A in Sanskrit from Somnath University</li>
                  <li>• B.A in Indian Classical Music (Vocal) from Chinmaya Vishwavidyapeeth</li>
                  <li>• M.A in Indian Classical Music (Vocal) from Hemvati Nandan Garhwal University</li>
                  <li>• Prayag Sangeet Samiti – Sangeet Prabhakar</li>
                </ul>
              </div>
            </div>

            {/* Shri Ravikant Pandeya Ji - Tabla */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-full md:w-56 aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30 relative">
                <Image src="/rp%20(1).jpeg" alt="Shri Ravikant Pandeya Ji" fill className="object-cover" sizes="224px" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-2xl text-primary mb-2">Shri Ravikant Pandeya Ji</h4>
                <p className="text-gold text-sm mb-4">Farrukhabad Gharana — Tabla</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ravikant Pandeya began his association with Indian music through training in the Tabla from Pandit Nikhil Bhawsar in 2007. He was an associated musician with the Shanti Mandir Trust based in Valsad, Gujarat. He began training in the Tabla from renowned maestro, Pandit Abhijeet Banerjee and Shri Rohit Kulkarni in the traditional Guru-Shishya parampara at the Chinmaya Naada Bindu Gurukul and Chinmaya University from 2017 to 2020. He has performed on many of the renowned platforms for Khayal Singing both as a solo performer and accompanist, and has also accompanied many of the stalwart Khayal Singing and Solo performers of the day.
                </p>
              </div>
            </div>

            {/* Shri Munee Malviya Ji - Harmonium */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-full md:w-56 aspect-[3/4] overflow-hidden border border-gold/20 bg-secondary/30 relative">
                <Image src="/m.jpeg" alt="Shri Munee Malviya Ji" fill className="object-cover" sizes="224px" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-2xl text-primary mb-2">Shri Munee Malviya Ji</h4>
                <p className="text-gold text-sm mb-4">Harmonium</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Disciple of Ustaad Saleem Allah Wale Ji (Jaipur) and currently getting trained under Pandit Siddhesh Bicholkar Ji (Pune). Ranked B-High Grade from All India Radio Akashwani Bhopal.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Participation — Performed harmonium solos and also accompanied with renowned artists of our country in various festivals like Tansen Samaroh, Smaran, Dhrupad Utsav, Vishvarang. Also performed in Madhya Pradesh Bhawan Delhi.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Book Your Spot to Experience Nāda-Maṇḍala - same UI as ENERGY EXCHANGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl md:text-4xl text-primary mb-4">Book Your Spot to Experience Nāda-Maṇḍala</h3>
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              An intimate evening of Hindustani Khayal — where rāga becomes prayer, and sound becomes stillness.
            </p>
          </div>

          {/* DATE, TIME, VENUE cards - same style as workshop details */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="card-sacred text-center rounded-none">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-gold mx-auto mb-4" />
                <p className="text-xs tracking-widest text-muted-foreground mb-2">DATE</p>
                <p className="text-foreground font-medium">1st March 2026, Sunday</p>
              </CardContent>
            </Card>
            <Card className="card-sacred text-center rounded-none">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
                <p className="text-xs tracking-widest text-muted-foreground mb-2">TIME</p>
                <p className="text-foreground font-medium">5:30 to 7:30 PM</p>
              </CardContent>
            </Card>
            <Card className="card-sacred text-center rounded-none">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                <p className="text-xs tracking-widest text-muted-foreground mb-2">VENUE</p>
                <p className="text-foreground font-medium text-sm">Healing with Feeling, D-333, Block D, Defence Colony, New Delhi – 110024</p>
              </CardContent>
            </Card>
          </div>

          {/* Dark maroon pricing card - same as ENERGY EXCHANGE */}
          <Card className="bg-primary text-primary-foreground overflow-hidden rounded-none">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-4 right-4 bg-gold text-maroon-dark text-xs font-bold px-4 py-1 tracking-wider">
                EARLY BIRD
              </div>

              <p className="text-sm tracking-widest text-primary-foreground/70 mb-4">BOOK NĀDA-MAṆḌALA</p>

              <div className="mb-6">
                <span className="text-5xl font-heading">₹2,000</span>
                <span className="text-primary-foreground/70 line-through ml-4">₹3,000</span>
                <span className="text-primary-foreground/80 text-sm ml-2">per head</span>
              </div>

              <p className="text-primary-foreground/80 mb-2">
                High Tea and Snacks will be served Before Baithak.
              </p>


              <div className="bg-gold/20 border border-gold/30 p-4 mb-8 flex items-center justify-center gap-3">
                <Gift className="w-5 h-5 text-gold" />
                <span>An evening of Khayal, Kīrtan & sacred sound</span>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={openWhatsAppNada}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[280px] px-10 py-6 text-sm tracking-widest uppercase font-semibold rounded-none bg-[#d4af37] text-[#2c0a0f] border-2 border-white/30 shadow-lg hover:bg-[#e5c54a] hover:text-[#2c0a0f] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="shrink-0" />
                  Register via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkshopSection;
