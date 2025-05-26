import { Box, type BoxProps } from '@chakra-ui/react';
import * as styles from './CoverImageWrapper.css';

const CoverImageWrapper = ({ children, ...restProps }: BoxProps) => {
  return (
    <Box className={styles.wrapper} {...restProps}>
      {children}
    </Box>
  );
};

export default CoverImageWrapper;
