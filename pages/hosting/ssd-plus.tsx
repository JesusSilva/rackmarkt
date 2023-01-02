import Description from '../../components/hostings/ssd-plus/Description'
import Pricing from '../../components/hostings/ssd-plus/Pricing'
import Specifications from '../../components/hostings/ssd-plus/Specifications'
import Unlimited from '../../components/hostings/ssd-plus/Unlimited'
import FAQ from '../../components/shared/sections/FAQ'

function ssdPlus() {
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

export default ssdPlus
