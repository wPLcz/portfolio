import { FC } from 'react';
import styles from '@/components/layout/menu/menu.module.scss';

interface MenuProps {
  toggle: (value: boolean) => void;
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ toggle, isOpen }) => {

  if (isOpen) {
    return (
      <svg
        className={styles.svg}
        onClick={()=> toggle(!isOpen)}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 33.234 33.234'
        enableBackground='new 0 0 33.234 33.234'>
        <line
          display='none' className={styles.line} x1='-5.383' y1='6.617' x2='38.617' y2='6.617'/>
        <line fill='none' className={styles.line} x1='1.061' y1='32.173' x2='32.174' y2='1.061'/>
        <line fill='none' className={styles.line} x1='32.174' y1='32.174' x2='1.061' y2='1.061'/>
        <line
          display='none' className={styles.line} x1='-5.383' y1='26.617' x2='38.617' y2='26.617'/>
      </svg>
    )
  }
  return (
    <>
      <svg
        className={styles.svg}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        onClick={()=> toggle(!isOpen)}
        viewBox='0 0 44 23'
        enableBackground='new 0 0 44 23'>
        <line fill='none' className={styles.line} x1='0' y1='1.5' x2='44' y2='1.5'/>
        <line fill='none' className={styles.line} x1='0' y1='11.5' x2='44' y2='11.5'/>
        <line fill='none' className={styles.line} x1='0' y1='21.5' x2='44' y2='21.5'/>
      </svg>
    </>
  );
};
