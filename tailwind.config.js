/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: {
					500: '#0a63ed',
				},
				gray: {
					50: '#f9fafb',
				},
			},
		},
	},
	plugins: [],
};
