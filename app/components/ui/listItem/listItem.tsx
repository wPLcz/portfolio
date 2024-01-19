import { ListItemProps } from '@/components/ui/listItem/listItem.types.ts';
import { Text } from '@/app/components/ui/text/Text';
import { FC } from 'react';
import styles from './listItem.module.scss';
import classNames from 'classnames';

export const ListItem: FC<ListItemProps> = ({ children, noDecoration = false }) => {
  return (
    <li className={classNames(
      styles.listItem,
      { [styles.noDecoration]: noDecoration }
    )}>
      <Text size='m' tag='p'>
        {children}
      </Text>
    </li>
  );
};
