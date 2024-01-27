'use client'
import { contactDetails } from '@/app/config/contactDetails.ts';
import { menuListItems } from '@/app/config/menuListItems.ts';
import { THEME } from '@/app/const/theme.ts';
import { Logo } from '@/components/layout/logo/logo.tsx';
import { CodewarsIcon } from '@/components/layout/socialMedia/codewarsIcon/codewarsIcon.tsx';
import { GithubIcon } from '@/components/layout/socialMedia/githubIcon/githubIcon.tsx';
import { Anchor } from '@/components/ui/anchor/anchor.tsx';
import { Switch } from '@/components/ui/switch/switch.tsx';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import styles from './desktopNav.module.scss';

export const DesktopNav: FC = () => {
  const [theme, setTheme] = useState<THEME.ON | THEME.OFF>(THEME.ON)
  const router = usePathname()

  useEffect(
    () => {
      document.documentElement.setAttribute(
        'data-theme',
        theme
      );
    },
    [theme]
  );

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <Logo/>
      </div>

      <div className={styles.socialIcons}>
        <a href={contactDetails.github.value} className={styles.socialIconAnchor} aria-label='github'>
          <GithubIcon/>
        </a>
        <a href={contactDetails.codewars.value} className={styles.socialIconAnchor} aria-label='codewars'>
          <CodewarsIcon/>
        </a>
      </div>

      <nav className={styles.navigationWrapper}>
        <ul className={styles.nav}>
          {menuListItems.map((item, index) => {
            const { href, label } = item;
            const isActive = router.endsWith(href);
            return (
              <li
                className={classNames(
                  styles.navItem,
                  { [styles.active]: isActive }
                )}
                key={item.href + index}>
                <Anchor
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
        <div className={styles.switch}>
          <Switch
            checked={theme === THEME.ON}
            toggleSwitch={(value) => {
              setTheme(value.target.checked ? THEME.ON : THEME.OFF)
            }}/>
        </div>
      </nav>
    </aside>
  );
};
