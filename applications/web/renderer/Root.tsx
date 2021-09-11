import "./Root.css";

import React, { FC } from "react";
import { ReactElement } from "react";

import { AppThemeProvider } from "../theme/AppThemeProvider";
import { nest } from "../utils/nest";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

const Providers = nest<{ pageContext: PageContext; children: ReactElement }>(
  React.StrictMode,
  (props) => <PageContextProvider {...props} />,
  AppThemeProvider
);

export const Root: FC<{ pageContext: PageContext }> = ({
  children,
  pageContext,
}) => {
  return (
    <Providers pageContext={pageContext}>
      <>{children}</>
    </Providers>
  );
};
