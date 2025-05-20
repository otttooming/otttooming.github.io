import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const Illustration = ({ children }: PropsWithChildren) => {
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
