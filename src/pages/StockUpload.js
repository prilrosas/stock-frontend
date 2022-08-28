import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Menu from '../components/Menu';
import Container from '@mui/material/Container';
import api from '../api/api';

import { Link } from 'react-router-dom';

export default function StockUpload() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  function enviarArquivo() {
    console.log("enviar");
    console.log(selectedFile);
    const formData = new FormData();
    formData.append("file", selectedFile);

    api.post("/stock/upload", formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

 

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Upload do </Typography>
        <Menu />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input hidden onChange={(e) => setSelectedFile(e.target.files[0])} type="file" />
          </Button>
        </Stack>

        <Stack direction="row" spacing={1}>

          <Button variant="outlined" component={Link} to="/">
            Cancelar
          </Button>
          <Button variant="outlined" href="#outlined-buttons" color="secondary" onClick={() => {
            enviarArquivo();
          }}>
            Cadastrar
          </Button>
        </Stack>



      </Container>
    </>
  );
}
