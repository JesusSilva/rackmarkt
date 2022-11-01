import Description from '../../components/servicios/backup/Description'
import Features from '../../components/servicios/backup/Features'
import Hero from '../../components/servicios/backup/Hero'
import Pricing from '../../components/servicios/backup/Pricing'
import Specifications from '../../components/servicios/backup/Specifications'
import FAQ from '../../components/shared/FAQ'

function backupExterno() {
  return (
    <>
      <Hero />
      <Description />
      <Features />
      <Specifications />
      <Pricing />
      <FAQ />
    </>
  )
}

export default backupExterno
