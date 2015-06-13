Qa.Router.map(function () {
  this.resource('questions', {path: '/'}, function () {
    this.resource('ask-question', {path: 'questions/new'});
    this.resource('question-details', {path: 'questions/:question_id'}, function () {
      this.resource('new-answer', {path: '/answers/new'});
    });
  });
});
