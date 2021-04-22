module.exports = function(api) {
	api.loadSource(({ addCollection, addMetadata }) => {
		addMetadata('settings', require('./gridsome.config').settings)
	})

	api.createPages(({ createPage }) => {})
}
