import styles from '@/app/components/ui/a11yText/a11yText.module.scss';
import { A11yTextProps } from '@/app/components/ui/a11yText/a11yText.types.ts';
import { FC } from 'react';

export const A11yText: FC<A11yTextProps> = ({ label }) => {
  return (
    <span className={styles.invisible}>
      {label}
    </span>
  );
};
