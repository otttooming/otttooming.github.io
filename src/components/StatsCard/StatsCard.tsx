import * as React from 'react';
import styled from '@emotion/styled';

// @ts-ignore
import StatsCardClip from '../../assets/statscard-clip.svg';
import OutClip from './OutClip';

export interface StatsCardProps {}

const HiddenStatsCardClip = styled(StatsCardClip)`
  position: absolute;
  width: 0;
  height: 0;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 320px;
  transform: rotate(-0.0000000001deg);
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  min-height: 420px;
  clip-path: polygon(0 -60%, 0 100%, 125% 100%);
  clip-path: url(#statscard);
`;

const StatsCard: React.SFC<StatsCardProps> = () => {
  return (
    <Wrapper>
      <HiddenStatsCardClip />
      <OutClip />
      <Container>Lorem</Container>
    </Wrapper>
  );
};

export default StatsCard;
