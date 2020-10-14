import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BLACK } from '../../../colors';

interface Props {
  color?: string;
  truncate?: boolean;
  children?: ReactNode;
}

const Text = styled.p<Pick<Props, 'color'>>`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: bold;
`;

export const BoldText: React.FC<Props> = ({ color = BLACK, truncate = true, children }) => {
  return <Text color={color}>{children}</Text>;
};
