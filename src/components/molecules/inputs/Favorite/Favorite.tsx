import React, { FC, useState } from 'react';

import { GRAY_1 } from '../../../colors';
import { IconStar, IconStarFilled } from '../../../atoms';

interface Props {
  checked: boolean;
  color: string;
  isChecked?: (checked: boolean) => void;
}

export const Favorite: FC<Props> = ({ checked, isChecked = () => {}, color }) => {
  const [_checked, setChecked] = useState(checked);

  const toggleChecked = () => {
    isChecked(!_checked);
    setChecked(!_checked);
  };

  return <div onClick={toggleChecked}>{_checked ? <IconStarFilled color={color} /> : <IconStar color={GRAY_1} />}</div>;
};
