import { SystemStyleObject } from "@chakra-ui/system";

import { Theme } from "./theme";

export const styles = {
  global: (props: { theme: Theme }): SystemStyleObject => {
    return {
      body: {
        bg: props.theme.colors.bg,
        color: props.theme.colors.textPrimary,
      },
    };
  },
};
