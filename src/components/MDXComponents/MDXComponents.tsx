import {
  Box,
  Link as ChakraLink,
  List as ChakraList,
  Text as ChakraText,
  Heading,
  type LinkProps,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { ExternalLink } from 'react-feather';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { getIsDocument } from '../../utils/getLinkType';
import { getURISafeString } from '../../utils/text';
import { theme } from '../../utils/theme';
import Illustration from '../Illustration/';
import MasonryGallery from '../MasonryGallery/MasonryGallery';
import { PieChart } from '../PieChart/PieChart';
import { ComponentProps, PropsWithChildren } from 'react';

export const HeadingH2 = ({ children, ...restProps }: PropsWithChildren) => (
  <Heading
    {...restProps}
    as="h2"
    id={getURISafeString(children)}
    size="xl"
    mt="32px"
    fontWeight={theme.fontWeight.semiBold}
  >
    {children}
  </Heading>
);

export const HeadingH3 = ({ children, ...restProps }: PropsWithChildren) => (
  <Heading
    {...restProps}
    as="h3"
    id={getURISafeString(children)}
    size="lg"
    mt="32px"
    fontWeight={theme.fontWeight.semiBold}
  >
    {children}
  </Heading>
);

const internalOrExternalLink =
  (isPlainHrefTag: boolean) =>
  ({ href, ...restProps }) => {
    if (isPlainHrefTag) {
      return <a href={href} {...restProps} />;
    }

    return <GatsbyLink to={href} {...restProps} />;
  };

export const Link = ({
  children,
  href = '',
  ...restProps
}: PropsWithChildren<LinkProps>) => {
  const isExternal = getIsExternalLink(href);
  const isPlainHrefTag = [getIsDocument(href), isExternal].some(Boolean);

  return (
    <ChakraLink
      as={internalOrExternalLink(isPlainHrefTag)}
      display="inline-flex"
      alignItems="center"
      verticalAlign="middle"
      href={href}
      {...restProps}
    >
      {children}
      {isExternal && (
        <Box as="span" mx="2px" ml="4px">
          <ExternalLink width="14px" height="14px" />
        </Box>
      )}
    </ChakraLink>
  );
};

export const List = (props: ComponentProps<typeof ChakraList.Root>) => (
  <ChakraList.Root
    {...props}
    listStyleType="disc"
    paddingLeft="32px"
    mt="16px"
  />
);

export const ListItem = (props: ComponentProps<typeof ChakraList.Item>) => (
  <ChakraList.Item {...props} mt="8px" />
);

export const Text = (props: ComponentProps<typeof ChakraText>) => (
  <ChakraText {...props} mt="24px" />
);

const MDXComponents = {
  MasonryGallery,
  PieChart,
  Illustration,
  h2: HeadingH2,
  h3: HeadingH3,
  ul: List,
  li: ListItem,
  p: Text,
  a: Link,
};

export default MDXComponents;
