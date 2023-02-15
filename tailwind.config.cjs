/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				textGlow: {
					'0%, 100%': { textShadow: '0px 4px 11px rgba(204, 0, 255, 0.3), 0px -4px 11px rgba(0, 110, 255, 0.356)' },
					'20%': { textShadow: '-4px -4px 11px rgba(204, 0, 255, 0.3), 4px 4px 11px rgba(0, 110, 255, 0.356)' },
					'40%': { textShadow: '4px 0px 11px rgba(204, 0, 255, 0.3), 0px -4px 11px rgba(0, 110, 255, 0.356)' },
					'60%': { textShadow: '-4px 4px 11px rgba(204, 0, 255, 0.3), -4px 4px 11px rgba(0, 110, 255, 0.356)' },
					'80%': { textShadow: '0px -4px 11px rgba(204, 0, 255, 0.3), 0px 4px 11px rgba(0, 110, 255, 0.356)' }
				},
				wobbleKey: {
					'0%, 100%': { transform: 'translateY(-15px)' },	
					'50%': { transform: 'translateY(15px)' }	
				}
			},
			animation: {
				'glow': 'textGlow 5s linear infinite',
				'wobble': 'wobbleKey 5s linear infinite',
			}
		},
	},
	plugins: [],
}
