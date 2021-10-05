import React from 'react';
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

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Productos() {

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

  const [dataProductos, setDataProductos] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/productos/listar', 
    {
      method: 'GET',
      headers: { "Content-Type": "application/json"
               },
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setDataProductos(data);
      })
  }, []);

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Productos disponibles en Inventario</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha de creación</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio de compra a proveedor</TableCell>
            <TableCell>Precio de venta a público</TableCell>
            <TableCell>Cantidad disponible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataProductos.map((row) => (
            <TableRow key={row.productoId}>
              <TableCell>{row.productoFechaCreacion}</TableCell>
              <TableCell>{row.productoId}</TableCell>
              <TableCell>{row.productoNombre}</TableCell>
              <TableCell>{row.productoPrecioProveedor}</TableCell>
              <TableCell>{row.productoPrecio}</TableCell>
              <TableCell>{row.productoExistencias}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}