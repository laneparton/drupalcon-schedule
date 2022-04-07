import icsToJson from "ics-to-json";
const axios = require("axios");

//https://events.drupal.org/schedule/802eded1a6/DrupalConCal.ics
export default async function handler(req, res) {
  if (!req.body.scheduleUrl) {
    return res.status(422).json("A schedule URL is required.");
  }

  const scheduleFile = await axios.get(req.body.scheduleUrl);
  const icsData = await scheduleFile.data;
  const data = icsToJson(icsData);

  res.status(200).json(JSON.stringify(data));
}
