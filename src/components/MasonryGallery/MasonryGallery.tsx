'use client';

import {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import ImageZoom from '../Image/Image.Zoom';
import * as styles from './MasonryGallery.css';

const MIN_WIDTH = 300;

const Column = ({ children }: PropsWithChildren) => (
  <div className={styles.columnWrapper}>
    {Children.map(children, (child) => (
      <div className={styles.item}>
        <ImageZoom>{child}</ImageZoom>
      </div>
    ))}
  </div>
);

const MasonryGallery = ({ children }: PropsWithChildren) => {
  const childrenCount = Children.count(children);
  const ref = useRef<HTMLDivElement>(null);
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
    <div ref={ref} className={styles.wrapper}>
      {columns.map((child, i) => (
        <Column key={i}>{child}</Column>
      ))}
    </div>
  );
};

export default MasonryGallery;
