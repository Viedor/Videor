export default function() {
  this.get('/movies', function() {
     return {
       data: [{
        type: 'movies',
                id: 140607,
                attributes: {
         poster_path:'/fYzpM9GmpBlIC893fNjoWCwE24H.jpg' ,
         adult: false ,
         overview: 'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
         release_date:'2015-12-18' ,
         id: 140607,
         original_title: 'Star Wars: The Force Awakens',
         original_language: 'en',
         title: 'Star Wars: The Force Awakens',
         backdrop_path: '/njv65RTipNSTozFLuF85jL0bcQe.jpg',
         popularity: 84.588602,
         vote_count: 1167,
         video: false,
         vote_average: 8.06
       }
     },
       {type: 'movies',
        id:102899 ,
        attributes: {
         poster_path: '/D6e8RJf2qUstnfkTslTXNTUAlT.jpg',
         adult: false,
         overview: 'Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',
         release_date: '2015-07-17',
         id: 102899,
         original_title: 'Ant-Man',
         original_language: 'en',
         title: 'Ant-Man',
         backdrop_path: '/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg',
         popularity: 41.512177,
         vote_count: 2084,
         video: false,
         vote_average: 6.88
       }}]
     };
   });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
