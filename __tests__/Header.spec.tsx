import { getByAltText, render, screen } from '@testing-library/react'
import { Header } from '../app/components/home/Header'

describe('Header', () => {
  it('test 1"', () => {
    render(<Header />)

    const logoImage = screen.getByText('Repositório')

    expect(logoImage).toBeInTheDocument()
  })

  it('test 2"', () => {
    render(<Header />)

    const logoImage = screen.getByText('Criar Artigo')

    expect(logoImage).toBeInTheDocument()
  })
})
