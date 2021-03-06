import * as React from 'react';
import { useColorMode, Box, IconButton } from '@chakra-ui/react';

const MoonOrSun = () => {
  const { colorMode } = useColorMode();

  /**
   * `box-shadow` requires `.1px` blur for smooth transitions.
   * Otherwise a flicker is noticable in the transition.
   * `1.px` blur does not create any discernible visual effects.
   */
  const border = {
    light: 'inset 10px -10px .1px 0 #000',
    dark: 'inset 32px -32px .1px 0 #000',
  };
  const transform = {
    light: 'scale(1) rotate(-2deg)',
    dark: 'scale(0.5) rotate(0deg)',
  };
  const transition = {
    light: 'box-shadow .5s ease 0s, transform .4s ease .1s',
    dark: 'transform .3s ease .1s, box-shadow .2s ease 0s',
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
    transition: { light: 'all .3ms ease', dark: 'transform .5s ease .15s' },
  };

  const before = {
    background: { light: 'transparent', dark: '#fff' },
    border: {
      light: '2px solid #000',
      dark: '2px solid #fff',
    },
    opacity: { light: 1, dark: 0 },
    transform: { light: 'translate(14px, -14px)', dark: 'translate(0, 0)' },
    transtion: {
      light: 'background .3s ease',
      dark: 'background .3s ease .1s',
    },
  };

  return (
    <Box
      as="span"
      position="relative"
      width="24px"
      height="24px"
      boxShadow={border[colorMode]}
      borderRadius="50%"
      transition={transition[colorMode]}
      transform={transform[colorMode]}
      _after={{
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
        transition: after.transition[colorMode],
      }}
      _before={{
        content: `""`,
        position: 'absolute',
        left: 0,
        top: 0,
        height: 'inherit',
        width: 'inherit',
        borderRadius: 'inherit',
        background: before.background[colorMode],
        transition: before.transtion[colorMode],
      }}
    />
  );
};

const DarkMode: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={<MoonOrSun />}
      onClick={toggleColorMode}
    />
  );
};

export default DarkMode;
