import { fireEvent, getByAltText, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { ShowResume } from '../app/components/home/ShowResume/ShowResume'

describe('Show articles', () => {
  const worker = setupServer(
    rest.get('/article', async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          artigos: [
            {
              id: '6573c4be46eccc4c8a2941e0',
              dateCreated: '2023-12-09T01:37:02.466Z',
              photo:
                'http://localhost:3333/uploads/3e1c62c6-e30e-45d8-b7db-3635f255202c.png',
              reaction: 5,
              text: '<p>Este artigo aborda o crescente impacto da inteligência artificial (IA) na sociedade moderna. Examina como a IA está sendo integrada em diversos setores, desde assistentes virtuais até carros autônomos. Além disso, discute os desafios éticos e sociais associados ao desenvolvimento e implementação da IA.</p>',
              title: 'Impacto da Inteligência Artificial na Sociedade',
              by: '656cc57e8dec7223732f2e6e',
              file: '',
              profilePictures:
                'https://avatars.githubusercontent.com/u/103451270?v=4',
              username: 'Pedro Santos',
              college: ['UNICAMP'],
              email: 'test@gmail.com',
              savedPosts: [''],
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
    render(<ShowResume />)

    const articleTitles = await screen.findAllByText(
      /Impacto da Inteligência Artificial na Sociedade/i,
    )
    expect(articleTitles.length).toBe(2)

    const picture = await screen.findAllByText('Pedro Santos')
    expect(picture.length).toBe(4)

    const altImage = await screen.findAllByAltText('Foto do Usuário')

    expect(altImage.length).toBe(12)
  })
})
