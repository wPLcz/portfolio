import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  image?: string;
  align?: 'right' | 'left';
}