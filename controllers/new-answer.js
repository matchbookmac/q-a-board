Qa.NewAnswerController = Ember.Controller.extend({
  needs: ['question', 'questions'],
  // newAnswer: null,
  actions: {
    reply: function () {
      var that     = this;
      var question = this.get('model');
//       var answers  = question.get('answers');
      var answer   = this.store.createRecord('answer', {
        name:        this.get('answerName'),
        answer:      this.get('answer'),
        question:    question
      });

      // this.get('newAnswer').destroyRecord();

      answer.save().then( function (answer) {
        question.get('answers').pushObject(answer);
//         questionController.set("notReplying", true);
        question.save();
        that.set('name', '');
        that.set('newAnswer', '');
        that.get('parentController').set('notReplying', true);
        that.transitionToRoute('question-details', question.get('id'));
      });

      //
      // var lot = this.get('controllers.lot.model');
      // var lotController = this.get('controllers.lot');
      // lotController.set("notAddingItem", true);
      // lot.save();
      // this.transitionToRoute('lot', lot.id);


    }
  }
});
