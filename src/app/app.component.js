(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular <small>By Helal</small></h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
