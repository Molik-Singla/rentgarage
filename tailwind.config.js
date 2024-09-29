/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Barlow", "sans-serif"],
				secondary: ["Titillium Web", "sans-serif"],
			},
			colors: {
				"primary-green": "rgb(61, 211, 134)",
				"secondary-purple": "rgb(59, 57, 109)",
				"neutral-yellow": "rgb(236, 203, 107)",
			},
		},
	},
	plugins: [],
};
