import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../Title/Title';
import { TextField, Button, Box, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { getProviders } from '../../redux/Providers/providers-management'


export default function Search() { 
  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    search: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }));
  
  const classes = useStyles();
  const dispatch = useDispatch()  

  return ( 
    <React.Fragment>     
        <Paper className={classes.paper}>
          <Title>Buscar Orden</Title>
          <Box component="div" display="inline" className={classes.search}>
            <TextField mx="auto" id="standard-basic" label="Numero de Orden" />
            <Button variant="contained" color="primary" onClick={() => { dispatch(getProviders()) }}>
              Buscar
            </Button>
          </Box>
        </Paper>
    </React.Fragment>
  );
}