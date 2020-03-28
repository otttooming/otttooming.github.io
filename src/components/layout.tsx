/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { Global, css } from "@emotion/core"
import { customProperties } from "../utils/customProperties"
import { theme } from "../utils/theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
          }
          body {
            overflow-x: hidden;
            margin: 0;
            line-height: ${theme.lineHeight.s};
            font-family: ${theme.fontFamily.primary};
            color: ${theme.textColor.primary};
            background-color: ${theme.backgroundColor.primary};
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
        <footer></footer>
      </>
    </ThemeProvider>
  )
}

export default Layout
