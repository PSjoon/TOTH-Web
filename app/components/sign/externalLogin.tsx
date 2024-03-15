'use client'

import Link from 'next/link'
import { IconContext } from 'react-icons'
import { BsGithub } from 'react-icons/bs'

export function ExternalLogin() {
  return (
    <>
      <IconContext.Provider value={{ size: '28px' }}>
        <div
          className='mx-4 grid gap-6 mt-4 grid-cols-1 justify-center items-center place-items-center'
          title='Logue-se ou Cadastre-se com o Google'>
          <Link
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}>
            <div
              className='w-[300px] flex border border-white-300 rounded-3xl text-white-50 p-1 py-2 pl-4 font-normal leading-relaxed place-items-center cursor-pointer'
              title='Logue-se ou Cadastre-se com o Github'>
              <BsGithub />
              <p className='ml-5'>Continuar com o Github</p>
            </div>
          </Link>
        </div>
      </IconContext.Provider>
    </>
  )
}
