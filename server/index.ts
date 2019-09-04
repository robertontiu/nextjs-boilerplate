import express from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

// TODO: this should be changed in production
const robots = 'User-agent: *\nDisallow: /'

app.prepare().then(() => {
	const server = express()

	server.get('/robots.txt', (req: express.Request, res: express.Response) => {
		res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
		res.status(200)
		res.send(robots)
		res.end()
	})

	server.get('*', handle as any)
	server.listen(port, () => console.log(`> Ready on http://localhost:${port}`))
})
