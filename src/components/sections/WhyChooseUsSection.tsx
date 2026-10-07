import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, BookOpen, CheckCircle, Heart, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';

const REASONS = [
  {
    icon: <UserCheck className="w-7 h-7 text-[#F28C28]" />,
    title: "Personalized Consultation",
    description: "Every birth chart is individually calculated by Avijit Sharma Sarkar to address your specific life situation."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#F28C28]" />,
    title: "Confidential Guidance",
    description: "Your consultation history, personal concerns, and birth details remain strictly private and protected."
  },
  {
    icon: <BookOpen className="w-7 h-7 text-[#F28C28]" />,
    title: "Traditional Spiritual Approach",
    description: "Grounded in authentic Parasari Vedic Jyotish and divine Maa Bagalamukhi Tantric Sadhana."
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-[#F28C28]" />,
    title: "Clear & Practical Guidance",
    description: "Straightforward recommendations without fear-mongering, complicated demands, or unrealistic claims."
  },
  {
    icon: <Heart className="w-7 h-7 text-[#F28C28]" />,
    title: "One-to-One Attention",
    description: "Dedicated consultation time ensuring all your questions are answered with patient spiritual care."
  },
  {
    icon: <Clock className="w-7 h-7 text-[#F28C28]" />,
    title: "Easy Consultation",
    description: "Flexible booking options available for both in-person sanctuary visits and global HD video calls."
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF7E6] relative overflow-hidden border-b border-[#F4B942]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Why Seek Guidance"
          title="Why Choose R.A. Divine Astrology?"
          subtitle="Authentic Wisdom, Practical Clarity, and Complete Confidentiality"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REASONS.map((reason, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="h-full space-y-4">
                <div className="p-3 w-fit rounded-xl bg-[#FFFDF8] border border-[#F4B942]/50 shadow-sm">
                  {reason.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#8F1717]">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3B1712]/85 leading-relaxed font-sans">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
