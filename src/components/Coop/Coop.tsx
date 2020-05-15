import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import { Box, BoxProps } from '@chakra-ui/core';

const Company: React.FC<BoxProps> = ({ ...restProps }) => {
  return (
    <Box
      as="li"
      height="200px"
      width="300px"
      marginRight="8px"
      transform="rotateX(65deg) rotateZ(-45deg) translate3d(0, 0, 0)"
      borderRadius="16px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginLeft="-100px"
      transition="transform 500ms"
      position="relative"
      zIndex={1}
      color="#fff"
      {...restProps}
    />
  );
};

const Card: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box width="100%" maxHeight="100%" maxWidth="200px" {...restProps} />;
};

const Coop: React.FC = () => {
  return (
    <Box as="ol" display="flex" flexDirection="row-reverse">
      <Company backgroundColor="#00bf9c">
        <Card as={Gtap} maxWidth="250px" />
      </Company>

      <Company backgroundColor="#443DF6">
        <Card as={Voog} />
      </Company>

      <Company backgroundColor="#1797d4">
        <Card as={Iglu} maxWidth="150px" />
      </Company>

      <Company backgroundColor="#25292c">
        <Card as={Pipedrive} maxWidth="250px" />
      </Company>
    </Box>
  );
};

export default Coop;
