import React, { ComponentType, ReactElement } from "react";

export const nest =
  <TProps extends { children: ReactElement }>(
    ...components: ComponentType<TProps>[]
  ) =>
  (props: TProps): JSX.Element =>
    components.reduce(
      (children, Current) => <Current {...props}>{children}</Current>,
      props.children
    );
