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
      if (!pivotRef?.current || !targetRef?.current) return { x: 0, y: 0 };
      const pivotRect = pivotRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      const { top, bottom, left, right, width, height } = pivotRect;
      const pivotCenterX = left + width / 2;
      const pivotCenterY = top + height / 2;
      const targetCenterX = targetRect.width / 2;
      const targetCenterY = targetRect.height / 2;

      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      let x = 0;
      let y = 0;

      switch (dir) {
        case 'top':
          x = pivotCenterX - targetCenterX;
          y = top - targetRect.height - gap;
          break;
        case 'topLeft':
          x = left;
          y = top - targetRect.height - gap;
          break;
        case 'topRight':
          x = right - targetRect.width;
          y = top - targetRect.height - gap;
          break;
        case 'right':
          x = right + gap;
          y = pivotCenterY - targetCenterY;
          break;
        case 'rightTop':
          x = right + gap;
          y = top;
          break;
        case 'rightBottom':
          x = right + gap;
          y = bottom - targetRect.height;
          break;
        case 'bottom':
          x = pivotCenterX - targetCenterX;
          y = bottom + gap;
          break;
        case 'bottomLeft':
          x = left;
          y = bottom + gap;
          break;
        case 'bottomRight':
          x = right - targetRect.width;
          y = bottom + gap;
          break;
        case 'left':
          x = left - targetRect.width - gap;
          y = pivotCenterY - targetCenterY;
          break;
        case 'leftTop':
          x = left - targetRect.width - gap;
          y = top;
          break;
        case 'leftBottom':
          x = left - targetRect.width - gap;
          y = bottom - targetRect.height;
          break;
        default:
          x = pivotCenterX - targetCenterX;
          y = pivotCenterY - targetCenterY;
      }

      return {
        x: x + scrollX,
        y: y + scrollY,
      };
    },
    [pivotRef, targetRef]
  );

  return { getPosition };
};

export default usePosition;
