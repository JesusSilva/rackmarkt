import CategoriesDominios from '../components/dominios/Categories'
import Free from '../components/dominios/Free'
import HeroDominios from '../components/dominios/Hero'
import Offers from '../components/dominios/Offers'
import SearchEngine from '../components/dominios/SearchEngine'
import TextDominios from '../components/dominios/Text'
import FAQ from '../components/shared/sections/FAQ'

const Domains = () => {
  return (
    <>
      <SearchEngine />
      <CategoriesDominios />
      <TextDominios />
      <Free />
      <Offers />
      <FAQ />
    </>
  )
}

export default Domains
