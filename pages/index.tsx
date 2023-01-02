import SearchEngine from '../components/dominios/SearchEngine'
import CategoriesHome from '../components/home/Categories'
import Support from '../components/home/Support'
import TestimonialsHome from '../components/home/Testimonials'

function Home() {
  return (
    <>
      <section className="scroll-smooth">
        <SearchEngine />
        <CategoriesHome />
        <TestimonialsHome />
        <Support />
      </section>
    </>
  )
}

export default Home
