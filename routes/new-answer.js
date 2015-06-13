Qa.NewAnswerRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', params.question_id);
  },
  renderTemplate: function () {
    this.render({ outlet: 'new-answer' });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    // controller.controllerFor('question').set('model')
  },
  showReplyButton: function () {
    this.controllerFor('question').set('notReplying', true);
  }.on('deactivate'),
});
