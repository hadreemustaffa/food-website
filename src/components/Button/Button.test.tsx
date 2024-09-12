import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

describe('Should render a button', () => {
  test('renders', () => {
    render(<Button variant={'primary'} value={'Button'} />);
    const element = screen.getByText(/Button/i);

    expect(element).toBeInTheDocument();
    screen.debug();
  });
});
