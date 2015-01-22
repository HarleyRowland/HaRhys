/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';
	app.AppView = Backbone.View.extend({
		el: '#todoapp',
		events: {
			'keypress .image': 'alert'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			true
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			true
		},

		alert: function () {
			alert('hello')
		}

	});
})(jQuery);
