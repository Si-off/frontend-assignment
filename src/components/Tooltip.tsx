import React, { useState, useRef, useLayoutEffect, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import '@/styles/tooltip.css';
import { useDelayedState, usePosition } from '@/hooks';

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
  dir?: Direction;
  enterDelay?: number;
  leaveDelay?: number;
  disable?: boolean;
  gap?: number;
}

type Direction =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'topLeft'
  | 'topRight'
  | 'rightTop'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom';

const Tooltip = ({
  children,
  content,
  gap = 10,
  disable = false,
  dir = 'bottom',
  enterDelay = 0,
  leaveDelay = 0,
}: Props) => {
  const pivotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { state: isShow, setDelayedState: setShow } = useDelayedState<boolean>(false);
  const [style, setStyle] = useState<CSSProperties>();
  const { getPosition } = usePosition(pivotRef, targetRef);

  useLayoutEffect(() => {
    if (isShow) {
      const { x, y } = getPosition(dir, gap);
      setStyle({ transform: `translate(${x}px, ${y}px)` });
    }
  }, [dir, gap, getPosition, isShow]);

  const showTooltip = () => {
    setShow(true, enterDelay);
  };

  const hideTooltip = () => {
    setShow(false, leaveDelay);
  };

  return (
    <>
      <div
        className='tooltip-wrapper'
        ref={pivotRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}>
        {children}
      </div>
      {isShow &&
        !disable &&
        createPortal(
          <div
            ref={targetRef}
            className='tooltip-box'
            style={style}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}>
            <div className='tooltip-content'>
              <span className={`tail ${dir}`} />
              {content}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
