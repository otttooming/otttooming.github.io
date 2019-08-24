import * as React from "react"
import styled from "styled-components"
import { Wind, BookOpen } from "react-feather"
import { theme, Button } from "@coterminous/ui"
import { Link as GatsbyLink, navigate } from "gatsby"

const Wrapper = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: ${theme.space.l};
`
const Home = styled(GatsbyLink)`
  display: flex;
  align-self: center;
  color: inherit;
  text-decoration: none;
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
  display: flex;
  align-self: center;
  list-style: none;
`

const StyledButton = styled(Button)`
  background: transparent;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Home to="/">
      <Wind />
      <Heading>OTTO</Heading>
    </Home>

    <List>
      <Item>
        <StyledButton
          icon={<BookOpen />}
          variant="link"
          onClick={() => navigate("/projects")}
        >
          Projects
        </StyledButton>
      </Item>
    </List>
  </Wrapper>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
