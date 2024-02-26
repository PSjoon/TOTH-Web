'use client'

import { useState } from 'react'
import { api } from '../../src/lib/api'

interface Article {
  id: number
  message: string
}

export default function Criar() {
  const [article, setArticle] = useState<Article[]>([])

  const showArticle = async () => {
    const response = await api.get('/article')

    setArticle(response.data.artigos)
    console.log(response.data.artigos)
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={showArticle}>Send</button>

      {article.map((article) => {
        return <p key={article.id}>{article.message}</p>
      })}
    </>
  )
}
