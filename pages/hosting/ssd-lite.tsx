import Description from '../../components/hostings/ssd-lite/Description'
import Hero from '../../components/hostings/ssd-lite/Hero'
import Pricing from '../../components/hostings/ssd-lite/Pricing'
import Specifications from '../../components/hostings/ssd-lite/Specifications'
import Unlimited from '../../components/hostings/ssd-lite/Unlimited'
import FAQ from '../../components/shared/FAQ'

function ssdLite() {
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

export default ssdLite
