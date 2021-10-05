import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import Productos from './Productos';
import withRoot from './withRoot';
import NotFound from './NotFound';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Sistema de Inventario Tienda La Mejor del Porvenir
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = (props) => {

  

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

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [productName, setProductName] = React.useState("");
  const [productInfo, setProductInfo] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [productPrice2, setProductPrice2] = React.useState("");
  const [productQty, setProductQty] = React.useState("");

  const [productIDEDIT, setProductIDEDIT] = React.useState("");
  const [productPrice1EDIT, setProductPrice1EDIT] = React.useState("");
  const [productPrice2EDIT, setProductPrice2EDIT] = React.useState("");
  const [productQtyEDIT, setProductQtyEDIT] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const [openModal2, setOpenModal2] = React.useState(false);

  const handleOpen2 = () => {
    setOpenModal2(true);
  };

  const handleClose2 = () => {
    setOpenModal2(false);
  };

  return (
    <div>
      {
        typeof(localStorage.trabajadorId) === 'string' ?
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Inventario
          </Typography>
          <IconButton color="inherit">
              <Badge color="secondary" onClick={() => {
                Swal.fire({
                  title: 'Deseas cerrar sesión?',
                  showDenyButton: true,
                  confirmButtonText: `Cerrar Sesión`,
                  denyButtonText: `NO Cerrar Sesión`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    localStorage.clear();
                    Swal.fire('Cerraste sesión exitosamente', '', 'success')
                    props.history.push('/');
                  } else if (result.isDenied) {
                    Swal.fire('No cerraste sesión', '', 'error')
                  }
                })
              }}>
                <ExitToAppIcon />
              </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleOpen}
            >
              Crear Producto
            </Button>
            <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear producto
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            En esta sección tienes permitido crear productos
          </Typography>
          <p id="simple-modal-description">
            Por favor escriba el nombre del Producto
          </p>
          <div>
          <TextField value={productName}  onChange={(event) => {setProductName(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba la Descripción del Producto
          </p>
      <TextField value={productInfo}  onChange={(event) => {setProductInfo(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba el precio del Producto de compra a Proveedor
          </p>
      <TextField value={productPrice}  onChange={(event) => {setProductPrice(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba el precio del Producto de venta al Público
          </p>
      <TextField value={productPrice2}  onChange={(event) => {setProductPrice2(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba la cantidad de existencias del Producto
          </p>
      <TextField value={productQty} onChange={(event) => {setProductQty(event.target.value)}}/>
          </div>
          <Grid container justifyContent="center">
          <Button variant="contained"
                    color="secondary"
                    onClick={async () => {
                      let object_product = {
                        productoNombre: productName,
                        productoDescripcion: productInfo,
                        productoPrecioProveedor: parseInt(productPrice),
                        productoPrecio: parseInt(productPrice2),
                        productoExistencias: parseInt(productQty)
                      }
                      const response = await fetch(`http://localhost:8080/productos/crear`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json"},
                      body: JSON.stringify(object_product)
                    })
                    if(response.status === 200) {
                      handleClose()
                      Swal.fire(
                        'Producto creado',
                        'Producto creado exitosamente!',
                        'success'
                      )
                      setTimeout(function(){ window.location.reload(); }, 1500);
                    } else {
                      handleClose()
                      Swal.fire(
                        'Error al crear producto',
                        'Hubo un error creando el producto',
                        'error'
                      )
                    }
                    }}>
            CREAR 
          </Button>
</Grid>
        </Box>
          </Modal>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Productos />
              </Paper>
            </Grid>
          </Grid>
          <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleOpen2}
            >
              Editar Precio proveedor, Precio venta y Existencias de Producto
            </Button>
            <Modal
            open={openModal2}
            onClose={handleClose2}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar producto
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            En esta sección tienes permitido editar información puntual de productos
          </Typography>
          <p id="simple-modal-description">
            Por favor escriba el ID del Producto a editar
          </p>
          <div>
          <TextField value={productIDEDIT}  onChange={(event) => {setProductIDEDIT(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba el nuevo precio de Proveedor
          </p>
      <TextField value={productPrice1EDIT}  onChange={(event) => {setProductPrice1EDIT(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba el nuevo precio del Producto a Público
          </p>
      <TextField value={productPrice2EDIT}  onChange={(event) => {setProductPrice2EDIT(event.target.value)}}/>
      <p id="simple-modal-description">
            Por favor escriba la nueva cantidad de Existencias del Producto
          </p>
      <TextField value={productQtyEDIT}  onChange={(event) => {setProductQtyEDIT(event.target.value)}}/>
          </div>
          <Grid container justifyContent="center">
          <Button variant="contained"
                    color="secondary"
                    onClick={async () => {
                      let object_product = {
                        productoId: parseInt(productIDEDIT),
                        productoPrecioProveedor: parseInt(productPrice1EDIT),
                        productoPrecio: parseInt(productPrice2EDIT),
                        productoExistencias: parseInt(productQtyEDIT),
                        productoEstado: 1
                      }
                      const response = await fetch(`http://localhost:8080/productos/editar`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json"},
                      body: JSON.stringify(object_product)
                    })
                    if(response.status === 200) {
                      handleClose2()
                      Swal.fire(
                        'Producto editado',
                        'Producto editado exitosamente!',
                        'success'
                      )
                      setTimeout(function(){ window.location.reload(); }, 1500);
                    } else {
                      handleClose()
                      Swal.fire(
                        'Error al editar producto',
                        'Hubo un error editando el producto',
                        'error'
                      )
                    }
                    }}>
            EDITAR
          </Button>
</Grid>
        </Box>
          </Modal>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div> : <NotFound />
      }
  </div>
  );
}

export default withRoot(Dashboard);
