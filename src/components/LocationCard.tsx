import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// Props esperadas por el componente LocationCard
interface Props {
  code: number;
  name: string;
  image: string;
  creationDate: string; // Debe estar en formato ISO o compatible con Date
}

/**
 * Componente LocationCard
 * Muestra una tarjeta con información de una sede: imagen, nombre, código y fecha de creación.
 * Usa Material UI para el diseño visual.
 */
const LocationCard: React.FC<Props> = ({ code, name, image, creationDate }) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={`Imagen de ${name}`}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Código: {code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Formateamos la fecha a la configuración local del navegador */}
          Creado el: {new Date(creationDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;