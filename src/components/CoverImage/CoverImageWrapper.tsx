import * as React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { theme } from '../../utils/theme';

const CoverImageWrapper: React.FC<BoxProps> = ({ children, ...restProps }) => {
  return (
    <Box
      borderRadius={theme.borderRadius.m}
      overflow="hidden"
      boxShadow="5px 25px 40px rgba(0, 0, 0, 0.2)"
      background="#EDF2F7"
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default CoverImageWrapper;
