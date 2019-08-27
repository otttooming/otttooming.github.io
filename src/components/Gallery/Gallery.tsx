import * as React from "react"
import styled from "styled-components"
import GalleryImage from "./GalleryImage"
import { theme } from "@coterminous/ui"

export interface GalleryProps {}

const Wrapper = styled.div`
  display: grid;
  align-items: stretch;
  grid-gap: 25px;
  grid-template-rows: repeat(14, auto);
  max-width: 960px;
  min-height: 480px;
  margin: 0 auto;
  padding: 0 ${theme.space.s};
`

const Item = styled.div`
  position: relative;

  &:first-of-type {
    display: none;
  }

  @media (min-width: 40em) {
    &:first-of-type {
      display: block;
      grid-column: 1/7;
      grid-row: 5/11;
    }
  }

  &:nth-of-type(2) {
    grid-column: 1/5;
    grid-row: 1/8;
  }

  @media (min-width: 40em) {
    &:nth-of-type(2) {
      grid-column: 7/11;
    }
  }

  &:nth-of-type(3) {
    grid-column: 5/10;
    grid-row: 2/8;
  }

  @media (min-width: 40em) {
    &:nth-of-type(3) {
      grid-column: 11/17;
    }
  }

  &:nth-of-type(4) {
    display: none;
  }

  @media (min-width: 40em) {
    &:nth-of-type(4) {
      display: block;
      grid-column: 17/23;
      grid-row: 4/10;
    }
  }

  &:nth-of-type(5) {
    grid-column: 1/6;
    grid-row: 8/14;
  }

  @media (min-width: 40em) {
    &:nth-of-type(5) {
      grid-column: 7/13;
    }
  }

  &:nth-of-type(6) {
    grid-column: 6/10;
    grid-row: 8/15;
  }

  @media (min-width: 40em) {
    &:nth-of-type(6) {
      grid-column: 13/17;
    }
  }
`

const ItemContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.m};

  > * {
    border-radius: ${theme.borderRadius.m};

    flex: 1;
  }
`

const Gallery: React.SFC<GalleryProps> = () => {
  return (
    <Wrapper>
      <Item>
        <ItemContainer>
          <GalleryImage />
        </ItemContainer>
      </Item>
      <Item>
        <ItemContainer>
          <GalleryImage />
        </ItemContainer>
      </Item>
      <Item>
        <ItemContainer>
          <GalleryImage />
        </ItemContainer>
      </Item>
      <Item>
        <ItemContainer>
          <GalleryImage />
        </ItemContainer>
      </Item>
      <Item>
        <ItemContainer>
          <GalleryImage />
        </ItemContainer>
      </Item>
      <Item>
        <ItemContainer>
          <GalleryImage />
        </ItemContainer>
      </Item>
    </Wrapper>
  )
}

export default Gallery