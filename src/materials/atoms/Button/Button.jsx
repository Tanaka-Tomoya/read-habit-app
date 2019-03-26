import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)`
  height: ${props => (props.height ? props.height : 100)}px;
  background-color: #f6b352;
`;

export const SecondaryButton = styled(Button)`
  height: ${props => (props.height ? props.height : 100)}px;
  background-color: #fc913a;
`;
