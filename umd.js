function umd(target, givenDependencies, definition) {
    // Turn off strict mode for this function so we can assign to global
    /* jshint strict: false */

    // This file will function properly as a <script> tag, or a module using CommonJS and NodeJS or
    // RequireJS module formats.  In Common/Node/RequireJS, the module exports the API, and when
    // executed as a simple <script>, it creates a global instead.

    var
	window       = this, // JUST in case we're in a hybrid mobile context
	dependencies = new Array(), // this will be the arguments to the call to the definition function
	isRequireJs  = typeof define === "function" && define.amd,
	isCommonJs   = typeof exports === "object";

	if (isRequireJs || isCommonJs) {
    	givenDependencies.forEach(function(givenDependency){
    		dependencies.push(require(givenDependency));
    	});
    }
    else {
    	givenDependencies.forEach(function(givenDependency){
    		var dependency = window;
    		givenDependency.split('/').forEach(function(dependencyPart) {
    			dependency = dependency[dependencyPart];
    		});
    		dependencies.push(dependency);
    	});
    }

    if (isCommonJs) {
        module.exports = definition(dependencies);
    } else if (isRequireJs) {
        define(definition.bind(null, dependencies));
    } else {
        famous.core.Context = definition(dependencies);
    }
}