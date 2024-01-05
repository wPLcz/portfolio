import {FC} from "react";
import styles from "./Aside.module.scss";
import {menuListItems} from "../header/Header";
import {Logo} from "../../components/logo/Logo";

export const Aside: FC = () => {
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
                            <li className={styles.asideListItem}>
                                <a className={styles.asideLink} href={href}>
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
