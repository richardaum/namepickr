import React, { FC } from "react";
import { createSafeContext } from "react-safe-context";

import type { PageContext } from "./types";

const Context = createSafeContext<PageContext>("Page");

export const PageContextProvider: FC<{
  pageContext: PageContext;
}> = ({ pageContext, children }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = Context.useValue;
