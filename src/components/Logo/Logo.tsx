import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import Pethealth from '../../assets/logo-pethealth.svg';
import Khk from '../../assets/logo-khk.svg';
import { Box, Link as ChakraLink, BoxProps } from '@chakra-ui/core';

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

const Container: React.FC<{ link: string; type: string }> = ({
  children,
  link,
  type,
}) => {
  const height = getHeight(type);

  return (
    <ChakraLink
      href={link}
      height={height}
      display="block"
      color="currentColor"
    >
      {children}
    </ChakraLink>
  );
};

const Icon: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box height="100%" maxWidth="100%" {...restProps} />;
};

const Logo: React.FC<LogoProps> = ({ name, link }) => {
  if (name === 'voog') {
    return (
      <Container link={link} type={name}>
        <Icon as={Voog} />
      </Container>
    );
  }

  if (name === 'iglu') {
    return (
      <Container link={link} type={name}>
        <Icon as={Iglu} />
      </Container>
    );
  }

  if (name === 'gtap') {
    return (
      <Container link={link} type={name}>
        <Icon as={Gtap} />
      </Container>
    );
  }

  if (name === 'pipedrive') {
    return (
      <Container link={link} type={name}>
        <Icon as={Pipedrive} />
      </Container>
    );
  }

  if (name === 'pethealth') {
    return (
      <Container link={link} type={name}>
        <Icon as={Pethealth} />
      </Container>
    );
  }

  if (name === 'khk') {
    return (
      <Container link={link} type={name}>
        <Icon as={Khk} />
      </Container>
    );
  }

  return <div>Logo</div>;
};

export default Logo;
