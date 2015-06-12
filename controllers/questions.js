Qa.QuestionsController = Ember.ArrayController.extend({
  itemController: 'question',
  notAskingQuestion: true,
  init: function () {
    console.log('hi');
  },
  actions: {
    askQuestion: function () {
      this.notAskingQuestion ? this.set('notAskingQuestion', false) : this.set('notAskingQuestion', true);
    }
  }
});
