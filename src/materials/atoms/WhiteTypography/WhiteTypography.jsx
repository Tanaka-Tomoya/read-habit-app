import styled, { css } from 'styled-components';
import typographyStyle from '../theme';

const white = css`
  color: white;
`;

export const MainTypography = styled.p`
  ${typographyStyle}
  ${white}
  font-size: ${props => (props.size ? props.size : 64)}px;
`;

export const SubTypography = styled.p`
  ${typographyStyle}
  ${white}
  opacity: 0.7;
  font-size: ${props => (props.size ? props.size : 48)}px;
`;

export const HintTypography = styled.p`
  ${typographyStyle}
  ${white}
  opacity: 0.3;
  font-size: ${props => (props.size ? props.size : 32)}px;
`;
