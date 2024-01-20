import styles from '@/app/components/ui/link/link.module.scss';
import { LinkProps } from '@/app/components/ui/link/link.types';
import classNames from 'classnames';
import { FC } from 'react';

export const Link: FC<LinkProps> = ({
  label,
  isActive = false,
  isDisabled = false,
  href,
  type = 'link',
  size = 'm',
  underline = false,
  target
}) => {
  const mailTo = type === 'mailto' ? 'mailto:' : '';
  const outputHref = `${mailTo}${href}`;
  return (
    <a
      className={classNames(
        styles.link,
        styles[size],
        {
          [styles.underline]: underline,
          [styles.active]: isActive,
          [styles.disabled]: isDisabled
        }
      )}
      href={outputHref}
      target={target}>
      {label}
    </a>
  );
};
