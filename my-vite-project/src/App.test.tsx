import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event'

import App from './App';

describe('Testing routes', () => {
  it('Testing render', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /Cafés/i });
    expect(aboutLink).toBeInTheDocument();

    await userEvent.click(aboutLink);

    expect(screen.getByRole('heading', {
      name: /nossos cafés/i
    })).toBeInTheDocument();

    const cardCoffee = screen.getByRole('link', {
      name: /café preto/i
    });

    expect(cardCoffee).toBeInTheDocument();

    await userEvent.click(cardCoffee);

    const titleCard = screen.getByRole('heading', { name: /café preto/i });
    const titleIngredients = screen.getByRole('heading', { name: /Ingredientes:/i });
    const imgCard = screen.getByRole('img', { name: /café preto/i });

    expect(titleCard).toBeInTheDocument();
    expect(titleIngredients).toBeInTheDocument();
    expect(imgCard).toBeInTheDocument();

    const linkHome = screen.getByRole('link', { name: /home/i });

    expect(linkHome).toBeInTheDocument();

    await userEvent.click(linkHome);

    expect(screen.getByText(/trybe - todos os direitos reservados/i)).toBeInTheDocument();
  });
});