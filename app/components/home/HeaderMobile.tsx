'use client'

import Image from 'next/image'
import Link from 'next/link'
import tothLogo from '/public/images/logo.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Transition } from '@headlessui/react'

export function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className='w-full md:hidden flex gap-10 justify-center items-center'>
        <button className='-ml-16' onClick={toggleMenu}>
          {menuOpen ? <IoClose size={40} /> : <RxHamburgerMenu size={40} />}
        </button>

        <div className='py-4'>
          <Image src={tothLogo} alt='logo' className='w-52'></Image>
        </div>
      </div>
      <Transition
        show={menuOpen}
        enter='transition-all ease-in-out duration-500 delay-[200ms]'
        enterFrom='opacity-0 -translate-y-2'
        enterTo='opacity-100 translate-y-0'
        leave='transition-all ease-in-out duration-300'
        leaveFrom='opacity-100 '
        leaveTo='opacity-0 -translate-y-2'>
        <div className='flex items-center justify-between py-4 border-t-2 border-orange-500 rounded-sm'>
          <Link href={'/criar'}>
            <p className='text-lg bg-gray-800 hover:bg-gray-500 transition-all ease-in-out rounded-md p-1'>
              Criar Artigo
            </p>
          </Link>

          <Link
            href={'https://github.com/PSjoon/TOTH-posting-system'}
            target='__blank'>
            <p className='bg-gray-800 hover:bg-gray-500 transition-all ease-in-out rounded-md p-1'>
              Repositório
            </p>
          </Link>

          <Link href={'https://www.linkedin.com/in/pedrosantosjoon/'}>
            <FaLinkedin className='w-6 h-6' />
          </Link>

          <Link href={'https://github.com/PSjoon'}>
            <FaGithub className='w-6 h-6' />
          </Link>
        </div>
      </Transition>
    </>
  )
}
