import { useRouter } from 'next/navigation'
import { getUserJS } from '../../../src/lib/authGithub'
import { ExternalLogin } from '../externalLogin'
import { LocalCadatro } from './localCadastro'
import { useEffect } from 'react'

export function CadastroPage() {
  const jwtInfo = getUserJS()
  const router = useRouter()

  useEffect(() => {
    if (jwtInfo) {
      router.push('/?error=userLogged')
    }
  }, [jwtInfo, router])

  return (
    <>
      <div className='flex flex-col gap-6'>
        <ExternalLogin />

        <div className='border border-b-[0.5px] border-orange-500 rounded-full' />

        <LocalCadatro />
      </div>
    </>
  )
}
