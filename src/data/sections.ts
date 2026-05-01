export const sectionMeta = [
  { id: 'hero', label: '00', title: '인트로' },
  { id: 'about', label: '01', title: '소개' },
  { id: 'beginning', label: '02', title: '시작 계기' },
  { id: 'curriculum', label: '03', title: '커리큘럼' },
  { id: 'mission-rework', label: '04', title: '미션 리뉴얼' },
  { id: 'process', label: '05', title: '진행 방식' },
  { id: 'operations', label: '06', title: '운영' },
  { id: 'people', label: '07', title: '사람들' },
  { id: 'closing', label: '08', title: '끝' },
] as const

export const speakerNotes: Record<string, string> = {
  hero: '안녕하세요, 그리디 프론트엔드 스터디에 대한 발표를 시작하겠습니다.',
  about:
    '간단히 자기소개 먼저 드리면, 저는 그리디 2기 프론트엔드로 들어와서 지금은 3기와 4기 프론트엔드 리드를 함께 맡고 있습니다.',
  beginning:
    '스터디를 시작하게 된 계기는 사실 특별한 이유가 있었던 건 아니고요, 그리디의 좋은 사람들이랑 함께하면 재밌게 할 수 있겠다는 생각으로 진행하게 됐습니다.',
  curriculum:
    '커리큘럼은 총 14주 과정으로, JavaScript 3주 + React 11주로 구성되어 있습니다. JavaScript 트랙은 숫자야구, 탐욕의 룰렛, 좀비 서바이벌 세 개의 미션을 다루고, 이어서 React 기초 2주에 cho-log React, React 심화 4주에 self-paced-react-adv, Project 3주에 무엇이든 만들어보세요, 마지막 SSR 2주에 포켓몬 도감까지 진행합니다.',
  'mission-rework':
    '이번 기수를 준비하면서 방학 동안 미션을 새로 만들었습니다. 이전 기수 피드백을 바탕으로 5개 미션을 다시 구성했고, 혜정·규영·범수·찬빈 네 명이 함께 기획하고 제작했습니다. 새로 만든 미션은 탐욕의 룰렛, 좀비 서바이벌, self-paced-react-adv, 무엇이든 만들어보세요, 포켓몬 도감 다섯 개입니다.',
  process:
    '진행 방식은 한 주에 한 사이클로 돌아갑니다. 먼저 한 주 동안 각자 미션을 진행하고, PR 위에서 코드 리뷰를 받고, 리뷰 댓글로 티키타카를 주고받습니다. 그리고 스터디 시간에는 그 주 리뷰에서 좋았던 부분과 미션의 핵심 내용을 함께 정리하면서 마무리합니다. 여기에 모각코 주 1회를 더해서 사이클을 굴리고 있습니다.',
  operations:
    '운영 구조를 보면, 스터디 리드는 총 5명이고 한 스터디마다 리드 2명씩 번갈아 들어가는 방식으로 진행합니다. 4기 멤버는 리뷰어와 1:1로 매칭되어 티키타카를 주고받고요. 스터디 자료는 들어가는 두 명이 비동기로 제작하는데, 전 회차 리뷰에서 좋았던 부분과 이번 미션의 핵심을 직접 정리해서 만듭니다.',
  people:
    '스터디를 함께하는 사람들 소개드리겠습니다. 먼저 고정 리뷰어는 의천·혜정·규영 세 분이고, 매주 코드 리뷰와 4기와의 1:1 매칭을 담당해 주십니다. 스터디 리드는 창우·범수·재홍·혁·찬빈 다섯 명이고, 이 중 창우·범수·찬빈은 리뷰 로테이션에도 함께 들어갑니다. 그리고 이번 4기 멤버는 의민·규민·동건·동현 네 분이 함께해 주고 있습니다.',
  closing:
    '여기까지가 그리디 프론트엔드 스터디 소개였습니다. 그리디 화이팅, 감사합니다!',
}

import type { ComponentProps } from 'react'
import type { MissionIcon } from '../components/MissionIcon'

type IconVariant = ComponentProps<typeof MissionIcon>['variant']

export type Mission = {
  weeks: string
  weekRange: [number, number]
  track: string
  title: string
  topics: string[]
  href: string
  hrefHost: 'GitHub' | 'Notion'
  icon: IconVariant
  reworked?: boolean
}

