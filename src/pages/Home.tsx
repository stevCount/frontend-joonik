import React, { useEffect, useState } from 'react';
import { getLocations } from '../services/api';
import {
  Grid,
  Typography,
  Container,
  CircularProgress,
  Box
} from '@mui/material';
import LocationCard from '../components/LocationCard';

interface Location {
  code: number;
  name: string;
  image: string;
  creationDate: string;
}

const Home = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLocations()
      .then((data) => {
        console.log('Respuesta de la API:', data);
        
        // Se cubren dos posibles formatos de respuesta: lista directa o dentro de data
        const lista = Array.isArray(data) ? data : data.data;
        setLocations(lista);
      })
      .catch((error) => {
        console.error('Error cargando sedes:', error); // Manejo simple de error, considerar mostrar feedback en UI
      })
      .finally(() => setLoading(false)); // Se asegura que el loading se desactiva pase lo que pase
  }, []);

  return (
    <Container className="centered-container" maxWidth={false} sx={{ py: 4 }}>
      {/* Título principal */}
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Sedes
      </Typography>

      {loading ? (
        // Indicador de carga centrado vertical y horizontalmente
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="300px"
        >
          <CircularProgress />
        </Box>
      ) : (
        // Contenedor de tarjetas usando Grid de MUI
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {locations.map((loc, index) => (
            <Grid key={index}>
              <LocationCard
                name={loc.name}
                code={loc.code}
                image={loc.image}
                creationDate={loc.creationDate}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;