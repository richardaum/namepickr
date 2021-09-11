import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import React, { VFC } from "react";

export const Page: VFC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box p="6">
      <Button variant="solid" onClick={toggleColorMode}>
        Change color
      </Button>
    </Box>
  );
};
