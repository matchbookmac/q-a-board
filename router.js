Qa.Router.map(function () {
  this.resource('questions', { path: '/'}, function () {
    this.resource('ask-question', { path: 'questions/new' });
    this.resource('question-details', { path: 'questions/:question_id' });
    this.resource('edit-question', { path: 'questions/:question_id/edit' });
    this.resource('new-answer', { path: 'questions/:question_id/answers/new' });
  });
});
