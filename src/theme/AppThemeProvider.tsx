import {
  ChakraProvider,
  ColorMode as IColorMode,
  useColorMode,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState, VFC } from "react";

import { colors } from "./colors";
import { theme } from "./theme";

const ColorMode: VFC<{ onChange(colorMode: IColorMode): void }> = ({
  onChange,
}) => {
  const { colorMode } = useColorMode();
  useEffect(() => {
    onChange?.(colorMode);
  }, [colorMode]);
  return null;
};

export const AppThemeProvider: FC = (props) => {
  const [colorMode, setColorMode] = useState<IColorMode>(
    theme.config.initialColorMode
  );

  return (
    <ChakraProvider
      {...props}
      resetCSS
      theme={{
        ...theme,
        colors: { ...theme.colors, ...colors[colorMode] },
      }}
    >
      <ColorMode onChange={setColorMode} />
      {props.children}
    </ChakraProvider>
  );
};
