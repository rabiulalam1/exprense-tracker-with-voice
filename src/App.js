//1:14:30

import React from 'react';
import './App.css';

import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'

import {Grid} from '@material-ui/core'

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <Details title='Incomes'/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expenses' />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
