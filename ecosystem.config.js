module.exports = {
	apps: [
		{
			name: 'nextjs-boilerplate',
			script: 'dist/index.js',
			instances: 1,
			env: {
				NODE_ENV: 'production',
				PORT: 9000,
			},
		},
	],
	deploy: {
		stage: {
			user: '',
			host: [],
			ref: 'origin/master',
			repo: '',
			path: '',
			'post-deploy': 'yarn install && yarn build && yarn start',
		},
	},
}
