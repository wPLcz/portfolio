import styles from './text.module.scss';
import { TextProps } from '@/app/components/ui/text/text.types';
import { FC, createElement } from 'react';
import classNames from 'classnames';

export const Text: FC<TextProps> = ({
  children,
  className,
  uppercase,
  size = 'm',
  noWrap = false,
  color = 'default',
  bold = false,
  tag = 'p'
}) => {
  const classes = classNames(
    {
      [styles.bold]: bold,
      [styles.uppercase]: uppercase,
      [styles.noWrap]: noWrap
    },
    styles.text,
    styles[tag],
    styles[color],
    styles[size],
    [className]
  );

  return createElement(
    tag,
    { className: classes },
    children
  );
};
