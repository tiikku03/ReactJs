import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";

const InicioDeSecion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "20rem" }} sx={{ minWidth: 100, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            Inicio de Sesión
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              variant="outlined"
              size="small"
            />

            <TextField
              fullWidth
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              variant="outlined"
              size="small"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Recordarme"
              sx={{ mt: 1, mb: 2 }}
            />

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="small"
              >
                <Link to="/home">
                  <Typography color="white" sx={{ fontSize: "0.875rem" }}>
                    Iniciar Sesión
                  </Typography>
                </Link>
              </Button>
              <Button variant="outlined" color="secondary" fullWidth>
                <Typography color="Black" sx={{ fontSize: "0.875rem" }}>
                  Cancelar
                </Typography>
              </Button>
            </Box>
            <Typography
              variant="body2"
              color="Black"
              align="center"
              sx={{ mt: 2 }}
            >
              ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default InicioDeSecion;
