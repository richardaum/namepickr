import { extendTheme } from "@chakra-ui/react";

import { Colors } from "./colors";
import { config } from "./config";
import { styles } from "./styles";

export const theme = extendTheme({ styles, config }) as {
  colors: Colors;
  config: typeof config;
};

export type Theme = typeof theme;
