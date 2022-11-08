const express = require("express");
const path = require("path");
const NormalizeVolume = require("normalize-volume");

const app = express();
const PORT = 3000;
let options = {
  normalize: true,
  waveform: { width: 1400, height: 225 },
  ffmpeg_bin: "./ffmpeg.exe",
  convert_bin: "./convert.exe",
};

// requirment
// {
//     "video" : file_in_base64_or_url
// }

app.get("/", (req, res) => {
  NormalizeVolume(req.body.video, ".\normalized.mp4", options)
    .then((result) => {
      res.status(200);
      res.sendFile(path.join(__dirname, "./normalized.mp4"));
    })
    .catch((err) => {
      res.status(500);
      res.send("Some error occured");
    });
});

app.get("/test", (req, res) => {
  res.status(200);
  res.send("Working");
});

app.listen(PORT, (error, success) => {
  if (error) {
    console.error(error);
  }
});
