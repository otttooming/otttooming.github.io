import * as React from 'react';
import { Wind, BookOpen, User } from 'react-feather';
import { Link as GatsbyLink } from 'gatsby';
import { Button, Box, BoxProps } from '@chakra-ui/core';
import { theme } from '../utils/theme';
import DarkMode from './DarkMode/DarkMode';

const Item: React.FC<BoxProps> = ({ ...restProps }) => (
  <Box
    as="li"
    display="flex"
    alignSelf="center"
    listStyleType="none"
    ml="24px"
    {...restProps}
  />
);

const link = (to: string) => ({ ...restProps }) => (
  <GatsbyLink to={to} {...restProps} />
);

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    display="flex"
    alignSelf="center"
    justifyContent="space-between"
    maxWidth="960px"
    m="0 auto"
    p={theme.space.l}
  >
    <Button as={link('/')} leftIcon={Wind} variant="ghost">
      Ott
    </Button>

    <nav role="navigation">
      <Box as="ol" display="flex" m="0" p="0">
        <Item>
          <Button as={link('/about/me')} leftIcon={User} variant="ghost">
            About
          </Button>
        </Item>

        <Item>
          <Button as={link('/projects')} leftIcon={BookOpen} variant="ghost">
            Projects
          </Button>
        </Item>

        <Item>
          <DarkMode />
        </Item>
      </Box>
    </nav>
  </Box>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
