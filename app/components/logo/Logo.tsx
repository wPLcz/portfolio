'use client'
import {FC, useRef, useEffect} from "react";

import {TweenMax} from "gsap";
import styles from "./Logo.module.scss";
export const Logo: FC = () => {
    const ref2 = useRef(null);
    const ref1 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

//                      lewy dol          lewa gora       prawa gora      prawy srodek
    const ref1expanded = "787.556,427.557 772.556,382.557 788.556,382.557 795.556,403.557";
//                      lewy dol          prawy dol       prawa gora      lewa gora
    const ref2expanded = "788.556,430.557 804.556,430.557 820.556,382.557 804.556,382.557";
//                      srodek gora       lewy srodek     srodek dol      prawy srodek
    const ref3expanded = "821.556,385.557 813.556,409.557 819.556,427.557 827.556,403.557";
//                      lewy dol          prawy dol       prawa gora      lewa gora
    const ref4expanded = "820.556,430.557 836.556,430.557 852.556,382.557 836.556,382.557";

    useEffect(() => {
        TweenMax.to(ref1.current, 2.5,
            {
                attr: {points: ref1expanded},
                repeatDelay: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.out"
            });
        TweenMax.to(ref2.current, 2.5,
            {
                attr: {points: ref2expanded},
                repeatDelay: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.out"
            });
        TweenMax.to(ref3.current, 2.5,
            {
                attr: {points: ref3expanded},
                repeatDelay: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.out"
            });
        TweenMax.to(ref4.current, 2.5,
            {
                attr: {points: ref4expanded},
                repeatDelay: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.out"
            });
    });

    return (
        <>
            <svg
                className={styles.logo}
                version="1.1"
                x="0px"
                y="0px"
                viewBox="772.556 382.557 80 48">
                <g>
                    <polygon ref={ref1}
                             points="787.556,427.557 772.556,382.557 772.556,382.557 787.556,427.557 "/>
                </g>
                <g>
                    <polygon ref={ref2}
                             points="788.556,430.557 788.556,430.557 804.556,382.557 804.556,382.557"/>
                </g>
                <g>
                    <polygon ref={ref3}
                             points="821.556,385.557 813.556,409.557 813.556,409.557 821.556,385.557"/>
                </g>
                <g>
                    <polygon ref={ref4}
                             points="820.556,430.557 820.556,430.557 836.556,382.557 836.556,382.557"/>
                </g>
            </svg>
        </>
    );
};
