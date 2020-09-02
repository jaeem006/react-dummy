import React from 'react';
import { setIn } from 'immutable';
import PropTypes from 'prop-types';
import { calcularBurger } from '../helpers/constants';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const BurgerInfo = (props) => {
	const [total, setTotal] = React.useState('');

	const burgerLifecycle = () => {
		const totalBurger = calcularBurger(props.burger, props.precios)
		setTotal(totalBurger);
	};
	React.useEffect(burgerLifecycle, [props.burger]);

	const handleCantidad = (ingrediente, operacion) => () => {
		const cantidad = props.burger[ingrediente];

		let nuevaCantidad = operacion === 'sumar'
			? cantidad + 1
			: cantidad - 1;

		if (nuevaCantidad < 0) nuevaCantidad = 0;

		const estadoInmutado = setIn(
			props.estadoGlobal,
			['hamburguesas', props.casilla, ingrediente],
			nuevaCantidad
		);

		props.setEstadoGlobal(estadoInmutado);
	};

	return (
		<Card className="contBurger">
	      <CardContent>
	      	<Typography gutterBottom variant="h5" component="h2">
            	Hamburguesa de {props.burger.nombre}
          	</Typography>


          	<TableContainer component={Paper}>
		      <Table>
		        <TableHead>
		          <TableRow>
		            <TableCell>Ingrediente</TableCell>
		            <TableCell align="center">Cantidad</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		            <TableRow>
		              <TableCell component="th" scope="row">Lechuga</TableCell>
		              <TableCell align="center">
		              	<Button onClick={handleCantidad('lechuga', 'sumar')}>
		              		+
		              	</Button>
		              	{props.burger.lechuga}
		              	<Button onClick={handleCantidad('lechuga', 'restar')}>
		              		-
		              	</Button>
		              </TableCell>
		            </TableRow>
		            <TableRow>
		              <TableCell component="th" scope="row">Queso</TableCell>
		              <TableCell align="center">
						<Button onClick={handleCantidad('queso', 'sumar')}>
		              		+
		              	</Button>
		              	{props.burger.queso}
		              	<Button onClick={handleCantidad('queso', 'restar')}>
		              		-
		              	</Button>
		              </TableCell>
		            </TableRow>
		            <TableRow>
		              <TableCell component="th" scope="row">Carne</TableCell>
		              <TableCell align="center">
						<Button onClick={handleCantidad('carne', 'sumar')}>
		              		+
		              	</Button>
		              	{props.burger.carne}
		              	<Button onClick={handleCantidad('carne', 'restar')}>
		              		-
		              	</Button>
		              </TableCell>
		            </TableRow>
		        </TableBody>
		      </Table>
		    </TableContainer>

	        <h3 className="total">Precio total: {total}</h3>
	      </CardContent>
	    </Card>

	);
};

BurgerInfo.propTypes = {
	casilla: PropTypes.number.isRequired,
	estadoGlobal: PropTypes.object.isRequired,
	setEstadoGlobal: PropTypes.func.isRequired,
	precios: PropTypes.shape({
		pan1: PropTypes.string.isRequired,
		lechuga: PropTypes.string.isRequired,
		queso: PropTypes.string.isRequired,
		carne: PropTypes.string.isRequired,
		pan2: PropTypes.string.isRequired
	}),
	burger: PropTypes.shape({
		lechuga: PropTypes.number,
		queso: PropTypes.number,
		carne: PropTypes.number,
		pan1: PropTypes.number.isRequired,
		pan2: PropTypes.number.isRequired,
		nombre: PropTypes.string.isRequired,
	})
};

export default BurgerInfo;
