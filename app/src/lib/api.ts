import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://toth-posting-system.onrender.com/',
})

// export const api = axios.create({
//   baseURL: 'http://localhost:3333',
// })
