import React from "react";
import ReactDOM from "react-dom";
import { getPage } from "vite-plugin-ssr/client";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/types";

import { Root } from "./Root";
import type { PageContext } from "./types";

hydrate();

async function hydrate() {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <Root pageContext={pageContext}>
      <Page {...pageProps} />
    </Root>,
    document.getElementById("page-view")
  );
}
