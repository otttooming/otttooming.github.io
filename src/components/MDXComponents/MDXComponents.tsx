import * as React from 'react';
import MasonryGallery from '../MasonryGallery/MasonryGallery';
import PieChart from '../PieChart';
import Illustration from '../Illustration/';
import ImageZoom from '../Image/Image.Zoom';
import { List, ListItem, Heading, Text } from '@chakra-ui/core';

const MDXComponents = {
  MasonryGallery,
  ImageZoom,
  PieChart,
  Illustration,
  img: ImageZoom,
  h2: (props) => <Heading {...props} size="l" mt="32px" />,
  ul: (props) => <List {...props} styleType="disc" mt="16px" />,
  li: (props) => <ListItem {...props} paddingLeft="32px" mt="8px" />,
  p: (props) => <Text {...props} mt="16px" />,
};

export default MDXComponents;
