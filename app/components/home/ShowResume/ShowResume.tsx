'use client'

import { useEffect, useState } from 'react'
import { api } from '../../../src/lib/api'
import error from 'next/error'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Loading } from './Loading'

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
    <div>
      <InfiniteScroll
        dataLength={article.length}
        next={showArticle}
        hasMore={true} // Replace with a condition based on your data source
        loader={<Loading />}
        endMessage={<p>No more data to load.</p>}>
        <>
          {article.map((article) => {
            return (
              <main
                className='px-4 mx-6 my-4 bg-gray-200 rounded-md'
                key={article.id}>
                <p>{article.by}</p>
              </main>
            )
          })}
        </>
      </InfiniteScroll>
    </div>
  )
}
