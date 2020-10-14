import React, { FC } from 'react';
import { HeaderContentLayout } from '../../templates';
import { TodoListHeader, TodoListContent } from '../../organisms';
import { BLUE_DARK, BLUE_LIGHT } from '../../colors';

interface Props {}

export const TodoListPage: FC<Props> = () => {
  return (
    <HeaderContentLayout
      header={<TodoListHeader />}
      content={<TodoListContent color={BLUE_DARK} />}
      backgroundColor={BLUE_LIGHT}
    />
  );
};
