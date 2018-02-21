var
  express = require('express'),
  app = express(),
  Client = require('node-rest-client').Client,
  client = new Client();

app.listen(3000);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.route('/dog/breeds').get(function(req, res) {
  client.get('https://dog.ceo/api/breeds/list/all', function (data, response) {
    if (data.status === 'success') {
      var dogBreeds = [];
      Object.keys(data.message).forEach(function(dogBreedName) {
        dogBreeds.push({
          name: dogBreedName,
          subBreedNames: data.message[dogBreedName]
        });
      });
      res.json(dogBreeds);
    }
    else {
      res.status(500).json({ error: 'Could not get list of dog breeds.'})
    }
  });
});
app.route('/dog/breed/:name/imageUrl').get(function(req, res) {
  client.get('https://dog.ceo/api/breed/' + req.params.name + '/images/random', function (data, response) {
    if (data.status === 'success') {
      res.json(data.message);
    }
    else {
      res.status(500).json({ error: 'Could not get ' + req.params.name + 'image url`.'})
    }
  });
});
