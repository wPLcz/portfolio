import { HTMLAttributeAnchorTarget } from 'react';
import { Property } from 'csstype';
import TextDecoration = Property.TextDecoration;

export interface LinkProps {
    label: string;
    href: string;
    size: 'medium' | 'large' | 'xlarge';
    target?: HTMLAttributeAnchorTarget;
    isDisabled?: boolean;
    isActive?: boolean;
    underline?: boolean;
}