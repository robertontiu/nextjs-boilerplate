const nextPreset = require('next/babel')

// This patch fixes an issue in linaria caused by babel-plugin-react-require
// traversing imports
function nextPresetWithoutPluginReactRequire() {
	const config = nextPreset.apply(this, arguments)

	// Currently babel-plugin-react-require is inbcluded first in the plugin list
	config.plugins.shift()

	return config
}

module.exports = {
	presets: [nextPresetWithoutPluginReactRequire, '@zeit/next-typescript/babel', 'linaria/babel'],
}
