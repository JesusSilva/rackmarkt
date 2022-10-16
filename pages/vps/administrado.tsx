import FAQ from '../../components/shared/FAQ'
import Description from '../../components/vps/administrado/Description'
import Hero from '../../components/vps/administrado/Hero'
import Pricing from '../../components/vps/administrado/Pricing'
import Specifications from '../../components/vps/administrado/Specifications'

function administrado() {
  return (
    <>
      <Hero />
      <Specifications />
      <Pricing />
      <Description />
      <FAQ />
    </>
  )
}

export default administrado
