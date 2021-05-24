
// define ABR playback stream names
// stream groups: each stream group has 3 ABR streams
var streams = [];

streams[0] = {
  "tag": "test0",
  "titleTop": "Test Title Top",
  "title": "Test Stream 0",
  "image": "https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_MonitoringWeather.jpg?h=d1cb525d&itok=3jSPVbXF",
  "entries": [{ "streamname": "CD6oL-2kE1g" }]
};

streams[1] = {
  "tag": "test1",
  "title": "Test Stream 1",
  "entries": [{ "streamname": "HX26g-NRbx9" }]
};

streams[2] = {
  "tag": "test2abr",
  "title": "Test Stream 2 / ABR",
  "entries": [
    {
      "streamname": "HX26g-NRbx9", // high
      "info": { "bitrate": 1200, "width": 1280, "height": 720, "framerate": 30 }
    },
    {
      "streamname": "HX26g-uVn3M", // medium
      "info": { "bitrate": 800, "width": 854, "height": 480, "framerate": 15 }
    },
    {
      "streamname": "HX26g-VbAxm", // low
      "info": { "bitrate": 400, "width": 640, "height": 360, "framerate": 15 }
    }
  ]
};

streams[3] = {
  "tag": "bht-asta-wahl",
  "title": "BHT AStA-Wahl",
  "entries": [{ "streamname": "RBJ00-FzI9V" }]
};

streams[4] = {
  "tag": "bht1",
  "title": "BHT Stream 1",
  //"title": "Ilona Buchem / Rainer Schneider",
  "entries": [{ "streamname": "RBJ00-IYDH9" }]
};

streams[5] = {
  "tag": "brueckenkurse",
  "title": "Brückenkurse",
  "entries": [
    {
      "streamname": "RBJ00-ZxYi1", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-c4NS0", // medium
      "info": { "bitrate": 1200, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-uSwNt", // low
      "info": { "bitrate": 800, "width": 852, "height": 480, "framerate": 25 }
    }
  ]
};

// doppelt brueckenkurs/brueckenkurse
streams[6] = {
  "tag": "brueckenkurs",
  "title": "Brückenkurse",
  "entries": [
    {
      "streamname": "RBJ00-ZxYi1", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-c4NS0", // medium
      "info": { "bitrate": 1200, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-uSwNt", // low
      "info": { "bitrate": 800, "width": 852, "height": 480, "framerate": 25 }
    }
  ]
};

streams[7] = {
  //"tag": "bht-es5",
  //"title": "Begrüßung der Erstsemester im Fachbereich 5",
  "tag": "b101",
  "title": "b101",
  "entries": [
    {
      "streamname": "RBJ00-PedKZ", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-ncALg", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-yMGa9", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-QDLBk", // low
      "info": { "bitrate": 400, "width": 640, "height": 360, "framerate": 15 }
    }
  ]
};

streams[8] = {
  "tag": "media-stream-1",
  "title": "Media Stream 1",
  "entries": [
    {
      "streamname": "RBJ00-W4xU1", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-M7JHe", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Oe97A", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

streams[9] = {
  "tag": "media-stream-2",
  "title": "Media Stream 2",
  "entries": [
    {
      "streamname": "RBJ00-zh5NC", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Cuqve", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-2mjS4", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

streams[10] = {
  "tag": "media-stream-3",
  "title": "Media Stream 3",
  "entries": [
    {
      "streamname": "RBJ00-BUlFc", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-w2ehP", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-OQA1A", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

streams[11] = {
  "tag": "media-stream-4",
  "title": "Media Stream 4",
  "entries": [
    {
      "streamname": "RBJ00-SE30h", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-cBrkW", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-WkojJ", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

streams[12] = {
  "tag": "media-stream-5",
  "title": "Media Stream 5",
  "entries": [
    {
      "streamname": "RBJ00-Hq9sw", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-PcX5R", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-jyGEG", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

streams[13] = {
  "tag": "beuth-pv",
  "title": "BHT Personalversammlung",
  "entries": [
    {
      "streamname": "RBJ00-efvMJ", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-0o6Hs", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-R5bs8", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};


streams[14] = {
  "tag": "beuth-av",
  "title": "BHT Akademische Versammlung",
  "entries": [
    {
      "streamname": "RBJ00-6CxLI", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-cTKMk", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-tGBKp", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};


streams[15] = {
  "tag": "hrz-test1",
  "title": "HRZ Test 1",
  "entries": [{ "streamname": "nH9ig-FwldJ" }]
};

streams[16] = {
  "tag": "insta-test",
  "title": "360° Stream",
  "entries": [{ "streamname": "RBJ00-ERrTa" }]
};

streams[17] = {
  "tag": "getreide-informationstagung17Juni2021",
  "title": "Berlin-Brandenburgische Gesellschaft für Getreideforschung e.V.",
  "entries": [
    {
      "streamname": "RBJ00-Gpt3e", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-DmKyl", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-JlRU0", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

streams[18] = {
  "tag": "klima-ringvorlesung",
  "titleTop": "50. Wissenschaftliche Informationstagung am 17. Juni 2021",
  "title": "1.5 °C global warming by 2030? Consequences | risk reduction | adaption",
  "image": "https://player.bht-media.de/assets/img/climate-background-2.jpg",
  "entries": [
    {
      "streamname": "RBJ00-i89Mx", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-BRfzZ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-VrybE", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
};

