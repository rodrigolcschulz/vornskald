'use client';

import { motion } from 'framer-motion';
import { God } from '@/types/god';

interface GodCardProps {
  god: God;
  index?: number;
}

export default function GodCard({ god, index = 0 }: GodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="border-b-2 border-nordic-border/30 hover:border-nordic-gold/50 py-6 sm:py-8 transition group"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-nordic-text font-serif group-hover:text-nordic-gold transition">
            {god.name}
          </h2>
          <span className="text-xs sm:text-sm text-nordic-subtext/70 font-mono italic">
            {god.realm}
          </span>
        </div>

        {/* Domains */}
        <div className="flex flex-wrap gap-1.5">
          {god.domains.map((domain) => (
            <span
              key={domain}
              className="text-xs bg-nordic-gold/10 text-nordic-gold px-2 py-1 rounded border border-nordic-gold/30 font-semibold"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-nordic-subtext leading-relaxed">
          {god.description}
        </p>

        {/* Symbols & Runes row */}
        <div className="flex flex-col sm:flex-row gap-4 pt-1">
          {/* Symbols */}
          <div className="flex-1">
            <p className="text-xs text-nordic-subtext/50 uppercase tracking-widest mb-1.5 font-semibold">
              Symbols
            </p>
            <p className="text-xs sm:text-sm text-nordic-subtext/80">
              {god.symbols.join(' · ')}
            </p>
          </div>

          {/* Associated Runes */}
          {god.runicCharacters && god.runicCharacters.length > 0 && (
            <div>
              <p className="text-xs text-nordic-subtext/50 uppercase tracking-widest mb-1.5 font-semibold">
                Runes
              </p>
              <div className="flex gap-3 items-center">
                {god.runicCharacters.map((char, i) => (
                  <span
                    key={char}
                    className="font-rune text-2xl sm:text-3xl text-nordic-gold/80 group-hover:text-nordic-gold transition"
                    title={god.associatedRunes?.[i]}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
