'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RUNES } from '@/lib/runes';
import { Rune } from '@/types/rune';

interface RuneGridProps {
  runes?: Rune[];
}

export default function RuneGrid({ runes = RUNES }: RuneGridProps) {
  const [search, setSearch] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  // Get unique keywords
  const allKeywords = Array.from(
    new Set(RUNES.flatMap((rune) => rune.keywords))
  ).sort();

  // Filter runes
  const filtered = runes.filter((rune) => {
    const matchesSearch =
      rune.name.toLowerCase().includes(search.toLowerCase()) ||
      rune.meaning.toLowerCase().includes(search.toLowerCase()) ||
      rune.latinEquivalent.toLowerCase().includes(search.toLowerCase());

    const matchesKeyword =
      !selectedKeyword ||
      rune.keywords.includes(selectedKeyword);

    return matchesSearch && matchesKeyword;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      {/* Decorative separator */}
      <div className="flex items-center gap-4 mb-10 sm:mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-nordic-gold to-transparent"></div>
        <div className="text-3xl sm:text-4xl font-rune text-nordic-gold">ᚠ</div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-nordic-gold to-transparent"></div>
      </div>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 sm:mb-12 space-y-4"
      >
        <input
          type="text"
          placeholder="Search runes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-nordic-surface border-2 border-nordic-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-nordic-text placeholder-nordic-subtext/50 focus:outline-none focus:border-nordic-gold focus:ring-2 focus:ring-nordic-gold/20 transition"
        />

        {/* Keyword Filter */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => setSelectedKeyword(null)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition h-9 sm:h-auto ${
              selectedKeyword === null
                ? 'bg-nordic-gold text-nordic-bg'
                : 'bg-nordic-border/30 text-nordic-subtext hover:text-nordic-gold border border-nordic-border/50'
            }`}
          >
            All
          </button>
          {allKeywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() =>
                setSelectedKeyword(
                  selectedKeyword === keyword ? null : keyword
                )
              }
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition h-9 sm:h-auto capitalize ${
                selectedKeyword === keyword
                  ? 'bg-nordic-gold text-nordic-bg'
                  : 'bg-nordic-border/30 text-nordic-subtext hover:text-nordic-gold border border-nordic-border/50'
              }`}
            >
              {keyword}
            </button>
          ))}
        </div>
      </motion.div>

      <p className="text-xs sm:text-sm text-nordic-subtext/70 mb-6 sm:mb-8">
        {filtered.length} of {runes.length} runes
      </p>

      {/* Runes Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {filtered.length > 0 ? (
          <div className="border border-nordic-border/50 rounded-lg overflow-hidden bg-nordic-surface/40">
            <div className="hidden md:grid md:grid-cols-12 border-b border-nordic-border/50 bg-nordic-border/20 text-xs uppercase tracking-wider text-nordic-subtext">
              <div className="col-span-2 px-4 py-3 border-r border-nordic-border/30">Rune</div>
              <div className="col-span-2 px-4 py-3 border-r border-nordic-border/30">Name</div>
              <div className="col-span-2 px-4 py-3 border-r border-nordic-border/30">Latin</div>
              <div className="col-span-3 px-4 py-3 border-r border-nordic-border/30">Meaning</div>
              <div className="col-span-3 px-4 py-3">Keywords</div>
            </div>

            {filtered.map((rune) => (
              <div
                key={rune.id}
                className="grid grid-cols-1 md:grid-cols-12 border-b last:border-b-0 border-nordic-border/30 hover:bg-nordic-gold/5 transition"
              >
                <div className="md:col-span-2 px-4 py-3 md:py-4 md:border-r border-nordic-border/20 flex items-center justify-between md:justify-center">
                  <span className="md:hidden text-xs text-nordic-subtext uppercase">Rune</span>
                  <span className="text-3xl sm:text-4xl font-rune text-nordic-gold">{rune.character}</span>
                </div>

                <div className="md:col-span-2 px-4 py-2 md:py-4 md:border-r border-nordic-border/20 flex items-center justify-between md:block">
                  <span className="md:hidden text-xs text-nordic-subtext uppercase">Name</span>
                  <span className="text-sm sm:text-base text-nordic-text font-semibold font-serif">{rune.name}</span>
                </div>

                <div className="md:col-span-2 px-4 py-2 md:py-4 md:border-r border-nordic-border/20 flex items-center justify-between md:block">
                  <span className="md:hidden text-xs text-nordic-subtext uppercase">Latin</span>
                  <span className="text-sm text-nordic-subtext font-mono">/{rune.latinEquivalent}/</span>
                </div>

                <div className="md:col-span-3 px-4 py-2 md:py-4 md:border-r border-nordic-border/20 flex items-center justify-between md:block">
                  <span className="md:hidden text-xs text-nordic-subtext uppercase">Meaning</span>
                  <span className="text-sm text-nordic-gold font-semibold">{rune.meaning}</span>
                </div>

                <div className="md:col-span-3 px-4 py-2 md:py-4 flex items-start justify-between md:block">
                  <span className="md:hidden text-xs text-nordic-subtext uppercase">Keywords</span>
                  <div className="flex flex-wrap gap-1.5 justify-end md:justify-start max-w-[70%] md:max-w-none">
                    {rune.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={`${rune.id}-${keyword}`}
                        className="text-xs bg-nordic-gold/10 text-nordic-gold px-2 py-0.5 rounded border border-nordic-gold/30"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <p className="text-nordic-subtext text-sm sm:text-base">
              No runes found
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
