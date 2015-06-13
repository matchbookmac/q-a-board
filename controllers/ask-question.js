Qa.AskQuestionController = Ember.Controller.extend({
  needs: ['questions', 'question', 'question-details', 'new-answer'],
  newQuestion: null,
  actions: {
    askQuestion: function () {
      var that    = this;
      var question = this.store.createRecord('question', {
        name:        this.get('this.newQuestion.name'),
        description: this.get('this.newQuestion.description'),
        question:    this.get('this.newQuestion.question')
      });
      this.get('newQuestion').destroyRecord();
      question.save().then( function (question) {
        var questionController = that.controllerFor('question')
        questionController.set('model', question);
        that.controllerFor('question-details').set('parentController', questionController);
//         that.controllerFor('new-answer').set('parentController', questionController);
        that.transitionToRoute('questions');
      });
    }
  }
});
