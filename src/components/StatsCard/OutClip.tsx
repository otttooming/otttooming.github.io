import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 35%;
  right: 0;
  bottom: 30px;
  min-height: 100%;
  background: rebeccapurple;
  border-radius: 8px;
`;

const Top = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: blue;
  background: rebeccapurple;
  height: 30px;
  transform: skew(0, 20deg);
  height: 190px;
  top: -90px;
  border-radius: 16px;
  z-index: -1;
`;

const OutClip: React.FC = () => {
  return (
    <Wrapper>
      Lorem
      <Top />
    </Wrapper>
  );
};

export default OutClip;
