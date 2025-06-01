import { PropsWithChildren } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { ExternalLink } from 'react-feather';
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
    <GatsbyLink className={link} to={href}>
      {children}
    </GatsbyLink>
  );
};
