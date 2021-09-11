import {
  ChakraProvider,
  ColorMode as IColorMode,
  useColorMode,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState, VFC } from "react";

import { config } from "./config";
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
  const [, setColorMode] = useState<IColorMode>(config.initialColorMode);

  return (
    <ChakraProvider {...props} resetCSS theme={theme}>
      <ColorMode onChange={setColorMode} />
      {props.children}
    </ChakraProvider>
  );
};
