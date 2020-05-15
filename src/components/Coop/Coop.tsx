import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import { Box, BoxProps } from '@chakra-ui/core';

const getCompanyBgColor = (type?: string) => {
  if (type === 'iglu') {
    return '#1797d4';
  }

  if (type === 'voog') {
    return '#443DF6';
  }

  if (type === 'gtap') {
    return '#00bf9c';
  }

  return '#25292c';
};

const Company: React.FC<BoxProps & { type?: string }> = ({
  type,
  ...restProps
}) => {
  const backgroundColor = getCompanyBgColor(type);

  return (
    <Box
      backgroundColor={backgroundColor}
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
    <Box display="flex" flexDirection="row-reverse">
      <Company type="gtap">
        <Card as={Gtap} maxWidth="250px" />
      </Company>

      <Company type="voog">
        <Card as={Voog} />
      </Company>

      <Company type="iglu">
        <Card as={Iglu} maxWidth="150px" />
      </Company>

      <Company>
        <Card as={Pipedrive} maxWidth="250px" />
      </Company>
    </Box>
  );
};

export default Coop;
