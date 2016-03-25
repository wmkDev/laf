'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/pocangularfs-dev'
    uri: 'mongodb://erm:erm@ds011379.mlab.com:11379/ermmongo'
   
  },

  // Seed database on startup
  seedDB: true

};
