/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';
	app.AppView = Backbone.View.extend({
		el: '#todoapp',
		events: {
			'mousehover .icons': 'alert'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			console.log('hello');
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			true
		},

	
		// Clear all completed todo items, destroying their models.
		alert: function () {
			console.log('method');
		},
	});
})(jQuery);
