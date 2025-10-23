export interface Game {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  players: string;
  image: string;
}

export interface GameCategory {
  name: string;
  games: Game[];
}

export interface GamesData {
  categories: {
    [key: string]: GameCategory;
  };
}
