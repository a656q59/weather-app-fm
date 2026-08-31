import { Box, Skeleton, Typography } from "@mui/material";

export default function HourlyForecastCard({
  img,
  hour = "3",
  tempurature = "68",
  loading = false,
}) {
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 20px",
          backgroundColor: "neutral.800",
          borderRadius: "10px",
          minHeight: 48,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Skeleton
            variant="circular"
            width={35}
            height={35}
            sx={{ bgcolor: "neutral.600" }}
          />
          <Skeleton
            variant="rounded"
            width={48}
            height={18}
            sx={{ bgcolor: "neutral.600" }}
          />
        </Box>
        <Skeleton
          variant="rounded"
          width={36}
          height={18}
          sx={{ bgcolor: "neutral.600" }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px 20px",
        backgroundColor: "neutral.800",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={img} alt="" width="35px" height="35px" />
        <Typography>{hour} PM</Typography>
      </Box>

      <Typography>{tempurature}</Typography>
    </Box>
  );
}
