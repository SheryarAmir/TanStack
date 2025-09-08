
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  // add more fields if you need
}

export interface CharactersResponse {

  results: Character[];
}
