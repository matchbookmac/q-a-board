Qa.QuestionDetailsRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', params.question_id);
  },
  renderTemplate: function () {
    this.render({ outlet: 'question-details' });
  },
  setupController: function(controller, model) {
    // controller.set('answers', model);
    // var newAnswer = this.store.createRecord('answer');
    // controller.set('newAnswer', newAnswer);
    controller.set('model', model);

    // controller.set('parent', this.controller);
    // controller.set('parentController', controller.get('parent'));
    // this.controllerFor('new-answer').set('parentController', controller);
    // this.controllerFor('question-details').set('parent', controller);
    // controller.set('notReplying', true);
  },
  showReplyButton: function () {
    this.controllerFor('question').set('notReplying', true);
  }.on('activate')
});


// model: function () {
//   return this.store.createRecord('answer');
// },
// renderTemplate: function () {
//   this.render({ outlet: 'new-answer' });
// },
// setupController: function(controller, model) {
//   controller.set('newAnswer', model);
//   controller.controllerFor
// },
// showReplyButton: function () {
//   this.controllerFor('question').set('notReplying', true);
// }.on('deactivate'),
