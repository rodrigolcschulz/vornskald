'use client';

import { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { transliterateToRunes, transliterateWithDetails } from '@/lib/transliterator';

export default function RuneTranscriber() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<any>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.trim()) {
      const result = transliterateToRunes(value);
      setOutput(result);
      setDetails(transliterateWithDetails(value));
      setShowDetails(true);
    } else {
      setOutput('');
      setShowDetails(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setShowDetails(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      {/* Decorative separator */}
      <div className="flex items-center gap-4 mb-12 sm:mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-nordic-gold to-transparent"></div>
        <div className="text-2xl sm:text-3xl font-rune text-nordic-gold">ᚱ</div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-nordic-gold to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
      >
        {/* Input */}
        <div className="space-y-3">
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="Enter text..."
            className="w-full h-40 sm:h-56 bg-nordic-surface border-2 border-nordic-border rounded-lg p-3 sm:p-5 text-sm sm:text-base text-nordic-text placeholder-nordic-subtext/50 focus:outline-none focus:border-nordic-gold focus:ring-2 focus:ring-nordic-gold/20 resize-none transition font-medium font-serif"
          />
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handleCopy}
              disabled={!output}
              className="flex-1 h-12 sm:h-auto sm:py-3 bg-gradient-to-r from-nordic-gold to-nordic-bronze hover:from-nordic-bronze hover:to-nordic-copper disabled:from-nordic-stone disabled:to-nordic-stone disabled:cursor-not-allowed text-nordic-bg py-2 rounded-lg transition font-semibold shadow-lg hover:shadow-rune-hover disabled:shadow-none text-xs sm:text-sm active:scale-95"
            >
              Copy
            </button>
            <button
              onClick={handleClear}
              className="flex-1 h-12 sm:h-auto sm:py-3 bg-nordic-surface hover:bg-nordic-border text-nordic-gold py-2 rounded-lg transition font-semibold border border-nordic-border hover:border-nordic-gold text-xs sm:text-sm active:scale-95"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Output */}
        <div className="flex items-center justify-center">
          <div className="w-full h-40 sm:h-56 bg-gradient-to-br from-nordic-surface via-nordic-border to-nordic-surface border-2 border-nordic-gold rounded-lg p-3 sm:p-5 flex items-center justify-center shadow-ancient overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-nordic-gold/10 to-transparent pointer-events-none"></div>
            <motion.p
              key={output}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl sm:text-8xl text-center text-nordic-gold font-rune break-words relative z-10 drop-shadow-xl group-hover:drop-shadow-2xl transition px-2"
            >
              {output || '—'}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Details Section */}
      {showDetails && details && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 sm:mt-12"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-nordic-gold/50 to-transparent mb-6 sm:mb-8"></div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {details.details
              .filter((d: any) => d.rune)
              .map((d: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-2 sm:p-3 bg-nordic-border/20 border border-nordic-border/50 hover:border-nordic-gold rounded-lg hover:bg-nordic-gold/10 transition cursor-pointer group"
                >
                  <p className="text-3xl sm:text-5xl font-rune text-nordic-gold group-hover:drop-shadow-lg">{d.character}</p>
                  <p className="text-xs text-nordic-subtext/70 mt-1 truncate">{d.rune.name}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
