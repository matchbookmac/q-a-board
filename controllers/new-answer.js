Qa.NewAnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  newAnswer: null,
  actions: {
    reply: function () {
      var that     = this;
      var questionController = this.controllerFor('question');
      var question = questionController.get('model');
      var answer   = this.store.createRecord('answer', {
        name:        this.get('this.newAnswer.name'),
        answer:      this.get('this.newAnswer.answer')
      });

      this.get('newAnswer').destroyRecord();

      answer.save().then( function (answer, question) {
        question.get('answers').pushObject(answer);
        questionController.set("notReplying", true);
        lot.save();
        that.transitionToRoute('questions');
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


// {"question":{"records":{"nfth1":{"id":"nfth1","name":"Ian","question":"What is the meaning of life?","description":"Please","answers":[]},"l6opr":{"id":"l6opr","name":"Bob","question":"Way to Go!","description":"Yeah!","answers":[]},"b1j4a":{"id":"b1j4a","name":"Phill","question":"Cool","description":"Very Cool","answers":[]}}},"answer":{"records":{"ig0cj":{"id":"ig0cj","name":"Ian","question":null}}}}
