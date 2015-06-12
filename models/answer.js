Qa.Answer = DS.Model.extend({
  name:     DS.attr(),
  answer:   DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
