import axios from 'axios';

// Variables de entorno para URL base y API Key (asegúrate de definirlas en .env)
const API_BASE_URL = process.env.VITE_API_BASE_URL!;
const API_KEY = process.env.VITE_API_KEY!;

// Instancia preconfigurada de Axios con headers comunes
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Obtiene la lista de sedes desde el backend.
 * Devuelve un array de objetos de tipo Location.
 */
export const getLocations = async () => {
  try {
    const response = await api.get('/locations');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las sedes:', error);
    throw error; // Se relanza el error para que el componente lo maneje
  }
};