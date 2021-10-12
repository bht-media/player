
// define ABR playback stream names
// stream groups: each stream group has 3 ABR streams
let streams = [];

streams.push({
  "tag": "test0",
  "titleTop": "Test Title Top",
  "title": "Test Stream 0",
  "image": "https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_MonitoringWeather.jpg?h=d1cb525d&itok=3jSPVbXF",
  "entries": [{ "streamname": "CD6oL-2kE1g" }]
});

streams.push({
  "tag": "test1",
  "title": "Test Stream 1",
  "entries": [{ "streamname": "RBJ00-6uALm" }]
});

streams.push({
  "tag": "test2abr",
  "title": "Test Stream 2 / ABR",
  "entries": [
    {
      "streamname": "RBJ00-6uALm", // high
      "info": { "bitrate": 1200, "width": 1280, "height": 720, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-J0hGb", // medium
      "info": { "bitrate": 800, "width": 854, "height": 480, "framerate": 15 }
    },
    {
      "streamname": "RBJ00-SS48m", // low
      "info": { "bitrate": 400, "width": 640, "height": 360, "framerate": 15 }
    }
  ]
});

streams.push({
  "tag": "bht-asta-wahl",
  "title": "BHT AStA-Wahl",
  "entries": [{ "streamname": "RBJ00-FzI9V" }]
});

streams.push({
  "tag": "bht1",
  "title": "BHT Stream 1",
  //"title": "Ilona Buchem / Rainer Schneider",
  "entries": [{ "streamname": "RBJ00-IYDH9" }]
});

streams.push({
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
});

streams.push({
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
});

streams.push({
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
});

streams.push({
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
});

streams.push({
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
});

streams.push({
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
});

streams.push({
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
});

streams.push({
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
});

streams.push({
  "tag": "beuth-av-2021",
  "title": "Akademische Versammlung 2021",
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
});

streams.push({
  "tag": "hrz-test1",
  "title": "HRZ Test 1",
  "entries": [{ "streamname": "nH9ig-FwldJ" }]
});

streams.push({
  "tag": "insta-test",
  "title": "360° Stream",
  "entries": [{ "streamname": "RBJ00-ERrTa" }]
});

streams.push({
  "tag": "getreide-informationstagung17Juni2021",
  "titleTop": "50. Wissenschaftliche Informationstagung am 17. Juni 2021",
  "title": "Berlin-Brandenburgische Gesellschaft für Getreideforschung e.V.",
  "image": "https://player.bht-media.de/assets/img/getreidetagung-background-2.jpg",
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
});

streams.push({
  "tag": "klima-ringvorlesung",
  "titleTop": "1.5 °C Global Warming by 2030?",
  "title": "Consequences | Risk Reduction | Adaption",
  "image": "https://player.bht-media.de/assets/img/climate-background-2.jpg",
  "partnerBox": true,
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
});

streams.push({
  "tag": "fabAccess-Workshop",
  "titleTop": "FabAccess Workshop",
  "title": "22.09.2021",
  "entries": [
    {
      "streamname": "RBJ00-hWx6N", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-fsnCQ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-cUzfG", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
});

streams.push({
  "tag": "D338",
  "titleTop": "D338 - Live Stream",
  "title": "Live Unterricht aus dem Raum D338",
  "entries": [
    {
      "streamname": "RBJ00-6uALm", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-J0hGb", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-SS48m", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
});

streams.push({
  "tag": "dualTest",
  "titleTop": "Dual Stream Test",
  "title": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  "image": "/assets/img/background.jpg",
  "partnerBox": [
    {
      "text": "beuthBox", // high
      "image": "/assets/beuthbox-logo.png",
      "url": "1234"
    },{
      "text": "beuthBox", // high
      "image": "",
      "url": "1234"
    }],
  "entries":/* [{ "streamname": "CD6oL-2kE1g" }] */[
    {
      "streamname": "RBJ00-6uALm", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-J0hGb", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-SS48m", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-6uALm", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-J0hGb", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-SS48m", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "debug": true,
  "chat": true,
  "linkBox": [
    {
      "text": "beuthBox", // high
      "image": "/assets/beuthbox-logo.png",
      "url": "1234"
    },{
      "text": "beuthBox", // high
      "image": "",
      "url": "1234"
    }]
});

// Workshop Stream : Lecture Recording
// 23.09.2021 + 28.09.2021
// Veranstalter : Team beuthBox
streams.push({
  "tag": "LR-Workshop",
  "titleTop": "Workshop - Lecture Recording",
  "title": "Dieser text dient als Beispielbeschreibung für unseren heutigen Workshop und kann frei gewählt werden. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  "image": "https://www.beuth-hochschule.de/fileadmin/oe/pressestelle/bild/news/2020-01-27_Neuer-Name_Beuth-Buchstaben-verhuellt.jpg",
  "debug": true,
  "chat": true,
  "partnerBox": [
    {
      "text": "Beuth Hoschschule für Technik",
      "image": "https://www.beuth-hochschule.de/fileadmin/images/Beuth_Logo_horizontal.png",
      "url": "https://www.beuth-hochschule.de/"
    },
    {
      "text": "",
      "image": "https://beuthbox.beuth-hochschule.de/assets/beuthbox-logo.svg",
      "url": "https://beuthbox.beuth-hochschule.de/"
    },
    {
      "text": "",
      "image": "https://www.nanocosmos.de/v6/images/logo-nav.png",
      "url": "https://www.nanocosmos.de/"
    }],
  "linkBox": [
    {
      "text": "",
      "image": "https://www.beuth-hochschule.de/fileadmin/images/Beuth_Logo_horizontal.png",
      "url": "https://www.beuth-hochschule.de/"
    }],
  "entries":/* [{ "streamname": "CD6oL-2kE1g" }] */[
    {
      "streamname": "RBJ00-J5qUb", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-5MHlM", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-JHLe6", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-TMBln", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Hb6I8", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-VuvZf", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});