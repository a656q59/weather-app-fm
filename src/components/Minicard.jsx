import { Box, Typography } from "@mui/material";
import { getUnits, METRIC_UNITS } from "../helpers/getUnits";

export default function Minicard({ title, value, loading, units = METRIC_UNITS }) {
  if (loading) return null;

  const unitLabel = getUnits(title, units);

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.neutral.main,
        display: "flex",
        borderRadius: "13px",
        flexDirection: "column",
        padding: "14px 20px",
        width: "100%",
      })}
    >
      <Typography sx={{ fontSize: "10px", marginBottom: "7px" }}>
        {title}
      </Typography>
      <Box>
        {value}
        {unitLabel}
      </Box>
    </Box>
  );
}
