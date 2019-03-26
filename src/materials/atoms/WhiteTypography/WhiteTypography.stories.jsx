import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  MainTypography,
  SubTypography,
  HintTypography
} from './WhiteTypography';

storiesOf('white Typography', module)
  .add('main typography', () => <MainTypography>MainTypography</MainTypography>)
  .add('sub typography', () => <SubTypography>SubTypography</SubTypography>)
  .add('hint typography', () => (
    <HintTypography>HintTypography</HintTypography>
  ));
