// This fixes linaria's typescript issue with component interpolations
// (https://github.com/hemmxwxsoo/linaria/commit/ce9a0b1e47b3444d3ceb38e5455a5a360556b506)
declare module 'linaria/react' {
	import * as React from 'react'

	type CSSProperties = {
		[key: string]: string | number | CSSProperties
	}

	type StyledComponent<T> = React.StatelessComponent<T & { as?: React.ReactType }>

	type StyledTag<T> = <Props = T>(
		strings: TemplateStringsArray,
		...exprs: Array<
			string | number | CSSProperties | ((props: Props) => string | number) | StyledComponent<Props> // <-- added component
		>
	) => StyledComponent<Props>

	type StyledJSXIntrinsics = {
		readonly [P in keyof JSX.IntrinsicElements]: StyledTag<JSX.IntrinsicElements[P]>
	}

	export const styled: StyledJSXIntrinsics & {
		<T>(component: React.ReactType<T>): StyledTag<T>

		readonly [key: string]: StyledTag<{
			children?: React.ReactNode
			[key: string]: any
		}>
	}
}
