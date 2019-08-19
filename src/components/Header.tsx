import * as React from "react"
import styled from "styled-components"
import { Wind } from "react-feather"
import { theme } from "@coterminous/ui"
import { Link as GatsbyLink } from "gatsby"

const Wrapper = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: ${theme.space.l};
`
const Home = styled.div`
  display: flex;
  align-self: center;
`

const Heading = styled.h1`
  margin: 0;
  font-size: 18px;
  margin-left: 8px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  list-style: none;
`

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Home>
      <Wind />
      <Heading>OTTO</Heading>
    </Home>

    <List>
      <Item>
        <Link to="/projects">Projects</Link>
      </Item>
    </List>
  </Wrapper>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
