import styles from "./Video.module.scss";
import {FC} from "react";
import {VideoProps} from "./Video.types";

export const Video: FC<VideoProps> = (src, type) => {
    return (
        <video autoPlay muted loop className={styles.video}>
            <source src="./particles.mp4" type="video/mp4"/>
        </video>
    );
};

