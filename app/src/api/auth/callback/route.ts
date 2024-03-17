import { NextRequest, NextResponse } from 'next/server'
import { api } from '../../../lib/api'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get('code')

    console.log(code)
    console.log(1)

    const redirectTo = req.cookies.get('redirectTo')?.value

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
  } catch (error) {
    console.log(error)
  }
}
