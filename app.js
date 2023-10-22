const geoCode = require("./utils/geoCode.js");
const foreCast = require("./utils/foreCast.js");

if (process.argv[2]) {
  geoCode(process.argv[2], (error, geoData) => {
    if (error) {
      return console.log(`Error : ${error}`);
    }
    foreCast(geoData.latitude, geoData.longitude, (error, foreCastdata) => {
      if (error) {
        return console.log(`Error : ${error}`);
      }
      console.log(`Weather Report for ${geoData.label}`);
      console.log(`Data : ${JSON.stringify(foreCastdata, null, 2)}`);
    });
  });
} else {
  console.log("Please provide Location via command line arguments");
}
