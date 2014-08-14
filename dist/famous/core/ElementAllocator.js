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
'famous/core/ElementAllocator',
[],
function() {
    /**
     * Internal helper object to Context that handles the process of
     *   creating and allocating DOM elements within a managed div.
     *   Private.
     *
     * @class ElementAllocator
     * @constructor
     * @private
     * @param {Node} container document element in which Famo.us content will be inserted
     */
    function ElementAllocator(container) {
        if (!container) container = document.createDocumentFragment();
        this.container = container;
        this.detachedNodes = {};
        this.nodeCount = 0;
    }

    /**
     * Move the document elements from their original container to a new one.
     *
     * @private
     * @method migrate
     *
     * @param {Node} container document element to which Famo.us content will be migrated
     */
    ElementAllocator.prototype.migrate = function migrate(container) {
        var oldContainer = this.container;
        if (container === oldContainer) return;

        if (oldContainer instanceof DocumentFragment) {
            container.appendChild(oldContainer);
        }
        else {
            while (oldContainer.hasChildNodes()) {
                container.appendChild(oldContainer.removeChild(oldContainer.firstChild));
            }
        }

        this.container = container;
    };

    /**
     * Allocate an element of specified type from the pool.
     *
     * @private
     * @method allocate
     *
     * @param {string} type type of element, e.g. 'div'
     * @return {Node} allocated document element
     */
    ElementAllocator.prototype.allocate = function allocate(type) {
        type = type.toLowerCase();
        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
        var nodeStore = this.detachedNodes[type];
        var result;
        if (nodeStore.length > 0) {
            result = nodeStore.pop();
        }
        else {
            result = document.createElement(type);
            this.container.appendChild(result);
        }
        this.nodeCount++;
        return result;
    };

    /**
     * De-allocate an element of specified type to the pool.
     *
     * @private
     * @method deallocate
     *
     * @param {Node} element document element to deallocate
     */
    ElementAllocator.prototype.deallocate = function deallocate(element) {
        var nodeType = element.nodeName.toLowerCase();
        var nodeStore = this.detachedNodes[nodeType];
        nodeStore.push(element);
        this.nodeCount--;
    };

    /**
     * Get count of total allocated nodes in the document.
     *
     * @private
     * @method getNodeCount
     *
     * @return {Number} total node count
     */
    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
        return this.nodeCount;
    };

    return ElementAllocator;
});

})()