/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                summerImg: "url('/src/assets/imgs/summer_img.jpg')",
            },
        },
    },
    plugins: [],
};
