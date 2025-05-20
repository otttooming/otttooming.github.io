import { Box, type BoxProps, Button } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Link as GatsbyLink } from 'gatsby';
import { BookOpen, Tool, User, Wind } from 'react-feather';
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

const link =
  (to: string) =>
  ({ ...restProps }) => <GatsbyLink to={to} {...restProps} />;

const Header: React.FC = () => (
  <Box
    as="header"
    display="flex"
    alignSelf="center"
    justifyContent="space-between"
    maxWidth="1024px"
    m="0 auto"
    paddingY={theme.space.l}
    paddingX={[theme.space.s, theme.space.s, theme.space.l]}
    overflow="scroll hidden"
    css={css`
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0px;
      }
    `}
  >
    <p>
      <Button as={link('/')} variant="ghost">
        <Wind />
        Ott
      </Button>
    </p>

    <nav>
      <Box as="ol" display="flex" m="0" p="0">
        <Item>
          <Button as={link('/about/me')} variant="ghost">
            <User />
            About
          </Button>
        </Item>

        <Item>
          <Button as={link('/technologies')} variant="ghost">
            <Tool />
            Tech
          </Button>
        </Item>

        <Item>
          <Button as={link('/projects')} variant="ghost">
            <BookOpen />
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

export default Header;
