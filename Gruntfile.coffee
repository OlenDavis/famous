module.exports = ( grunt ) ->
	grunt.initConfig
		copy: build: files: [
			expand: yes
			dest  : 'build/famous'
			src   : [
				'**/*.js'
				'!dist/**/*'
				'!node_modules/**/*'
			]
		]

		requirejs:
			options:
				include: require( './famous-include' ).include
				baseUrl: 'build'
			concat: options:
				out     : 'build/famous.js'
				optimize: 'none'

		concat:
			build: files: [
				dest: 'dist/famous.js'
				src : [
					'scaffold.js'
					'build/famous.js'
				]
			]
			license: files: [
				dest: 'dist/famous.min.js'
				src : [
					'license.js'
					'dist/famous.min.js'
				]
			]

		uglify: build: files  : [
			dest: 'dist/famous.min.js'
			src : 'dist/famous.js'
		]

		clean:
			build: [ 'build' ]
			built: [
				'dist/famous.js'
				'dist/famous.min.js'
			]

	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-contrib-requirejs'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-clean'

	grunt.registerTask 'default', [ 'clean', 'copy', 'requirejs', 'concat:build', 'uglify', 'concat:license', 'clean:build' ]