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
