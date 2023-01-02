import { useRouter } from 'next/router'
import { Heros } from '../constants/heros'

export const useHero = () => {
  const { pathname } = useRouter()
  const route = pathname.split('/').filter(Boolean)

  if (route.length === 1) {
    return { ...Heros[route[0]].index }
  }
}
