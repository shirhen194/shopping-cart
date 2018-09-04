const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.send({ name: 'John', age: 30 });
  });
  router.get('/anotherRoute', function(request, response){
    response.send("Hey, I'm another route!");
  });

  router.get('/me', function(request, response){
    response.send({ name: 'Shir', favoritefood: 'Poke', mybirthdaypresent:'Fly to NY' });
  });

  module.exports = router