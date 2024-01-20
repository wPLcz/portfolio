'use client'
import { menuListItems } from '@/app/config/menuListItems.ts';
import { Logo } from '@/components/layout/logo/logo.tsx';
import { Menu } from '@/components/layout/menu/menu.tsx';
import { FacebookIcon } from '@/components/layout/socialMedia/facebookIcon/FacebookIcon.tsx';
import { GithubIcon } from '@/components/layout/socialMedia/githubIcon/GithubIcon.tsx';
import { LinkedInIcon } from '@/components/layout/socialMedia/linkedinIcon/LinkedInIcon.tsx';
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
        <a href='https://github.com/wPLcz' className={styles.socialIconAnchor}>
          <GithubIcon/>
        </a>
        <a href='https://www.facebook.com/wojciech.k.palacz/' className={styles.socialIconAnchor}>
          <LinkedInIcon/>
        </a>
        <a href='https://www.linkedin.com/in/wojciech-palacz/' className={styles.socialIconAnchor}>
          <FacebookIcon/>
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
