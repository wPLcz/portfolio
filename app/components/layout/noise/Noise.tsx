import styles from './Noise.module.scss';

export const Noise = () => {
    return (
        <svg className={styles.svg}>
            <filter id='noiseFilter'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='0.65'
                    numOctaves='6'
                    stitchTiles='stitch'/>
            </filter>

            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
    );
};
