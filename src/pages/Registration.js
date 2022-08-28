import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Menu from "../components/Menu";
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export default function Registration() {

return ( <>
      <Container maxWidth="sm">

    <Typography variant="h4" component="h1" gutterBottom>
Cadastrar Política de Estoque </Typography>
     <Menu/>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="outlined-basic" label="Bom" variant="outlined" />
      <TextField id="outlined-basic" label="Ótimo" variant="outlined" />
      <TextField id="outlined-basic" label="Regular" variant="outlined" />
      </div>
     </Box>

     <Stack direction="row" spacing={1}>
    
      <Button variant="outlined" component={Link} to="/politica">
       Cancelar
      </Button>
      <Button variant="outlined" href="#outlined-buttons" color="secondary">
        Cadastrar
      </Button>
    </Stack>
</Container>
</>
);
}
