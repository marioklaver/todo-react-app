import React, { FC } from 'react';
import { GRAY } from '../../../colors';
import { IconCheckbox, IconCheckboxChecked } from '../../../atoms';

interface Props {
  checked: boolean;
  color: string;
  onToggleChecked?: () => void;
}

export const Checkbox: FC<Props> = ({ checked, onToggleChecked = () => {}, color }) => {
  const toggleChecked = () => {
    onToggleChecked();
  };

  return (
    <div onClick={toggleChecked}>{checked ? <IconCheckboxChecked color={color} /> : <IconCheckbox color={GRAY} />}</div>
  );
};
