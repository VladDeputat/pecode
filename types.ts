export type Episode = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type InfoData = {
  pages: number;
  next: string | null;
  prev: string | null;
};

export type MoviesState = {
  episodes: Episode[];
  characters: { info: InfoData; data: Character[] };
  locations: [];
};

export type Character = {
  id: number;
  name: string;
  image: string;
  gender: string;
  location: {
    name: string;
  };
  species: string;
  status: string;
};
