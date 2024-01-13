import styles from './text.module.scss';
import { TextProps } from '@/app/components/ui/text/text.types';
import { FC, createElement } from 'react';
import classNames from 'classnames';

export const Text: FC<TextProps> = ({children, uppercase, size = 'm', color = 'default', bold = false, tag}) => {
    const classes = classNames({
        [styles.bold]: bold,
        [styles.uppercase]: uppercase,
    }, styles.text, styles[tag], styles[color], styles[size]);

    return createElement(tag, {className: classes}, children);
};
