import styles from '@/app/components/ui/switch/switch.module.scss';
import { SwitchProps } from '@/app/components/ui/switch/switch.types';
import { A11yText } from '@/components/ui/a11yText/a11yText.tsx';
import { FC } from 'react';

export const Switch: FC<SwitchProps> = ({ checked, toggleSwitch }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.switch} htmlFor='theme-switch'>
      <input className={styles.input} id='theme-switch' type='checkbox' checked={checked} onChange={toggleSwitch}/>
      <span className={styles.slider}/>
      <A11yText label={'day night theme switch'}/>
    </label>
  );
};
