import { useRouter } from 'next/router'
import CallToAction from './CallToAction'
import Footer from './Footer'
import HeaderFullWidth from './HeaderFullWidth'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/404' && <HeaderFullWidth />}
      {children}
      {router.pathname !== '/404' && <CallToAction />}
      {router.pathname !== '/404' && <Footer />}
    </>
  )
}

export default Layout
