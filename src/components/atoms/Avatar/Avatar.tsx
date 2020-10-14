import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  uri: string;
}

const MyImage = styled.img`
  width: 32px;
  height: 32px;
  resize-mode: contain;
  border-radius: 16px;
`;

export const Avatar: FC<Props> = ({ uri }) => {
  return <MyImage src={uri} width={32} height={32} />;
};
