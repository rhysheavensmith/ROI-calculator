/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'forma-regular': ['forma-regular', 'sans-serif'],
				'forma-light': ['forma-light', 'sans-serif'],
				'forma-bold': ['forma-bold', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
