
// define ABR playback stream names
// stream groups: each stream group has 3 ABR streams
let streams = [];

// TEST Stream 00 --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "test0",
  "titleTop": "Test Title Top",
  "title": "Test Stream 0",
  "image": "https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_MonitoringWeather.jpg?h=d1cb525d&itok=3jSPVbXF",
  "entries": [{ "streamname": "CD6oL-2kE1g" }]
});

// TEST Stream 01 --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "test1",
  "title": "Test Stream 1",
  "entries": [{ "streamname": "RBJ00-6uALm" }]
});

// TEST Stream 02 --------------------------------------------------------------------------------------------------------------------------------------
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

// BHT Asta Wahl --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "bht-asta-wahl",
  "title": "BHT AStA-Wahl",
  "entries": [{ "streamname": "RBJ00-FzI9V" }]
});

// BHT Stream 1 --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "bht1",
  "title": "BHT Stream 1",
  //"title": "Ilona Buchem / Rainer Schneider",
  "entries": [{ "streamname": "RBJ00-IYDH9" }]
});

// Brückenkurse --------------------------------------------------------------------------------------------------------------------------------------
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

// Begrüßung der Erstsemester im Fachbereich 5 -----------------------------------------------------------------------------------------------------------------
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

// Media Stream 1 --------------------------------------------------------------------------------------------------------------------------------------
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

// Media Stream 2 --------------------------------------------------------------------------------------------------------------------------------------
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

// Media Stream 3 --------------------------------------------------------------------------------------------------------------------------------------
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

// Media Stream 4 --------------------------------------------------------------------------------------------------------------------------------------
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

// Media Stream 5 --------------------------------------------------------------------------------------------------------------------------------------
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

// BHT Personalversammlung --------------------------------------------------------------------------------------------------------------------------------------
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

// Akademische Versammlung 2021 ------------------------------------------------------------------------------------------------------------------------------
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

// HRZ Test 1 ------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "hrz-test1",
  "title": "HRZ Test 1",
  "entries": [{ "streamname": "nH9ig-FwldJ" }]
});

// 360° Stream ------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "insta-test",
  "title": "360° Stream",
  "entries": [{ "streamname": "RBJ00-ERrTa" }]
});

// getreide-informationstagung ------------------------------------------------------------------------------------------------------------------------------
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

// klima-ringvorlesung ------------------------------------------------------------------------------------------------------------------------------
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

