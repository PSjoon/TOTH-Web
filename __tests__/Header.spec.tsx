import { render, screen } from '@testing-library/react'
import { Header } from '../app/components/home/Headers/Header'

describe('Header', () => {
  it('should show the name of the div: Repositorio', () => {
    render(<Header />)

    const logoImage = screen.getByText('Repositório')

    expect(logoImage).toBeInTheDocument()
  })

  it('should show the name of the div: Criar Artigo', () => {
    render(<Header />)

    const logoImage = screen.getByText('Criar Artigo')

    expect(logoImage).toBeInTheDocument()
  })
})
