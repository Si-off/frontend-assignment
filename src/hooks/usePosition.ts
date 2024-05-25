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
    (dir: Direction, gap: number = 10) => {
      if (!pivotRef.current || !targetRef.current) return { x: 0, y: 0 };

      const pivotRect = pivotRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      const { top, bottom, left, right, width, height } = pivotRect;
      const pivotCenterX = left + width / 2;
      const pivotCenterY = top + height / 2;
      const targetCenterX = targetRect.width / 2;
      const targetCenterY = targetRect.height / 2;

      const directionMap: Record<Direction, { x: number; y: number }> = {
        top: { x: pivotCenterX - targetCenterX, y: top - targetRect.height - gap },
        topLeft: { x: left, y: top - targetRect.height - gap },
        topRight: { x: right - targetRect.width, y: top - targetRect.height - gap },
        right: { x: right + gap, y: pivotCenterY - targetCenterY },
        rightTop: { x: right + gap, y: top },
        rightBottom: { x: right + gap, y: bottom - targetRect.height },
        bottom: { x: pivotCenterX - targetCenterX, y: bottom + gap },
        bottomLeft: { x: left, y: bottom + gap },
        bottomRight: { x: right - targetRect.width, y: bottom + gap },
        left: { x: left - targetRect.width - gap, y: pivotCenterY - targetCenterY },
        leftTop: { x: left - targetRect.width - gap, y: top },
        leftBottom: { x: left - targetRect.width - gap, y: bottom - targetRect.height },
      };

      return (
        directionMap[dir] || { x: pivotCenterX - targetCenterX, y: pivotCenterY - targetCenterY }
      );
    },
    [pivotRef, targetRef]
  );

  return { getPosition };
};

export default usePosition;
