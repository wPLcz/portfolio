import { CardProps } from '@/app/components/ui/card/card.types';
import { FC } from 'react';
import styles from './card.module.scss';

export const Card: FC<CardProps> = ({ children, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
