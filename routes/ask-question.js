Qa.AskQuestionRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord('question');
  },
  renderTemplate: function () {
    this.render({ outlet: 'ask-question' });
  },
  setupController: function(controller, model) {
    controller.set('newQuestion', model);
  },
  showAskButton: function () {
    this.controllerFor('questions').set('notAskingQuestion', true);
  }.on('deactivate'),
});
