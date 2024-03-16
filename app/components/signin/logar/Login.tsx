import { ExternalLogin } from '../externalLogin'
import { LocalLogin } from './localLogin'

export function LoginPage() {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <ExternalLogin />

        <div className='border border-b-[0.5px] border-orange-500 rounded-full' />

        <LocalLogin />
      </div>
    </>
  )
}
