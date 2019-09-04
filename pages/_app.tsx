import React from 'react'
import NextApp, { Container } from 'next/app'
import { css } from 'linaria'

// my choice for a css normalizer
import 'modern-normalize/modern-normalize.css'

const styles = {
	root: css`
		/* Add root styles here */
	`,
}

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				{/* Add providers here */}
				<div className={styles.root}>
					<Component {...pageProps} />
				</div>
			</Container>
		)
	}
}

export default App
