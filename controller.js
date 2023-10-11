// This is the only function that will be called by the endpoint.
function print(req, res) {
  res.send("Hello I'm Hafizah! I've successfully deployed my code in heroku!");
}

module.exports = print;
