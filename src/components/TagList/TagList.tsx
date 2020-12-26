import * as React from 'react';
import { theme } from '../../utils/theme';
import { Button, Box } from '@chakra-ui/react';
import { Tag as TagProps } from './tagMap';
import { Link as GatsbyLink } from 'gatsby';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { ExternalLink } from 'react-feather';

export interface TagListProps {
  tags: TagProps[];
}

const link = (to: string) => ({ ...restProps }) => {
  const isExternal = getIsExternalLink(to);

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...restProps} />
    );
  }

  return <GatsbyLink to={to} {...restProps} />;
};

const Tag: React.FC<TagProps> = ({ title, url }) => {
  const rightIcon = getIsExternalLink(url) ? (
    <ExternalLink width="14px" height="14px" />
  ) : null;

  return (
    <Box as="li" listStyleType="none" display="inline-flex">
      <Button as={link(url)} mr={theme.space.s} size="xs" rightIcon={rightIcon}>
        {title}
      </Button>
    </Box>
  );
};

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <Box as="ul" my={theme.space.m} mx="auto" p="0">
      {tags.map((item) => (
        <Tag key={item.title} {...item} />
      ))}
    </Box>
  );
};

export default TagList;
