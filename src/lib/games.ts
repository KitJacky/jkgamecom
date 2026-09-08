import gamesData from "@/data/games.json";
import type { Game, GamesData } from "@/types/game";

export const typedGamesData = gamesData as GamesData;

export const allGames: Game[] = typedGamesData.categories.all.games;

export const getGameById = (id?: string): Game | undefined => {
  if (!id) return undefined;
  const fromAll = allGames.find((g) => g.id === id);
  if (fromAll) return fromAll;
  for (const category of Object.values(typedGamesData.categories)) {
    const found = category.games.find((g) => g.id === id);
    if (found) return found;
  }
  return undefined;
};

export const getRelatedGames = (game: Game, limit = 4): Game[] =>
  allGames
    .filter((g) => g.id !== game.id && g.category === game.category)
    .concat(allGames.filter((g) => g.id !== game.id && g.category !== game.category))
    .slice(0, limit);

export const SITE_URL = "https://jkgame.com";

export const gameDetailPath = (id: string) => `/game/${id}`;
