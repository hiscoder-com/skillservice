import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				koulen: 'Koulen, sans-serif',
				lexend: 'Lexend, sans-serif',
			},
			fontSize: {
				100: '6.3rem',
				110: '6.9rem',
				120: '7.5rem',
				150: '9.4rem',
				200: '12.5rem',
			},
			width: {
				588: '36.75rem',
			},
		},
		colors: {
			gradient: {
				start: '#F0FAFB',
				end: '#4CA7C4',
			},
			primary: {
				50: '#F0FAFB',
				400: '#308BAA',
				500: '#294E61',
			},
		},
	},
	plugins: [],
}
