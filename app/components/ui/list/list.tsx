import { ListProps } from '@/components/ui/list/list.types.ts';
import { FC } from 'react';
import styles from './list.module.scss';

export const List: FC<ListProps> = ({ children }) => {
  return (
    <ul className={styles.container}>
      {children}
    </ul>
  );
};
