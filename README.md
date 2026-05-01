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

## Shortcuts

| Key | Action |
| --- | --- |
| `↓` `→` `Space` `PageDown` | 다음 슬라이드 |
| `↑` `←` `PageUp` | 이전 슬라이드 |
| `Home` / `End` | 처음 / 마지막 슬라이드 |
| `O` | 슬라이드 오버뷰 (9-그리드) 토글 |
| `N` | 발표자 노트 토글 |
| `B` / `W` | 블랙 / 화이트 스크린 |
| `?` | 단축키 안내 토글 |
| `Esc` | 오버레이 닫기 / 발표 모드 종료 |

발표 중 마우스가 일정 시간 멈춰 있으면 커서가 자동으로 사라집니다.

## Presentation Mode

우상단 `발표 시작` 버튼을 누르면 첫 슬라이드로 이동하면서 전체 화면에 진입합니다. 화면을 클릭하면 다음 슬라이드로 넘어가고, `Esc` 로 종료됩니다.

## URL Sync

현재 슬라이드는 URL hash에 자동으로 동기화됩니다. 새로고침해도 자리가 유지되고, 특정 슬라이드 링크를 공유할 수 있습니다.

```
http://localhost:5173/#curriculum
```

## Presenter HUD

`N` 키를 누르거나 URL 에 `?notes=true` 를 붙이면 발표자 전용 HUD 가 켜집니다 — 우하단에 슬라이드별 발표자 노트, 우상단에 발표 경과 타이머가 표시됩니다. 청중에게 보이는 화면에는 떠선 안 되므로, 듀얼 모니터 환경(확장 모드)에서 발표자 노트북에서만 켜는 용도로 쓰는 게 맞습니다.

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
├── components/  공용 UI / 오버레이 / 인디케이터
├── data/        슬라이드 메타 / 컨텐츠 / 발표자 노트
├── hooks/       네비게이션·발표 모드·단축키 훅
└── lib/         framer-motion variants
```

슬라이드 순서와 라벨은 `src/data/sections.ts` 에서 관리합니다.
