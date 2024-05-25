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
  targetRef: React.RefObject<HTMLElement>,
  tooltipRef: React.RefObject<HTMLElement>
) => {
  const getPosition = useCallback(
    (dir: Direction, gap: number = 10) => {
      const position = { x: 0, y: 0 };
      if (!targetRef.current || !tooltipRef.current) return position;

      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const { top, bottom, left, right, width, height } = targetRect;

      const pivotCenterX = left + width / 2;
      const pivotCenterY = top + height / 2;

      const targetCenterX = tooltipRect.width / 2;
      const targetCenterY = tooltipRect.height / 2;

      const directionMap: Record<Direction, [number, number]> = {
        top: [pivotCenterX - targetCenterX, top - tooltipRect.height - gap],
        topLeft: [left, top - tooltipRect.height - gap],
        topRight: [right - tooltipRect.width, top - tooltipRect.height - gap],
        right: [right + gap, pivotCenterY - targetCenterY],
        rightTop: [right + gap, top],
        rightBottom: [right + gap, bottom - tooltipRect.height],
        bottom: [pivotCenterX - targetCenterX, bottom + gap],
        bottomLeft: [left, bottom + gap],
        bottomRight: [right - tooltipRect.width, bottom + gap],
        left: [left - tooltipRect.width - gap, pivotCenterY - targetCenterY],
        leftTop: [left - tooltipRect.width - gap, top],
        leftBottom: [left - tooltipRect.width - gap, bottom - tooltipRect.height],
      };

      [position.x, position.y] = directionMap[dir] || [
        pivotCenterX - targetCenterX,
        pivotCenterY - targetCenterY,
      ];

      return position;
    },
    [targetRef, tooltipRef]
  );

  return { getPosition };
};

export default usePosition;
