import React from "react";
import ReactDOMServer from "react-dom/server";
import { html } from "vite-plugin-ssr";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

import logoUrl from "./logo.svg";
import { Root } from "./Root";
import type { PageContext } from "./types";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

export async function render(
  pageContext: PageContextBuiltIn & PageContext
): Promise<ReturnType<typeof html>> {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <Root pageContext={pageContext}>
      <Page {...pageProps} />
    </Root>
  );

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = documentProps?.title ?? "namepickr";
  const desc = documentProps?.description ?? "A wonderful name picker";

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${html.dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
