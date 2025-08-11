import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MostrarActividades from "../Components/MostrarActividades.jsx";
import RegistrarActividades from "../Components/RegistrarActividades.jsx";
import ListaDeActividades from "../Components/ListaDeActividades.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Menu from "../Components/Menu.jsx";

const HomePage = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }} // column en móvil, row en desktop
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "90%",
          p: { xs: 1, sm: 2, md: 3 }, // padding responsive
          gap: { xs: 2, md: 0 }, // gap entre elementos
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Menu></Menu>
        </Stack>
        <Box>
          <Stack direction={"row"} alignItems="center">
            <Button>
              <Typography variant="h6" color="white">Perfil </Typography>
              <AccountBoxOutlinedIcon
                sx={{
                  fontSize: "1.5rem",
                  color: "White",
                  margin: "0 0.5rem",
                  padding: "0",
                }}
              />
            </Button>
          </Stack>
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }} // column en móvil/tablet, row en desktop
        justifyContent="space-between"
        alignItems={{ xs: "center", lg: "flex-start" }}
        sx={{
          width: "100%",
          p: { xs: 1, sm: 2 },
          gap: { xs: 3, lg: 2 },
        }}
      >
        <Box>
          <RegistrarActividades />
          <ListaDeActividades actividades={[]} />
        </Box>
        <Box>
          <MostrarActividades />
        </Box>
      </Stack>
    </>
  );
};

export default HomePage;
