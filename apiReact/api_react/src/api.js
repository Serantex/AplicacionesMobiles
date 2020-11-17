const https = require("https");

var url = "https://api.sportsdata.io/v3/csgo/scores/json/Teams?key=bfc865f038f24221b59046bd5e87f3d5";

    https.get(url, (resp) => {

        let data = "";

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            callback(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });;


module.exports= obtenerEquipos;