import { storiesOf } from '@storybook/react';
import React from 'react';
import { PrimaryButton, SecondaryButton } from './Button';
import { MainTypography } from '../WhiteTypography/WhiteTypography';

storiesOf('Buttons', module)
  .add('main button', () => (
    <PrimaryButton height="80">
      <MainTypography size="32" height="80">
        今すぐ始める！→
      </MainTypography>
    </PrimaryButton>
  ))
  .add('primary button', () => (
    <SecondaryButton height="80">
      <MainTypography size="32">今すぐ始める！→</MainTypography>
    </SecondaryButton>
  ));
