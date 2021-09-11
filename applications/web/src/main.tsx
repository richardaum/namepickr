import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import { AppThemeProvider } from "./theme/AppThemeProvider";
import { nest } from "./utils/nest";

const Providers = nest(React.StrictMode, AppThemeProvider);

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
