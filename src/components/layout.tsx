import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import { ThemeProvider, CSSReset, useColorMode } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { customProperties } from '../utils/customProperties';
import { theme } from '../utils/theme';
import Footer from './Footer/Footer';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { colorMode } = useColorMode();

  const backgroundColor = {
    light: '#e8eaee',
    dark: theme.backgroundColor.primary,
  };

  return (
    <ThemeProvider>
      <CSSReset />

      <Header siteTitle={data.site.siteMetadata.title} />

      <Global
        styles={css`
          ${customProperties}

          * {
            box-sizing: border-box;
          }
          html {
            font-size: 18px;
            -webkit-text-size-adjust: none;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;

            background-color: ${backgroundColor[colorMode]};
          }
          body {
            overflow-x: hidden;
            margin: 0;
            line-height: ${theme.lineHeight.m};
            font-family: ${theme.fontFamily.primary};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p {
            font-family: ${theme.fontFamily.primary} !important;
          }
        `}
      />

      <>
        <main>{children}</main>

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
