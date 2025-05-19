import { Box, type BoxProps } from '@chakra-ui/react';

const Wrapper = ({ ...restProps }: React.PropsWithChildren<BoxProps>) => (
  <Box maxWidth="960px" m="80px auto" px="16px" {...restProps} />
);

export const About = {
  Wrapper,
};
