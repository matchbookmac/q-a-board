Qa.EditQuestionController = Ember.ObjectController.extend({
  needs: ['questions', 'question', 'question-details', 'new-answer'],
  // newQuestion: null,
  actions: {
    updateQuestion: function () {
      var that    = this;
      var question = this.get('model');
      question.set('name', this.get('name'));
      question.set('description', this.get('description'));
      question.set('question', this.get('question'));

      // this.get('newQuestion').destroyRecord();
      question.save().then( function (question) {
        var questionController = that.controllerFor('question')
        questionController.set('model', question);
        that.controllerFor('question-details').set('parentController', questionController);
//         that.controllerFor('new-answer').set('parentController', questionController);
        that.transitionToRoute('question-details', question.get('id'));
      });
    }
  }
});
