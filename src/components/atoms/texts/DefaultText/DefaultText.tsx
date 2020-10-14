import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BLACK } from '../../../colors';

interface Props {
  color?: string;
  strikethrough?: boolean;
  truncate?: boolean;
  children?: ReactNode;
}

export const DefaultText: React.FC<Props> = ({ color = BLACK, truncate = true, strikethrough = false, children }) => {
  return (
    <Text color={color} strikethrough={strikethrough}>
      {children}
    </Text>
  );
};

const Text = styled.p<Pick<Props, 'color' | 'strikethrough'>>`
  color: ${({ color }) => color};
  text-decoration-line: ${({ strikethrough }) => (strikethrough ? 'line-through' : 'none')};
  text-decoration-color: ${({ color }) => color};
  font-size: 16px;
`;
