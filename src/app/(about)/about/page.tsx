import { PropsWithChildren, ReactNode } from 'react'
import { IntroSection, ItemSection, FAQsSection } from './comps'

export const about = ({ children }: { children: ReactNode }, props: PropsWithChildren) => {
  return (
    <>
      <IntroSection>{children}</IntroSection>
      <ItemSection />
      <FAQsSection />
    </>
  )
}

export default about
