'use client';

import { motion } from 'framer-motion';
import { Rune } from '@/types/rune';

interface RuneCardProps {
  rune: Rune;
  index?: number;
}

export default function RuneCard({ rune, index = 0 }: RuneCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b-2 border-nordic-border/30 hover:border-nordic-gold/50 py-4 sm:py-6 transition group cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
        {/* Rune Character */}
        <div className="text-5xl sm:text-6xl font-rune text-nordic-gold min-w-fit group-hover:drop-shadow-lg transition">
          {rune.character}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <h3 className="text-base sm:text-lg font-bold text-nordic-text font-serif">
              {rune.name}
            </h3>
            <span className="text-sm sm:text-base text-nordic-subtext font-mono font-semibold">
              /{rune.latinEquivalent}/
            </span>
          </div>

          <p className="text-sm sm:text-base text-nordic-gold font-semibold mb-2">
            {rune.meaning}
          </p>

          <p className="text-xs sm:text-sm text-nordic-subtext leading-relaxed mb-3">
            {rune.symbolicInterpretation}
          </p>

          {rune.etymology && (
            <p className="text-xs text-nordic-subtext/60 italic">
              {rune.etymology}
            </p>
          )}

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {rune.keywords.map((keyword) => (
              <span
                key={keyword}
                className="text-xs bg-nordic-gold/10 text-nordic-gold px-2 py-1 rounded border border-nordic-gold/30 font-semibold"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
