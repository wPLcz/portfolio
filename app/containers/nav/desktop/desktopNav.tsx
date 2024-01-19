'use client'
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './desktopNav.module.scss';
import { Logo } from '@/components/layout/logo/logo.tsx';
import { LinkedInIcon } from '@/components/layout/socialMedia/linkedinIcon/LinkedInIcon.tsx';
import { GithubIcon } from '@/components/layout/socialMedia/githubIcon/GithubIcon.tsx';
import { FacebookIcon } from '@/components/layout/socialMedia/facebookIcon/FacebookIcon.tsx';
import { menuListItems } from '@/app/config/menuListItems.ts';
import { Link } from '@/components/ui/link/link.tsx';
import classNames from 'classnames';

export const DesktopNav: FC = () => {
  const router = usePathname();

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <Logo/>
      </div>

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

      <nav className={styles.navigation}>
        <ul className={styles.asideList}>
          {menuListItems.map((item, index) => {
            const { href, label } = item;
            const isActive = router.endsWith(href);
            return (
              <li
                className={classNames(
                  styles.asideListItem,
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
    </aside>
  );
};
