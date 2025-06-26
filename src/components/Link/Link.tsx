import { PropsWithChildren } from 'react';
import { ExternalLink } from 'react-feather';
import NextLink from 'next/link';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { linkRecipe, rightIcon } from './Link.css';

type Props = {
  href: string;
  variant?: 'base' | 'button';
};

export const Link = ({
  children,
  href,
  variant = 'base',
}: PropsWithChildren<Props>) => {
  const isExternal = getIsExternalLink(href);
  const className = linkRecipe({ variant });

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}

        <ExternalLink className={rightIcon} />
      </a>
    );
  }

  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};
