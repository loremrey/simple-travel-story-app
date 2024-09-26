/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: { display: ['Poppins', 'sans-serif'] },
		extend: {
			// Colors used in project
			colors: {
				primary: '#05B6D3',
				secondary: '#EF863E',
			},
			backgroundImage: {
				'login-bg-img': 'url("./src/assets/images/bg-img.jpg")',
				'signup-bg-img': 'url("./src/assets/images/signup-bg-img.png")',
			},
			width: {
				'fill-available': '-webkit-fill-available',
			},
			height: {
				'fill-available': '-webkit-fill-available',
			},
		},
	},
	plugins: [],
};
