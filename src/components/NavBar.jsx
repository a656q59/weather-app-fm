import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/images/logo.svg"
import units from "../assets/images/icon-units.svg"
import dropdown from "../assets/images/icon-dropdown.svg"

export default function ButtonAppBar() {
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{ backgroundColor: "neutral.900", paddingTop: "10px", paddingBottom: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <IconButton
                    size="large"
                    color="theme.palette.neutral.700"
                    aria-label="menu"
                    sx={{ mr: 2, flexGrow: 1, display: "flex", justifyContent: "start", padding: "0px", }}
                >
                    <img src={logo} />
                </IconButton>
                <Typography variant="h6" component="div">

                </Typography>
                <Button color="neutral"
                    variant="contained"
                    startIcon={
                        <img src={units} />
                    }
                    endIcon={
                        <img src={dropdown} />
                    }

                >
                    Units
                </Button>
            </AppBar>
        </Box >
    );
}
