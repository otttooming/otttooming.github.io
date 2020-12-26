import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import Pethealth from '../../assets/logo-pethealth.svg';
import Khk from '../../assets/logo-khk.svg';
import { Box, BoxProps } from '@chakra-ui/react';

export type LogoProps = {
  name: string;
} & BoxProps;

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

const Icon: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box height="16px" maxWidth="100%" {...restProps} />;
};

const Logo: React.FC<LogoProps> = ({ name, ...restProps }) => {
  const height = getHeight(name);

  if (name === 'voog') {
    return <Icon as={Voog} height={height} {...restProps} />;
  }

  if (name === 'iglu') {
    return <Icon as={Iglu} height={height} {...restProps} />;
  }

  if (name === 'gtap') {
    return <Icon as={Gtap} height={height} {...restProps} />;
  }

  if (name === 'pipedrive') {
    return <Icon as={Pipedrive} height={height} {...restProps} />;
  }

  if (name === 'pethealth') {
    return <Icon as={Pethealth} height={height} {...restProps} />;
  }

  if (name === 'khk') {
    return <Icon as={Khk} height={height} {...restProps} />;
  }

  return null;
};

export default Logo;
