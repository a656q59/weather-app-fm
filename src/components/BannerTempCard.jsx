import image_large from "../assets/images/bg-today-large.svg";
import image_small from "../assets/images/bg-today-small.svg";
import { Box, Skeleton, Typography } from "@mui/material";

export default function BannerTempCard({ title, tempurature, loading }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        backgroundImage: {
          xs: `url(${image_small})`,
          lg: `url(${image_large})`,
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          width: "100%",
          px: 2,
        }}
      >
        {loading ? (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Skeleton
                variant="rounded"
                width={180}
                height={28}
                sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
              />
              <Skeleton
                variant="rounded"
                width={140}
                height={20}
                sx={{ bgcolor: "rgba(255,255,255,0.15)" }}
              />
            </Box>
            <Skeleton
              variant="rounded"
              width={96}
              height={64}
              sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
            />
          </>
        ) : (
          <>
            <Box>
              <Typography>{title}</Typography>
              <Typography>{new Date().toDateString()}</Typography>
            </Box>
            <Typography variant="h2">{tempurature}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
