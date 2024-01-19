import { FC, useEffect, useRef } from 'react';
import '@/app/styles/colors.scss';
import gsap from 'gsap';
import styles from './logo.module.scss';
import classNames from 'classnames';
import {
  ref1_points_base,
  ref1_points_expanded,
  ref2_points_base,
  ref2_points_expanded,
  ref3_points_base,
  ref3_points_expanded,
  ref4_points_base,
  ref4_points_expanded
} from '@/app/components/layout/logo/config';


//TODO setting types for arguments
const animateReference = (ref: any, expandedPoints: any) => {
  // gsap.ticker.remove(gsap.updateRoot);
  // gsap.updateRoot(20);
  gsap.to(
    ref.current,
    1.5,
    {
      attr: { points: expandedPoints },
      repeatDelay: 6,
      // yoyoEase: true,
      repeat: -1,
      // lazy: true,
      ease: 'bounce'
    }
  );
};

interface LogoProps {
}

export const Logo: FC<LogoProps> = ({}) => {
  const ref2 = useRef(null);
  const ref1 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    animateReference(
      ref1,
      ref1_points_expanded
    );
    animateReference(
      ref2,
      ref2_points_expanded
    );
    animateReference(
      ref3,
      ref3_points_expanded
    );
    animateReference(
      ref4,
      ref4_points_expanded
    );
  });

  return (
    <>
      <svg
        className={classNames(styles.logo)}
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
