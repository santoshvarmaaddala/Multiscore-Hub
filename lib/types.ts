
export type Sport = 'badminton' | 'cricket' | 'kabaddi' | 'volleyball' | 'football';

export interface Team {
  id: string;
  name: string;
}

export interface Match {
  id: string;
  sport: Sport;
  teams: [Team, Team];
  date: Date;
  completed: boolean;
  result: MatchResult;
}

export interface MatchResult {
  winner?: string; // team id
  scores: Record<string, any>; // team id -> score object (different for each sport)
}

// Badminton specific types
export interface BadmintonScore {
  points: number;
  games: number;
}

// Cricket specific types
export interface CricketScore {
  runs: number;
  wickets: number;
  overs: number;
  balls: number;
}

export interface CricketSettings {
  format: 'T20' | 'ODI' | 'Test';
  maxOvers?: number;
}

// Kabaddi specific types
export interface KabaddiScore {
  points: number;
  raidPoints: number;
  defensePoints: number;
}

// Volleyball specific types
export interface VolleyballScore {
  sets: number;
  currentSetPoints: number;
  setHistory: number[];
}

// Football specific types
export interface FootballScore {
  goals: number;
  fouls: number;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  soundEffects: boolean;
  vibration: boolean;
  recentMatches: number; // number of recent matches to show
}