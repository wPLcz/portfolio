import { HTMLAttributeAnchorTarget } from 'react';

export interface LinkProps {
  label: string;
  href: string;
  size: 'medium' | 'large' | 'xlarge';
  type?: 'link' | 'mailto'
  target?: HTMLAttributeAnchorTarget;
  isDisabled?: boolean;
  isActive?: boolean;
  underline?: boolean;
}