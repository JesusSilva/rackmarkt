import data from './data.json'

const getData = (pathname: string, part: string) => {
  if (!data[pathname]) return null
  return data[pathname][part]
}

export default getData
