import { SportsRugbyRounded } from "@mui/icons-material";
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const listaJson = [
  {bom:"140 até 100", otimo: ">140", critico:"<100"}];


export default function Politica (){
    return (
        <>
        
        <Container maxWidth="sm">
        <Box sx={{ my: 4 }}> 
        <Typography variant="h4" component="h1" gutterBottom>
Política de Estoque
</Typography>
<Menu/> 
   <div>
    <Button variant="contained" disableElevation component={Link} to="/param">
     CADASTRO DE POLÍTICA DE ESTOQUE
    </Button>
    </div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Bom</TableCell>
            <TableCell align="right">Ótimo</TableCell>
            <TableCell align="right">Critíco</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {listaJson.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right">{row.bom}</TableCell>
              <TableCell align="right">{row.otimo}</TableCell>
              <TableCell align="right">{row.critico}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
   </Container>

        </>
    )
}