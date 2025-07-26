import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationCard from '../../components/LocationCard';

describe('LocationCard', () => {
  const props = {
    code: 123,
    name: 'Sede Principal',
    image: 'https://picsum.photos/640/480',
    creationDate: '2024-07-01T10:00:00',
  };

  test('renderiza el nombre, código y fecha correctamente', () => {
    render(<LocationCard {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.image);
    expect(screen.getByRole('img')).toHaveAttribute('alt', `Imagen de ${props.name}`);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(`Código: ${props.code}`)).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Creado el:'))).toBeInTheDocument();
  });
});