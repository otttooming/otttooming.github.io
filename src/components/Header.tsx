import * as React from "react"
import styled from "styled-components"
import { Wind } from "react-feather"
import { theme } from "@coterminous/ui"

const Wrapper = styled.header`
  display: flex;
  align-self: center;
  max-width: 960px;
  margin: 0 auto;
  padding: ${theme.space.l};
`

const Heading = styled.h1`
  margin: 0;
  font-size: 18px;
  margin-left: 8px;
`

const Header = ({ siteTitle }) => (
  <Wrapper style={{}}>
    <Wind />
    <Heading>OTTO</Heading>
  </Wrapper>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
