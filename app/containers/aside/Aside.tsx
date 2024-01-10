'use client'
import debounce from 'debounce';
import { FC, useEffect, useState } from 'react';
import styles from './Aside.module.scss';
import { menuListItems } from '../header/Header';
import { Logo } from '../../components/logo/Logo';
import { LinkedInIcon } from '@/app/components/socialIcons/linkedinIcon/LinkedInIcon';
import { GithubIcon } from '@/app/components/socialIcons/githubIcon/GithubIcon';
import { FacebookIcon } from '@/app/components/socialIcons/facebookIcon/FacebookIcon';

export const Aside: FC = () => {
    const [isHoverActive, setIsHoverActive] = useState(false);

    const changeHoverState = (value: boolean) => debounce(() => setIsHoverActive(value), 250);

    useEffect(() => {
        console.log(isHoverActive);
    }, [isHoverActive]);

    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <Logo isHoverActive={isHoverActive}/>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://github.com/wPLcz" className={styles.socialIconAnchor}>
                    <GithubIcon isHoverActive={isHoverActive}/>
                </a>
                <a href="https://www.facebook.com/wojciech.k.palacz/" className={styles.socialIconAnchor}>
                    <LinkedInIcon isHoverActive={isHoverActive}/>
                </a>
                <a href="https://www.linkedin.com/in/wojciech-palacz/" className={styles.socialIconAnchor}>
                    <FacebookIcon isHoverActive={isHoverActive}/>
                </a>
            </div>

            <nav className={styles.navigation}>
                <ul className={styles.asideList}>
                    {menuListItems.map((item, index) => {
                        const {href, label} = item;
                        return (
                            <li className={styles.asideListItem} key={item.href + index}>
                                <a
                                    className={styles.asideLink}
                                    href={href}
                                    onMouseEnter={() => setIsHoverActive(true)}
                                    onMouseLeave={() => setIsHoverActive(false)}>
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    );
};
