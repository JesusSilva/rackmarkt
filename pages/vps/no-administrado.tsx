import FAQ from '../../components/shared/FAQ'
import Description from '../../components/vps/no-administrado/Description'
import Hero from '../../components/vps/no-administrado/Hero'
import Pricing from '../../components/vps/no-administrado/Pricing'
import Specifications from '../../components/vps/no-administrado/Specifications'

function noAdministrado() {
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

export default noAdministrado
