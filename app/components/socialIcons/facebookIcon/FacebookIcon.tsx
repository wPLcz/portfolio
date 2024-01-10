import styles from '@/app/components/socialIcons/socialIcons.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

interface FacebookIconProps {
    isHoverActive: boolean;
}

export const FacebookIcon: FC<FacebookIconProps> = ({isHoverActive}) => {
    return (
        <svg className={classNames(styles.socialIcon, {[styles.active]: isHoverActive})} version="1.1" id="TwitterPath" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="32px" height="32px" viewBox="198.556 198.557 32 32" enableBackground="new 198.556 198.557 32 32"
             xmlSpace="preserve">
            <g>
                <circle className={styles.circle} strokeWidth="2" cx="214.556" cy="214.557" r="15"/>
                <path className={styles.path} id="TwitterPath" d="M212.446,209.676c0,0.402,0,2.193,0,2.193h-1.607v2.684h1.607v7.971h3.302v-7.971h2.215
		c0,0,0.207-1.287,0.309-2.693c-0.289,0-2.512,0-2.512,0s0-1.561,0-1.834s0.359-0.643,0.715-0.643c0.357,0,1.105,0,1.801,0
		c0-0.365,0-1.627,0-2.793c-0.928,0-1.982,0-2.447,0C212.364,206.59,212.446,209.276,212.446,209.676z"/>
            </g>
        </svg>
    );
};
