Qa.AskQuestionController = Ember.Controller.extend({
  actions: {
    askQuestion: function () {
      var newQuestion = this.store.createRecord('question', {
        name:           this.get('name'),
        question:       this.get('question'),
        description:    this.get('description'),
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
