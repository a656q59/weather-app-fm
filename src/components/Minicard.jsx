import { Box, Skeleton, Typography } from "@mui/material";
import { getUnits, METRIC_UNITS } from "../helpers/getUnits";

export default function Minicard({
  title,
  value,
  loading,
  units = METRIC_UNITS,
}) {
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
        minHeight: 84,
      })}
    >
      <Typography sx={{ fontSize: "10px", marginBottom: "7px" }}>
        {title}
      </Typography>

      {loading ? (
        <Skeleton
          variant="rounded"
          width="55%"
          height={28}
          sx={{ bgcolor: "neutral.600", mt: 0.5 }}
        />
      ) : (
        <Box>
          {value}
          {unitLabel}
        </Box>
      )}
    </Box>
  );
}
