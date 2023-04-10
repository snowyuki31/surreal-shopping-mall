import React from "react";
import { LanguageSwitcher } from "@/contexts/LanguageSwitcher";
import { Container, Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          style={{ minHeight: "60px", paddingTop: "15px" }}
        >
          <Grid item />
          <Grid item>
            <Typography variant="body1" color="textSecondary" align="center">
              &copy; 2023 Surreal Space Shopping
            </Typography>
          </Grid>
          <Grid item>
            <LanguageSwitcher />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
