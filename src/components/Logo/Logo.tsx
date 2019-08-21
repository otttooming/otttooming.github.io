import * as React from "react"
import Pipedrive from "../../assets/logo-pipedrive.svg"
import Iglu from "../../assets/logo-iglu.svg"
import Voog from "../../assets/logo-voog.svg"
import Gtap from "../../assets/logo-gtap.svg"
import styled from "styled-components"

export interface LogoProps {
  name: string
}

const Wrapper = styled.div``

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: currentColor;
  height: 16px;

  > svg {
    height: 100%;
    max-width: 100%;
  }
`

const Container = ({ children, link }) => (
  <Wrapper>
    <Link href={link}>{children}</Link>
  </Wrapper>
)

const Logo: React.FC<LogoProps> = ({ name }) => {
  if (name === "voog") {
    return (
      <Container link="https://www.voog.com">
        <Voog />
      </Container>
    )
  }

  return <div>Logo</div>
}

export default Logo
