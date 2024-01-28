import { CardProps } from '@/app/components/ui/card/card.types';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './card.module.scss';

export const Card: FC<CardProps> = ({ children, align }) => {
  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.right]: align === 'right',
          [styles.left]: align === 'left'
        }
      )}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
