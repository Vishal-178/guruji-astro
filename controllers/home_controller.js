module.exports.home = function (req, res) {
  // return the home page with the title Home
  return res.render("Home", {
    title: "Home",
  });
};
