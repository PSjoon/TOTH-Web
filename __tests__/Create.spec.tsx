import { render } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

import Criar from '../app/(routes)/criar/page'

describe('Show article', () => {
  const handlers = [
    http.get('/article', () => {
      return HttpResponse.json([])
    }),
  ]

  it('should fetcha and show article on click', () => {
    render(<Criar />)
  })
})
