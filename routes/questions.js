Qa.QuestionsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('question');
  },
  setupController: function(controller, model) {
    controller.set('questions', model);
    controller.set('notAskingQuestion', true);
  }
});
