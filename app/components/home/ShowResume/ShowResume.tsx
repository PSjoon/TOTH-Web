'use client'

import { useEffect, useState } from 'react'
import { api } from '../../../src/lib/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Loading } from './Loading'
import Link from 'next/link'
import Image from 'next/image'

interface Article {
  id: number
  // dateCreated: ISODateString,
  photo: string
  reaction: number
  text: string
  title: string
  by: number
  file: string

  profilePictures: string
  username: string
  college: string
  email: string
  savedPosts: string
}

export function ShowResume() {
  const [article, setArticle] = useState<Article[]>([])

  const showArticle = async () => {
    try {
      const response = await api.get('/article')

      setArticle(response.data.artigoData)
      console.log(response.data.artigoData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showArticle()
  }, [])

  return (
    <div className='grid md:grid-cols-[3fr_1fr]'>
      <div className='h-[90vh] overflow-y-auto'>
        <h1 className='text-3xl px-6 pt-4 '>Artigos</h1>
        <InfiniteScroll
          dataLength={article.length}
          next={showArticle}
          hasMore={true}
          loader={<Loading />}
          endMessage={<p>No more data to load.</p>}>
          <>
            {article.map((article) => {
              return (
                <main
                  className='h-[70vh] p-4 mx-6 my-4 flex flex-col justify-center border border-b-orange-500 bg-gray-200 rounded-lg'
                  key={article.id}>
                  <div className='flex justify-center items-center'></div>
                  <Link
                    href={`/artigo/visualizar/${article.id}`}
                    className='transition hover:-translate-y-2'>
                    <div className='h-[45vh] mb-6 p-4 rounded-[25px] overflow-hidden cursor-pointer bg-gray-300'>
                      <p className='text-orange-500 mb-4 ml-1 text-ellipsis line-clamp-1 text-lg '>
                        {article.title}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{ __html: article.text }}
                        className='line-clamp-4'
                      />
                    </div>
                  </Link>

                  <Link href={`/perfil/${article.by}`} className='flex'>
                    <div
                      className='w-[8vw] md:w-[6vw] lg:w-[5vw] rounded-full overflow-hidden'
                      title='Acessar Perfil'>
                      <Image
                        src={article.profilePictures}
                        alt='Foto do Usuário'
                        width={128}
                        height={128}
                      />
                    </div>
                    <div className='sm:text-sm md:text-lg ml-4'>
                      <p title='Nome do Usuário'>{article.username}</p>
                      <p
                        className='italic text-orange-500'
                        title='Graduação do Usuário'>
                        {article.college[0]}
                      </p>
                    </div>
                  </Link>
                </main>
              )
            })}
          </>
        </InfiniteScroll>
      </div>

      <div className='h-[90vh] overflow-y-auto sm:hidden md:block'>
        <h1 className='text-2xl px-6 pt-4'>Novidades</h1>
        <InfiniteScroll
          dataLength={article.length}
          next={showArticle}
          hasMore={true}
          loader={<Loading />}
          endMessage={<p>No more data to load.</p>}>
          <>
            {article.map((article) => {
              return (
                <main
                  className='p-4 mx-6 my-4 flex flex-col justify-center border border-b-orange-500 bg-gray-200 rounded-lg'
                  key={article.id}>
                  <div className='flex justify-center items-center'></div>
                  <Link
                    href={`/artigo/visualizar/${article.id}`}
                    className='transition hover:-translate-y-2'>
                    <div className='mb-6 p-4 rounded-[25px] overflow-hidden cursor-pointer bg-gray-300'>
                      <p className='text-orange-500 mb-4 ml-1 text-lg'>
                        {article.title}
                      </p>
                    </div>
                  </Link>

                  <Link href={`/perfil/${article.by}`}>
                    <div className='sm:text-sm md:text-md ml-4'>
                      <p title='Nome do Usuário'>{article.username}</p>
                      <p
                        className='italic text-orange-500'
                        title='Graduação do Usuário'>
                        {article.college[0]}
                        UNICAMP
                      </p>
                    </div>
                  </Link>
                </main>
              )
            })}
          </>
        </InfiniteScroll>
      </div>
    </div>
  )
}
