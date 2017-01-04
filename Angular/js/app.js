//Filename: app.js

define([
  'jquery',     // lib/jquery/jquery
  'underscore'// lib/underscore/underscore
], function($, _){
	function init() {
		alert('initialization');
	}
  return {
	  initialize: init
  };
});