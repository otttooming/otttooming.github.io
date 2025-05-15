import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';
import Gtap from '../../assets/logo-gtap.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Khk from '../../assets/logo-khk.svg';
import Pethealth from '../../assets/logo-pethealth.svg';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Voog from '../../assets/logo-voog.svg';

export type LogoProps = {
  name: string;
} & BoxProps;

const Icon: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box height="16px" maxWidth="100%" {...restProps} />;
};

const Logo: React.FC<LogoProps> = ({ name, ...restProps }) => {
  if (name === 'voog') {
    return <Icon as={Voog} {...restProps} />;
  }

  if (name === 'iglu') {
    return <Icon as={Iglu} height="32px" {...restProps} />;
  }

  if (name === 'gtap') {
    return <Icon as={Gtap} {...restProps} />;
  }

  if (name === 'pipedrive') {
    return <Icon as={Pipedrive} {...restProps} />;
  }

  if (name === 'pethealth') {
    return <Icon as={Pethealth} height="32px" {...restProps} />;
  }

  if (name === 'khk') {
    return <Icon as={Khk} height="24px" {...restProps} />;
  }

  return null;
};

export default Logo;
