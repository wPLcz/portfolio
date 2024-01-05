import styles from "./Background.module.scss";
import {Noise} from '../noise/Noise';

export const Background = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Noise/>
            </div>
        </div>
    );
};
