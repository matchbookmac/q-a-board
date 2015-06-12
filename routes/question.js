Qa.QuestionRoute = Ember.Route.extend({
  // model: function (params) {
  //   return this.store.find('question', params.question_id);
  // },
  setupController: function(controller, model) {
    // controller.set('answers', model);
    // var newAnswer = this.store.createRecord('answer');
    // controller.set('newAnswer', newAnswer);
    controller.set('notReplying', true);
  },
  showReplyButton: function () {
    this.controllerFor('question').set('notReplying', true);
  }.on('deactivate'),
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
