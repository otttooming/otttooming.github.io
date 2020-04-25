import * as React from 'react';
import styled from '@emotion/styled';
import TSIcon from '../../assets/tech-typescript.svg';
import ReduxIcon from '../../assets/tech-redux.svg';
import GatsbyIcon from '../../assets/tech-gatsby.svg';
import GraphQLIcon from '../../assets/tech-graphql.svg';
import ReactIcon from '../../assets/tech-react.svg';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/core';

const Wrapper = styled.div`
  margin: 128px auto;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 960px) {
    display: grid;
    grid-template-areas: '. a1 a1 a2 a2 .' '. a1 a1 a2 a2 .' 'b1 b1 b2 b2 b3 b3' 'b1 b1 b2 b2 b3 b3' '. c1 c1 c2 c2 .' '. c1 c1 c2 c2 .';
  }
`;

const Item = styled.div`
  position: relative;

  &:nth-of-type(1) {
    grid-area: a1;
  }
  &:nth-of-type(2) {
    grid-area: a2;
  }
  &:nth-of-type(3) {
    grid-area: b1;
  }
  &:nth-of-type(4) {
    grid-area: b2;
  }
  &:nth-of-type(5) {
    grid-area: b3;
  }
  &:nth-of-type(6) {
    grid-area: c1;
  }
  &:nth-of-type(7) {
    grid-area: c2;
  }
`;

const Link: React.FC<LinkProps> = ({ ...restProps }) => (
  <ChakraLink display="block" target="blank" {...restProps} />
);

const Hex = ({ children, type, ...restProps }) => (
  <Link {...restProps}>
    <Content type={type}>{children}</Content>
  </Link>
);

const Content = styled.span<{ type: string }>`
  display: block;
  position: relative;
  width: 16vw;
  height: 16vw;
  max-width: 8rem;
  max-height: 8rem;

  margin-top: 8px;

  @media (min-width: 960px) {
    margin-top: 0;
  }

  transition: transform 200ms;

  &:hover {
    transform: scale3d(1.2, 1.2, 1.2);
    z-index: 1;
  }

  ${({ type }) =>
    type === 'gatsby'
      ? `    background: #663399;
    color: #fff;`
      : ``}

  ${({ type }) =>
    type === 'react'
      ? `    background: #20232a;
    color: #fff;`
      : ``}

  ${({ type }) =>
    type === 'graphql'
      ? `    background: rgba(221,23,151,0.75);
    color: #fff;`
      : ``}

  ${({ type }) =>
    type === 'typescript'
      ? `    background: #007acc;
    color: #fff;`
      : ``}

  ${({ type }) =>
    type === 'redux'
      ? `    background: #764abc;
    color: #fff;`
      : ``}

  clip-path: polygon(
    45% 1.33975%,
    46.5798% 0.60307%,
    48.26352% 0.15192%,
    50% 0%,
    51.73648% 0.15192%,
    53.4202% 0.60307%,
    55% 1.33975%,
    89.64102% 21.33975%,
    91.06889% 22.33956%,
    92.30146% 23.57212%,
    93.30127% 25%,
    94.03794% 26.5798%,
    94.48909% 28.26352%,
    94.64102% 30%,
    94.64102% 70%,
    94.48909% 71.73648%,
    94.03794% 73.4202%,
    93.30127% 75%,
    92.30146% 76.42788%,
    91.06889% 77.66044%,
    89.64102% 78.66025%,
    55% 98.66025%,
    53.4202% 99.39693%,
    51.73648% 99.84808%,
    50% 100%,
    48.26352% 99.84808%,
    46.5798% 99.39693%,
    45% 98.66025%,
    10.35898% 78.66025%,
    8.93111% 77.66044%,
    7.69854% 76.42788%,
    6.69873% 75%,
    5.96206% 73.4202%,
    5.51091% 71.73648%,
    5.35898% 70%,
    5.35898% 30%,
    5.51091% 28.26352%,
    5.96206% 26.5798%,
    6.69873% 25%,
    7.69854% 23.57212%,
    8.93111% 22.33956%,
    10.35898% 21.33975%
  );
`;

const Icon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  > svg {
    width: 50%;
    height: 100%;
  }
`;

const HexGrid: React.FC = () => {
  return (
    <Wrapper>
      <Item>
        <Hex type="typescript" href="https://www.typescriptlang.org/">
          <Icon>
            <TSIcon />
          </Icon>
        </Hex>
      </Item>
      <Item>
        <Hex type="redux" href="https://redux.js.org/">
          <Icon>
            <ReduxIcon />
          </Icon>
        </Hex>
      </Item>
      <Item>
        <Hex type="gatsby" href="https://www.gatsbyjs.org/">
          <Icon>
            <GatsbyIcon />
          </Icon>
        </Hex>
      </Item>
      <Item>
        <Hex type="react" href="https://reactjs.org/">
          <Icon>
            <ReactIcon />
          </Icon>
        </Hex>
      </Item>
      <Item>
        <Hex type="graphql" href="https://graphql.org/">
          <Icon>
            <GraphQLIcon />
          </Icon>
        </Hex>
      </Item>
    </Wrapper>
  );
};

export default HexGrid;
