'use client'
import debounce from 'debounce';
import { FC, useEffect, useState } from 'react';
import styles from './aside.module.scss';
import { Logo } from '@/app/components/layout/logo/Logo';
import { LinkedInIcon } from '@/app/components/layout/socialMedia/linkedinIcon/LinkedInIcon';
import { GithubIcon } from '@/app/components/layout/socialMedia/githubIcon/GithubIcon';
import { FacebookIcon } from '@/app/components/layout/socialMedia/facebookIcon/FacebookIcon';
import { ListItem } from '@/app/containers/aside/aside.types';
import { Link } from '@/app/components/ui/link/Link';

export const menuListItems: ListItem[] = [
    {
        label: 'home',
        href: '/',
        isDownloadable: false,
    },
    {
        label: 'skills',
        href: '/skills',
        isDownloadable: false,
    },
    {
        label: 'cv',
        href: 'wojciech_palacz.pdf',
        isDownloadable: true,
    },
    {
        label: 'contact',
        href: '/contact',
        isDownloadable: false,
    }
]


export const Aside: FC = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://github.com/wPLcz" className={styles.socialIconAnchor}>
                    <GithubIcon/>
                </a>
                <a href="https://www.facebook.com/wojciech.k.palacz/" className={styles.socialIconAnchor}>
                    <LinkedInIcon/>
                </a>
                <a href="https://www.linkedin.com/in/wojciech-palacz/" className={styles.socialIconAnchor}>
                    <FacebookIcon/>
                </a>
            </div>

            <nav className={styles.navigation}>
                <ul className={styles.asideList}>
                    {menuListItems.map((item, index) => {
                        const {href, label} = item;
                        return (
                            <li className={styles.asideListItem} key={item.href + index}>
                                <Link
                                    href={href}
                                    label={label}
                                    size={'xlarge'}
                                    target={item.isDownloadable ? '_blank' : undefined}
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
