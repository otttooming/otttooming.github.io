import * as React from "react"
import styled from "@emotion/styled"
import { Wind, BookOpen, User } from "react-feather"
import { navigate } from "gatsby"
import { Button } from "@chakra-ui/core"
import { theme } from "../utils/theme"

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
    <Home leftIcon={Wind} variant="link" onClick={() => navigate("/")}>
      OTTO
    </Home>

    <List>
      <Item>
        <StyledButton
          leftIcon={User}
          variant="ghost"
          onClick={() => navigate("/about/me")}
        >
          About
        </StyledButton>
      </Item>
      <Item>
        <StyledButton
          leftIcon={BookOpen}
          variant="ghost"
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
