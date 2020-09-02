import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
	    setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	    setAnchorEl(null);
	};

	return (
		<div className="header">
			<Button  variant="contained" 
					 aria-controls="simple-menu" 
					 aria-haspopup="true" 
					 onClick={handleClick} 
					 className="botonMenu">
		        Menu
		    </Button>
		    <Menu
		        id="simple-menu"
		        anchorEl={anchorEl}
		        keepMounted
		        open={Boolean(anchorEl)}
		        onClose={handleClose}
		    >
		        
		      	<Link to={RUTAS.instrucciones} className="link">
		      		<MenuItem onClick={handleClose}>Instrucciones</MenuItem>
		      	</Link>
		      	<Link to={RUTAS.precios} className="link">
		      		<MenuItem onClick={handleClose}>Ingredientes</MenuItem>
		      	</Link>
		      	<Link to={RUTAS.cotizador} className="link">
		      		<MenuItem onClick={handleClose}>Cotizar</MenuItem>
		      	</Link>
		    </Menu>
		</div>
	);
};

export default Header;
