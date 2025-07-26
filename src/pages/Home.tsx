// src/pages/Home.tsx
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
        const lista = Array.isArray(data) ? data : data.data;
        setLocations(lista);
      })
      .catch((error) => {
        console.error('Error cargando sedes:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container className="centered-container" maxWidth={false} sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Sedes
      </Typography>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="300px"
        >
          <CircularProgress />
        </Box>
      ) : (
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