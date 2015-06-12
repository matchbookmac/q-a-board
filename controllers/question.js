Qa.QuestionController = Ember.ObjectController.extend({
  init: function () {
    console.log('hi');
  },
  needs: ['questions', 'question'],
  itemController: 'answer',
  newAnswer: null,
  notReplying: true,
  clicked: false,
  actions: {
    questionClicked: function () {
      if (this.clicked) {
        this.set('clicked', false);
        this.set('notReplying', true);
      } else {
        this.set('clicked', true);
      }
    },
    answer: function () {
      this.notReplying ? this.set('notReplying', false) : this.set('notReplying', true);
    },
    reply: function () {
      var that     = this;
      var question = this.get('model');
      var answer   = this.store.createRecord('answer', {
        name:        this.get('this.newAnswer.name'),
        answer:      this.get('this.newAnswer.answer')
      });

      this.get('newAnswer').destroyRecord();

      answer.save().then( function (answer) {
        question.get('answers').then(function (answers) {
          answers.pushObject(answer);
        });
        that.set("notReplying", true);
        question.save();
        that.transitionToRoute('questions');
      });
    }
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
