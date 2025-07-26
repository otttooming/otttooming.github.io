import NextLink from 'next/link';
import { ExternalLink } from 'react-feather';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { getIsDocument } from '../../utils/getLinkType';
import { getURISafeString } from '../../utils/getURISafeString';
import Illustration from '../Illustration/';
import MasonryGallery from '../MasonryGallery/MasonryGallery';
import { PieChart } from '../PieChart';
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
} from 'react';
import * as styles from './MDXComponents.css';

export const HeadingH2 = ({
  children,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => (
  <h2
    {...restProps}
    id={getURISafeString(children)}
    className={styles.heading2}
  >
    {children}
  </h2>
);

export const HeadingH3 = ({
  children,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => (
  <h3
    {...restProps}
    id={getURISafeString(children)}
    className={styles.heading3}
  >
    {children}
  </h3>
);

const internalOrExternalLink =
  (isPlainHrefTag: boolean) =>
  ({
    href,
    className,
    ...restProps
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (isPlainHrefTag) {
      return <a href={href} className={className} {...restProps} />;
    }

    return <NextLink href={href || ''} className={className} {...restProps} />;
  };

export const Link = ({
  children,
  href = '',
  className,
  ...restProps
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  const isExternal = getIsExternalLink(href);
  const isPlainHrefTag = [getIsDocument(href), isExternal].some(Boolean);

  const CustomLink = internalOrExternalLink(isPlainHrefTag);

  return (
    <CustomLink href={href} className={styles.link} {...restProps}>
      {children}
      {isExternal && (
        <span className={styles.externalIcon}>
          <ExternalLink width="14px" height="14px" />
        </span>
      )}
    </CustomLink>
  );
};

export const List = ({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) => (
  <ul className={`${styles.list} ${className || ''}`} {...props} />
);

export const ListItem = ({
  className,
  ...props
}: HTMLAttributes<HTMLLIElement>) => (
  <li className={`${styles.listItem} ${className || ''}`} {...props} />
);

function isImageTag(props: unknown) {
  return typeof props === 'object' && props !== null && 'src' in props;
}

export const Text = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  if (isValidElement(children) && isImageTag(children.props)) {
    return children;
  }

  return (
    <p className={`${styles.text} ${className || ''}`} {...props}>
      {children}
    </p>
  );
};

const MDXComponents = {
  MasonryGallery,
  PieChart,
  Illustration,
  h2: HeadingH2,
  h3: HeadingH3,
  ul: List,
  li: ListItem,
  p: Text,
  a: Link,
};

export default MDXComponents;
