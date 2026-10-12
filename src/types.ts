export const TIERS = {
  GA: "ga",
  VIP: "vip",
  Backstage: "backstage",
} as const;

export type Tier = (typeof TIERS)[keyof typeof TIERS];

export const ACCENT_COLORS = {
  INDIGO: "indigo",
  ORANGE: "orange",
  EMERALD: "emerald",
  SKY: "sky",
  BLACK: "black",
} as const;

export type AccentColor = (typeof ACCENT_COLORS)[keyof typeof ACCENT_COLORS];

export const MARK_SYMBOLS = {
  MARK: "mark",
  STAR: "star",
  NOTE: "note",
  MOON: "moon",
} as const;

export type Mark = (typeof MARK_SYMBOLS)[keyof typeof MARK_SYMBOLS];

export const THEMES = {
  Midnight: "midnight",
  Sunrise: "sunrise",
  Forest: "forest",
  Mono: "mono",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export type TicketFormState = {
  eventName: string;
  holderName: string;
  date: string;
  tier: Tier;
  accentColor: AccentColor;
  mark: Mark;
  theme: Theme;
};
