import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, price_buy, price_sell, amount) {
  return { id, date, name, price_buy, price_sell, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Chocoramo', 600, 1200, 10 ),
  createData(1, '16 Mar, 2019', 'Huevos', 7000, 14000, 7),
  createData(2, '16 Mar, 2019', 'Papel Higiénico', 2000, 3000, 20),
  createData(3, '16 Mar, 2019', 'Postobon', 2100, 3500, 12),
  createData(4, '15 Mar, 2019', 'Shampoo', 10000, 15000, 5),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Productos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Productos disponibles en Inventario</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de vencimiento</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio de compra a proveedor</TableCell>
            <TableCell>Precio de venta a público</TableCell>
            <TableCell align="right">Cantidad disponible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price_buy}</TableCell>
              <TableCell>{row.price_sell}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}