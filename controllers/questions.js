Qa.QuestionsController = Ember.ArrayController.extend({
  itemController: 'question',
  notAskingQuestion: true,
  questionClicked: false,
  actions: {
    askQuestion: function () {
      this.notAskingQuestion ? this.set('notAskingQuestion', false) : this.set('notAskingQuestion', true);
    },
    questionClicked: function () {
      if (this.clicked) {
        this.set('questionClicked', false);
      } else {
        this.set('questionClicked', true);
      }
    }
  }
});
