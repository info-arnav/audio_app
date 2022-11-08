const NormalizeVolume = require("normalize-volume");

let options = {
  normalize: true,
  waveform: { width: 1400, height: 225 },
  ffmpeg_bin: "./ffmpeg.exe",
  convert_bin: "./convert.exe",
};

NormalizeVolume(".\test.mp4", ".\normalized.mp4", options)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
