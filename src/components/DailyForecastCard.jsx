import { Box, Skeleton, Typography } from "@mui/material";

export default function DailyForecastCard({
  loading,
  img,
  day = "Tue",
  minTemp = "20",
  maxTemp = "30",
}) {
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          px: { xs: 1, sm: 1.5, md: 2 },
          py: 1.25,
          backgroundColor: "neutral.800",
          borderRadius: "10px",
          height: "100%",
          width: "100%",
          minWidth: 0,
          minHeight: 140,
          boxSizing: "border-box",
          gap: 1.5,
        }}
      >
        <Skeleton
          variant="rounded"
          width={36}
          height={16}
          sx={{ bgcolor: "neutral.600" }}
        />
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={{ bgcolor: "neutral.600" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 0.5,
          }}
        >
          <Skeleton
            variant="rounded"
            width={28}
            height={16}
            sx={{ bgcolor: "neutral.600" }}
          />
          <Skeleton
            variant="rounded"
            width={28}
            height={16}
            sx={{ bgcolor: "neutral.600" }}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        px: { xs: 1, sm: 1.5, md: 2 },
        py: 1.25,
        backgroundColor: "neutral.800",
        borderRadius: "10px",
        height: "100%",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
    >
      <Typography sx={{ mb: 2, fontSize: { xs: "0.875rem", md: "1rem" } }}>
        {day}
      </Typography>

      <Box
        component="img"
        src={img}
        alt=""
        sx={{ width: 40, height: 40, maxWidth: "100%" }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mt: 2,
          gap: 0.5,
          minWidth: 0,
        }}
      >
        <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}>
          {minTemp + "°"}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}>
          {maxTemp + "°"}
        </Typography>
      </Box>
    </Box>
  );
}
