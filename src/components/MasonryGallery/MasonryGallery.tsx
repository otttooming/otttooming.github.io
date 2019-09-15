import * as React from "react"
import styled from "styled-components"

export interface MasonryGalleryProps {}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 16px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;
  padding: 16px;
`

const Item = styled.div`
  display: block;

  > * {
    display: block;
  }
`

const MasonryGallery: React.SFC<MasonryGalleryProps> = ({ children }) => {
  return (
    <Wrapper>
      {React.Children.map(children, c => (
        <Item>{c}</Item>
      ))}
    </Wrapper>
  )
}

export default MasonryGallery
