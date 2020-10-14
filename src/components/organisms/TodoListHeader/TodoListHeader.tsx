import React, { FC } from 'react';
import styled from 'styled-components';
import { Avatar, BoldText } from '../../atoms';
import { BLUE_DARK } from '../../colors';

interface Props {}

export const TodoListHeader: FC<Props> = () => {
  return (
    <Container>
      <Avatar uri="https://pbs.twimg.com/profile_images/536259227245740033/MZA4cVzg_400x400.jpeg" />
      <Username>
        <BoldText>Mario Klaver</BoldText>
      </Username>
      {/*<IconSearch color={BLUE_DARK} />*/}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 12px 12px;
`;

const Username = styled.div`
  display: flex;
  flex: 1;
  padding-left: 8px;
`;
