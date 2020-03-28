import * as React from "react"
import styled from "@emotion/styled"

export interface IllustrationProps {}

const Wrapper = styled.div`
  margin-top: 160px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 128px;
  max-width: 1280px !important;
`

const Container = styled.div`
  max-width: 480px;
`

const Illustration: React.FC<IllustrationProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Illustration
