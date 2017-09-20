//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://lili_lovo:likili31@ds127034.mlab.com:27034/cen3031', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key:''
  },
  port: process.env.PORT || 8080
};