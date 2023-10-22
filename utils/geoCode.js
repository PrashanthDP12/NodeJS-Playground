const request = require("request");

const geoCode = (address, callback) => {
  const geoCodingUrl = `http://api.positionstack.com/v1/forward?access_key=c2d52b9f80f4d8f1705e09015aab3b41&query=${address}`;
  request({ url: geoCodingUrl, json: true }, (error, response) => {
    if (error) {
      callback(
        "Unable to connect weather application! Please try again later.",
        undefined
      );
    } else if (response.body.error) {
      callback("Unable to find location, Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        label: response.body.data[0].label,
      });
    }
  });
};

module.exports = geoCode;