export const missions: Mission[] = [
  {
    weeks: '1주',
    weekRange: [1, 1],
    track: 'JavaScript',
    title: '숫자야구',
    topics: ['입력 검증', '게임 루프'],
    href: 'https://github.com/greedy-team/javascript-baseball-precourse',
    hrefHost: 'GitHub',
    icon: 'baseball',
  },
  {
    weeks: '2주',
    weekRange: [2, 2],
    track: 'JavaScript',
    title: '탐욕의 룰렛',
    topics: ['확률', '상태 관리'],
    href: 'https://github.com/greedy-team/javascript-greedy-roulette',
    hrefHost: 'GitHub',
    icon: 'roulette',
    reworked: true,
  },
  {
    weeks: '3주',
    weekRange: [3, 3],
    track: 'JavaScript',
    title: '좀비 서바이벌',
    topics: ['시뮬레이션', '충돌'],
    href: 'https://github.com/greedy-team/javascript-zombie-survival',
    hrefHost: 'GitHub',
    icon: 'zombie',
    reworked: true,
  },
  {
    weeks: '4–5주',
    weekRange: [4, 5],
    track: 'React 기초',
    title: 'cho-log React',
    topics: ['JSX', 'state', 'props', '비동기'],
    href: 'https://github.com/cho-log/self-paced-react',
    hrefHost: 'GitHub',
    icon: 'react',
  },
  {
    weeks: '6–9주',
    weekRange: [6, 9],
    track: 'React 심화',
    title: 'self-paced-react-adv',
    topics: ['Styled', 'Context', 'Zustand', 'TanStack Query'],
    href: 'https://github.com/greedy-team/self-paced-react-advanced',
    hrefHost: 'GitHub',
    icon: 'react-adv',
    reworked: true,
  },
  {
    weeks: '10–12주',
    weekRange: [10, 12],
    track: 'Project',
    title: '무엇이든 만들어보세요',
    topics: ['Router', '접근성', '테스트'],
    href: 'https://github.com/greedy-team/react-whatever-you-want',
    hrefHost: 'GitHub',
    icon: 'free',
    reworked: true,
  },
  {
    weeks: '13–14주',
    weekRange: [13, 14],
    track: 'SSR',
    title: '포켓몬 도감',
    topics: ['Express + Vite', 'hydration', 'PokeAPI'],
    href: 'https://github.com/greedy-team/react-pokemon-ssr',
    hrefHost: 'GitHub',
    icon: 'pokeball',
    reworked: true,
  },
]

export type Person = {
  name: string
  handle: string
  role: 'reviewer' | 'lead' | 'member'
  url: string
  avatar: string
  /** lead 중 리뷰 로테이션에 함께 들어가는 사람 */
  reviewing?: boolean
}

export const people: Person[] = [
  {
    name: '의천',
    handle: 'wzrabbit',
    role: 'reviewer',
    url: 'https://github.com/wzrabbit',
    avatar: './avatars/wzrabbit.png',
  },
  {
    name: '혜정',
    handle: 'Songhyejeong',
    role: 'reviewer',
    url: 'https://github.com/Songhyejeong',
    avatar: './avatars/Songhyejeong.png',
  },
  {
    name: '규영',
    handle: 'gxuoo',
    role: 'reviewer',
    url: 'https://github.com/gxuoo',
    avatar: './avatars/gxuoo.png',
  },
  {
    name: '창우',
    handle: 'ChangwooJ',
    role: 'lead',
    url: 'https://github.com/ChangwooJ',
    avatar: './avatars/ChangwooJ.png',
    reviewing: true,
  },
  {
    name: '범수',
    handle: 'Indigochi1d',
    role: 'lead',
    url: 'https://github.com/Indigochi1d',
    avatar: './avatars/Indigochi1d.png',
    reviewing: true,
  },
  {
    name: '재홍',
    handle: 'yoonjaehong26',
    role: 'lead',
    url: 'https://github.com/yoonjaehong26',
    avatar: './avatars/yoonjaehong26.png',
  },
  {
    name: '혁',
    handle: 'Johncakes',
    role: 'lead',
    url: 'https://github.com/Johncakes',
    avatar: './avatars/Johncakes.png',
  },
  {
    name: '찬빈',
    handle: 'INSANE-P',
    role: 'lead',
    url: 'https://github.com/INSANE-P',
    avatar: './avatars/INSANE-P.png',
    reviewing: true,
  },
  {
    name: '의민',
    handle: 'EM-H20',
    role: 'member',
    url: 'https://github.com/EM-H20',
    avatar: 'https://github.com/EM-H20.png',
  },
  {
    name: '규민',
    handle: 'kokunut',
    role: 'member',
    url: 'https://github.com/kokunut',
    avatar: 'https://github.com/kokunut.png',
  },
  {
    name: '동건',
    handle: 'rahwan10',
    role: 'member',
    url: 'https://github.com/rahwan10',
    avatar: 'https://github.com/rahwan10.png',
  },
  {
    name: '동현',
    handle: 'realcdh',
    role: 'member',
    url: 'https://github.com/realcdh',
    avatar: 'https://github.com/realcdh.png',
  },
]
