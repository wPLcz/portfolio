import styles from '@/components/ui/anchor/anchor.module.scss';
import { AnchorProps } from '@/components/ui/anchor/anchor.types.ts';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

export const Anchor: FC<PropsWithChildren<AnchorProps>> = ({
  children,
  label,
  isActive = false,
  isDisabled = false,
  href,
  type = 'link',
  size = 'm',
  underline = false,
  target
}) => {
  const TYPE_MAIL = type === 'mailto';
  const mailTo = TYPE_MAIL ? 'mailto:' : '';
  const outputHref = `${mailTo}${href}`;
  return TYPE_MAIL ? (
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
  ) :
    (
      <Link
        href={outputHref}
        legacyBehavior>
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
          {children}
          {label}
        </a>
      </Link>
    );
};
