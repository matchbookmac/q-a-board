Qa.QuestionController = Ember.ObjectController.extend({
  needs: ['questions', 'question-details', 'new-answer'],
  itemController: 'answer',
  parent: null,
  // newAnswer: null,
  notReplying: true,
  // clicked: false,
  actions: {
    questionClicked: function () {
      var parentController = this.get('controllers.questions');
      if (this.clicked) {
        parentController.set('questionClicked', false);
        this.set('notReplying', true);
      } else {
        parentController.set('questionClicked', true);
        var newAnswerController = this.controllerFor('new-answer');
        newAnswerController.set('parentController', this);
//         that.controllerFor('question-details').set('parentController', questionController);
      }
    },
    answer: function () {
      this.notReplying ? this.set('notReplying', false) : this.set('notReplying', true);
    },
    // reply: function () {
    //   var that     = this;
    //   var question = this.get('model');
    //   var answer   = this.store.createRecord('answer', {
    //     name:        this.get('answerName'),
    //     answer:      this.get('answer')
    //   });
    //
    //   // this.get('newAnswer').destroyRecord();
    //
    //   answer.save().then( function (answer) {
    //     question.get('answers').pushObject(answer);
    //     that.set("notReplying", true);
    //     question.save();
    //     that.set('name', '');
    //     that.set('newAnswer', '');
    //     that.transitionToRoute('questions');
    //   });
    // }
  }
});


// needs: ['question'],
// newAnswer: null,
// actions: {
//   reply: function () {
//     var that     = this;
//     var questionController = this.controllerFor('question');
//     var question = questionController.get('model');
//     var answer   = this.store.createRecord('answer', {
//       name:        this.get('this.newAnswer.name'),
//       answer:      this.get('this.newAnswer.answer')
//     });
//
//     this.get('newAnswer').destroyRecord();
//
//     answer.save().then( function (answer, question) {
//       question.get('answers').pushObject(answer);
//       questionController.set("notReplying", true);
//       lot.save();
//       that.transitionToRoute('questions');
//     });
//
//     //
//     // var lot = this.get('controllers.lot.model');
//     // var lotController = this.get('controllers.lot');
//     // lotController.set("notAddingItem", true);
//     // lot.save();
//     // this.transitionToRoute('lot', lot.id);
//
//
//   }
// }
