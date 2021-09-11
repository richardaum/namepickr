import React, { FC } from "react";

import { usePageContext } from "../renderer/usePageContext";

export const Link: FC<{
  href?: string;
  className?: string;
}> = (props) => {
  const pageContext = usePageContext();

  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");

  return <a {...props} className={className} />;
};
