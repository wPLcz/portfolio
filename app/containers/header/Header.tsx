import {FC} from "react";
import styles from "./Header.module.scss";
import {ListItem} from "./Header.types";
import {Logo} from "../../components/logo/Logo";

export const menuListItems: ListItem[] = [
    {
        label: "home",
        href: "/",
    },
    {
        label: "cv",
        href: "/cv",
    },
    {
        label: "contact",
        href: "/contact",
    }
]

export const Header: FC = () => {
    return (
        <>
            <header className={styles.header}>

                <ul className={styles.list}>
                    {menuListItems.map((item, index) => {
                        const {href, label} = item;
                        return (
                            <li className={styles.item} key={label}>
                                <a href={href}>
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </header>
        </>
    );
};
