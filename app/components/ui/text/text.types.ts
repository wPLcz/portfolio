import { ReactNode } from 'react';

export interface TextProps {
    children: ReactNode;
    bold?: boolean;
    uppercase?: boolean;
    className?: string;
    noWrap?: boolean;
    size?: 'm' |  'l' | 'xl';
    color?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'highlight';
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}