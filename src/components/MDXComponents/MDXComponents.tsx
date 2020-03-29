import * as React from 'react';
import MasonryGallery from '../MasonryGallery/MasonryGallery';
import PieChart from '../PieChart';
import Illustration from '../Illustration/';
import ImageZoom from '../Image/Image.Zoom';
import {
  List as ChakraList,
  ListItem as ChakraListItem,
  Heading,
  Text as ChakraText,
} from '@chakra-ui/core';

export const HeadingH2: React.FC = (props) => (
  <Heading {...props} as="h2" size="lg" mt="32px" />
);

export const List: React.FC = (props) => (
  <ChakraList {...props} styleType="disc" mt="16px" />
);

export const ListItem: React.FC = (props) => (
  <ChakraListItem {...props} paddingLeft="32px" mt="8px" />
);

export const Text: React.FC = (props) => <ChakraText {...props} mt="16px" />;

const MDXComponents = {
  MasonryGallery,
  ImageZoom,
  PieChart,
  Illustration,
  img: ImageZoom,
  h2: HeadingH2,
  ul: List,
  li: ListItem,
  p: Text,
};

export default MDXComponents;
