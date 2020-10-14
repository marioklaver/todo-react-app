import React, { FC } from 'react';
import styled from 'styled-components';

import { ListSeparator } from '../../atoms';

interface Props {}

export const SeparatorListItem: FC<Props> = () => {
  return (
    <Separator>
      <ListSeparator />
    </Separator>
  );
};

const Separator = styled.div`
  padding: 12px 12px;
`;
