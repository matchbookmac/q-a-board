Qa.QuestionRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', params.question_id);
  },
  // renderTemplate: function () {
  //   this.render({ outlet: 'question' });
  // },
  setupController: function(controller, model) {
  //   // controller.set('answers', model);
  //   // var newAnswer = this.store.createRecord('answer');
  //   // controller.set('newAnswer', newAnswer);
  //   controller.set('parent', this.controller);
  //   controller.set('parentController', controller.get('parent'));
    this.controllerFor('question-details').set('parent', controller);

  //   this.controllerFor('new-answer').set('parentController', controller);
  //   controller.set('notReplying', true);
  },
  setParentTrail: function () {
    controller.set('parent', this.controller);
  }.on('activate'),
  showReplyButton: function () {
    this.controllerFor('question').set('notReplying', true);
  }.on('deactivate')
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
