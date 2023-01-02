import FAQ from '../../components/shared/sections/FAQ'
import Description from '../../components/vps/administrado/Description'
import Pricing from '../../components/vps/administrado/Pricing'
import Specifications from '../../components/vps/administrado/Specifications'

function administrado() {
  return (
    <>
      <Specifications />
      <Pricing />
      <Description />
      <FAQ />
    </>
  )
}

export default administrado
