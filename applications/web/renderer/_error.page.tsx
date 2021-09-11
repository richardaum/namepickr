import React, { FC } from "react";

type Props = {
  is404: boolean;
};

export const Page: FC<Props> = ({ is404 }) => {
  if (is404) {
    return (
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    );
  } else {
    return (
      <>
        <h1>500 Internal Server Error</h1>
        <p>Something went wrong.</p>
      </>
    );
  }
};