import styled from 'styled-components';
import typographyStyle from '../theme';

export const MainTypography = styled.p`
  ${typographyStyle}
  opacity: 0.87;
  font-size: ${props => (props.size ? props.size : 64)}px;
`;

export const SubTypography = styled.p`
  ${typographyStyle}
  opacity: 0.54;
  font-size: ${props => (props.size ? props.size : 32)}px;
`;

export const HintTypography = styled.p`
  ${typographyStyle}
  opacity: 0.38;
  font-size: ${props => (props.size ? props.size : 24)}px;
`;
