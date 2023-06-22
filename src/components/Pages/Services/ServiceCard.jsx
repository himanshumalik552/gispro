import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceCard(props) {
  const {title, description, image, handleRead} = props
  return (
    <Card elevation={10} sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleRead} variant='contained' color='secondary' size="small">Read More</Button>
      </CardActions>
    </Card>

  );
}