'use client'
import { Menu } from '@/components/layout/menu/menu.tsx';
import { FC, useState } from 'react';
import styles from './mobileNav.module.scss';
import { Logo } from '@/components/layout/logo/logo.tsx';
import classNames from 'classnames';

export const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <aside
      className={classNames(
        styles.aside,
        { [styles.open]: isOpen }
      )}>
      <div className={styles.logo}>
        <Logo/>
      </div>

      <div className={styles.menu}>
        <Menu
          isOpen={isOpen} toggle={(value) => setIsOpen(value)}/>
      </div>

    </aside>
  );
};
