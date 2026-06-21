import { runeMap, RUNES } from './runes';

export function transliterateToRunes(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map((char) => {
      // Map special combinations first (Th = ᚦ)
      if (char === 'Þ' || char === 'þ') return 'ᚦ';
      
      // Map single characters
      const rune = runeMap[char];
      return rune || char; // Keep unmapped characters as-is
    })
    .join('');
}

export function getRuneInfo(character: string) {
  return RUNES.find(
    (rune) => rune.character === character || rune.latinEquivalent === character.toUpperCase()
  );
}

export function transliterateWithDetails(text: string) {
  const runes = transliterateToRunes(text);
  const details = runes.split('').map((char) => {
    const rune = RUNES.find((r) => r.character === char);
    return rune ? { character: char, rune } : { character: char, rune: null };
  });

  return {
    original: text,
    transliterated: runes,
    details,
  };
}
