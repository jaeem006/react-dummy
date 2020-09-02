import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const Instrucciones = () => {

	return (
		<div>
			<Header />
			<h1> Instrucciones </h1>
			<div >
		      <List component="nav" aria-label="secondary mailbox folders">
		        <ListItem>
		          <ListItemText primary="1- Define los precios de los ingredientes." />
		        </ListItem>
		        <Divider />
		        <ListItem>
		          <ListItemText primary="2- Agrega el nombre de la persona que pide." />
		        </ListItem>
		        <Divider />
		        <ListItem>
		          <ListItemText primary="3- Agrega los ingredientes deseados." />
		        </ListItem>
		        <Divider />
		      </List>
		    </div>
		</div>
	);
};

export default Instrucciones;
