import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { WHITE } from '../../colors';

interface Props {
  backgroundColor?: string;
  header: ReactElement;
  content: ReactElement;
}

export const HeaderContentLayout: FC<Props> = ({ header, content, backgroundColor = WHITE }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Header>{header}</Header>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div<Pick<Props, 'backgroundColor'>>`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex: 1;
`;

const Header = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;
