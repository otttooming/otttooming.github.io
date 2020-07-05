import * as React from 'react';
import MasonryGallery from '../MasonryGallery/MasonryGallery';
import PieChart from '../PieChart';
import Illustration from '../Illustration/';
import ImageZoom from '../Image/Image.Zoom';
import {
  List as ChakraList,
  ListItem as ChakraListItem,
  Heading,
  Icon,
  Link as ChakraLink,
  Text as ChakraText,
  LinkProps,
} from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import { theme } from '../../utils/theme';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { getIsDocument } from '../../utils/getLinkType';
import { getURISafeString } from '../../utils/text';

export const HeadingH2: React.FC = ({ children, ...restProps }) => (
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

export const HeadingH3: React.FC = ({ children, ...restProps }) => (
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

const internalOrExternalLink = (
  isPlainHrefTag: boolean
): React.FC<LinkProps> => ({ href, ...restProps }) => {
  if (isPlainHrefTag) {
    return <a href={href} {...restProps} />;
  }

  return <GatsbyLink to={href} {...restProps} />;
};

export const Link: React.FC<LinkProps> = ({
  children,
  href = '',
  ...restProps
}) => {
  const isExternal = getIsExternalLink(href);
  const isPlainHrefTag = [getIsDocument(href), isExternal].some(Boolean);

  return (
    <ChakraLink
      as={internalOrExternalLink(isPlainHrefTag)}
      display="inline-flex"
      alignItems="center"
      isExternal={isExternal}
      href={href}
      {...restProps}
    >
      {children}
      {isExternal && (
        <Icon size="14px" name="external-link" mx="2px" ml="4px" />
      )}
    </ChakraLink>
  );
};

export const List: React.FC = (props) => (
  <ChakraList {...props} styleType="disc" mt="16px" />
);

export const ListItem: React.FC = (props) => (
  <ChakraListItem {...props} paddingLeft="32px" mt="8px" />
);

export const Text: React.FC = (props) => <ChakraText {...props} mt="24px" />;

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
