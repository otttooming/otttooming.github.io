import * as React from 'react';
import { useColorMode, Button, PseudoBox } from '@chakra-ui/core';

const MoonOrSun = () => {
  const { colorMode } = useColorMode();

  const border = { light: '2px solid #000', dark: '4px solid #fff' };
  const background = { light: '#000', dark: '#fff' };
  const overflow = { light: 'hidden', dark: 'visible' };
  const transform = {
    light: 'scale(1)',
    dark: 'scale(0.55)',
  };

  const boxShadow = (color: string) => `
    0 -23px 0 ${color},
    0 23px 0 ${color},
    23px 0 0 ${color},
    -23px 0 0 ${color},
    15px 15px 0 ${color},
    -15px 15px 0 ${color},
    15px -15px 0 ${color},
    -15px -15px 0 ${color}
  `;

  const after = {
    boxShadow: { light: boxShadow('#000'), dark: boxShadow('#fff') },
    transform: { light: 'scale(0)', dark: 'scale(1)' },
  };

  const before = {
    border: {
      light: '2px solid #000',
      dark: '2px solid #fff',
    },
    opacity: { light: 1, dark: 0 },
    transform: { light: 'translate(14px, -14px)', dark: 'translate(0, 0)' },
  };

  return (
    <PseudoBox
      as="span"
      position="relative"
      width="24px"
      height="24px"
      border={border[colorMode]}
      borderRadius="50%"
      transition="all 0.45s ease"
      background={background[colorMode]}
      transform={transform[colorMode]}
      overflow={overflow[colorMode]}
      _after={{
        // eslint-disable-next-line
        // @ts-ignore-next-line
        content: `""`,
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        margin: '-4px 0 0 -4px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        boxShadow: after.boxShadow[colorMode],
        transform: after.transform[colorMode],
        transition: 'all 0.35s ease',
      }}
      _before={{
        // eslint-disable-next-line
        // @ts-ignore-next-line
        content: `""`,
        position: 'absolute',
        right: '-9px',
        top: '-9px',
        height: '24px',
        width: '24px',
        border: before.border[colorMode],
        borderRadius: '50%',
        transform: before.transform[colorMode],
        opacity: before.opacity[colorMode],
        transition: 'transform 0.45s ease',
      }}
    />
  );
};

const MoonMask = () => {
  const { colorMode } = useColorMode();

  const background = { light: '#EDF2F7', dark: '#000' };
  const transform = {
    light: 'translate(0, 0)',
    dark: 'translate(14px, -14px)',
  };
  const opacity = { light: 1, dark: 0 };

  return (
    <PseudoBox
      as="span"
      position="absolute"
      right="-1px"
      top="-8px"
      height="24px"
      width="24px"
      borderRadius="50%"
      border="0"
      transition="transform 0.45s ease"
      background={background[colorMode]}
      transform={transform[colorMode]}
      opacity={opacity[colorMode]}
    />
  );
};

const DarkMode: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      <PseudoBox
        as="span"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="40px"
        height="25px"
      >
        <MoonOrSun />
        <MoonMask />
      </PseudoBox>
    </Button>
  );
};

export default DarkMode;
