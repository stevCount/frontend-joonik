import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Home';
import * as api from '../../services/api'; // Importamos la función para hacer mock

jest.mock('../../services/api'); // Hacemos mock del módulo api

describe('Home Component', () => {
  const mockLocations = [
    {
      code: 1,
      name: 'Sede Hillfurt',
      image: 'https://picsum.photos/640/480?random=1',
      creationDate: '2024-03-30 18:23:13',
    },
    {
      code: 2,
      name: 'Sede Bayleefort',
      image: 'https://picsum.photos/640/480?random=2',
      creationDate: '2024-05-30 10:00:00',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    process.env.VITE_API_BASE_URL = 'http://localhost:3000/api';
    process.env.VITE_API_KEY = 'mock-key';
  });

  test('muestra el spinner mientras carga', async () => {
    (api.getLocations as jest.Mock).mockImplementation(() => {
      return new Promise(() => {}); // Nunca resuelve
    });

    render(<Home />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('muestra la lista de sedes después de cargar', async () => {
    (api.getLocations as jest.Mock).mockResolvedValue(mockLocations);

    render(<Home />);

    expect(await screen.findByText('Lista de Sedes')).toBeInTheDocument();

    // Esperamos que se rendericen las sedes
    for (const sede of mockLocations) {
      expect(await screen.findByText(sede.name)).toBeInTheDocument();
    }

    // Ya no debe estar el spinner
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});