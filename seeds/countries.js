const https = require("https");
const fs = require("fs");

function fetchCountries() {
  const url = "https://restcountries.com/v2/all";

  https
    .get(url, res => {
      let data = "";

      // A chunk of data has been received.
      res.on("data", chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      res.on("end", () => {
        console.log(data);
        try {
          const jsonData = JSON.parse(data).map(data => ({
            flag: data.flag,
            callingCodes: data.callingCodes,
            name: data.name,
          }));
          const tsContent = `export const countriesData = ${JSON.stringify(jsonData, null, 2)};`;

          fs.writeFile("data/countriesData.ts", tsContent, err => {
            if (err) throw err;
            console.log("Data has been saved to data.ts");
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      });
    })
    .on("error", err => {
      console.error("Error with the request:", err.message);
    });
}

// Call the function
fetchCountries();
