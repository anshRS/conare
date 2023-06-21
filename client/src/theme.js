// Color design scheme export
export const colorScheme = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
    }
};

// Material UI theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        dark: colorScheme.primary[200],
                        main: colorScheme.primary[500],
                        light: colorScheme.primary[800],
                    },
                    neutral: {
                        dark: colorScheme.grey[100],
                        main: colorScheme.grey[200],
                        mediumMain: colorScheme.grey[300],
                        medium: colorScheme.grey[400],
                        light: colorScheme.grey[700],
                    },
                    background: {
                        default: colorScheme.grey[900],
                        alt: colorScheme.grey[800],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        dark: colorScheme.primary[700],
                        main: colorScheme.primary[500],
                        light: colorScheme.primary[50],
                    },
                    neutral: {
                        dark: colorScheme.grey[700],
                        main: colorScheme.grey[500],
                        mediumMain: colorScheme.grey[400],
                        medium: colorScheme.grey[300],
                        light: colorScheme.grey[50],
                    },
                    background: {
                        default: colorScheme.grey[10],
                        alt: colorScheme.grey[0],
                    },
                }),
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};