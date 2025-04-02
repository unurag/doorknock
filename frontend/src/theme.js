import { createSystem, defaultConfig } from "@chakra-ui/react";
// Supports weights 200-800
// import '@fontsource-variable/bricolage-grotesque';

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                body: { value: `Bricolage Grotesque, sans-serif` },
                heading: { value: `system-ui, sans-serif`},
                intro: { value: `TTNorms, sans-serif` },
            },
        },
        styles: {
            global: {
                "html, body": {
                    fontFamily: "body",
                    fontOpticalSizing: "auto",
                    textRendering: "optimizeLegibility",
                    fontSmoothing: "antialiased",
                },
            },
        },
        semanticTokens: {
            colors: {
                id: {
                    DEFAULT: { value: "#EF4F5F"},
                    secondary: { value: "#EF4533" },
                    activeblue: { value: "#256FEF"}
                },
                text: {
                    DEFAULT: { value: "#363636" },
                    maindim: { value: "#333333" },
                    secondary: { value: "#596378" },
                    inactive: { value: "#5E687C"},
                    homeminutes: { value: "#0E0E0E" }
                },
                border: {
                    DEFAULT: { value: "#D0D4DC" },
                    home: { value: "#D4D1C8" }
                },
                inactive: {
                    DEFAULT: { value: "#AFB4C0" },
                    freedelivery: { value: "rgba(254, 254, 254, 0.38)" },
                    profilehome: { value: "#ffffff70" }
                },
                box_login: {
                    DEFAULT: {value: "#F8F9FC"},
                    border: {value: "#E4E5E9"}
                },
                homegradient: {
                    DEFAULT: { value: "#EF4533" },
                    half: { value: "rgba(239, 69, 51, 0.66)" },
                    full: { value: "#FFFFFF" }
                }
            },
        },
    }
});