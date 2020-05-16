import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import Pethealth from '../../assets/logo-pethealth.svg';
import Khk from '../../assets/logo-khk.svg';
import { Box, Link as ChakraLink, BoxProps, LinkProps } from '@chakra-ui/core';

export interface LogoProps {
  name: string;
  link: string;
}

const getHeight = (type: string) => {
  if (type === 'iglu') {
    return '32px';
  }

  if (type === 'pethealth') {
    return '32px';
  }

  if (type === 'khk') {
    return '24px';
  }

  return '16px';
};

const Link: React.FC<LinkProps> = ({ ...restProps }) => (
  <ChakraLink display="block" color="currentColor" {...restProps} />
);

const Icon: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box height="100%" maxWidth="100%" {...restProps} />;
};

const Logo: React.FC<LogoProps> = ({ name, link }) => {
  const commonProps = {
    height: getHeight(name),
  };

  if (name === 'voog') {
    return (
      <Link {...commonProps} href={link}>
        <Icon as={Voog} />
      </Link>
    );
  }

  if (name === 'iglu') {
    return (
      <Link {...commonProps} href={link}>
        <Icon as={Iglu} />
      </Link>
    );
  }

  if (name === 'gtap') {
    return (
      <Link {...commonProps} href={link}>
        <Icon as={Gtap} />
      </Link>
    );
  }

  if (name === 'pipedrive') {
    return (
      <Link {...commonProps} href={link}>
        <Icon as={Pipedrive} />
      </Link>
    );
  }

  if (name === 'pethealth') {
    return (
      <Link {...commonProps} href={link}>
        <Icon as={Pethealth} />
      </Link>
    );
  }

  if (name === 'khk') {
    return (
      <Link {...commonProps} href={link}>
        <Icon as={Khk} />
      </Link>
    );
  }

  return <div>Logo</div>;
};

export default Logo;
