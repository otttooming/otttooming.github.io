import styled from '@emotion/styled';
import * as React from 'react';
import { theme } from '../../utils/theme';

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  max-width: 1280px !important;
  columns: 4 300px;
  column-gap: 16px;
`;

const Item = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 16px;
  overflow: hidden;
  border-radius: ${theme.borderRadius.s};
`;

const MasonryGallery: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {React.Children.map(children, (child, i) => (
        <div>
          <Item key={i}>{child}</Item>
        </div>
      ))}
    </Wrapper>
  );
};

export default MasonryGallery;
