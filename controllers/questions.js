Qa.QuestionsController = Ember.ObjectController.extend({
  notAskingQuestion: true,
  actions: {
    askQuestion: function () {
      this.notAskingQuestion ? this.set('notAskingQuestion', false) : this.set('notAskingQuestion', true);
    }
  }
});
