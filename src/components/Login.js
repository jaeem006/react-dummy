import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';

function Login() {

  return (
    <Card>
      <CardContent>
        <TextField id="standard-basic" label="Correo"/>
        <br/>
        <TextField id="standard-basic" label="Contraseña" type="password"/>
      </CardContent>
      <CardActions>
        <Link to={RUTAS.instrucciones}>
          <Button variant="contained" color="primary" size="small" to={RUTAS.instrucciones}>
            Iniciar Sesión
          </Button>
         </Link>
      </CardActions>
    </Card>
  );
}

export default Login;