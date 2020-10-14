import React, { FC } from 'react';
import styled from 'styled-components';

import { GRAY_2 } from '../../colors';

interface Props {
  color?: any;
}

const Container = styled.div<Props>`
  background-color: ${({ color }) => color};
  height: 1px;
`;

export const ListSeparator: FC<Props> = ({ color = GRAY_2 }) => {
  return <Container color={color} />;
};
