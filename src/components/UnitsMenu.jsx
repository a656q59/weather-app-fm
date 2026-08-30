import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import unitsIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import checkmarkIcon from "../assets/images/icon-checkmark.svg";
import {
  IMPERIAL_UNITS,
  METRIC_UNITS,
  isMetricSystem,
} from "../helpers/getUnits";

const SECTIONS = [
  {
    key: "temperature",
    label: "Temperature",
    options: [
      { value: "celsius", label: "Celsius (°C)" },
      { value: "fahrenheit", label: "Fahrenheit (°F)" },
    ],
  },
  {
    key: "windSpeed",
    label: "Wind Speed",
    options: [
      { value: "kmh", label: "km/h" },
      { value: "mph", label: "mph" },
    ],
  },
  {
    key: "precipitation",
    label: "Precipitation",
    options: [
      { value: "mm", label: "Millimeters (mm)" },
      { value: "inch", label: "Inches (in)" },
    ],
  },
];

export default function UnitsMenu({ units, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const metric = isMetricSystem(units);

  console.log(units);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchSystem = () => {
    onChange(metric ? IMPERIAL_UNITS : METRIC_UNITS);
  };

  const handleOptionChange = (key, value) => {
    onChange({ ...units, [key]: value });
  };

  return (
    <>
      <Button
        color="neutral"
        variant="contained"
        onClick={handleOpen}
        startIcon={<Box component="img" src={unitsIcon} alt="" />}
        endIcon={<Box component="img" src={dropdownIcon} alt="" />}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          textTransform: "none",
          borderRadius: "10px",
          px: 2,
          py: 1,
          backgroundColor: "neutral.800",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "neutral.700",
            boxShadow: "none",
          },
        }}
      >
        Units
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              minWidth: 220,
              backgroundColor: "neutral.800",
              color: "neutral.0",
              borderRadius: "12px",
              border: "1px solid",
              borderColor: "neutral.600",
              p: 1,
            },
          },
        }}
      >
        {/* Section 1: system switch */}
        <MenuItem
          onClick={handleSwitchSystem}
          sx={{
            borderRadius: "8px",
            mb: 0.5,
            py: 1.25,
            fontSize: "0.95rem",
            "&:hover": { backgroundColor: "neutral.700" },
          }}
        >
          Switch to {metric ? "Imperial" : "Metric"}
        </MenuItem>

        <Divider sx={{ borderColor: "neutral.600", my: 1 }} />

        {/* Section 2: Temperature / Wind / Precipitation groups */}
        {SECTIONS.map((section, index) => (
          <Box
            key={section.key}
            sx={{ mb: index === SECTIONS.length - 1 ? 0 : 1 }}
          >
            <Typography
              sx={{
                px: 1.5,
                pt: 0.5,
                pb: 0.75,
                fontSize: "0.75rem",
                color: "neutral.300",
              }}
            >
              {section.label}
            </Typography>

            {section.options.map((option) => {
              const selected = units[section.key] === option.value;
              return (
                <MenuItem
                  key={option.value}
                  selected={selected}
                  onClick={() => handleOptionChange(section.key, option.value)}
                  sx={{
                    borderRadius: "8px",
                    py: 1,
                    justifyContent: "space-between",
                    backgroundColor: selected ? "neutral.700" : "transparent",
                    "&.Mui-selected": {
                      backgroundColor: "neutral.700",
                    },
                    "&.Mui-selected:hover, &:hover": {
                      backgroundColor: "neutral.600",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "0.95rem" }}>
                    {option.label}
                  </Typography>
                  {selected ? (
                    <Box
                      component="img"
                      src={checkmarkIcon}
                      alt=""
                      sx={{ width: 14, height: 14, ml: 2 }}
                    />
                  ) : null}
                </MenuItem>
              );
            })}

            {index < SECTIONS.length - 1 ? (
              <Divider sx={{ borderColor: "neutral.600", mt: 1 }} />
            ) : null}
          </Box>
        ))}
      </Menu>
    </>
  );
}
