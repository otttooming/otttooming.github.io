import * as React from 'react';
import { Wind, BookOpen, User } from 'react-feather';
import { navigate } from 'gatsby';
import { Button, Box, BoxProps } from '@chakra-ui/core';
import { theme } from '../utils/theme';
import DarkMode from './DarkMode/DarkMode';

const Item: React.FC<BoxProps> = ({ ...restProps }) => (
  <Box
    display="flex"
    alignSelf="center"
    listStyleType="none"
    ml="24px"
    {...restProps}
  />
);

const Header = ({ siteTitle }) => (
  <Box
    display="flex"
    alignSelf="center"
    justifyContent="space-between"
    maxWidth="960px"
    m="0 auto"
    p={theme.space.l}
  >
    <Button leftIcon={Wind} variant="link" onClick={() => navigate('/')}>
      OTTO
    </Button>

    <Box display="flex" m="0" p="0">
      <Item>
        <Button
          leftIcon={User}
          variant="ghost"
          onClick={() => navigate('/about/me')}
        >
          About
        </Button>
      </Item>

      <Item>
        <Button
          leftIcon={BookOpen}
          variant="ghost"
          onClick={() => navigate('/projects')}
        >
          Projects
        </Button>
      </Item>

      <Item>
        <DarkMode />
      </Item>
    </Box>
  </Box>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
