# FE 과제 테스트

- [배포 링크](https://frontend-assignment-sable-five.vercel.app)

## 설치 및 실행

### 요구 사항

- node.js
- yarn

### 패키지 설치

```
yarn install
```

### 개발 환경 실행

```
yarn dev
```

<br/>

## 폴더 구조

```
.
├─ src
│  ├─ components
│  │  ├─ index.ts
│  │  └─ Tooltip.tsx
│  ├─ hooks
│  │  ├─ index.ts
│  │  ├─ useDelayedState.ts
│  │  └─ usePosition.ts
│  ├─ styles
│  │  └─ tooltip.css
│  ├─ index.css
│  ├─ index.tsx
│  ├─ App.css
│  ├─ App.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package.json
├─ README.md

```

<br/>

## 구현 로직

툴팁 컴포넌트는 다음과 같이 구성했습니다.

- Tooltip.tsx
- usePosition.ts
- useDelayedState.ts

<br/>

## Tootip

Tootip 컴포넌트는 감싸진 특정 요소에 마우스를 올리면 툴팁을 렌더링합니다.
툴팁의 위치와 렌더링 지연은 `usePosition`, `useDelayedState`로 로직을 분리하여 구현했습니다.

- `useLayoutEffect`를 사용하여 마우스가 오버되어 툴팁이 렌더링 해야 할 때 paint 되기 전에 툴팁의 위치를 설정하였습니다.

  ```typescript
  useLayoutEffect(() => {
    if (isShow) {
      const { x, y } = getPosition(dir, gap);
      setStyle({ transform: `translate(${x}px, ${y}px)` });
    }
  }, [dir, gap, getPosition, isShow]);
  ```

- 위치 조정 시 reflow를 발생시키지 않으며, GPU로 처리되는 `transform`을 사용했습니다.
- 부모 요소가 `overflow: hidden`이더라도 정상적으로 툴팁이 나타나도록 `React.createPortal`을 사용하였습니다.

<br/>

### Props

| 이름        | 타입                                                                                                                                                             | 기본 값    | 설명                                         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------- |
| children    | `React.ReactNode`                                                                                                                                                |            | 툴팁이 표시될 기준이 되는 요소입니다.        |
| content     | `React.ReactNode`                                                                                                                                                |            | 툴팁에 표시할 내용입니다.                    |
| dir         | `'top' \| 'right' \| 'bottom' \| 'left' \| 'topLeft' \| 'topRight' \| 'rightTop' \| 'rightBottom' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom'` | `'bottom'` | 툴팁의 위치 방향입니다.                      |
| enterDelay  | `number`                                                                                                                                                         | `0`        | 툴팁이 표시될 때의 지연 시간 (밀리초)입니다. |
| leaveDelay  | `number`                                                                                                                                                         | `0`        | 툴팁이 숨겨질 때의 지연 시간 (밀리초)입니다. |
| disable     | `boolean`                                                                                                                                                        | `false`    | 툴팁을 비활성화할지 여부를 설정합니다.       |
| gap         | `number`                                                                                                                                                         | `10`       | 기준 요소와 툴팁 사이의 간격을 설정합니다.   |
| interactive | `boolean`                                                                                                                                                        | `false`    | 툴팁의 상호작용 가능 여부를 설정합니다.      |

<br/>

## usePosition

usePosition 훅은 기준 요소(pivotRef)를 기준으로 대상 요소(targetRef)를 12가지 방향 중 하나로 위치시키기 위한 좌표를 계산하여 반환하는 `getPosition()` 함수를 제공합니다.

`getPosition()`의 두 번째 인자로 number 타입 값을 넘기면 기준 요소로부터 해당 값 만큼 멀어집니다.

```typescript
const usePosition: (
  pivotRef: React.RefObject<HTMLElement>,
  targetRef: React.RefObject<HTMLElement>
) => {
  getPosition: (
    dir?: Direction,
    gap?: number
  ) => {
    x: number;
    y: number;
  };
};
```

### 사용 예시

```typescript
const { getPosition } = usePosition(pivotRef, targetRef);

...
const { x, y } = getPosition('top', 10);
```

<br/>

## useDelayedState

상태의 업데이트를 props로 받은 delay 값에 따라 지연시키기 위한 훅입니다.
훅이 반환하는 `setDelayedState()`로 지연시킬 시간(밀리초)을 인자로 넘겨 해당 시간만큼 상태 업데이트를 지연시킵니다.

```typescript
const useDelayedState: <T>(initialState?: T | undefined) => {
  state: T | undefined;
  setDelayedState: (newState: T, delay?: number) => void;
};
```

### 사용 예시

```typescript
const { state, setDelayedState } = useDelayedState(0);

...
setDelayedState(state + 1, 1000); // 1초 후에 상태를 업데이트
setDelayedState(state + 1); // 지연없이 즉시 상태 업데이트
```
