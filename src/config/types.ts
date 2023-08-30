
export type GameInfoType = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type SystemRequirements = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

export type Screenshot = {
  id: number;
  image: string;
};

export type GameDetailsType = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: SystemRequirements;
  screenshots: Screenshot[];
};

export type SavedGameDetailsType = GameDetailsType & { timestamp: number } | null

export type PlatformType = 'pc' | 'browser' | 'all';
export type CategoryType = 'mmorpg' | 'shooter' | 'strategy' | 'moba' | 'racing' | 'sandbox';
export type SortByType = 'relevance' | 'alphabetical' | 'popularity' | 'release-date';
export type FilterType = PlatformType | CategoryType | SortByType;
export type GamesFilterField = 'platform' | 'category' | 'sortBy';

export type GamesFilterParameters = {
  platform: string | null,
  category: string | null,
  sortBy: string | null
}

export type GamesFilterPayload = {
  name: string,
  value: string,
}

export interface GameCardProps {
  gameInfo: GameInfoType,
}