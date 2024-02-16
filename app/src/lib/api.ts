import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://toth-posting-system-server.vercel.app/',
})
// export const api = axios.create({
//   baseURL: 'http://localhost:3333',
// })
