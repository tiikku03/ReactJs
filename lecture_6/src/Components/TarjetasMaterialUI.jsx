import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
} from "@mui/material";
// npm install @mui/material

function TarjetasMaterialUI() {
  return (
    <Container sx={{ mt: 4 }}>
      // es una propiedad de material UI
      <Grid item sx={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5"></Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button variant="container" size="small">
              Show More
            </Button>
          </CardActions>
        </Card>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Título tarjeta Material UI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Texto tarjeta material en react.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success" size="small">
                Ver mas
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TarjetasMaterialUI;
