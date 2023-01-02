import FAQ from '../../components/shared/sections/FAQ'
import DifferencesSSL from '../../components/ssl/Differences'
import TextsSSL from '../../components/ssl/Texts'
import TypeOfCertificate from '../../components/ssl/TypeOfCertificate'

export default function ssl() {
  return (
    <>
      <TypeOfCertificate />
      <TextsSSL />
      <DifferencesSSL />
      <FAQ />
    </>
  )
}
