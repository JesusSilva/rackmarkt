import FAQ from '../../components/shared/FAQ'
import DifferencesSSL from '../../components/ssl/Differences'
import HeroSSL from '../../components/ssl/Hero'
import TextsSSL from '../../components/ssl/Texts'
import TypeOfCertificate from '../../components/ssl/TypeOfCertificate'

export default function ssl() {
  return (
    <>
      <HeroSSL />
      <TypeOfCertificate />
      <TextsSSL />
      <DifferencesSSL />
      <FAQ />
    </>
  )
}
