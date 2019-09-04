import NextDocument, { Html, Head, Main, NextScript, NextDocumentContext } from 'next/document'

class Document extends NextDocument {
	static async getInitialProps(ctx: NextDocumentContext) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>{/* Add extra meta data here */}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
