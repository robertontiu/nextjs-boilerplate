const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(
	withTypescript(
		withCss({
			webpack: config => {
				// Add linaria loader
				config.module.rules.push({
					test: /\.(js|jsx|ts|tsx)$/,
					use: [{ loader: 'linaria/loader', options: { sourceMap: process.env.NODE_ENV !== 'production' } }],
				})

				return config
			},
		})
	)
)
