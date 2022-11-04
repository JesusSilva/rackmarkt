import Description from '../../components/servicios/plesk/Description'
import Hero from '../../components/servicios/plesk/Hero'
import Pricing from '../../components/servicios/plesk/Pricing'
import Variety from '../../components/servicios/plesk/Variety'
import FAQ from '../../components/shared/FAQ'

function plesk() {
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

export default plesk
