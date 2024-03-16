'use client'

import { useState } from 'react'
import { CadastroPage } from '../../components/signin/cadastrar/Cadastrar'
import { LoginPage } from '../../components/signin/logar/Login'
import { Transition } from '@headlessui/react'

export default function Login() {
  const [showCadastro, setShowCadastro] = useState(true)

  return (
    <>
      <div className='flex flex-col items-center justify-center mx-2 pt-5 lg:mt-4 md:mx-[25%] gap-4 rounded-3xl border-orange-500 border-y-[1.5px] bg-gray-200 '>
        <div className='flex items-center justify-center gap-6'>
          <p
            className={`border-[1px] border-white-50 rounded-2xl p-1 px-2 leading-normal cursor-pointer hover:text-orange-500 hover:border-orange-500 ease-in-out transition hover:translate-y-1 ${
              showCadastro
                ? 'text-gray-500 border-gray-500 pointer-events-none'
                : ''
            }`}
            onClick={() => setShowCadastro(true)}>
            Cadastrar
          </p>
          <p
            className={`border-[1px] border-white-50 rounded-2xl p-1 px-2 leading-normal cursor-pointer hover:text-orange-500 hover:border-orange-500 ease-in-out transition hover:translate-y-1 ${
              !showCadastro
                ? 'text-gray-500 border-gray-500 pointer-events-none'
                : ''
            }`}
            onClick={() => setShowCadastro(false)}>
            Logar
          </p>
        </div>

        <Transition
          show={showCadastro}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-0'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <CadastroPage />
        </Transition>

        <Transition
          show={!showCadastro}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-0'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <LoginPage />
        </Transition>
      </div>
    </>
  )
}
