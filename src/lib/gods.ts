import { God } from '@/types/god';

export const GODS: God[] = [
  {
    id: 'odin',
    name: 'Odin',
    realm: 'Asgard',
    domains: ['Wisdom', 'War', 'Death', 'Poetry', 'Magic', 'Prophecy'],
    symbols: ['Gungnir', 'Ravens', 'Eight-legged horse Sleipnir', 'Eye'],
    description:
      'The Allfather, ruler of Asgard and chief among the Aesir gods. Odin sacrificed his eye at Mimir\'s well to gain cosmic wisdom, and hung himself from Yggdrasil for nine days to discover the runes. He is a god of contradictions — seeker of knowledge, master of seiðr magic, patron of warriors and poets alike.',
    associatedRunes: ['Ansuz', 'Raidho', 'Othala'],
    runicCharacters: ['ᚨ', 'ᚱ', 'ᛟ'],
  },
  {
    id: 'thor',
    name: 'Thor',
    realm: 'Asgard',
    domains: ['Thunder', 'Storms', 'Strength', 'Protection', 'Fertility'],
    symbols: ['Mjolnir', 'Lightning', 'Oak tree', 'Goats'],
    description:
      'Son of Odin and the earth goddess Jörð, Thor is the god of thunder and the protector of mankind. Armed with his hammer Mjolnir, he battles the giants and serpents that threaten the world. Despite his immense power, Thor is known for his warmth and loyalty to humans — the most beloved of the gods.',
    associatedRunes: ['Thurisaz', 'Uruz', 'Sowilo'],
    runicCharacters: ['ᚦ', 'ᚢ', 'ᛊ'],
  },
  {
    id: 'freyja',
    name: 'Freyja',
    realm: 'Vanaheim / Asgard',
    domains: ['Love', 'Fertility', 'Gold', 'War', 'Death', 'Magic'],
    symbols: ['Brisingamen necklace', 'Cats', 'Falcon cloak', 'Chariot'],
    description:
      'The most renowned of the Vanir gods, Freyja is a goddess of fierce duality — she presides over love and beauty, but also over battle and death, claiming half of those slain in war for her hall Fólkvangr. She is the foremost practitioner of seiðr, the Norse form of magic, and taught this art to Odin himself.',
    associatedRunes: ['Fehu', 'Berkana', 'Gebo'],
    runicCharacters: ['ᚠ', 'ᛒ', 'ᚷ'],
  },
  {
    id: 'loki',
    name: 'Loki',
    realm: 'Asgard',
    domains: ['Trickery', 'Chaos', 'Fire', 'Transformation', 'Cunning'],
    symbols: ['Serpent', 'Net', 'Fire'],
    description:
      'The trickster of the Norse pantheon, Loki is a shape-shifter of ambiguous nature — sometimes an ally to the gods, sometimes their downfall. He is the blood-brother of Odin and the father of Hel, the wolf Fenrir, and the Midgard Serpent. His ultimate betrayal leads to Ragnarök, the twilight of the gods.',
    associatedRunes: ['Pertho', 'Dagaz', 'Kenaz'],
    runicCharacters: ['ᛈ', 'ᛞ', 'ᚲ'],
  },
  {
    id: 'tyr',
    name: 'Týr',
    realm: 'Asgard',
    domains: ['Justice', 'War', 'Law', 'Courage', 'Honor'],
    symbols: ['Sword', 'Scales', 'One hand'],
    description:
      'The one-handed god of justice and law, Týr is the embodiment of righteous sacrifice. He voluntarily placed his hand in the mouth of the great wolf Fenrir as a pledge of good faith, knowing it would be bitten off to ensure the wolf\'s binding. Tuesday (Týsdagr) bears his name.',
    associatedRunes: ['Tiwaz', 'Nauthiz'],
    runicCharacters: ['ᛏ', 'ᚾ'],
  },
  {
    id: 'baldur',
    name: 'Baldur',
    realm: 'Asgard',
    domains: ['Light', 'Purity', 'Beauty', 'Joy', 'Rebirth'],
    symbols: ['White flowers', 'Sunlight', 'Mistletoe'],
    description:
      'The brightest and most beloved of the gods, Baldur radiates light and goodness. His death — orchestrated by Loki using a mistletoe dart and the blind god Höðr\'s hand — plunged all of creation into grief. He resides in Hel\'s realm until after Ragnarök, when he will return to lead a renewed world.',
    associatedRunes: ['Sowilo', 'Wunjo', 'Dagaz'],
    runicCharacters: ['ᛊ', 'ᚹ', 'ᛞ'],
  },
  {
    id: 'freyr',
    name: 'Freyr',
    realm: 'Vanaheim / Asgard',
    domains: ['Fertility', 'Prosperity', 'Sunshine', 'Rain', 'Harvest'],
    symbols: ['Gullinbursti (golden boar)', 'Ship Skidbladnir', 'Antler'],
    description:
      'Brother of Freyja and one of the most important gods among the Vanir, Freyr presides over prosperity and fair weather. He gave away his magical sword — which fought on its own — for the love of the giantess Gerðr, and will face Surtr at Ragnarök without it. His cult was central to Norse fertility worship.',
    associatedRunes: ['Fehu', 'Jera', 'Ingwaz'],
    runicCharacters: ['ᚠ', 'ᛃ', 'ᛜ'],
  },
  {
    id: 'hel',
    name: 'Hel',
    realm: 'Niflheim',
    domains: ['Death', 'The underworld', 'Those who die of illness or old age'],
    symbols: ['Half-living half-dead form', 'Darkness', 'Cold'],
    description:
      'Daughter of Loki and the giantess Angrboða, Hel rules over Niflheim — the realm of the dead who do not fall in battle. Her body is half alive and half decayed, representing the dual nature of death. Though feared, she is neither evil nor good; she simply governs those in her care with quiet, impartial authority.',
    associatedRunes: ['Hagalaz', 'Isa', 'Eihwaz'],
    runicCharacters: ['ᚼ', 'ᛁ', 'ᛇ'],
  },
  {
    id: 'skadi',
    name: 'Skaði',
    realm: 'Jötunheimr / Asgard',
    domains: ['Winter', 'Hunting', 'Mountains', 'Skiing', 'Independence'],
    symbols: ['Skis', 'Bow', 'Snowshoes', 'Wolf'],
    description:
      'A jötunn who became a goddess, Skaði marched into Asgard armed to demand compensation for the death of her father Þjazi. She chose a husband (Njörðr) by looking only at gods\' feet. Fierce and independent, she is the embodiment of winter\'s cold beauty and the freedom of high mountain places.',
    associatedRunes: ['Isa', 'Algiz', 'Hagalaz'],
    runicCharacters: ['ᛁ', 'ᛉ', 'ᚼ'],
  },
  {
    id: 'njord',
    name: 'Njörðr',
    realm: 'Vanaheim / Asgard',
    domains: ['Sea', 'Wind', 'Fishing', 'Seafaring', 'Wealth'],
    symbols: ['Waves', 'Ships', 'Fish'],
    description:
      'Father of Freyr and Freyja, Njörðr is the Vanir god of the sea and wind. Sailors prayed to him for safe voyages and fishermen for abundant catches. His brief and unhappy marriage to the mountain goddess Skaði — each unable to tolerate the other\'s home — reflects the elemental tension between sea and mountain.',
    associatedRunes: ['Laguz', 'Raido', 'Fehu'],
    runicCharacters: ['ᛚ', 'ᚱ', 'ᚠ'],
  },
];
