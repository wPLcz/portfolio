"use client"
import { FC, useEffect, useState } from "react";
import styles from "./Aside.module.scss";
import { menuListItems } from "../header/Header";
import { Logo } from "../../components/logo/Logo";

export const Aside: FC = () => {
    const [isHoverActive, setIsHoverActive] = useState(false);

    useEffect(() => {
        console.log(isHoverActive);
    }, [isHoverActive]);
    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <Logo/>
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
