import CategoriesDominios from '../components/dominios/Categories'
import FAQDominios from '../components/dominios/FAQ'
import Free from '../components/dominios/Free'
import HeroDominios from '../components/dominios/Hero'
import Offers from '../components/dominios/Offers'
import SearchEngine from '../components/dominios/SearchEngine'
import TextDominios from '../components/dominios/Text'

const Domains = () => {
  return (
    <>
      <HeroDominios />
      <SearchEngine />
      <CategoriesDominios />
      <TextDominios />
      <Free />
      <Offers />
      <FAQDominios />
    </>
  )
}

export default Domains
