// emotion의 기본 CSS를 초기화 하고 전역적으로 제공하는 Provider
'use client'
import { CacheProvider, Global, css } from '@emotion/react'
import createCache from '@emotion/cache'

const cache = createCache({ key: 'css' })

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  * {
    box-sizing: border-box;
  }
`

const EmotionProvider = ({ children }: React.PropsWithChildren) => (
  <CacheProvider value={cache}>
    <Global styles={globalStyles} />
    {children}
  </CacheProvider>
)

export default EmotionProvider
