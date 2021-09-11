import { ColorMode as IColorMode } from "@chakra-ui/react";

export type Colors = Record<"bg" | "textPrimary", string>;

export const colors: Record<IColorMode, Colors> = {
  dark: {
    bg: "#372B47",
    textPrimary: "#FEF7FF",
  },
  light: {
    bg: "#FEF7FF",
    textPrimary: "#372B47",
  },
};
