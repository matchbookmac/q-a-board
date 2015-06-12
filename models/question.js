// List out all of the questions that users have asked on the main page, with just the question and the name of the author.
// Allow users to add, edit and delete questions. Question properties should include question, author and description.
// Let users click on a question to see all of the question properties.
// Allow users to add answers for a question. Answers should be added and viewed on the same page as the question they respond to.
// Allow users to delete answers.
Qa.Question =  DS.Model.extend({
  name:        DS.attr(),
  question:    DS.attr(),
  description: DS.attr(),
  answers:     DS.hasMany('answer', {async: true})
});
