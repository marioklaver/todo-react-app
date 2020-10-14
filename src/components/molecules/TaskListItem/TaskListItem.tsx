import React, { FC } from 'react';
import styled from 'styled-components';

import { DefaultText } from '../../atoms';
import { Task } from '../../../state/slices';
import { GRAY, GRAY_0, WHITE } from '../../colors';
import { Checkbox, Favorite } from '../../molecules/inputs';

interface Props {
  task: Task;
  color: string;
  onToggleDone?: (uuid: string) => void;
  onFavorite?: (uuid: string) => void;
}

export const TaskListItem: FC<Props> = ({ task, color, onToggleDone = () => {} }) => {
  const { uuid, text, favorite, done } = task;

  return (
    <Container>
      <Checkbox checked={done} color={color} onToggleChecked={() => onToggleDone(uuid)} />
      <TextContainer>
        <DefaultText color={done ? GRAY : GRAY_0} strikethrough={done}>
          {text}
        </DefaultText>
      </TextContainer>
      <Favorite checked={favorite} color={color} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${WHITE};
  border-radius: 8px;
  flex-direction: row;
  margin-top: 4px;
  padding: 16px 12px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 12px;
`;
