import Description from '../../components/servicios/plesk/Description'
import Pricing from '../../components/servicios/plesk/Pricing'
import Variety from '../../components/servicios/plesk/Variety'
import FAQ from '../../components/shared/sections/FAQ'

function plesk() {
  return (
    <>
      <Description />
      <Variety />
      <Pricing />
      <FAQ />
    </>
  )
}

export default plesk
