module.exports = ( grunt ) ->
	grunt.initConfig
		requirejs:
			options:
				include: require( './famous-include' ).include
				baseUrl: '../' # ideally, here would be mapped 'famous/' to './', but alas...
			concat: options:
				out     : 'dist/famous.all.js'
				optimize: 'none'
			uglify: options:
				out     : 'dist/famous.all.min.js'
				optimize: 'uglify'

	grunt.loadNpmTasks 'grunt-contrib-requirejs'

	grunt.registerTask 'default', [ 'requirejs' ]