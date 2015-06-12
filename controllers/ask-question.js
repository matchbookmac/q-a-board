Qa.AskQuestionController = Ember.Controller.extend({
  needs: ['questions'],
  newQuestion: null,
  actions: {
    askQuestion: function () {
      var thing    = this;
      var question = this.store.createRecord('question', {
        name:        this.get('this.newQuestion.name'),
        description: this.get('this.newQuestion.description'),
        question:    this.get('this.newQuestion.question')
      });
      this.get('newQuestion').destroyRecord();
      question.save().then( function (question) {
        thing.transitionToRoute('questions');
      });
    }
  }
});
// t4vlb
//
// {"question":{"records":{"8pjjb":{"id":"8pjjb","answers":[]},"7pp7m":{"id":"7pp7m","answers":[]},"5nmti":{"id":"5nmti","answers":[]},"5nr37":{"id":"5nr37","answers":[]},"869i9":{"id":"869i9","answers":[]}}}}
// {"question":{"records":{"8pjjb":{"id":"8pjjb","answers":[]},"7pp7m":{"id":"7pp7m","answers":[]},"5nmti":{"id":"5nmti","answers":[]},"5nr37":{"id":"5nr37","answers":[]},"869i9":{"id":"869i9","answers":[]},"t4vlb":{"id":"t4vlb","answers":[]}}}}
