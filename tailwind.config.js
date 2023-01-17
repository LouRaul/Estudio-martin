module.exports = {
	content: ['./**/*.html'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {},
			fontFamily: {
				raleway: ['Raleway'],
				inter: ['Inter'],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
};
