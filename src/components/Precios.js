import React from 'react';
import { setIn } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Precios = (props) => {
	const handlePrecio = (atributo) => (event) => {
		const estadoInmutado = setIn(
			props.estadoGlobal,
			['precios', atributo],
			event.target.value
		);
		props.setEstadoGlobal(estadoInmutado);
	};

	return (
		<div>
			<h1>Ingredientes</h1>

			<TableContainer component={Paper}>
		      <Table>
		        <TableHead>
		          <TableRow>
		            <TableCell>Ingrediente</TableCell>
		            <TableCell align="right">Cantidad</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		            <TableRow>
		              <TableCell component="th" scope="row">Pan inferior</TableCell>
		              <TableCell align="right">
						<TextField
				          id="standard-number"
				          label="Cantidad"
				          type="number"
				          value={props.estadoGlobal.precios.pan1}
						  onChange={handlePrecio('pan1')}
				          InputLabelProps={{
				            shrink: true,
				          }}
				        />
		              </TableCell>
		            </TableRow>
		            <TableRow>
		              <TableCell component="th" scope="row">Lechuga</TableCell>
		              <TableCell align="right">
						<TextField
				          id="standard-number"
				          label="Cantidad"
				          type="number"
				          value={props.estadoGlobal.precios.lechuga}
						  onChange={handlePrecio('lechuga')}
				          InputLabelProps={{
				            shrink: true,
				          }}
				        />
		              </TableCell>
		            </TableRow>
		            <TableRow>
		              <TableCell component="th" scope="row">Queso</TableCell>
		              <TableCell align="right">
						<TextField
				          id="standard-number"
				          label="Cantidad"
				          type="number"
				          value={props.estadoGlobal.precios.queso}
				          onChange={handlePrecio('queso')}
				          InputLabelProps={{
				            shrink: true,
				          }}
				        />
		              </TableCell>
		            </TableRow>
		            <TableRow>
		              <TableCell component="th" scope="row">Carne</TableCell>
		              <TableCell align="right">
						<TextField
				          id="standard-number"
				          label="Cantidad"
				          type="number"
				          value={props.estadoGlobal.precios.carne}
				          onChange={handlePrecio('carne')}
				          InputLabelProps={{
				            shrink: true,
				          }}
				        />
		              </TableCell>
		            </TableRow>
		            <TableRow>
		              <TableCell component="th" scope="row">Pan superior</TableCell>
		              <TableCell align="right">
						<TextField
				          id="standard-number"
				          label="Cantidad"
				          type="number"
				          value={props.estadoGlobal.precios.pan2}
				          onChange={handlePrecio('pan2')}
				          InputLabelProps={{
				            shrink: true,
				          }}
				        />
		              </TableCell>
		            </TableRow>
		        </TableBody>
		      </Table>
		    </TableContainer>

			<Link to={RUTAS.cotizador} className="botonCotizar">
				<Button variant="contained" color="primary">Cotizar</Button>
			</Link>
		</div>
	);
};

Precios.propTypes = {
	setEstadoGlobal: PropTypes.func.isRequired,
	estadoGlobal: PropTypes.shape({
		hamburguesas: PropTypes.array.isRequired,
		precios: PropTypes.shape({
			pan1: PropTypes.string.isRequired,
			lechuga: PropTypes.string.isRequired,
			queso: PropTypes.string.isRequired,
			carne: PropTypes.string.isRequired,
			pan2: PropTypes.string.isRequired
		})
	})
};

export default Precios;
