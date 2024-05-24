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
    (dir: Direction) => {
      const position = { x: 0, y: 0 };
      if (!targetRef.current || !tooltipRef.current) return position;

      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const { top, bottom, left, right, width, height } = targetRect;
      const xCenter = left + width / 2;
      const yCenter = top + height / 2;

      const directionMap: Record<Direction, [number, number]> = {
        top: [xCenter - tooltipRect.width / 2, top - tooltipRect.height],
        topLeft: [left, top - tooltipRect.height],
        topRight: [right - tooltipRect.width, top - tooltipRect.height],
        right: [right, yCenter - tooltipRect.height / 2],
        rightTop: [right, top],
        rightBottom: [right, bottom - tooltipRect.height],
        bottom: [xCenter - tooltipRect.width / 2, bottom],
        bottomLeft: [left, bottom],
        bottomRight: [right - tooltipRect.width, bottom],
        left: [left - tooltipRect.width, yCenter - tooltipRect.height / 2],
        leftTop: [left - tooltipRect.width, top],
        leftBottom: [left - tooltipRect.width, bottom - tooltipRect.height],
      };

      [position.x, position.y] = directionMap[dir] || [
        xCenter - tooltipRect.width / 2,
        yCenter - tooltipRect.height / 2,
      ];

      return position;
    },
    [targetRef, tooltipRef]
  );

  return { getPosition };
};

export default usePosition;
