import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Button } from '@material-ui/core';
import useWindowDimensions from './assets/scripts/useWindowDimensions.js';

import Orquestrador from './components/Orquestrador.js';

function App() {
  const { height, width } = useWindowDimensions();
  //const height = window.innerHeight();
  const styles = makeStyles({
    root: {
      padding: '0px',
      margin: '0px',
      width: '100%',
      height: '100vh',
      backgroundColor: '#0A1041'
    },
    card: {
      backgroundColor: '#79CFD9'
    }
  });
  const classes = styles();
  const [isReady, setIsReady] = useState(true)

  return (
    <div className={classes.root}>
      {!isReady ? (
        <Grid container spacing={0} alignItems="center" justify="center"
        style={{ minHeight: height }}>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardContent>
              <h2>MycoGame</h2>
              Um jeito diferente de ir a campo para coletar macrofungos e identificá-los!<br/>
              Vamos nessa!
              </CardContent>
              <CardActions>
                <Button className={classes.button} onClick={() => setIsReady(true)}>COMEÇAR</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Orquestrador/>
      )}
    </div>
  );
}

export default App;
