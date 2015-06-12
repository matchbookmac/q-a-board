Qa.QuestionsController = Ember.ArrayController.extend({
  itemController: 'question',
  notAskingQuestion: true,
  actions: {
    askQuestion: function () {
      this.notAskingQuestion ? this.set('notAskingQuestion', false) : this.set('notAskingQuestion', true);
    }
  }
});
