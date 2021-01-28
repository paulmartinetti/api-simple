const url = require('url');
const regJson = require('./reglages.json');


const availableEndpoints = [
  {
    method: "GET",
    getProjets: "/projets"
  },
  {
    method: "PUT",
    createUser: "/projet"
  }
]

exports.getProjets = function(req, res) {
  const reqUrl =  new URL(req.url);
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(regJson))
}

/*exports.createUser = function(req, res) {
  body = '';

  req.on('data',  function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    postBody = JSON.parse(body);

    var response = [
      {
      "text": "User added successfully"
      },
      postBody
    ]

    res.statusCode = 201;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
  })
}*/

exports.invalidUrl = function(req, res) {
  var response = [
    {
    "message": "oops! that is a wrong endpoint, here are the available endpoints "
    },
    availableEndpoints
  ]
  res.statusCode = 404;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
