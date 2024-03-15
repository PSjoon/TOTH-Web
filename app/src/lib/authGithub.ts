import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export interface User {
  nickname: string
  username: string
  profilePictures: string
  sub: string
}

export function getUserJS() {
  const token = Cookies.get('token')

  if (token) {
    const user: User = jwtDecode(token)

    // console.log(user)

    return user
  }
}
