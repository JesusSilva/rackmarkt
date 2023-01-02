import data from './data.json'

const getData = (pathname: string, part: string) => {
  return data[pathname][part]
}

export default getData
