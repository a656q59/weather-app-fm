import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/images/logo.svg";
import UnitsMenu from "./UnitsMenu";

export default function NavBar({ units, onUnitsChange }) {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "neutral.900",
          paddingTop: "10px",
          paddingBottom: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow: "none",
        }}
      >
        <IconButton
          size="large"
          aria-label="logo"
          sx={{
            mr: 2,
            flexGrow: 1,
            display: "flex",
            justifyContent: "start",
            padding: 0,
          }}
        >
          <Box component="img" src={logo} alt="Weather app logo" />
        </IconButton>

        <UnitsMenu units={units} onChange={onUnitsChange} />
      </AppBar>
    </Box>
  );
}
