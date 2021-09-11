import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import React, { VFC } from "react";

const App: VFC = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box p="6">
      <Button onClick={toggleColorMode}>Change color</Button>
    </Box>
  );
};

export default App;
