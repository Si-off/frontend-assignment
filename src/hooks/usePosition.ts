import { useCallback } from 'react';

type Direction =
  | 'top'
  | 'topRight'
  | 'topLeft'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomRight'
  | 'bottomLeft'
  | 'left'
  | 'leftTop'
  | 'leftBottom';

const usePosition = (
  pivotRef: React.RefObject<HTMLElement>,
  targetRef: React.RefObject<HTMLElement>
) => {
  const getPosition = useCallback(
    (dir: Direction = 'bottom', gap: number = 0) => {
      if (!pivotRef.current || !targetRef.current) return { x: 0, y: 0 };
      const pivotRect = pivotRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      const { top, bottom, left, right, width, height } = pivotRect;
      const pivotCenterX = left + width / 2;
      const pivotCenterY = top + height / 2;
      const targetCenterX = targetRect.width / 2;
      const targetCenterY = targetRect.height / 2;

      switch (dir) {
        case 'top':
          return { x: pivotCenterX - targetCenterX, y: top - targetRect.height - gap };
        case 'topLeft':
          return { x: left, y: top - targetRect.height - gap };
        case 'topRight':
          return { x: right - targetRect.width, y: top - targetRect.height - gap };
        case 'right':
          return { x: right + gap, y: pivotCenterY - targetCenterY };
        case 'rightTop':
          return { x: right + gap, y: top };
        case 'rightBottom':
          return { x: right + gap, y: bottom - targetRect.height };
        case 'bottom':
          return { x: pivotCenterX - targetCenterX, y: bottom + gap };
        case 'bottomLeft':
          return { x: left, y: bottom + gap };
        case 'bottomRight':
          return { x: right - targetRect.width, y: bottom + gap };
        case 'left':
          return { x: left - targetRect.width - gap, y: pivotCenterY - targetCenterY };
        case 'leftTop':
          return { x: left - targetRect.width - gap, y: top };
        case 'leftBottom':
          return { x: left - targetRect.width - gap, y: bottom - targetRect.height };
        default:
          return { x: pivotCenterX - targetCenterX, y: pivotCenterY - targetCenterY };
      }
    },
    [pivotRef, targetRef]
  );

  return { getPosition };
};

export default usePosition;
