import * as React from 'react';
import { Box } from '@chakra-ui/react';

const Illustration: React.FC = ({ children }) => {
  return (
    <Box
      mt="160px"
      mb="64px"
      display="flex"
      justifyContent="center"
      backgroundColor="#fff"
      borderRadius="8px"
      padding="64px"
      maxWidth="1280px !important"
    >
      <Box maxWidth="480px">{children}</Box>
    </Box>
  );
};

export default Illustration;
