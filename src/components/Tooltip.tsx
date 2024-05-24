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
  disable = false,
  dir = 'bottom',
  enterDelay = 0,
  leaveDelay = 0,
}: Props) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { state: isShow, setDelayedState: setShow } = useDelayedState<boolean>(false);
  const [style, setStyle] = useState<CSSProperties>();
  const { getPosition } = usePosition(targetRef, tooltipRef);

  useLayoutEffect(() => {
    if (isShow) {
      const { x, y } = getPosition(dir);
      setStyle({ transform: `translate(${x}px, ${y}px)` });
    }
  }, [dir, getPosition, isShow]);

  const showTooltip = () => {
    setShow(true, enterDelay);
  };

  const hideTooltip = () => {
    setShow(false, leaveDelay);
  };

  return (
    <>
      <div ref={targetRef} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      {isShow &&
        !disable &&
        createPortal(
          <div
            ref={tooltipRef}
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