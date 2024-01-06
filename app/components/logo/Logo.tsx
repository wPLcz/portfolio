import { FC, useRef, useEffect } from "react";
import "@/app/styles/colors.scss";
import { TweenMax } from "gsap";
import styles from "./Logo.module.scss";
import {
    ref1_points_base,
    ref1_points_expanded, ref2_points_base,
    ref2_points_expanded, ref3_points_base,
    ref3_points_expanded, ref4_points_base,
    ref4_points_expanded
} from "@/app/components/logo/config";

//TODO setting types for arguments
const animateReference = (ref: any, expandedPoints: any) => {
    TweenMax.to(ref.current, 2, {
        attr: {points: expandedPoints},
        repeatDelay: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.out",
    });
};

export const Logo: FC = () => {
    const ref2 = useRef(null);
    const ref1 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    useEffect(() => {
        animateReference(ref1, ref1_points_expanded);
        animateReference(ref2, ref2_points_expanded);
        animateReference(ref3, ref3_points_expanded);
        animateReference(ref4, ref4_points_expanded);
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
                             points={ref1_points_base}/>
                </g>
                <g>
                    <polygon ref={ref2}
                             points={ref2_points_base}/>
                </g>
                <g>
                    <polygon ref={ref3}
                             points={ref3_points_base}/>
                </g>
                <g>
                    <polygon ref={ref4}
                             points={ref4_points_base}/>
                </g>
            </svg>
        </>
    );
};
