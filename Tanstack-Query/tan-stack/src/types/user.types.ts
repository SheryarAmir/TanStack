

// types/user.types.ts
export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  // optional fields
  origin?: { name: string; url: string }
  location?: { name: string; url: string }
  episode?: string[]
  url?: string
  created?: string
}

export interface CharacterArray {  // Fixed naming convention
  results: Character[]
}