import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { ExternalLogin } from '../app/components/signin/externalLogin'

describe('Header', () => {
  it('should show the name of the github login', () => {
    render(<ExternalLogin />)

    const logoImage = screen.getByText('Continuar com o Github')

    expect(logoImage).toBeInTheDocument()
  })

  it('should show the name of the github login', async () => {
    render(<ExternalLogin />)

    fireEvent.click(screen.getByText('Continuar com o Github'))
  })
})
