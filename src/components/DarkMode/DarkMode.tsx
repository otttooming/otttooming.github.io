import * as React from 'react';
import { useColorMode, Button, PseudoBox } from '@chakra-ui/core';

const MoonOrSun = () => {
  const { colorMode } = useColorMode();

  const border = {
    light: 'inset 10px -10px 0 0 #000',
    dark: 'inset 10px -10px 0 0 #fff',
  };
  const overflow = { light: 'hidden', dark: 'visible' };
  const transform = {
    light: 'scale(1)',
    dark: 'scale(0.55)',
  };

  const background = { light: 'transparent', dark: '#fff' };

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
      background={background[colorMode]}
      boxShadow={border[colorMode]}
      borderRadius="50%"
      transition="box-shadow .5s ease 0s, background .5s ease 0s, transform .4s ease .1s"
      transform={transform[colorMode]}
      overflow={overflow[colorMode]}
      _after={{
        // eslint-disable-next-line
        // @ts-ignore-next-line
        content: `""`,
        width: '8px',
        height: '8px',
        borderRadius: 'inherit',
        margin: '-4px 0 0 -4px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        boxShadow: after.boxShadow[colorMode],
        transform: after.transform[colorMode],
        transition: 'all 0.25s ease',
      }}
      _before={{
        // eslint-disable-next-line
        // @ts-ignore-next-line
        content: `""`,
        position: 'absolute',
        height: 'inherit',
        width: 'inherit',
        border: before.border[colorMode],
        borderRadius: 'inherit',
        transform: before.transform[colorMode],
        opacity: before.opacity[colorMode],
        transition: 'transform 0.45s ease',
      }}
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
      </PseudoBox>
    </Button>
  );
};

export default DarkMode;
