import styled from '@emotion/styled';
import * as React from 'react';
import { theme } from '../../utils/theme';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  margin-top: 80px;
  margin-bottom: 80px;
  max-width: 1280px !important;
`;

const Column = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-rows: max-content;
`;

const Item = styled.div`
  overflow: hidden;
  border-radius: ${theme.borderRadius.s};
`;

const MasonryGallery: React.FC = ({ children }) => {
  const minWidth = 300;
  const cols = [];
  const ref = React.useRef(null);
  const [numCols, setNumCols] = React.useState(3);

  const calcNumCols = () =>
    setNumCols(Math.floor(ref.current.offsetWidth / minWidth));

  const createCols = () => {
    for (let i = 0; i < numCols; i++) cols[i] = [];

    React.Children.forEach(children, (child, i) =>
      cols[i % numCols].push(<Item key={i}>{child}</Item>)
    );
  };

  React.useEffect(() => {
    calcNumCols();
    window.addEventListener('resize', calcNumCols);
    return () => window.removeEventListener('resize', calcNumCols);
  });
  createCols();

  return (
    <Wrapper ref={ref}>
      {Array(numCols)
        .fill(null)
        .map((el, i) => (
          <Column key={i}>{cols[i]}</Column>
        ))}
    </Wrapper>
  );
};

export default MasonryGallery;
