import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
import ImageZoom from '../Image/Image.Zoom';
import {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

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

const MIN_WIDTH = 300;

const MasonryGallery = ({ children }: PropsWithChildren) => {
  const childrenCount = Children.count(children);

  const cols = [];
  const ref = useRef(null);
  const [numCols, setNumCols] = useState(3);

  const createCols = () => {
    for (let i = 0; i < numCols; i++) cols[i] = [];

    Children.forEach(children, (child, i) =>
      cols[i % numCols].push(
        <Item key={i}>
          <ImageZoom>{child} </ImageZoom>
        </Item>,
      ),
    );
  };

  useEffect(() => {
    const calcNumCols = () => {
      const possibleColumns =
        Math.floor(ref.current.offsetWidth / MIN_WIDTH) || 1;
      const optimalColumns =
        possibleColumns > childrenCount ? childrenCount : possibleColumns;

      setNumCols(optimalColumns);
    };

    calcNumCols();

    window.addEventListener('resize', calcNumCols);

    return () => window.removeEventListener('resize', calcNumCols);
  }, [childrenCount]);

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
