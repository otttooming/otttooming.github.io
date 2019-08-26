import * as React from "react"
import { Link, theme } from "@coterminous/ui"
import styled from "styled-components"

export interface TechStackProps {
  items?: string[]
}

const Wrapper = styled.ul`
  margin: ${theme.space.m} 0;
  padding: 0;
`

const Item = styled.li`
  list-style: none;
  display: inline-flex;
`

const TechStack: React.FC<TechStackProps> = ({ items }) => {
  if (!Array.isArray(items) || !items.length) {
    return null
  }

  return (
    <Wrapper>
      {items.map(item => (
        <Item key={item}>
          <Link mr={theme.space.s}>{item}</Link>
        </Item>
      ))}
    </Wrapper>
  )
}

export default TechStack
