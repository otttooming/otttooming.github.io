import * as React from "react"
import styled from "styled-components"

export interface IllustrationProps {}

const Wrapper = styled.div`
  margin-top: 160px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
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
