import styles from '@/app/components/ui/link/link.module.scss';
import { FC } from 'react';
import { LinkProps } from '@/app/components/ui/link/link.types';
import classNames from 'classnames';

export const Link: FC<LinkProps> = ({label, href, size = 'm', underline = false, target}) => {
    return (
        <a className={classNames(styles.link, styles[size],{[styles.underline]: underline,})} href={href} target={target}>
            {label}
        </a>
    );
};
