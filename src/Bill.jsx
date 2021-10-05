
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Swal from 'sweetalert2';
import './Bill.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));


const Bill = (props) => {

    const classes = useStyles();

    

    const { match } = props;
    const saleId = match.params.saleId;

    const [arraySale, setArraySale] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:8080/ventasContienenProductos/obtener/${saleId}`, 
          {
            method: 'GET',
            headers: { "Content-Type": "application/json"
                     },
          }).then(res => res.json())
            .then(data => {
              console.log(data)
              localStorage.setItem("fechaVenta", data[0].id.venta.ventaFecha)
              localStorage.setItem("totalVenta", data[0].id.venta.ventaTotal)
              setArraySale(data)
          })
      }, []);

  return (
    <React.Fragment>
        <Grid container justifyContent="center">
      <Typography variant="h6" gutterBottom>
        FACTURA DE LA VENTA #{saleId}
      </Typography>
      </Grid>
      <Grid container justifyContent="center">
      <Typography  gutterBottom>
        Tienda La Mejor Carrera 4 #7a-10, Corregimiento El Placer, Municipio El Cerrito, Valle del Cauca
      </Typography>
      </Grid>
      <List disablePadding>
      <Grid container justifyContent="center">
      <Typography  gutterBottom>
        FECHA DE VENTA: {localStorage.fechaVenta}
      </Typography>
      </Grid>
          {arraySale.map((product) => (
              <ListItem className={classes.listItem} key={product.id.producto.productoId}>
              <ListItemText primary={product.id.producto.productoNombre} secondary={`Unidades: ${product.ventasContienenProductosUnidades} (Precio unitario: $ ${product.id.producto.productoPrecio} COP)`} />
              <Typography variant="body2">$ {product.ventasContienenProductosValor} COP</Typography>
              </ListItem>
          ))}
      <Grid container justifyContent="center">
      <Typography  gutterBottom>
        TOTAL VENTA: $ {localStorage.totalVenta} COP
      </Typography>
      </Grid>
      <Grid container justifyContent="center">
      <Button   
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      window.print()
                    }}>
            Generar Factura PDF
          </Button>
      </Grid>
      <Grid container justifyContent="center">
      <Button   
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      props.history.push("/inventario")
                    }}>
            Volver a Inventario
          </Button>
      </Grid>
      </List>
    </React.Fragment>
  );
}


export default (Bill);