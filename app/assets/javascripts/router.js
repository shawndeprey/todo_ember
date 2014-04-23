Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    // additional child routes    
    this.route('active');
  });
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    //return this.modelFor('todos');
    return this.store.find('todo');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
    //return this.store.find('todo');
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});