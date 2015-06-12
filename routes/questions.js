Qa.QuestionsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('question');
  },
  deactivate: function () {
    this.controller.set('notAskingQuestion', false);
  }
});
