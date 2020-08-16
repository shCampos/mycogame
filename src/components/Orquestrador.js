import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Button } from '@material-ui/core';
//import { NavigateNextIcon } from '@material-ui/icons';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useWindowDimensions from '../assets/scripts/useWindowDimensions.js';

function Orquestrador() {
  const { height, width } = useWindowDimensions();
  const styles = makeStyles({
    enunciado: {
      padding: '10px 10px',
      marginBottom: '15px',
      backgroundColor: '#79CFD9'
    },
    areaDeJogo: {
      padding: '10px 10px',
      height: height*0.7,
      backgroundColor: '#79CFD9'
    },
    btnContinuar: {
      float: 'right',
      color: 'white'
    }
  });
  const classes = styles();


  return (
    <Grid container spacing={0} alignItems="center" justify="center"
    style={{ minHeight: height }}>
      <Grid item xs={10}>
        <Card className={classes.enunciado}>
        Marque os materiais que você deve levar para a coleta de campo: 
        </Card>
        <Card className={classes.areaDeJogo}>
          
        </Card>
        <Button className={classes.btnContinuar} endIcon={ <NavigateNextIcon/> }>Continuar</Button>
      </Grid>
    </Grid>
  );
}

export default Orquestrador;