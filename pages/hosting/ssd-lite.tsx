import Description from '../../components/hostings/ssd-lite/Description'
import Pricing from '../../components/hostings/ssd-lite/Pricing'
import Specifications from '../../components/hostings/ssd-lite/Specifications'
import Unlimited from '../../components/hostings/ssd-lite/Unlimited'
import FAQ from '../../components/shared/sections/FAQ'

function ssdLite() {
  return (
    <>
      <Pricing />
      <Description />
      <Specifications />
      <Unlimited />
      <FAQ />
    </>
  )
}

export default ssdLite
