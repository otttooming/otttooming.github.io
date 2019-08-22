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

  ${({ type }) => (type === "iglu" ? "height: 32px;" : "")}

  > svg {
    height: 100%;
    max-width: 100%;
  }
`

const Container: React.FC<{ link: string; type: string }> = ({
  children,
  link,
  type,
}) => (
  <Wrapper>
    <Link type={type} href={link}>
      {children}
    </Link>
  </Wrapper>
)

const Logo: React.FC<LogoProps> = ({ name }) => {
  if (name === "voog") {
    return (
      <Container link="https://www.voog.com" type={name}>
        <Voog />
      </Container>
    )
  }

  if (name === "iglu") {
    return (
      <Container link="https://iglu.ee" type={name}>
        <Iglu />
      </Container>
    )
  }

  return <div>Logo</div>
}

export default Logo
