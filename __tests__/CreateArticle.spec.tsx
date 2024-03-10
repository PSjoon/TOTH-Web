import { fireEvent, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Criar from '../app/(routes)/criar/page'

describe('Show articles', () => {
  const worker = setupServer(
    rest.get('/article', async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          artigos: [
            {
              by: '656b34ca910854f01e3db4be',
              communityId: '6573ac4a5ddeb8f62c7e28d2',
              dateCreated: '2023-12-08T23:53:13.048Z',
              id: '6573ac695ddeb8f62c7e28d3',
              message: 'hello\n',
              reaction: 0,
              strike: 0,
            },
          ],
        }),
      )
    }),
  )
  beforeAll(() => worker.listen())
  afterEach(() => worker.resetHandlers())
  afterAll(() => worker.close())

  it('should show articles', async () => {
    render(<Criar />)

    const button = screen.getByText(/Send/i)

    fireEvent.click(button)

    await screen.findByText('hello')
  })
})
