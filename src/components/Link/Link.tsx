import { PropsWithChildren } from 'react';
import { ExternalLink } from 'react-feather';
import NextLink from 'next/link';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { link, rightIcon } from './Link.css';

type Props = {
  href: string;
};

export const Link = ({ children, href }: PropsWithChildren<Props>) => {
  const isExternal = getIsExternalLink(href);

  if (isExternal) {
    return (
      <a className={link} href={href} target="_blank" rel="noopener noreferrer">
        {children}

        <ExternalLink className={rightIcon} />
      </a>
    );
  }

  return (
    <NextLink href={href} className={link}>
      {children}
    </NextLink>
  );
};
