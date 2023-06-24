import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    CONARE | Connect & Share
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: isNonMobileScreens ? "row" : "column",
                    justifyContent: isNonMobileScreens ? "space-between" : "center",
                    alignItems: "center",
                }}
                p="2rem"
                m="2rem auto"
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    p="2rem"
                    m="2rem auto"
                    width={isNonMobileScreens ? "50%" : "100%"}
                >
                    <img src="../assets/auth.png" width={"80%"} alt="login/register"/>
                </Box>

                <Box
                    width={isNonMobileScreens ? "50%" : "93%"}
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}
                >
                    <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                        Welcome to Conare, connect with others & share your thoughts!
                    </Typography>
                    <Form />
                </Box>
            </Box>

        </Box>
    );
};

export default LoginPage;