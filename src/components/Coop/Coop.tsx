import * as React from "react"
import Pipedrive from "../../assets/logo-pipedrive.svg"
import Iglu from "../../assets/logo-iglu.svg"
import Voog from "../../assets/logo-voog.svg"
import Gtap from "../../assets/logo-gtap.svg"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export interface CoopProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Item = styled.div<{ type?: string }>`
  background: #25292c;
  height: 200px;
  width: 300px;
  margin-right: 8px;
  transform: rotateX(65deg) rotateZ(-45deg) translate3d(0, 0, 0);
  border-radius: 16px;
  display: flex;
  align-items: center;
    justify-content: center;
    margin-left: -100px;
    transition: transform 500ms;
    position: relative;
    z-index: 1;
    color: #fff;


    ${({ type }) => (type === "iglu" ? "background: #1797d4;" : "")}
    ${({ type }) => (type === "voog" ? "background: #443DF6;" : "")}
    ${({ type }) => (type === "gtap" ? "background: #00bf9c;" : "")}

    /* &:hover {
        transform: rotateX(65deg) rotateZ(-45deg) translate3d(62px, 62px, 62px);
    } */
`

const cardCommon = css`
  width: 100%;
  max-height: 100%;
  max-width: 200px;
`

const PipedriveCard = styled(Pipedrive)`
  ${cardCommon}
  max-width: 250px;
`

const IgluCard = styled(Iglu)`
  ${cardCommon}

  max-width: 150px;
`
const VoogCard = styled(Voog)`
  ${cardCommon}
`

const GtapCard = styled(Gtap)`
  ${cardCommon}
  max-width: 250px;
`

const Coop: React.SFC<CoopProps> = () => {
  return (
    <Wrapper>
      <Item type="gtap">
        <GtapCard />
      </Item>
      <Item type="voog">
        <VoogCard />
      </Item>
      <Item type="iglu">
        <IgluCard />
      </Item>
      <Item>
        <PipedriveCard />
      </Item>
    </Wrapper>
  )
}

export default Coop
