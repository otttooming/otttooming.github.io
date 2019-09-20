import * as React from "react"
import styled from "styled-components"
import { Wind, BookOpen, User } from "react-feather"
import { theme, Button } from "@coterminous/ui"
import { navigate } from "gatsby"

const Wrapper = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: ${theme.space.l};
`
const Home = styled(Button)`
  font-size: 18px;
  background: transparent;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  align-self: center;
  list-style: none;
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
  }
`

const StyledButton = styled(Button)`
  background: transparent;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Home icon={<Wind />} variant="link" onClick={() => navigate("/")}>
      OTTO
    </Home>

    <List>
      <Item>
        <StyledButton
          icon={<User />}
          variant="link"
          onClick={() => navigate("/about/me")}
        >
          About
        </StyledButton>
      </Item>
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
