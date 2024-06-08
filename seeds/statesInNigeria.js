const https = require("https");
const fs = require("fs");
const path = require("path");

function fetchAndSaveData() {
  const url = "https://nigeria-states-towns-lga.onrender.com/api/states";

  https
    .get(url, response => {
      let data = "";

      // A chunk of data has been received.
      response.on("data", chunk => {
        data += chunk;
      });

      // The whole response has been received. Process the result.
      response.on("end", () => {
        const jsonData = JSON.parse(data)?.map(({ name, capital }) => ({ name, capital }));

        const filePath = path.join(__dirname, "data", "nigeriaStateData.ts");
        const fileContent = `export const statesInNigeria = ${JSON.stringify(jsonData, null, 2)};`;

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, fileContent, "utf8");

        console.log("Data successfully saved to data/nigeriaStateData.ts");
      });
    })
    .on("error", err => {
      console.error("Error fetching data:", err.message);
    });
}

fetchAndSaveData();
