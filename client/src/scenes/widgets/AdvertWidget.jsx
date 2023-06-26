import { Typography, useTheme } from "@mui/material";
import CustomBox from "components/CustomBox";
import WidgetWrapper from "components/Wrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <CustomBox>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </CustomBox>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="http://localhost:3001/assets/info.jpg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <CustomBox>
                <Typography color={main}>Developer</Typography>
                <Typography color={medium}>example.com</Typography>
            </CustomBox>
            <Typography color={medium} m="0.5rem 0">
                Join our comprehensive training program where you'll master both frontend and backend development. From crafting captivating user interfaces to designing powerful databases, you'll gain the expertise needed to create robust web applications.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;