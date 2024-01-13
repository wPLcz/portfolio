import styles from './card.module.scss';
import { CardProps } from '@/app/components/ui/card/card.types';
import { FC } from 'react';

export const Card:FC<CardProps> = ({children, image}) => {
    return (
      <div className={styles.container}>
          {children}
      </div>
    );
};
