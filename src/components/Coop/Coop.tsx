import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import { Box, BoxProps, Link as ChakraLink, LinkProps } from '@chakra-ui/core';

const Company: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box as="li" {...restProps} />;
};

const Link: React.FC<LinkProps> = ({ ...restProps }) => {
  return (
    <ChakraLink
      height="128px"
      mx="16px"
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
  return <Box width="200px" maxHeight="100%" {...restProps} />;
};

const Coop: React.FC = () => {
  return (
    <Box
      as="ol"
      display="flex"
      justifyContent="center"
      flexDirection="row-reverse"
      flexWrap="wrap"
      listStyleType="none"
      mt="64px"
    >
      <Company>
        <Link href="https://play.ee/">
          <Card as={Gtap} maxWidth="250px" />
        </Link>
      </Company>

      <Company>
        <Link href="https://www.voog.com/">
          <Card as={Voog} maxWidth="150px" />
        </Link>
      </Company>

      <Company>
        <Link href="https://www.iglu.ee/">
          <Card as={Iglu} maxWidth="150px" />
        </Link>
      </Company>

      <Company>
        <Link href="https://www.pipedrive.com/">
          <Card as={Pipedrive} maxWidth="250px" />
        </Link>
      </Company>
    </Box>
  );
};

export default Coop;
