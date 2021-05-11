const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get(":endpoints([\\/\\w\\.-]*)", (req, res) => {
  let API_REQUEST = `https://svc.metrotransit.org/NexTrip/${req.params.endpoints}`;
  console.log(API_REQUEST);
  axios
    .get(API_REQUEST)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;
