Qa.NewAnswerRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord('answer');
  },
  renderTemplate: function () {
    this.render({ outlet: 'new-answer' });
  },
  setupController: function(controller, model) {
    controller.set('newAnswer', model);
    controller.controllerFor
  },
  showReplyButton: function () {
    this.controllerFor('question').set('notReplying', true);
  }.on('deactivate'),
});
