import { PropsWithChildren } from 'react';
import * as styles from './Layout.css';

const DetailHeader = ({ children }: PropsWithChildren) => (
  <header className={styles.detailHeader}>{children}</header>
);

const DetailSection = ({ children }: PropsWithChildren) => (
  <section className={styles.detailSection}>{children}</section>
);

const ListHeader = ({ children }: PropsWithChildren) => (
  <header className={styles.listHeader}>{children}</header>
);

const ListSection = ({ children }: PropsWithChildren) => (
  <section className={styles.listSection}>{children}</section>
);

const Cover = ({ children }: PropsWithChildren) => (
  <figure className={styles.cover}>{children}</figure>
);

export default {
  DetailHeader,
  DetailSection,
  ListHeader,
  ListSection,
  Cover,
};
