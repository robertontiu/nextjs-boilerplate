'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()
// TODO: this should be changed in production
const robots = 'User-agent: *\nDisallow: /'
app.prepare().then(() => {
	const server = express()
	server.get('/robots.txt', (req, res) => {
		res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
		res.status(200)
		res.send(robots)
		res.end()
	})
	server.get('*', handle)
	server.listen(port, () => console.log(`> Ready on http://localhost:${port}`))
})
