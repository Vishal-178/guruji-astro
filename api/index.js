var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));
// get Data from API
module.exports.getData = async function (data) {
  // date, time, latitude, longitude, timezone came from the form in Home.ejs
  let date = data.date.split("-");
  let time = data.time.split(":");
  let latitude = data.lat;
  let longitude = data.long;
  let timezone = data.timezone;
  // API call to get the data
  var api = ["basic_gem_suggestion", "birth_details", "astro_details"];
  // user Id and api key are required to access the API
  var userId = "620639";
  var apiKey = "0b8d0c8ec318fc2aeb2558eac0a26cc7";
  // data is which is sent to the API
  var data = {
    day: Number(date[2]),
    month: Number(date[1]),
    year: Number(date[0]),
    hour: Number(time[0]),
    min: Number(time[1]),
    lat: Number(latitude),
    lon: Number(longitude),
    tzone: Number(timezone),
  };
  // API call to get the data from the api and store it in the user array
  // user[0] = gemstone, user[1] = birth details, user[2] = astro details
  // get all the api using Promise.all and store it in the user array
  let request = await Promise.all(
    // map all the api to get the data
    api.map((api) => {
      // return the data from the api for each api
      return $.ajax({
        url: `https://api.vedicrishiastro.com/v1/${api}`,
        method: "POST",
        dataType: "json",
        headers: {
          authorization: `Basic ${btoa(userId + ":" + apiKey)}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      });
    })
  )
    // return the data from the api if the api call is successful
    .then((response) => {
      return response;
    })
    // return the error if the api call is not successful
    .catch((err) => {
      console.log(err);
      return err;
    });
  // return the data from the api request
  return request;
};
