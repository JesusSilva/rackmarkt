import FAQ from '../../components/shared/sections/FAQ'
import Description from '../../components/vps/no-administrado/Description'
import Pricing from '../../components/vps/no-administrado/Pricing'
import Specifications from '../../components/vps/no-administrado/Specifications'

function noAdministrado() {
  return (
    <>
      <Specifications />
      <Pricing />
      <Description />
      <FAQ />
    </>
  )
}

export default noAdministrado
