import { PropsWithChildren } from 'react';
import { ExternalLink } from 'react-feather';
import NextLink from 'next/link';
import { getIsExternalLink } from '../../utils/getIsExternalLink';
import { linkRecipe, rightIcon } from './Link.css';

type Props = {
  href: string;
  variant?: 'base' | 'plainExternal' | 'button';
};

const External = ({
  children,
  ...restProps
}: PropsWithChildren<React.ComponentProps<'a'>>) => {
  return (
    <a {...restProps} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export const Link = ({
  children,
  href,
  variant = 'base',
}: PropsWithChildren<Props>) => {
  if (variant === 'plainExternal') {
    return (
      <External className={linkRecipe({ variant: 'base' })} href={href}>
        {children}
      </External>
    );
  }

  if (getIsExternalLink(href)) {
    return (
      <External className={linkRecipe({ variant })} href={href}>
        {children}

        <ExternalLink className={rightIcon} />
      </External>
    );
  }

  return (
    <NextLink href={href} className={linkRecipe({ variant })}>
      {children}
    </NextLink>
  );
};
