const express = require("express");
const app = express();
const portNumber = 8443;
const sourceDir = "dist";
const https = require("https");
const fs = require("fs");

app.use(express.static(sourceDir));

server = https.createServer({
  key: fs.readFileSync("C:\\Users\\Aaron\\Desktop\\Security\\SSL\\sslpriv.pem"),
  cert: fs.readFileSync("C:\\Users\\Aaron\\Desktop\\Security\\SSL\\sslcert.pem")
}, app);

server.listen(portNumber, () => {
  console.log(`Express web server started: https://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
