import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../utils/theme"
import { Link, Button } from "@chakra-ui/core"

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
      {items.map((item) => (
        <Item key={item}>
          <Button mr={theme.space.s} size="xs">
            {item}
          </Button>
        </Item>
      ))}
    </Wrapper>
  )
}

export default TechStack
