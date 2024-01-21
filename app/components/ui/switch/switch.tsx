import styles from '@/app/components/ui/switch/switch.module.scss';
import { SwitchProps } from '@/app/components/ui/switch/switch.types';
import { FC } from 'react';

export const Switch: FC<SwitchProps> = ({ checked, toggleSwitch, isNightMode }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.switch} htmlFor='theme-switch'>
      <input className={styles.input} id='theme-switch' type='checkbox' checked={isNightMode} onChange={toggleSwitch}/>
      <span className={styles.slider}/>
    </label>
  );
};
