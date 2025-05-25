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

const ColumnWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-rows: max-content;
`;

const Item = styled.div`
  overflow: hidden;
  border-radius: ${theme.borderRadius.s};
`;

const MIN_WIDTH = 300;

const Column = ({ children }: PropsWithChildren) => (
  <ColumnWrapper>
    {Children.map(children, (child) => (
      <Item>
        <ImageZoom>{child}</ImageZoom>
      </Item>
    ))}
  </ColumnWrapper>
);

const MasonryGallery = ({ children }: PropsWithChildren) => {
  const childrenCount = Children.count(children);
  const ref = useRef(null);
  const [numCols, setNumCols] = useState(3);

  const columns = Array.from(Array(numCols), () => []);

  Children.toArray(children).forEach((child, index) => {
    columns[index % numCols].push(child);
  });

  useEffect(() => {
    const calcNumCols = () => {
      const possibleColumns =
        Math.floor(ref.current.offsetWidth / MIN_WIDTH) || 1;
      const optimalColumns =
        possibleColumns > childrenCount ? childrenCount : possibleColumns;

      setNumCols(optimalColumns);
    };

    calcNumCols();

    const controller = new AbortController();

    window.addEventListener('resize', calcNumCols, {
      signal: controller.signal,
    });

    return () => controller.abort();
  }, [childrenCount]);

  return (
    <Wrapper ref={ref}>
      {columns.map((child, i) => (
        <Column key={i}>{child}</Column>
      ))}
    </Wrapper>
  );
};

export default MasonryGallery;
