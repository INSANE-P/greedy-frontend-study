# Greedy Frontend Study

세종대 개발 동아리 Greedy의 프론트엔드 스터디 소개용 발표 슬라이드.

## Getting Started

```bash
npm install
npm run dev
```

개발 서버는 `http://localhost:5173` 에서 실행됩니다.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 정적 빌드 (`dist/`) |
| `npm run preview` | 빌드 결과 미리보기 |

## Navigation

| Key | Action |
| --- | --- |
| `↓` `→` `Space` `PageDown` | 다음 슬라이드 |
| `↑` `←` `PageUp` | 이전 슬라이드 |
| `Home` / `End` | 처음 / 마지막 슬라이드 |
| Mouse wheel | scroll-snap |

## Presentation Mode

우상단 `발표 시작` 버튼을 누르면 첫 슬라이드로 이동하면서 전체 화면에 진입합니다. 이후 화면을 클릭하면 다음 슬라이드로 넘어가고, `Esc` 로 종료됩니다.

## Presenter Notes

URL 에 `?notes=true` 를 붙이면 우하단에 발표자 노트가 표시됩니다.

```
http://localhost:5173/?notes=true
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Pretendard

## Structure

```
src/
├── sections/    슬라이드 컴포넌트 (한 파일 = 한 슬라이드)
├── components/  공용 UI
├── data/        슬라이드 메타 / 컨텐츠 / 발표자 노트
├── hooks/       네비게이션·발표 모드 훅
└── lib/         framer-motion variants
```

슬라이드 순서와 라벨은 `src/data/sections.ts` 에서 관리합니다.
