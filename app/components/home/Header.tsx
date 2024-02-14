import Image from 'next/image'
import Link from 'next/link'
import tothLogo from '/public/images/logo.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { HeaderMobile } from './HeaderMobile'

export function Header() {
  return (
    <>
      <header className='px-12 border-b-2 border-orange-500 rounded-sm'>
        <div className='w-full hidden md:flex justify-between'>
          <div className='flex items-center justify-start gap-16'>
            <div className='py-4'>
              <Image src={tothLogo} alt='logo' className='w-52'></Image>
            </div>
            <Link href={'/criar'}>
              <p className='text-lg bg-gray-800 hover:bg-gray-500 transition-all ease-in-out rounded-md p-1'>
                Criar Artigo
              </p>
            </Link>
          </div>

          <div className='flex items-center justify-end gap-6'>
            <Link href={'https://www.linkedin.com/in/pedrosantosjoon/'}>
              <FaLinkedin className='w-6 h-6' />
            </Link>

            <Link href={'https://github.com/PSjoon'}>
              <FaGithub className='w-6 h-6' />
            </Link>

            <Link
              href={'https://github.com/PSjoon/TOTH-posting-system'}
              target='__blank'>
              <p className='bg-gray-800 hover:bg-gray-500 transition-all ease-in-out rounded-md p-1'>
                Repositório
              </p>
            </Link>
          </div>
        </div>

        <HeaderMobile />
      </header>
    </>
  )
}