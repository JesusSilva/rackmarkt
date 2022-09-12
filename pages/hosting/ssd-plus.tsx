import Description from '../../components/hostings/ssd-plus/Description'
import Hero from '../../components/hostings/ssd-plus/Hero'
import Pricing from '../../components/hostings/ssd-plus/Pricing'
import Specifications from '../../components/hostings/ssd-plus/Specifications'
import Unlimited from '../../components/hostings/ssd-plus/Unlimited'
import FAQ from '../../components/shared/FAQ'

function ssdPlus() {
  return (
    <>
      <Hero />
      <Pricing />
      <Description />
      <Specifications />
      <Unlimited />
      <FAQ />
    </>
  )
}

export default ssdPlus
