import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                primary_sub: "#757C86",
                point: "#7F21F7",
                point_sub: "#E5D7F8",
                warning: "#FF6060",
                warning_sub: "#FFE2E2",
                success: "#7F21F7",
                success_sub: "#E5D7F8",
                gradient_point1: "#5C61DE",
                gradient_point2: "#AC7BFB",
                grayscale_white: "#FFFFFF",
                grayscale_gray0: "#FAFAFA",
                grayscale_gray1: "#F7F7F7",
                grayscale_gray2: "#F0F0F0",
                grayscale_gray3: "#BEBEBE",
                grayscale_gray4: "#808080",
                grayscale_gray5: "#444444",
                grayscale_black: "#1A1A1A",
                background_primary: '#FFFFFF',
                background_secondary: '#FAFAFA',
                background_tertiary: '#F0F0F0',
                modal: '#FFFFFF',
                dim50: 'rgba(26, 26, 26, 0.5)', // 1A1A1A의 50% 불투명도
                dim20: 'rgba(26, 26, 26, 0.2)', // 1A1A1A의 20% 불투명도
                button_text: '#FFFFFF',
            },
            backgroundImage: {
                'gradient0': 'linear-gradient(to right, #000000, #757C86)',
                'gradient1': 'linear-gradient(to right, #5C61DE, #7F21F7)',
                'gradient2': 'linear-gradient(to right, #7F21F7, #AC7BFB)',
            },
        },
    },
    plugins: [],
};
export default config;