import DS from 'ember-data';

export default DS.Model.extend({
  
});


export default DS.Model.extend({
  poster_path: DS.attr(),
  adult: DS.attr(),
  overview: DS.attr(),
  release_date: DS.attr(),
  // id: DS.attr(),
  original_title: DS.attr(),
  original_language: DS.attr(),
  title: DS.attr(),
  backdrop_path: DS.attr(),
  popularity: DS.attr(),
  vote_count: DS.attr(),
  video: DS.attr(),
  vote_average: DS.attr()
});
      