// FabAccess Workshop ------------------------------------------------------------------------------------------------------------------------------
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
 * Veralteter D338er Stream -----------------------------------------------------------------------------------------------------------------------------------
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
 * Test Stream ----------------------------------------------------------------------------------------------------------------------------------------------
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
 * Stream für den Raum D338 : Thema anpassbar -------------------------------------------------------------------------------------------------------------------
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
 * Wissenschaftspreis am 09.11.2021 -------------------------------------------------------------------------------------------------------------------------
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
* FSI Stream am 28.10.2021 -------------------------------------------------------------------------------------------------------------------------------------
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
* Personalversammlung 24.11.2021 -----------------------------------------------------------------------------------------------------------------------------
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
* Akademischer Senats Sitzung 25.11.2021 ------------------------------------------------------------------------------------------------------------------
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
 * Akademische Versammlung 05.2022 ------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "av",
  "titleTop": "Akademische Versammlung",
  "title": "Berliner Hochschule für Technik",
  "image": "../assets/img/backgrounds/klassenraum01.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            #titleTop {
            background-color: #ffffffa6;
            }
            #playerSubtitle {
              color: rgb(255 255 255);
            }
            #titleSub{
            font-weight: normal;
            }`,
  /*"partnerBox": [
    {}],*/
  "linkBox": [
    {       "text": "Akademische Versammlung",
      "image": "",
      "url": "https://www.bht-berlin.de/av"
    }],
  "entries":[
    {
      "streamname": "RBJ00-gzmUD", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Utv9f", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-AZavH", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-NXynE", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-peIip", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-Hghgx", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 * Planet [A]rch 01.12.2021 - 12.01.2021 (Jeden Mittwoch) -----------------------------------------------------------------------------------------------------
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
            background: rgba(254,194,16,0.9);
            font-weight: normal;
            }
            #main{
            background-color: white;
            }
            #linkBox{
            background-color: #5757569c;
            }
            .textFieldTitle{
            color: white;
            }
            #error, #contentBox, #playerSubtitle{
            display:none;
            }
            a:link, a:visited{
            color: red;
            }
            `,
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
  "textFields" : [
    { "title": "<p>Jeden Mittwoch ab 18 Uhr&ensp;<a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODk2ODZjYmYtNDk0ZC00ZmY4LWIzM2UtOTcwYmQ3YTZkZDNi%40thread.v2/0?context=%7b%22Tid%22%3a%2253bc5889-4f98-49b1-97c2-1b0d33acec73%22%2c%22Oid%22%3a%22ac64bc64-e5c3-4223-aa48-ca528aa7145a%22%7d'>hier</a>&ensp;zu erreichen.</p> <br> <p class='important'>Bitte achten Sie darauf, vor dem Beitreten Ihr Mikrofon/Kamera zu deaktivieren, vielen Dank.</p>"
    },
    { "header": "01.12.2021",
      "text": "Stefan Bauer von architects for future, Berlin"
    },
    { "header": "08.12.2021",
      "text": "Andrea Heil von architects for future, München"
    },
    { "header": "15.12.2021",
      "text": "Nils Nolting"
    },
    { "header": "12.01.2022",
      "text": "Marcel Özer von EPEA, Stuttgart"
    },
  ],
  "entries":[
    {
      "streamname": "", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 * Roberts Stream - 26.01.2021 --------------------------------------------------------------------------------------------------------------------------------
 */

streams.push({
  "tag": "usability-engineering",
  "titleTop": "Human-Computer Interaction",
  "title": "Lehrveranstaltung von Prof. Dr. Robert Strzebkowski",
  "image": "assets/img/backgrounds/NILO180318-GMS-BEUTH-3491.jpg",
  "debug": false,
  "chat": true,
  "customStyle": `
  .textFieldTitle{ color: white; }
  #playerSubtitle {
      color: rgb(251 251 251 / 52%);
    }
  #error {
    color: rgb(112 0 0);
    }
  #chat{
    background-color: #000000a8;
    }
            `,
  /*"partnerBox": [
    {}],*/
  "linkBox": [],
  /**"textFields" : [
    { "title": ""
    },
    { "header": "",
      "text": ""
    },
    { "header": "",
      "text": ""
    },
    { "header": "",
      "text": ""
    }
  ],*/
  // ---------------------------- LR-Wagen 01 ------------------------------------ //
  "entries":[
    {
      "streamname": "RBJ00-2tr1O", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-ADvhZ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-Uym1S", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-oG8Fp", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-jCPsT", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-l6Au6", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
    /**{ ---------------------------------------------- Stream IDs für diesen Kurs -----------------------------------------------
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
    }],**/
});

// BHT Young Scientist Minds (28.04.2022 - 07.07.2022) ------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "young-scientist-minds",
  "titleTop": "BHT Young Scientist Minds",
  "title": "Hochschulöffentliche Vortragsreihe zur Vorstellung von Forschungsprojekten",
  "image": "assets/img/backgrounds/BHT-Kartenbild-middle.jpg",
  "debug": false,
  "chat": true,
  "customStyle": `
            #linkBox{
              padding: 1.5em;
            }
            #textField{
              height: 100%;
            }
            #titleSub{
              font-weight: normal;
            }
            .textBox_text{
              flex-direction: column;
            }
            #playerSubtitle{
              text-shadow: 0.1em 0.1em 0.2em black;
              color: rgb(255 255 255 / 92%);
            }
            #linkBox{
               background-color: #5757569c;
            }
            .textFieldTitle{
              color: white;
              padding-bottom: 0.5em;
            }
            .textBox{
              max-width: 400px;
            }
            #error {
              color: rgb(235 0 0);
              width: auto;
              justify-content: center;
            }
            #disclaimer{
            content: "Dieser Chat wird von Frau Blankenburg moderiert und Ihre Nachrichten werden möglicherweise
                            verzögert angezeigt.";
            }
            `,
  /**"partnerBox": [
    {
    }],*/
  "linkBox": [
    { "text": "Promotion: BHT Berlin",
      "image": "",
      "url": "https://www.bht-berlin.de/promotion"
    },
   { "text": "Zentrum für Forschung und Innovation",
      "image": "",
      "url": "https://www.bht-berlin.de/zfi"
    }],
  "textFields" : [
    { "title": "BHT Young Scientist Minds (10:00 - 11:00 Uhr) - Organisation: Dr. Stefanie Blankenburg (ZFI)"
    },
    { "header": "09.06.2022",
      "text": "<b>TBA</b><p style=\"color: grey\"> - </p><i>Nicki Lena Kämpf</i>"
    },
    { "header": "23.06.2022",
      "text": "<b>TBA</b> - <i>Teo Chiaburu</i>"
    },
    { "header": "14.07.2022",
      "text": "<b>TBA</b> - <i>Andreas Gürlich</i>"
    },
    { "header": "28.07.2022",
      "text": "<b>'Ermittlung des wirtschaftlichen Nutzen von Maßnahmen gegen die Fälschung und Manipulation'</b> - <i>Felix Ambrus</i>"
    },
  ],
  "entries":[
    {
      "streamname": "RBJ00-2tr1O", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-ADvhZ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-Uym1S", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-oG8Fp", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-jCPsT", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-l6Au6", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// BHT FabLab Stream (24.05.2022) ------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "fablab",
  "titleTop": "FabAccess",
  "title": "Offener Zugang für offene Menschen",
  "image": "assets/img/backgrounds/fablab-background03.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            #linkBox{
              padding: 1.5em;
            }
            .partnerBoxImages {
              height: 5em;
            }
            #textField{
              height: 100%;
            }
            #titleSub{
              font-weight: normal;
            }
            .textBox_text{
              flex-direction: column;
            }
            #playerSubtitle{
              text-shadow: 0.1em 0.1em 0.2em black;
              color: rgb(255 255 255 / 92%);
            }
            .textFieldTitle{
              color: white;
              padding-bottom: 0.5em;
            }
            .textBox{
              max-width: 400px;
            }
            #error {
              color: rgb(235 0 0);
              width: auto;
              justify-content: center;
            }
            #disclaimer{
            content: "Dieser Chat wird von Frau Blankenburg moderiert und Ihre Nachrichten werden möglicherweise
                            verzögert angezeigt.";
            }
            `,
  "partnerBox": [
   {
     "image":"assets/img/logos/FabLab/FabInfra_Logo.svg",
     "url": "https://fab-access.org/de/"
    }],

    "linkBox": [
      { "text": "FabAccess",
        "image": "",
        "url": "https://fab-access.org/de/blog/api_release_0_3/"
    }],
/*
    "textFields" : [
      { "title": "BHT Young Scientist Minds (10:00 - 11:00 Uhr) - Organisation: Dr. Stefanie Blankenburg (ZFI)"
      },
      { "header": "09.06.2022",
        "text": "<b>TBA</b><p style=\"color: grey\"> - </p><i>Nicki Lena Kämpf</i>"
      },
      { "header": "23.06.2022",
        "text": "<b>TBA</b> - <i>Teo Chiaburu</i>"
      },
      { "header": "14.07.2022",
        "text": "<b>TBA</b> - <i>Andreas Gürlich</i>"
      },
      { "header": "28.07.2022",
        "text": "<b>'Ermittlung des wirtschaftlichen Nutzen von Maßnahmen gegen die Fälschung und Manipulation'</b> - <i>Felix Ambrus</i>"
      },
    ],*/
  "entries":[
    {
      "streamname": "RBJ00-2tr1O", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-ADvhZ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-Uym1S", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-oG8Fp", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-jCPsT", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-l6Au6", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// ---- Lange Nacht der Wissenschaften ----------------------------------------------------------------------------------------------------
streams.push({
"tag": "lndw-2022",
  "titleTop": "Lange Nacht der Wissenschaften",
  "title": "BHT Berlin am 02.07.2022",
  "image": "assets/img/backgrounds/lndw-jh-2022-01.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            #page, #header{
              background-color: black;
            }
            #beuth-logo, #beuthbox-logo{
              filter: invert(1);
            }
            #titleTop{
              color: white;
              background-color: #0085cf;
            }
            #titleSub {
              color: #ffffff73;
              background-color: rgb(0 0 0 / 40%);
            }
            .linkButton {
              color: white;
              background-color: black;
            }
            .linkButton:hover {
            color: black;
              background-color: #ffc900;
            }
            .partnerBoxImages {
              height: 80px;
            }
            #partner-box .linkbutton a, #partner-box .linkButton a:hover{
              background-color: none;
              margin: 0;
              padding: 0;
            }
            #footer{
              background-color: black;
            }
            #footer a{
            color: #ffc900;
            text-decoration: none;
            }
            #footer a:hover{
            color:white;
            }
           
            `,
  "partnerBox": [{
      "image":"https://www.langenachtderwissenschaften.de/typo3conf/ext/bb_templates/Resources/Public/bootstrap_package/_p/logo.png",
      "url": "https://www.langenachtderwissenschaften.de/"
    }],
  "linkBox": [
    { "text": "BHT Berlin: Lange Nacht der Wissenschaften",
      "image": "",
      "url": "https://www.bht-berlin.de/lndw"
    }],
  /**"textFields" : [
    { "title": ""
    },
    { "header": "",
      "text": ""
    },
  ],*/
  "entries":[
    {
      "streamname": "", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// ---- Digitalisierungs Kommission ----------------------------------------------------------------------------------------------------
streams.push({
"tag": "dk-2022",
  "titleTop": "Digitalisierungs Kommission",
  "title": "BHT Berlin",
  "image": "assets/img/backgrounds/dk-background.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            
            `,
  /**"partnerBox": [{
      "image":"https://www.langenachtderwissenschaften.de/typo3conf/ext/bb_templates/Resources/Public/bootstrap_package/_p/logo.png",
      "url": "https://www.langenachtderwissenschaften.de/"
    }],
  "linkBox": [
    { "text": "BHT Berlin: Lange Nacht der Wissenschaften",
      "image": "",
      "url": "https://www.bht-berlin.de/lndw"
    }],
    "textFields" : [
    { "title": ""
    },
    { "header": "",
      "text": ""
    },
  ],*/
  "entries":[
    {
      "streamname": "RBJ00-umlOg", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-HMpUV", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-Gb6g9", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 *  Stream Haus Bauwesen(D) 2022 --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "haus-bauwesen",
  "titleTop": "Veranstaltung der BHT-Berlin",
  "title": "Stream aus Haus Bauwesen(D)",
  "image": "assets/img/backgrounds/NILO180318-GMS-BEUTH-3491.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
  .textFieldTitle{ color: white; }
  #playerSubtitle {
      color: rgb(251 251 251 / 52%);
    }
  #error {
    color: rgb(112 0 0);
    }
  #chat{
    background-color: #000000a8;
    }
            `,
  /*"partnerBox": [
    {}],
  "linkBox": [],
  "textFields" : [
    { "title": "<"
    },
    { "header": "",
      "text": ""
    },
  ],*/
  "entries":[
    {
      "streamname": "RBJ00-h8rIn", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-cUqxZ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-Ci3go", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-JwYEV", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-gcBCa", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-EMiF4", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 *  Stream Haus Beuth(A) 2022 --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "haus-beuth",
  "titleTop": "Veranstaltung der BHT-Berlin",
  "title": "Stream aus Haus Beuth(A)",
  "image": "assets/img/backgrounds/NILO180318-GMS-BEUTH-3491.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
  .textFieldTitle{ color: white; }
  #playerSubtitle {
      color: rgb(251 251 251 / 52%);
    }
  #error {
    color: rgb(112 0 0);
    }
  #chat{
    background-color: #000000a8;
    }
            `,
  /*"partnerBox": [
    {}],
  "linkBox": [],
  "textFields" : [
    { "title": "<"
    },
    { "header": "",
      "text": ""
    },
  ],*/
  "entries":[
    {
      "streamname": "RBJ00-XUrlP", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Lwl2G", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-2p2Vn", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-8JvJp", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-V8ipu", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-GYQZY", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 *  Stream Haus Grashof(C) 2022 --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "haus-grashof",
  "titleTop": "Veranstaltung der BHT-Berlin",
  "title": "Stream aus Haus Grashof(C)",
  "image": "assets/img/backgrounds/NILO180318-GMS-BEUTH-3491.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
  .textFieldTitle{ color: white; }
  #playerSubtitle {
      color: rgb(251 251 251 / 52%);
    }
  #error {
    color: rgb(112 0 0);
    }
  #chat{
    background-color: #000000a8;
    }
            `,
  /*"partnerBox": [
    {}],
  "linkBox": [],
  "textFields" : [
    { "title": "<"
    },
    { "header": "",
      "text": ""
    },
  ],*/
  "entries":[
    {
      "streamname": "RBJ00-B2MWN", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-TLVLZ", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-oQ0x8", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-Bq4fn", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-Oxc2U", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-26wqm", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 *  Stream Haus Gauß(B) 2022 --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "haus-gauß",
  "titleTop": "Veranstaltung der BHT-Berlin",
  "title": "Stream aus Haus Gauß(B)",
  "image": "assets/img/backgrounds/NILO180318-GMS-BEUTH-3491.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
  .textFieldTitle{ color: white; }
  #playerSubtitle {
      color: rgb(251 251 251 / 52%);
    }
  #error {
    color: rgb(112 0 0);
    }
  #chat{
    background-color: #000000a8;
    }
            `,
  /*"partnerBox": [
    {}],
  "linkBox": [],
  "textFields" : [
    { "title": "<"
    },
    { "header": "",
      "text": ""
    },
  ],*/
  "entries":[
    {
      "streamname": "RBJ00-kqn5g", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-0yDQg", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-q782N", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-vqR0Q", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-yYdjg", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-whkRf", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});