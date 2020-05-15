import * as React from 'react';
import Pipedrive from '../../assets/logo-pipedrive.svg';
import Iglu from '../../assets/logo-iglu.svg';
import Voog from '../../assets/logo-voog.svg';
import Gtap from '../../assets/logo-gtap.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Box, BoxProps } from '@chakra-ui/core';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const getCompanyBgColor = (type?: string) => {
  if (type === 'iglu') {
    return '#1797d4';
  }

  if (type === 'voog') {
    return '#443DF6';
  }

  if (type === 'gtap') {
    return '#00bf9c';
  }

  return '#25292c';
};

const Company: React.FC<BoxProps & { type?: string }> = ({
  type,
  ...restProps
}) => {
  const backgroundColor = getCompanyBgColor(type);

  return (
    <Box
      backgroundColor={backgroundColor}
      height="200px"
      width="300px"
      marginRight="8px"
      transform="rotateX(65deg) rotateZ(-45deg) translate3d(0, 0, 0)"
      borderRadius="16px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginLeft="-100px"
      transition="transform 500ms"
      position="relative"
      zIndex={1}
      color="#fff"
      {...restProps}
    />
  );
};

const cardCommon = css`
  width: 100%;
  max-height: 100%;
  max-width: 200px;
`;

const PipedriveCard = styled(Pipedrive)`
  ${cardCommon}
  max-width: 250px;
`;

const IgluCard = styled(Iglu)`
  ${cardCommon}

  max-width: 150px;
`;
const VoogCard = styled(Voog)`
  ${cardCommon}
`;

const GtapCard = styled(Gtap)`
  ${cardCommon}
  max-width: 250px;
`;

const Coop: React.FC = () => {
  return (
    <Wrapper>
      <Company type="gtap">
        <GtapCard />
      </Company>

      <Company type="voog">
        <VoogCard />
      </Company>

      <Company type="iglu">
        <IgluCard />
      </Company>

      <Company>
        <PipedriveCard />
      </Company>
    </Wrapper>
  );
};

export default Coop;
