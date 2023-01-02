import { useRouter } from 'next/router'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter()
  return (
    <>
      {pathname !== '/404' && <Header />}
      {pathname !== '/404' && (
        <main style={{ marginTop: '80px' }}>
          <Hero />
          {children}
        </main>
      )}
      {pathname !== '/404' && <CallToAction />}
      {pathname !== '/404' && <Footer />}

      {/* Page Error 404 */}
      {pathname === '/404' && children}
    </>
  )
}
