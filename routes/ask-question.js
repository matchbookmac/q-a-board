Qa.AskQuestionRoute = Ember.Route.extend({
  renderTemplate: function () {
    this.render({ outlet: 'ask-question' });
  }
});
