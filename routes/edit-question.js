Qa.EditQuestionRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', params.question_id);
  },
  renderTemplate: function () {
    this.render({ outlet: 'ask-question' });
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
  // showReplyButton: function () {
  //   this.controllerFor('question').set('notReplying', true);
  // }.on('deactivate')
});
