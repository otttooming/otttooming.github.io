import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import { Box, BoxProps, Link as ChakraLink, LinkProps } from '@chakra-ui/core';

const Company: React.FC<BoxProps> = ({ ...restProps }) => {
  return (
    <Box
      as="li"
      height="200px"
      width="300px"
      marginRight="8px"
      transform="rotateX(65deg) rotateZ(-45deg) translate3d(0, 0, 0)"
      borderRadius="16px"
      marginLeft="-100px"
      transition="transform 500ms"
      position="relative"
      zIndex={1}
      color="#fff"
      {...restProps}
    />
  );
};

const Link: React.FC<LinkProps> = ({ ...restProps }) => {
  return (
    <ChakraLink
      position="absolute"
      top={0}
      bottom={0}
      right={0}
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      target="_blank"
      rel="noopener noreferrer"
      {...restProps}
    />
  );
};

const Card: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box width="100%" maxHeight="100%" maxWidth="200px" {...restProps} />;
};

const Coop: React.FC = () => {
  return (
    <Box
      as="ol"
      display="flex"
      flexDirection="row-reverse"
      listStyleType="none"
    >
      <Company backgroundColor="#00bf9c">
        <Link href="https://play.ee/">
          <Card as={Gtap} maxWidth="250px" />
        </Link>
      </Company>

      <Company backgroundColor="#443DF6">
        <Link href="https://www.voog.com/">
          <Card as={Voog} />
        </Link>
      </Company>

      <Company backgroundColor="#1797d4">
        <Link href="https://www.iglu.ee/">
          <Card as={Iglu} maxWidth="150px" />
        </Link>
      </Company>

      <Company backgroundColor="#25292c">
        <Link href="https://www.pipedrive.com/">
          <Card as={Pipedrive} maxWidth="250px" />
        </Link>
      </Company>
    </Box>
  );
};

export default Coop;
