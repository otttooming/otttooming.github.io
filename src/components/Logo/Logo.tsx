import * as React from "react"
import Pipedrive from "../../assets/logo-pipedrive.svg"
import Iglu from "../../assets/logo-iglu.svg"
import Voog from "../../assets/logo-voog.svg"
import Gtap from "../../assets/logo-gtap.svg"
import Pethealth from "../../assets/logo-pethealth.svg"
import Khk from "../../assets/logo-khk.svg"
import styled from "@emotion/styled"

export interface LogoProps {
  name: string
  link: string
}

const Wrapper = styled.div``

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: currentColor;
  height: 16px;

  ${({ type }) => (type === "iglu" ? "height: 32px;" : "")}
  ${({ type }) => (type === "pethealth" ? "height: 32px;" : "")}
  ${({ type }) => (type === "khk" ? "height: 24px;" : "")}

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

const Logo: React.FC<LogoProps> = ({ name, link }) => {
  if (name === "voog") {
    return (
      <Container link={link} type={name}>
        <Voog />
      </Container>
    )
  }

  if (name === "iglu") {
    return (
      <Container link={link} type={name}>
        <Iglu />
      </Container>
    )
  }

  if (name === "gtap") {
    return (
      <Container link={link} type={name}>
        <Gtap />
      </Container>
    )
  }

  if (name === "pipedrive") {
    return (
      <Container link={link} type={name}>
        <Pipedrive />
      </Container>
    )
  }

  if (name === "pethealth") {
    return (
      <Container link={link} type={name}>
        <Pethealth />
      </Container>
    )
  }

  if (name === "khk") {
    return (
      <Container link={link} type={name}>
        <Khk />
      </Container>
    )
  }

  return <div>Logo</div>
}

export default Logo
