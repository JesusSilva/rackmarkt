import Description from '../../components/servicios/cpanel/Description'
import Hero from '../../components/servicios/cpanel/Hero'
import Pricing from '../../components/servicios/cpanel/Pricing'
import Variety from '../../components/servicios/cpanel/Variety'
import FAQ from '../../components/shared/FAQ'

function cpanel() {
  return (
    <>
      <Hero />
      <Description />
      <Variety />
      <Pricing />
      <FAQ />
    </>
  )
}

export default cpanel
