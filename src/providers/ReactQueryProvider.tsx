// 어플리케이션에 React Query를 적용하는 프로바이더

'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// React Query 개발도구, 상태 시각화 및 디버깅
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// React Query의 스트림 기반 서버 측 렌더링(SSR) 지원 모듈로, React 18의 새로운 스트리밍 기능을 활용하여 서버에서 데이터를 미리 페칭하고, 이를 클라이언트로 전달하여 초기 로딩 시간을 줄임
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {children}

      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
