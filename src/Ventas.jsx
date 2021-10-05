import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Ventas() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [dataVentas, setDataVentas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/ventas/listar', 
    {
      method: 'GET',
      headers: { "Content-Type": "application/json"
               },
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setDataVentas(data);
      })
  }, []);
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Ventas realizadas en el Sistema</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de venta</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Total de Venta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataVentas.map((row) => (
            <TableRow key={row.ventaId}>
              <TableCell>{row.ventaFecha}</TableCell>
              <TableCell>{row.ventaId}</TableCell>
              <TableCell>{row.ventaTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}