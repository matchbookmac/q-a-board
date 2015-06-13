Qa.NewAnswerRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', params.question_id);
  },
  renderTemplate: function () {
    this.render({ outlet: 'new-answer' });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    var newAnswer = this.store.createRecord('answer');
    controller.set('newAnswer', newAnswer);
  },
  showReplyButton: function () {
    this.controllerFor('question').set('notReplying', true);
  }.on('deactivate'),
});
