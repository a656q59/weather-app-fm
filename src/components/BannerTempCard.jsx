import image_large from "../assets/images/bg-today-large.svg";
import image_small from "../assets/images/bg-today-small.svg";
import { Box, Button, Typography } from '@mui/material';

export default function BannerTempCard() {
    return (

        <Box
            sx={{
                position: "relative",
                width: "42vw",
                minHeight: "30vh", // full screen hero
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",

                backgroundImage: {
                    xs: `url(${image_small})`,
                    lg: `url(${image_large})`,
                },
                backgroundSize: "cover",   // 🔥 never crop
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#000",     // fills empty space nicely
            }}
        >
            {/* Overlay Content */}
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
                <Box>
                    <Typography>
                        Berlin, Germany
                    </Typography>
                    <Typography>
                        {new Date().toDateString()}
                    </Typography>

                </Box>
                <Typography variant="h2">
                    20
                </Typography>


            </Box>
        </Box>



        // <Box
        //     sx={{
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "space-between",
        //         border: "2px solid red",
        //         width: "60%",
        //         aspectRatio: "16 / 9",
        //         backgroundImage: {
        //             xs: `url(${image_small})`,
        //             lg: `url(${image_large})`,
        //         },
        //         backgroundSize: "contain",   // 🔥 Important
        //         backgroundRepeat: "no-repeat",
        //         // backgroundPosition: "center",
        //     }}
        // >
        //     <Box>
        //         <Typography>
        //             Berlin, Germany
        //         </Typography>
        //         <Typography>
        //             {new Date().toDateString()}
        //         </Typography>

        //     </Box>
        //     <Typography variant="h2">
        //         20
        //     </Typography>

        // </Box>



    )
}
