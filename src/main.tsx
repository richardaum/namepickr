import "./index.css";

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { nest } from "./nest";
import { AppThemeProvider } from "./theme/AppThemeProvider";

const Providers = nest(React.StrictMode, AppThemeProvider);

ReactDOM.render(
  <>
    <Providers>
      <App />
    </Providers>
  </>,
  document.getElementById("root")
);
