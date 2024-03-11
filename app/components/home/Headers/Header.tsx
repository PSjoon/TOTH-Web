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
              <Image
                src={tothLogo}
                priority={true}
                alt='logo'
                className='w-52'></Image>
            </div>
            <Link href={'/criar'}>
              <p className='text-lg bg-gray-800 bg-opacity-70 transition-all ease-in-out rounded-md p-1 '>
                Criar Artigo
              </p>
            </Link>
          </div>

          <div className='flex items-center justify-end gap-6'>
            <Link href={'https://www.linkedin.com/in/pedrosantosjoon/'}>
              <FaLinkedin className='w-6 h-6 hover:text-orange-500' />
            </Link>

            <Link href={'https://github.com/PSjoon'}>
              <FaGithub className='w-6 h-6 hover:text-orange-500' />
            </Link>

            <Link href={'https://github.com/PSjoon/TOTH-Web'} target='__blank'>
              <p className='text-lg bg-gray-800 bg-opacity-70 transition-all ease-in-out rounded-md p-1 '>
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
