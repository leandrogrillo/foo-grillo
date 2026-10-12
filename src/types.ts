export const TIERS = {
  GA: "ga",
  VIP: "vip",
  Backstage: "backstage",
} as const;

export type Tier = (typeof TIERS)[keyof typeof TIERS];

export const ACCENT_COLORS = {
  INDIGO: "indigo",
  ORANGE: "orange",
  EMERAL: "emerald",
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
