require.config({
  paths: {
    jquery: 'libraries/jquery/jquery',
    underscore: 'libraries/underscore/underscore'
    //backbone: 'libraries/backbone/backbone',
	//angular: 'libraries/backbone/angular'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});