import { ChangeEventHandler } from 'react';

export interface SwitchProps {
  isNightMode?: boolean;
  checked?: boolean;
  toggleSwitch?: ChangeEventHandler<HTMLInputElement>
}