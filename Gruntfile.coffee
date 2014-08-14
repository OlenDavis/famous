module.exports = ( grunt ) ->
	grunt.initConfig
		copy:
			css:
				expand: yes
				dest  : 'dist'
				src   : 'famous.css'
			js:
				expand: yes
				dest  : 'dist/famous'
				src   : [
					'**/*.js'
					'!*.js' # no javascript in the root folder
					'!dist/**/*' # no built javascript
					'!node_modules/**/*' # no Node javascript
					'!bower_modules/**/*' # no Bower javascript
				]
			umd:
				expand: yes
				dest  : 'dist'
				src   : 'umd.js'

		concat:
			build:
				files: 'dist/famous.js': require( './famous-files' ).all
			built:
				files: 'dist/famous.js': [
					'umd.js'
					'dist/famous.js'
				]

		preprocess:
			options: inline: yes
			standalone:
				options: context: umd: grunt.file.read 'umd.js'
				src: [
					'dist/**/*.js'
					'!dist/*.js'
				]
			built:
				options: context: umd: 'umd'
				src: [ 'dist/famous.js' ]

		wrap:
			built:
				expand : yes
				src    : 'dist/**/*.js'
				options:
					inline : yes
					wrapper: [ '(function(){', '})()' ]

		uglify: build:
			expand: yes
			ext   : '.min.js'
			src   : 'dist/*.js'
			# this could be 'dist/**/*.js' instead which would minify all individual source files
			# too, but to take advantage of those files, a developer would have to use Require.js'
			# path config override as described here (which seems *extremely* unlikely):
			# http://stackoverflow.com/questions/14323671/loading-min-js-files-generated-by-typescript-with-require

		clean:
			build: [ 'build' ]
			built: [ 'dist' ]
			umd  : [ 'dist/umd.*' ]

	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-preprocess'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-wrap'
	grunt.loadNpmTasks 'grunt-contrib-clean'

	grunt.registerTask 'default', [ 'clean', 'copy', 'concat', 'preprocess', 'uglify', 'wrap', 'clean:build', 'clean:umd' ]