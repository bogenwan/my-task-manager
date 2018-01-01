module.exports = {
  getHome: function (req, res) {
    res.send(`this is ${req.params.name} hello from get home!`);
  },
  postHome: function (req, res) {
    res.send('hello from post home!');
  }
};