
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
  "titleTop": "Akademische Versammlung 2021",
  "title" : "BHT Berlin",
  "linkBox": [{
      "text": "Akademische Versammlung",
      "image": "",
      "url": "https://www.bht-berlin.de/av"
    }],
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

/**
 * Veralteter D338er Stream
 */
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

/**
 * Test Stream
 */
streams.push({
  "tag": "test",
  "titleTop": "Dual Stream Test",
  "title": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  "image": "/assets/img/background.jpg",
  "customStyle": `
            #playerDiv2 {
            background-color: BLUE;
            position: fixed;
            }
            #titleSub {
            background-color: RED;
            }`,
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

// Ort : Raum D338
/**
 * Stream für den Raum D338 : Thema anpassbar
 */
streams.push({
  "tag": "Berufungskommission",
  "titleTop": "Berufungskommission Architektur 1106",
  "title": "Fachbereich IV",
  "image": "",
  "debug": false,
  "chat": true,
  /*"partnerBox": [{}],*/
  "linkBox": [{
      "text": "Fachbereich IV (Architektur)",
      "image": "",
      "url": "https://www.bht-berlin.de/iv"
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

/**
 * Wissenschaftspreis am 09.11.2021
*/
streams.push({
  "tag": "Rupp+Hubrach-Wissenschaftspreis",
  "titleTop": "Festveranstaltung zur Verleihung des Rupp+Hubrach-Wissenschaftspreises",
  "title": "Virtual-Reality-basierte Untersuchung des Orientierungsverhaltens bei Glaukom",
  "image": "assets/img/backgrounds/R+H_backgroundWHITE2021.jpg",
  "debug": false,
  "chat": false,
  /*"partnerBox": [
    {
      "image": "",
      "url": ""
     }],*/
  "linkBox": [
    {
      "text": "",
      "image": "assets/img/logos/logoR+H2021.png",
      "url": "https://www.rh-brillenglas.de/"
    }],
  "entries":/* [{ "streamname": "CD6oL-2kE1g" }] */[
    {
      "streamname": "RBJ00-4E5xr", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-m2iIC", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-xf0DT", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-5Sr8X", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-eCnYR", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-qVRuP", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
* FSI Stream am 28.10.2021
 */
streams.push({
  "tag": "FSI",
  "titleTop": "Abschluss- und Alumniveranstaltung",
  "title": "28.10.2021",
  "image": "assets/img/backgrounds/FSI_background.jpg",
  "debug": false,
  "chat": false,
  "partnerBox": [
    {
      "image":"assets/img/logos/logo-netzwerk-iq.svg",
      "url": "https://www.netzwerk-iq.de/"
     }],
  "linkBox": [
    {
      "text": "Fernstudieninstitut der BHT",
      "image": "",
      "url": "https://www.bht-berlin.de/fsi"
    }],
  "entries":/* [{ "streamname": "CD6oL-2kE1g" }] */[
    {
      "streamname": "RBJ00-iXM8d", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-xHQOa", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-yKAdb", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-fwXOB", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-5KhPa", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-ZdLZ2", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
* Personalversammlung 24.11.2021
 */
streams.push({
  "tag": "Personalversammlung",
  "titleTop": "Personalversammlung",
  "title": "24.11.2021",
  "image": "",
  "debug": false,
  "chat": true,
  /*"partnerBox": [
    {}],
  "linkBox": [
    {}],*/
  "entries":[
    {
      "streamname": "RBJ00-VPZm9", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-vtOFO", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-3c7dn", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }]
});

/**
* Akademische Senats Sitzung 25.11.2021
 */
streams.push({
  "tag": "AS-Sitzung",
  "titleTop": "Lecture Recording System",
  "title": "Media Service Team der BHT Berlin",
  //Quelle Image: https://uploads.panopto.com/2019/10/23114038/epiphan-peal-mini-panopto-integration.jpg
  "image": "assets/img/backgrounds/epiphan-peal-mini.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            #titleTop {
            background-color: #ffffffa6;
            }
            #titleSub{
            font-weight: normal;
            }`,
  /*"partnerBox": [
    {}],*/
  "linkBox": [
    {       "text": "Akademischer Senat",
            "image": "",
            "url": "https://www.bht-berlin.de/as"
    }],
  "entries":[
    {
      "streamname": "RBJ00-hiPby", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-XYg00", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-5uDPG", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-sRdlg", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Aq0v3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-5TLcc", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 * Planet [A]rch 01.12.2021 - 12.01.2021 (Jeden Mittwoch)
 */
streams.push({
  "tag": "planet-arch",
  "titleTop": "planet [A]rch",
  "title": "Fachbereich IV - Architektur",
  "image": "assets/img/backgrounds/background-planet-arch02.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            #titleTop {
            background-color: #E74011;
            color: white;
            }
            #titleSub{
            background-color: #575756;
            font-weight: normal;
            }
            #main{
            background-color: white;
            }
            #linkBox{
            background: rgba(254,194,16,0.9);
            }`,
  /*"partnerBox": [
    {}],*/
  "linkBox": [
    { "text": "bautrieb@gmail.com",
      "image": "",
      "url": "mailto:bautrieb@gmail.com"
    },
      { "text": "facebook.com/bautrieb",
        "image": "",
        "url": "facebook.com/bautrieb"
      },
    { "text": "instagram@bautrieb",
      "image": "",
      "url": "https://www.instagram.com/bautrieb/"
    },],
  "entries":[
    {
      "streamname": "RBJ00-NYU0l", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-PcSop", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-0PfXF", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-RFaTn", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-OzZbJ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-P1ISi", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});
