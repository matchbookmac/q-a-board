Qa.Question =  DS.Model.extend({
  name:        DS.attr(),
  question:    DS.attr(),
  description: DS.attr(),
  answers:     DS.hasMany('answer', {async: true})
});
