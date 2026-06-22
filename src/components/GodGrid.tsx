'use client';

import { GODS } from '@/lib/gods';
import GodCard from './GodCard';
import { motion } from 'framer-motion';

export default function GodGrid() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 sm:mb-14"
      >
        <h1 className="text-3xl sm:text-5xl font-bold font-serif bg-gradient-to-r from-nordic-gold via-nordic-bronze to-nordic-copper bg-clip-text text-transparent mb-3">
          Norse Gods
        </h1>
        <p className="text-sm sm:text-base text-nordic-subtext max-w-xl leading-relaxed">
          The deities of the Norse pantheon — their domains, symbols, and the runes that carry their essence.
        </p>
      </motion.div>

      <div>
        {GODS.map((god, index) => (
          <GodCard key={god.id} god={god} index={index} />
        ))}
      </div>
    </div>
  );
}
