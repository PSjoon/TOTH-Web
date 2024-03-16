import { ExternalLogin } from '../externalLogin'
import { LocalCadatro } from './localCadastro'

export function CadastroPage() {
  return (
    <div className='flex flex-col gap-6'>
      <ExternalLogin />

      <div className='border border-b-[0.5px] border-orange-500 rounded-full' />

      <LocalCadatro />
    </div>
  )
}
