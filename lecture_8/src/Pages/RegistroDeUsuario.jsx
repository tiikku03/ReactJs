import React, { useState } from "react";
import useStoreDataInLocalStorage from "../Hooks/useStoreDataInLocalStorage";
import {Link} from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Radio
} from '@mui/material';

const RegistroDeUsuario = () => {
    
    const whiteTextFieldStyle = {
        '& .MuiInputLabel-root': {
            color: 'white', 
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white', 
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white', 
            },
            '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.7)', 
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white', 
                borderWidth: '2px',
            },
            '& input': {
                color: 'white', 
            },
        },
        '& .MuiFormHelperText-root': {
            color: 'rgba(255, 255, 255, 0.7)', 
        },
    };

    

    const [formData, setFormulario] = useState({
        nombre: '',
        email: '', 
        contraseña: '',
        pais: '',
        aceptaTerminos: false,
        genero: ''
    });

    const [, setValue] = useStoreDataInLocalStorage('UserInformation', formData);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormulario({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };  


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.nombre.trim()) {
            alert('El nombre es requerido');
            return;
        }
        
        if (!formData.email.trim()) {
            alert('El email es requerido');
            return;
        }
        
        if (!formData.aceptaTerminos) {
            alert('Debes aceptar los términos y condiciones');
            return;
        }

        setValue(formData);

        setFormulario({
            nombre: '',
            email: '',
            contraseña: '',
            pais: '',
            aceptaTerminos: false,
            genero: ''
        });
    }

  return (
  <Container maxWidth="sm">
    <Box sx={{ 
      mt: 4, 
      p: 3, 
      border: '1px solid white', 
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro para ver mejor el texto blanco
    }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center" sx={{ color: 'white' }}>
        Registro de Usuario
      </Typography>
      <Typography variant="body2" textAlign="center" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)' }}>
        Completa todos los campos para crear tu cuenta
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
          sx={whiteTextFieldStyle} 
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
          sx={whiteTextFieldStyle} 
        />
        
        
        <TextField
          fullWidth
          label="Contraseña"
          name="contraseña"
          type="password"
          value={formData.contraseña}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
          helperText="Mínimo 6 caracteres"
          sx={whiteTextFieldStyle} 
        />

        <FormControl 
          fullWidth 
          margin="normal" 
          variant="outlined"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'white', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', 
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', 
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.7)', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
                borderWidth: '2px', 
              },
            },
            '& .MuiSelect-select': {
              color: 'white', 
            },
            '& .MuiSvgIcon-root': {
              color: 'white', 
            },
          }}
        >
          <InputLabel>País</InputLabel>
          <Select
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            label="País"
            required
          >
            <MenuItem value=""><em>Selecciona un país</em></MenuItem>
            <MenuItem value="guatemala">Guatemala</MenuItem>
            <MenuItem value="mexico">México</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
          </Select>
        </FormControl>

        <FormGroup sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                name="aceptaTerminos"
                sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
            label="Acepto los términos y condiciones"
            sx={{
              color: 'white', // Texto del label en blanco
            }}
          />
        </FormGroup>

        <FormControl component="fieldset" margin="normal">
          <Typography component="legend" sx={{ color: 'white', mb: 1 }}>Género</Typography>
          <RadioGroup
            name="genero"
            value={formData.genero}
            onChange={handleChange}
          >
            <FormControlLabel 
              value="femenino" 
              control={
                <Radio sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}/>
              } 
              label="Femenino"
              sx={{ color: 'white' }}
            />
            <FormControlLabel 
              value="masculino" 
              control={
                <Radio sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}/>
              } 
              label="Masculino"
              sx={{ color: 'white' }}
            />
            <FormControlLabel 
              value="otro" 
              control={
                <Radio sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}/>
              } 
              label="Otro"
              sx={{ color: 'white' }}
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          <Link to="/home">Crear Cuenta</Link>
        </Button>
        
      </form>
    </Box>
  </Container>

);
};

export default RegistroDeUsuario;
