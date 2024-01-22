'use client'
import { contactDetails } from '@/app/config/contactDetails.ts';
import { menuListItems } from '@/app/config/menuListItems.ts';
import { Logo } from '@/components/layout/logo/logo.tsx';
import { Menu } from '@/components/layout/menu/menu.tsx';
import { CodewarsIcon } from '@/components/layout/socialMedia/codewarsIcon/codewarsIcon.tsx';
import { GithubIcon } from '@/components/layout/socialMedia/githubIcon/githubIcon.tsx';
import { Link } from '@/components/ui/link/link.tsx';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import styles from './mobileNav.module.scss';

export const MobileNav: FC = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);


  useEffect(() => {
    document.addEventListener(
      'resize',
      () => {
        setIsOpen(false);
      }
    )
  });

  if (!isOpen) {
    return (
      <aside
        className={classNames(
          styles.aside,
          styles.closed
        )}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Logo/>
          </div>

          <div className={styles.menu}>
            <Menu
              isOpen={isOpen} toggle={(value) => setIsOpen(value)}/>
          </div>
        </div>
      </aside>
    )
  }
  return (
    <aside
      className={classNames(
        styles.aside,
        { [styles.open]: isOpen }
      )}>

      <div className={styles.socialIcons}>
        <a href={contactDetails.github.value} className={styles.socialIconAnchor}>
          <GithubIcon/>
        </a>
        <a href={contactDetails.codewars.value} className={styles.socialIconAnchor}>
          <CodewarsIcon/>
        </a>
      </div>

      <nav>
        <ul className={styles.nav}>
          {menuListItems.map((item, index) => {
            const { href, label } = item;
            const isActive = router.endsWith(href);
            return (
              <li
                className={classNames(
                  styles.navItem,
                  styles['navItem' + index],
                  { [styles.active]: isActive }
                )}
                key={item.href + index}>
                <Link
                  href={href}
                  label={label}
                  size={'large'}
                  target={item.isDownloadable ? '_blank' : undefined}
                  isActive={isActive}
                  underline
                />
              </li>
            )
          })}
        </ul>
      </nav>

      <div className={styles.main}>
        <div className={styles.logo}>
          <Logo/>
        </div>

        <div className={styles.menu}>
          <Menu
            isOpen={isOpen} toggle={(value) => setIsOpen(value)}/>
        </div>
      </div>

    </aside>
  );
};
