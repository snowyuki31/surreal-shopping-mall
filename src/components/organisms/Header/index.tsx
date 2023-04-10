import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LanguageSwitcher } from "@/contexts/LanguageSwitcher";

const Header: React.FC = () => {
  return (
    <header>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Box flexGrow={1} textAlign="center">
            <Typography variant="h6">Surreal Space Shopping</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
