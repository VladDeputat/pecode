export type Episode = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type MoviesState = {
  episodes: Episode[];
  characters: [];
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
