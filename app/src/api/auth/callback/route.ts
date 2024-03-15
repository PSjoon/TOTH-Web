import { NextRequest, NextResponse } from 'next/server'
import { api } from '../../../lib/api'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  console.log(code)

  const redirectTo = req.cookies.get('redirectTo')?.value

  console.log(redirectTo)

  const registerResponse = await api.post('/githubauth', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/', req.url)

  const cookieExpiresSec = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresSec}`,
    },
  })
}
