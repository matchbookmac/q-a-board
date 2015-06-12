Qa.Router.map(function () {
  this.resource('questions', {path: '/'}, function () {
    this.resource('ask-question', {path: 'questions/new'});
  })
});
