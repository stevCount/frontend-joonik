import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  code: number;
  name: string;
  image: string;
  creationDate: string;
}

const LocationCard: React.FC<Props> = ({ code, name, image, creationDate }) => {
  return (
    <Card sx={{ width: 300, borderRadius: 3, boxShadow: 4 }}>
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
          Creado el: {new Date(creationDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;