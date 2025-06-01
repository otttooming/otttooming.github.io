import { Box } from '@chakra-ui/react';
import { theme } from '../../utils/theme.css';
import type { Tag as TagProps } from './tagMap';
import { Link } from '../Link/Link';

export interface TagListProps {
  tags: TagProps[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <Box as="ul" my={theme.space.m} mx="auto" p="0">
      {tags.map(({ title, url }) => (
        <Box key={title} as="li" listStyleType="none" display="inline-flex">
          <Link href={url}>{title}</Link>
        </Box>
      ))}
    </Box>
  );
};

export default TagList;
