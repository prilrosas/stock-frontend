import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import api from '../api/api';
import { Link } from "react-router-dom";
export default function Report() {
  const [lista, setLista] = React.useState([]);

  function buscarValores() {
    console.log("Buscando valores");
    api.get("/stock")
        .then((response) => {
            console.log(response);
            setLista(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
  }
    return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Relatorio
          </Typography>
          <Link to="/">Voltar</Link> |{" "}

          <Button variant="contained" color="success" onClick={() => {
    buscarValores();
  }}>
        Buscando
      </Button>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Data</TableCell>
            <TableCell align="right">Open</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Low</TableCell>
            <TableCell align="right">Close</TableCell>
            <TableCell align="right">Volume</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="left">{item.date}</TableCell>
              <TableCell align="right">{item.open}</TableCell>
              <TableCell align="right">{item.high}</TableCell>
              <TableCell align="right">{item.low}</TableCell>
              <TableCell align="right">{item.close}</TableCell>
              <TableCell align="right">{item.volume}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
      </Container>
    );
  }