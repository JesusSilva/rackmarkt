import { useRouter } from 'next/router'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/404' && <Header />}
      {children}
      {router.pathname !== '/404' && <CallToAction />}
      {router.pathname !== '/404' && <Footer />}
    </>
  )
}

export default Layout
