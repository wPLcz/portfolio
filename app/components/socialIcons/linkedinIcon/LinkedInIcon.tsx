import styles from '@/app/components/socialIcons/socialIcons.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

interface LinkedInIconProps {
    isHoverActive: boolean;
}


export const LinkedInIcon: FC<LinkedInIconProps> = ({isHoverActive}) => {
    return (
        <svg className={classNames(styles.socialIcon, {[styles.active]: isHoverActive})} version="1.1" id="linkedin" xmlns="http://www.w3.org/2000/svg" x="0px"
             y="0px"
             viewBox="198.556 198.557 32 32" enableBackground="new 198.556 198.557 32 32" xmlSpace="preserve">
            <g>
                <circle className={styles.circle} strokeWidth="2" cx="214.556" cy="214.557" r="15"/>
                <path className={styles.path} id="LinkedInPath" d="M222.173,215.292v5.076h-2.943v-4.736c0-1.189-0.426-2.002-1.491-2.002c-0.813,0-1.296,0.548-1.511,1.076
		c-0.077,0.189-0.097,0.453-0.097,0.718v4.944h-2.944c0,0,0.04-8.022,0-8.854h2.943v1.255c-0.006,0.01-0.014,0.02-0.02,0.028h0.02
		v-0.028c0.392-0.603,1.09-1.462,2.653-1.462C220.719,211.307,222.173,212.573,222.173,215.292z M210.107,207.247
		c-1.007,0-1.667,0.661-1.667,1.529c0,0.85,0.64,1.53,1.628,1.53h0.019c1.027,0,1.665-0.681,1.665-1.53
		C211.733,207.908,211.114,207.247,210.107,207.247z M208.616,220.368h2.941v-8.854h-2.941V220.368z"/>
            </g>
        </svg>
    );
};
