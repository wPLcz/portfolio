import { ChangeEventHandler } from 'react';

export interface SwitchProps {
  alt?: string;
  isNightMode: boolean;
  checked: boolean;
  toggleSwitch: ChangeEventHandler<HTMLInputElement>
}