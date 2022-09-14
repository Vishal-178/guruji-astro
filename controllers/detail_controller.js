const data = require("../api/index");
module.exports.detail = async function (req, res) {
  // get the data from the form in Home.ejs
  // date, time, latitude, longitude, timezone came from the form in Home.ejs
  // getData is a function in api/index.js which returns the data from the API after the API call
  let user = await data.getData(req.body);
  // return the detail page with the title Detail and the data from the API
  return res.render("Detail", {
    title: "Detail",
    birth: user[1],
    astro: user[2],
    gem: user[0],
  });
};
