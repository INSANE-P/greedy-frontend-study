/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0E1614',
        ink: '#F2EFE5',
        sub: '#BFB9A8',
        muted: '#807D70',
        brand: '#1FB484',
        accent: '#34D399',
        deep: '#0F7A5A',
        card: '#182320',
        line: '#2A352F',
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'system-ui',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        display: 'clamp(3rem, 8vw, 7rem)',
        huge: 'clamp(2.25rem, 5.5vw, 4.5rem)',
        big: 'clamp(1.75rem, 3.5vw, 3rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
