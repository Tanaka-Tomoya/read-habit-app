import React from 'react';
import styled from 'styled-components';
import {
  MainTypography,
  SubTypography
} from 'src/materials/atoms/BlackTypography/BlackTypography';

const Landing = () => {
  return (
    <Container>
      <MainTypography>aaaa</MainTypography>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(./lp.png) no-repeat center center;
  background-size: cover;
`;

export default Landing;
