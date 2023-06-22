import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import { serviceData } from './servicedata';
import DialogServiceDetail from './DialogServiceDetail';


const Services = () => {

  const [open, setOpen] = React.useState(false)

  const handleRead =()=>{
    setOpen(true);
  }
  return (

    <Box margin={3}>
      <Grid container mb={3} direction={'row'} justifyContent={'center'}  spacing={1}>
        <Grid item >
     
            <Typography padding={3}   fontWeight={700} color={'GrayText'} variant='h2'>
              Services
            </Typography>
       
        </Grid>
      </Grid>
      <Grid container  spacing={2} direction="row" justifyContent="center" >
        {serviceData.map((card) => {
          return(
            <Grid container  direction="row" justifyContent="center" item xs={12} md={4}  xl={3}>
            <ServiceCard title={card.title} description={card.des} image={card.image} handleRead={handleRead}/>
          </Grid>
          )
        })}

      </Grid>
      <DialogServiceDetail open={open} setOpen ={setOpen}/>
    </Box>
  );
};
export default Services;
