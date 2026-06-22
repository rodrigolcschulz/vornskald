export interface God {
  id: string;
  name: string;
  realm: string;
  domains: string[];
  symbols: string[];
  description: string;
  associatedRunes?: string[];
  runicCharacters?: string[];
}
