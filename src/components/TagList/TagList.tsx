import * as React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
import { Button } from '@chakra-ui/core';
import { Tag } from './tagMap';
import { Link as GatsbyLink } from 'gatsby';
import { getIsExternalLink } from '../../utils/getIsExternalLink';

export interface TagListProps {
  tags: Tag[];
}

const Wrapper = styled.ul`
  margin: ${theme.space.m} auto;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: inline-flex;
`;

const link = (to: string) => ({ ...restProps }) => {
  const isExternal = getIsExternalLink(to);

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...restProps} />
    );
  }

  return <GatsbyLink to={to} {...restProps} />;
};

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <Wrapper>
      {tags.map((item) => (
        <Item key={item.title}>
          <Button
            as={link(item.url)}
            mr={theme.space.s}
            size="xs"
            rightIcon={getIsExternalLink(item.url) ? 'external-link' : null}
          >
            {item.title}
          </Button>
        </Item>
      ))}
    </Wrapper>
  );
};

export default TagList;
