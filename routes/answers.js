Qa.AnswersRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', params.question_id).get('answers');
  },
  setupController: function(controller, model) {
    controller.set('answers', model);
    this.controllerFor('question').set('notReplying', true);
  }
});
