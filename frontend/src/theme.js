import { createSystem, defaultConfig } from "@chakra-ui/react";
// Supports weights 200-800
import '@fontsource-variable/bricolage-grotesque';

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                body: { value: `Bricolage Grotesque Variable, sans-serif` },
                heading: { value: `system-ui, sans-serif`},
                intro: { value: `TTNorms, sans-serif` },
            },
        },
        styles: {
            global: {
                "html, body": {
                    fontFamily: "body",
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
                    secondary: { value: "#596378" },
                    inactive: { value: "#5E687C"},
                },
                border: {
                    DEFAULT: { value: "#D0D4DC" },
                },
                inactive: {
                    DEFAULT: { value: "#AFB4C0" },
                },
                box_login: {
                    DEFAULT: {value: "#F8F9FC"},
                    border: {value: "#E4E5E9"}
                },
            },
        },
    }
});