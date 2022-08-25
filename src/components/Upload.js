import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
export default function Upload() {
  return (<>
  <Typography variant="h4" component="h1" gutterBottom>
Upload do Arquivo
</Typography>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
   
    </Stack> 

    <Stack direction="row" spacing={1}>
    
    <Button variant="outlined" disabled>
     Cancelar
    </Button>
    <Button variant="outlined" href="#outlined-buttons" color="secondary">
      Cadastrar
    </Button>
  </Stack>
    </>
  );
}
