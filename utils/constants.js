export const PxToRem = (size) => {
  return `${size / 16}rem`;
};

export const CONSTANTS = {
  CSS: {
    FLEX: (direction = "row wrap") => {
      return {
        CENTER: {
          display: "flex",
          flexFlow: direction,
          justifyContent: "center",
          alignItems: "center",
        },
        START: {
          display: "flex",
          flexFlow: direction,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        START_CENTER: {
          display: "flex",
          flexFlow: direction,
          justifyContent: "flex-start",
          alignItems: "center",
        },
        CENTER_START: {
          display: "flex",
          flexFlow: direction,
          justifyContent: "center",
          alignItems: "flex-start",
        },
        START_END: {
          display: "flex",
          flexFlow: direction,
          justifyContent: "flex-start",
          alignItems: "flex-end",
        },
        SPACE_BETWEEN_CENTER: {
          display: "flex",
          flexFlow: direction,
          justifyContent: "space-between",
          alignItems: "center",
        },
      };
    },
    BLUR: (blur = 5) => {
      return {
        filter: `blur(${blur}px)`,
        backdropFilter: `blur(${blur}px)`,
      };
    },
  },
  FONT: {
    8: PxToRem(8),
    9: PxToRem(9),
    10: PxToRem(10),
    12: PxToRem(12),
    14: PxToRem(14),
    16: PxToRem(16),
    20: PxToRem(20),
    24: PxToRem(24),
    30: PxToRem(30),
    36: PxToRem(36),
    42: PxToRem(42),
    48: PxToRem(48),
    54: PxToRem(54),
    60: PxToRem(60),
    68: PxToRem(68),
    72: PxToRem(72),
    90: PxToRem(90),
    110: PxToRem(110),
  },
  COLORS: {
    COLOR_0: "#171923",
    COLOR_8: "#ffffff",
  },
};
