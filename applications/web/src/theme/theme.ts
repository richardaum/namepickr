import { extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { styles } from "./styles";

export const theme = extendTheme(
  { styles, config, colors, components },
  withDefaultColorScheme({ colorScheme: "brand" })
) as Theme;

export type { Theme };
