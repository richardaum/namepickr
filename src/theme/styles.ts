import { mode, Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: (props) => {
    return {
      body: {
        color: mode("brand.900", "brand.100")(props),
        bg: mode("brand.100", "brand.900")(props),
      },
    };
  },
};
