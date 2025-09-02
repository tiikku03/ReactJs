import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import useDataFromLocalStorage from "../hooks/useDataFromLocalStorage";
import ActividadesEstaSemana from "./ActividadesEstaSemana.jsx";
import ListaDeActividades from "./ListaDeActividades.jsx";

function RegistrarActividades() {
  const [rawData, setData] = useDataFromLocalStorage(
    "ActividadesEstaSemana",
    []
  );
  
  const data = Array.isArray(rawData) ? rawData : [];

  
  const [actividad, setActividad] = useState("");
  const [horas, setHoras] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!actividad.trim()) {
      newErrors.actividad = "La actividad es requerida";
    }

    if (!horas.trim()) {
      newErrors.horas = "Las horas son requeridas";
    } else if (isNaN(horas) || Number(horas) <= 0) {
      newErrors.horas = "Debe ser un número válido mayor a 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log("Validación falló:", errors);
      return;
    }

    const actividadNombre = actividad.trim();
    const horasNuevas = Number(horas);

    
    const currentData = Array.isArray(data) ? data : [];
    const actividadExistente = currentData.find(
      item => item.actividad.toLowerCase() === actividadNombre.toLowerCase()
    );

    if (actividadExistente) {
      
      const confirmar = window.confirm(
        `La actividad "${actividadNombre}" ya existe con ${actividadExistente.horas} horas.\n\n` +
        `¿Deseas actualizarla a ${horasNuevas} horas?\n\n` +
        `• Sí: Actualizar las horas\n` +
        `• No: Cancelar registro`
      );

      if (confirmar) {
       
        const datosActualizados = currentData.map(item => 
          item.actividad.toLowerCase() === actividadNombre.toLowerCase()
            ? {
                ...item,
                horas: horasNuevas,
                fecha: new Date().toLocaleDateString() 
              }
            : item
        );
        
        setData(datosActualizados);
        
       
        setActividad("");
        setHoras("");
        setErrors({});
        setSnackbarMessage(`Actividad "${actividadNombre}" actualizada correctamente!`);
        setOpenSnackbar(true);
      
      }
    } else {
      
      const nuevaActividad = {
        id: Date.now(),
        actividad: actividadNombre,
        horas: horasNuevas,
        fecha: new Date().toLocaleDateString(),
      };

      const newData = [...currentData, nuevaActividad];
      setData(newData);
      
      
      setActividad("");
      setHoras("");
      setErrors({});
      setSnackbarMessage(`Nueva actividad "${actividadNombre}" registrada correctamente!`);
      setOpenSnackbar(true);
      
      console.log(`Nueva actividad "${actividadNombre}" creada`);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  
  const prepareGraphicData = () => {
    if (!data || data.length === 0) {
      return {
        labels: ['Sin actividades'],
        datasets: [
          {
            label: 'Horas dedicadas',
            data: [0],
            backgroundColor: '#e0e0e0',
            borderColor: '#e0e0e0',
            borderWidth: 1,
          },
        ],
      };
    }

    const labels = data.map(activity => activity.actividad);
    const hours = data.map(activity => activity.horas);
    
    
    const sameColor = '#36A2EB';

    return {
      labels: labels,
      datasets: [
        {
          label: 'Horas dedicadas',
          data: hours,
          backgroundColor: sameColor,
          borderColor: sameColor,
          borderWidth: 1,
        },
      ],
    };
  };

  const graphicData = prepareGraphicData();

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 500, margin: "auto", p: 2 }}>
        <Paper elevation={3} sx={{ p: 3, backgroundColor: "rgba(0,0,0,0.8)" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "white", mb: 3, textAlign: "center" }}
          >
            Registrar Actividades
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Actividad"
              variant="outlined"
              fullWidth
              margin="normal"
              value={actividad}
              onChange={(e) => setActividad(e.target.value)}
              error={!!errors.actividad}
              helperText={errors.actividad}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#1976d2" },
                "& .MuiOutlinedInput-input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "#f44336" },
              }}
            />

            <TextField
              label="Horas"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={horas}
              onChange={(e) => setHoras(e.target.value)}
              error={!!errors.horas}
              helperText={errors.horas}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#1976d2" },
                "& .MuiOutlinedInput-input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "#f44336" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5 }}
            >
              Registrar Actividad
            </Button>
          </Box>
        </Paper>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            {snackbarMessage || "Operación completada correctamente!"}
          </Alert>
        </Snackbar>
      </Box>

      <ActividadesEstaSemana data={graphicData} />
    </>
  );
}

export default RegistrarActividades;
