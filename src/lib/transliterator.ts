import { runeMap, RUNES } from './runes';

export function transliterateToRunes(text: string): string {
  const upper = text.toUpperCase();
  const result: string[] = [];
  let i = 0;
  while (i < upper.length) {
    const char = upper[i];
    // Thorn character → Thurisaz
    if (char === 'Þ') {
      result.push('ᚦ');
      i++;
    // TH digraph → Thurisaz
    } else if (char === 'T' && upper[i + 1] === 'H') {
      result.push('ᚦ');
      i += 2;
    // C → Kenaz (som de K)
    } else if (char === 'C') {
      result.push(runeMap['K'] || char);
      i++;
    } else {
      const rune = runeMap[char];
      result.push(rune || char);
      i++;
    }
  }
  return result.join('');
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
