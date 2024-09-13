import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { MemoryRouter } from 'react-router-dom';
import { ButtonIcon } from '../Button/Button';

describe('Should render a footer', () => {
  test('renders', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const logo = screen.getByAltText('site logo');

    expect(logo).toBeInTheDocument();
    screen.debug();
  });
});

describe('Should render a Back To Top button', () => {
  test('renders', () => {
    render(
      <ButtonIcon
        className='border-2 border-tomato-200 px-4 py-2'
        title='Back to Top'
      >
        Button
      </ButtonIcon>
    );

    const element = screen.getByTitle('Back to Top');

    expect(element).toBeInTheDocument();
    screen.debug();
  });
});
