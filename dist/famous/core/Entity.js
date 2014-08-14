(function(){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

(function umd(target, givenDependencies, definition) {
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
})(
'famous/core/Entity',
[],
function() {
    /**
     * A singleton that maintains a global registry of Surfaces.
     *   Private.
     *
     * @private
     * @static
     * @class Entity
     */

    var entities = [];

    /**
     * Get entity from global index.
     *
     * @private
     * @method get
     * @param {Number} id entity reigstration id
     * @return {Surface} entity in the global index
     */
    function get(id) {
        return entities[id];
    }

    /**
     * Overwrite entity in the global index
     *
     * @private
     * @method set
     * @param {Number} id entity reigstration id
     * @return {Surface} entity to add to the global index
     */
    function set(id, entity) {
        entities[id] = entity;
    }

    /**
     * Add entity to global index
     *
     * @private
     * @method register
     * @param {Surface} entity to add to global index
     * @return {Number} new id
     */
    function register(entity) {
        var id = entities.length;
        set(id, entity);
        return id;
    }

    /**
     * Remove entity from global index
     *
     * @private
     * @method unregister
     * @param {Number} id entity reigstration id
     */
    function unregister(id) {
        set(id, null);
    }

    module.exports = famous.core.Entity = {
        register: register,
        unregister: unregister,
        get: get,
        set: set
    };
});

})()