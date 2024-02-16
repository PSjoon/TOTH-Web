'use client'

import { Metadata } from 'next'
import { api } from '../../src/lib/api'

// const metadata: Metadata = {
//   title: 'Página de Criação',
//   description: 'create post page',
// }

export default function Criar() {
  const showArticle = async () => {
    const response = await api.get('/article')

    try {
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={showArticle}>Send</button>
    </>
  )
}
