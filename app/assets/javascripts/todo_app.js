// Create the Ember application
window.Todos = Ember.Application.create();

// Tell the ember app where it's data will come from, in this example we use fixture data
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();