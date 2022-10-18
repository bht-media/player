
// define ABR playback stream names
// stream groups: each stream group has 3 ABR streams
/**
 * The Streams and its custom styles bundled in an Array
 * @type {*[]}
 */
let streams = [];

// TEST Stream 01 --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "test01",
  "titleTop": "Test Title Top",
  "title": "Test Stream 0",
  "image": "https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_MonitoringWeather.jpg?h=d1cb525d&itok=3jSPVbXF",
  "entries": [{ "streamname": "CD6oL-2kE1g" }]
});

// TEST Stream 02 --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "test2",
  "titleTop": "Veranstaltungstitel",
  "title": "Untertitel",
  "chat": true,
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

// BHT Personalversammlung (TODO Wird dies noch benutzt???) --------------------------------------------------------------------------------------------------------------------------------------
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

// 2021 Akademische Versammlung ------------------------------------------------------------------------------------------------------------------------------
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

// 2021 getreide-informationstagung ------------------------------------------------------------------------------------------------------------------------------
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

// 2021 klima-ringvorlesung ------------------------------------------------------------------------------------------------------------------------------
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

// 2022 FabAccess Workshop ------------------------------------------------------------------------------------------------------------------------------
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
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    },{
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    }],
  "textFields" : [
    { "title": "<p>Jeden Mittwoch ab 18 Uhr&ensp;<a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODk2ODZjYmYtNDk0ZC00ZmY4LWIzM2UtOTcwYmQ3YTZkZDNi%40thread.v2/0?context=%7b%22Tid%22%3a%2253bc5889-4f98-49b1-97c2-1b0d33acec73%22%2c%22Oid%22%3a%22ac64bc64-e5c3-4223-aa48-ca528aa7145a%22%7d'>hier</a>&ensp;zu erreichen.</p> <br> <p class='important'>Bitte achten Sie darauf, vor dem Beitreten Ihr Mikrofon/Kamera zu deaktivieren, vielen Dank.</p>"
    },
    { "header": "Test 01 2022",
      "text": "Vortrag 01"
    },
    { "header": "Test 02 2022",
      "text": "Vortrag 02"
    },
    { "header": "Test 03 2022",
      "text": "Vortrag 03"
    },
  ],
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
  "debug": false,
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

/**
 *  Stream für die Bachelorarbeit Steve Margenfeld Julia Hoffmann --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "bachelor-hoffmann-margenfeld",
  "titleTop": "Testseite für die Bachelorarbeit Hoffmann & Margenfeld",
  "title": "User Interface Design und Funktionalität einer Interaktiven Streaming Webseite & Web-technische Umsetzung einer interaktiven/konfigurierbaren Streaming Webseite",
  "image": "assets/img/backgrounds/NILO180318-GMS-BEUTH-3491.jpg",
  "debug": false,
  "chat": false,
  "sessionChat": true,
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
    #h5live-playerDiv2 {
      background-color: #303030 !important; 
    }
    #h5live-playerDiv1 {
      background-color: black !important; 
    }
    .textBox_header, .textBox_text {
    font-size: 14px;}
              `,
  "partnerBox": [{
    "image":"https://www.nanocosmos.de/v6/images/logo-nav.png",
    "url": "https://www.nanocosmos.de/v6/"
  }],
  "linkBox": [],
  "textFields" : [
    { "title": "Zeiten"
    },
    { "header": "08 Uhr, 12 Uhr, 16 Uhr",
      "text": "Ein Stream"
    },{ "header": "09 Uhr, 13 Uhr",
      "text": "Zwei Streams, Link Box, info Texte"
    },{ "header": "10 Uhr, 14 Uhr",
      "text": "Ein Stream, Chat, Link Box"
    },{ "header": "11 Uhr, 15 Uhr",
      "text": "Zwei Streams, Chat, Text Feld"
    },{ "header": "ab 17 Uhr",
      "text": "Zwei Streams, Chat, Partnerbox, Link Box, Text Feld"
    },
  ],
  "entries":[
    {
      "streamname": "RBJ00-NCFgX", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-SJ1BL", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-VEu9G", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "RBJ00-t9gHm", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "RBJ00-6dpl9", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "RBJ00-9KLKM", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "time": [{
    "startDate": "2021, 1, 1",
    "endDate": "2032, 1, 1",
    // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
    "weekDay": "0,1,2,3,4,5,6,7",
    "hour": 8,
    "minute": 0,
    // duration in minutes
    "duration": 60,
    "titleTop": "Eisberge und deren Bedeutung für den BER",
    "title": "Eine Analyse des Schmelzpunktes von Eisbergen auf dem BER",
    "image": "assets/img/backgrounds/climate-background.jpg",
    "chat": false,
    "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: #0098a1;
          }`,
    "partnerBox": [],
    "linkBox": [],
    "textFields" : [],
    "dual": [],
  }, // 8:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 9,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Vernetzt in der Neuzeit",
      "title": "von Professor Mustermann",
      "image": "assets/img/backgrounds/dk-background.jpg",
      "chat": false,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: rgb(50 50 240 / 52%);
          }
          #textField{
          background-color: rgb(50 50 240 / 52%);
          }
        #error {
          color: rgb(112 0 0);
          }
        #chat{
          background-color: #000000a8;
          }
              `,
      "partnerBox": [],
      "linkBox": [
        { "text": "BHT Berlin",
          "image": "",
          "url": "https://www.bht-berlin.de/"
        },{ "text": "",
          "image": "https://www.bht-berlin.de/fileadmin/images/BHT_Logo_horizontal_Anthrazit.svg",
          "url": "https://www.bht-berlin.de/"
        }],
      "textFields" : [
        { "title": "Informationen zum Stream um 9Uhr"
        },
        { "header": "Kurs Informationen",
          "text": "<i><a href='https://lms.bht-berlin.de/login/index.php'>Moodle</a></i>"
        },
        { "header": "Infotag",
          "text": "<i>12.12.2022 12Uhr</i>"
        }
      ],
    },        // 9:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 10,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Agrarwirtschaft Bachelor",
      "title": "Dr. Prof G. Treide",
      "image": "assets/img/backgrounds/getreidetagung-background.jpg",
      "chat": true,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub, #chat {
            background-color: rgb(240 116 50 / 52%) !important;
          }
        #error {
          color: rgb(112 0 0);
          }
        #chat{
          background-color: #000000a8;
          }
              `,
      "partnerBox": [],
      "linkBox": [
        { "text": "BHT Berlin",
          "image": "",
          "url": "https://www.bht-berlin.de/"
        },{ "text": "",
          "image": "https://www.bht-berlin.de/fileadmin/images/BHT_Logo_horizontal_Anthrazit.svg",
          "url": "https://www.bht-berlin.de/"
        },{ "text": "",
          "image": "data:image/png;base64,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",
          "url": "https://lms.bht-berlin.de/login/index.php"
        }],
      "textFields" : [],
      "dual": [],
    },        // 10:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 11,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Versammlung zum 90. Jahrestag der Hochschule",
      "title": "Event des Jahres",
      "image": "assets/img/backgrounds/klassenraum01.jpg",
      "chat": true,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: rgb(50 50 240 / 52%);
          }
        #error {
          color: rgb(112 0 0);
          }
        #chat{
          background-color: #000000a8;
          }
              `,
      "textFields" : [
        { "title": "Informationen"
        },
        { "header": "Sammelpunkt",
          "text": "<i>Haus F Raum 981b</i>"
        },
        { "header": "Wichtige Gäste",
          "text": "<i>Dr. Willi W. Ichtig<br>Dr. Frau</i>"
        },
      ],
    },        // 11:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 12,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Eisberge und deren Bedeutung für den BER",
      "title": "Eine Analyse des Schmelzpunktes von Eisbergen auf dem BER",
      "image": "assets/img/backgrounds/climate-background.jpg",
      "chat": false,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: #0098a1;
          }`,
      "partnerBox": [],
      "linkBox": [],
      "textFields" : [],
      "dual": [],
    },        // 12:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 13,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Vernetzt in der Neuzeit",
      "title": "von Professor Mustermann",
      "image": "assets/img/backgrounds/dk-background.jpg",
      "chat": false,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: rgb(50 50 240 / 52%);
          }
          #textField{
          background-color: rgb(50 50 240 / 52%);
          }
        #error {
          color: rgb(112 0 0);
          }
        #chat{
          background-color: #000000a8;
          }
              `,
      "partnerBox": [],
      "linkBox": [
        { "text": "BHT Berlin",
          "image": "",
          "url": "https://www.bht-berlin.de/"
        },{ "text": "",
          "image": "https://www.bht-berlin.de/fileadmin/images/BHT_Logo_horizontal_Anthrazit.svg",
          "url": "https://www.bht-berlin.de/"
        }],
      "textFields" : [
        { "title": "Informationen zum Stream um 9Uhr"
        },
        { "header": "Kurs Informationen",
          "text": "<i><a href='https://lms.bht-berlin.de/login/index.php'>Moodle</a></i>"
        },
        { "header": "Infotag",
          "text": "<i>12.12.2022 12Uhr</i>"
        }
      ],
    },        // 13:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 14,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Agrarwirtschaft Bachelor",
      "title": "Dr. Prof G. Treide",
      "image": "assets/img/backgrounds/getreidetagung-background.jpg",
      "chat": true,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub, #chat {
            background-color: rgb(240 116 50 / 52%) !important;
          }
        #error {
          color: rgb(112 0 0);
          }
        #chat{
          background-color: #000000a8;
          }
              `,
      "partnerBox": [],
      "linkBox": [
        { "text": "BHT Berlin",
          "image": "",
          "url": "https://www.bht-berlin.de/"
        },{ "text": "",
          "image": "https://www.bht-berlin.de/fileadmin/images/BHT_Logo_horizontal_Anthrazit.svg",
          "url": "https://www.bht-berlin.de/"
        },{ "text": "",
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbwAAABxCAMAAACZb+YzAAAA+VBMVEX////5gBIzMzP5fAD5egD5eAD//vv+69n5fgD5gRH5ihv+5tD7sXb+7uH5hyL5dwD92sX8vpD94c37sYH7uZD7rG76mVUsLCz5gAAlJSX/+/YgICD/9u6JiYl5eXltbW3907P6mUv6nlGZmZmurq78x6D6n1z928L8uYXm5uZgYGA5OTlQUFAbGxvu7u7/9OlKSkr6kDf6kj1kZGT90a76pGXCwsLZ2dm2trahoaH6k0n92r78yqT5jS2CgoIkLzTjdxYAAABwPxE6NjLtexO8Zx6LVCf948djRCxXQC5JOy8NKjVILRjGaBLs49qnXyNySSuZWST7qmG9i7JhAAAQyklEQVR4nO1df3viNhIGZIO8ATuQEAhxEkMC5DfBC2GTwGZ7u223295dr9//w5xlQwDrlSxDCrjh/aN9nsUZj/RKo9FoNE6ltlgSO3o6DCPn//KB+yGtZdes7RZz2JKXYGzJSzC25CUYW/ISjC15CcaWvARjS16CsSUvwdiSl2BsyUswtuQlGFvyEowteQnGlrwEY0tegrElL8HYkpdgbMlLMLbkJRhb8hKMLXkJxpa8BGNLXoKxJS/B+CeRd3m5bg1WjH8CeZeDh/PPV9e3Px2vW5MVI8Hk3V0OBp/OTm6uryuHh5VK5fB83RqtGokk7+5ucH58enNdOTryWMv4OLwZrFutlSNp5N2xyeaZyClrY+4+361btdUjSeRdfjq+OuRoY6gcflqrZmtCUsh7OD+tMN7CtPk4unmH0y6VCPLuBo9XmUMBb/60O1uHWhuATSfv8tPpfUVMHFvt7h9WrtWGYKPJG5x9zBzJiGMm8+R9mkyGzSVvcHZzK51ygcl8XKFKm4YNJe/y8TqaOWYy39/mbgabSN7dp6ujw0jiPNy+t3hYCJtH3uXZtcKcYybz+t16KmNsGnmDk2ulSeeZzI/v7RCBw2aR9/Axyrmczrv3urmbwSaRd35zq0qdR97nv1WXRGBjyLt7PFKedYHZvH+/G7wxNoS8u0fVpW5m7mVE+4Sa3SkUOrWFtc12cqVdp9ds9pzdUq6zqJhUtvA2cpgo1Jo3Js8u7JRKu7u7pVIcZe8e72NT57MXdjeznVKz3HpyuyPTHLlPB61+sVSwlfXwRRSc8tPIILqua5r3H2KMnvJOIfZAqDE5ZkjOc3w5nVwz3z94cl336al10ZtrzduR5/Vb/6lrVinxdNUI9ZRtFUsqDH66iWcwp5iPrxSKLdN7M6GUMm29/xFPl6rbb6qOo2yueEB1QuebTYlePSjuxOj3bKlYB3I0JicOf3avb/qdGYD1bLfcq01+fiPy7GHf8F8y32hNN/vDiJH/EMdNCeNo6nO2W54CvM5+35PWtMUSOHULi0iniWbVHQURPnqeHCqU03pWFLOT9wYAaE01nxs/8Bbktcsa/5aJtjrtS7R9uF+COg+3Y/YKLUukQaCF3owa8cMPUhFpYn0YqvT5sKoLmJvIMVXktOtCdTQ974/F5cnLNk15oz1tuw5WcKC+rxPg5V9l1o4hlavAlDcFSgQodbUoCZ6MUTuyz0d8j4ZB9e5OhJhcSzgdfEUomxBLk/f8QaHRVHNL/J9eHmeWpC6T+fpNO+ikmgo6eAanDpQIkC1Gsx/IuJDa39oFlc66CQgtygxBtmhEqaN5k29J8gplkXHntN0Lt/r8+ihTAYg18X6mae1AiTumhNbDnVVoRE+XMfR6TtzpOVdRE68vG2I5dkvFCrRqy5HnmMrKpvVuSNvjk9PM5xOGUx8fPVx5uI7B3S/VNJvXykpYRdRZJVNp2gUgVeES3labvhM5IjtQGCk1SGv9ugx5F5batBtra4QXjId7pPup8tx7+Z42YijAgNjrhX36COhN3OlD5ek7luNg7lSHEhnx/6ZKXq1lxVM2rYW8rPOrpch7+e1bTAU86Bx7cftcNH+L8eUgr1OZOwhF8mrq9v0VoTH7eIo64USRvJcfC3DnGdmQtXqO3edeO0CvNxfoc8KvwbX6MtwpkrfYS+YtxRk8GVAk7+XHl4WaR7pzbyst1FfECWvdXmAMeCOJ23qU40+JWaiR1xC+hBIPolWEzI77Y5jG8FmJvJffvsRd78awZju+M1qIPGqEvK/OYspQIxS5cxYaA1MokVcUcEc0022Uyw3XJPAJOprR9jM8UD1WCVK/fP+2IHfp9IeZMajilMN2dufW/+yixo64c22vCV0nyqLbLMotf5EKeW3sqxC98Twmx27nddQxWmuq6gkk70yBvN9/kfaIbjGI2jmzYjWFA51ofnxd2FVaflZnsbMSJWfegeoLxpJmucPnXC3V2RmKo2YMCuTZVaxIec6Y2HtoBz/jtGDyHiPJO/zj3xLnXqN9p2BnO7nmAaaPtCbt6AjEUN3IF5u9YXGvBWLDAayZCFdOYAWIbu5FySEzfVbCY4CYxcL0oUJLEjtVIC+PBggxuF1nDm03p2Yek3ceQV4lc1aqi60dvXhtaLbUgr1BJk/0cYdq9d7kKCRr9/p4ASf1qeFsYDl6w3mV0+kJLPR0KKWyLShHr89Qx/AsjsNGkwc9NNINvYLBBn4N6cvJeziSUlc5HQibyaTPe/Fl9Jw+9tBz0PgTI3QA4eCdl/UaaWnjCW6GNvM9A44C7dXjbENOtDIXlewIl+po8lDP0RHgDq/k1sRQYIdlcCsxmIdXA6FcBi76gSYFKQe/5fEg5IKOHRc+eJCVvMNzRbgOKUDXljQmv8MRqTVACDubFyyykeSV0ACqCg5L7BH39KTvBOT954/fX17gpLutHL+mreD9GR2FpaHliD75DSnADqiCQViDva6Pm7yDJjAZgeN7G7M3Xm5yqF+Ji48xBPvBSPLQSmEJ4n2QamvcP3if96v+5b9//nh5mWXw5fDo9v54LmUFD1OHbyV4LujYC7hyQwNid9EEHjvOe0gTA8rp8EN5uo5AfUxRIgJ2TKPIQ3uR2dU7jAtugGt7wS/HMMLS09M0/e3Lz//78/uPH1+/ZjJff3z/5fEhnOgHQ5IG31QU+vCbWHNBQzTBIITWxvQJyiJX0xIcPkF/kgadZ4KfUCAugI3UjyTPAZRbkkMuYDhHQR+fnaDnx6dzBmUU+viW5qwhNnrU5Z9D2xrfUOVAO6grGoR74OlgnqM9L+0KxEBzp/muTw55EgKj6b8XTb0o8oC9mq65CHw0Rg8cNRyYBkerr6vkDGwwUOd3zgFqdX6EaiWo1qQbETrgdeQv9guydkSYLtEBYy6wREMgRxdMYB/I34oiL1absb5jK4+PhPb5F6A2oN0CPCEDbdQZeeDvZQMdcWQK9BBPPLgGB4+jxVmabFkAUz6CPORbGZJXpICHQ7u+x/B4jZ5G5O2qSBU8B/wJ9lwHHGVq8KAuANoU0h1slsUrFd4UWmzMoA6/kPRqKgVsSgR5ilZtFj3uT3y7lfpYQQnrgDwNWSEwowjKLABThpGHXBAqyzFFZDueHECqCV3NMYD9ZZuOLJAjtr6inoogD8xuDQ34Gdi8v8mG1OX1EboeCVSCjQAzKnzQ6gOsbYy8XX7xoXVZahh4H/NNgddLDmS98RewBEPBzJaneoNVUk4eWv+NVlkKfo7QeorFwQ7RRm9F5CELsifrKt5++CYHTGzkN00BXqzt4xN94GTPAvxJBHng39MkAvxfmFl29lNBGUgrIg/5MdJM5h1eDtuaAEskyCwaA8SG2CBAMzhiOYqd+mcvlWIx95KTSuYWqLQi8oD1sqRLTAe0/AN0Wi3ZkocCdqSRhRNSGLYKEJ+8uCljGIyOK488cEFyReSBaLIs1OB5FIC8KiRPk5JX4D0WttgiNSPuNMQmD20uFgDz024qGeSxrIg8sHZbcv8ARUBS2QNeTlUqB+xR2P4S7ZAi7hPFJg95xguA7agYeaDU4orIA6FBS36RCMQw9VTtiZfzQUqe3eX+gnYxeRFefGzyFktx48DWYs9soupTa5x58quEKCAPZ144JWwedpfX28Vmc0NnHm34qdGo2mLy1zx8rDSBYM1DDstbr3nw5HEBuH6OHyrIsUZvU3prDvnZ2NvUF/E2wVZBFq1jWJfDku6mUp+OMhVwrrDGfZ4j7Sr1fZ50y4H2eX244377fd4bkTdKpQaVTOUjr9L6Iiws0CEGOMcURVikMwZNsX0cHouIsMQnD6VsRkVYeGhGKnV3X6mAQ6H1xTZJX+ZuClhCkZG+RAw6DWG78RqKbco9qNjk1XhHN+3mF0CKhVgqN7xKKyIPnSoIE0YYQMMFpwqyY0F4OuG7laITfzFixzbB2aN8oEnwcLtG8tB5niXxzWHU3+sqG2z/ZMcswvM8NCPlHkvsUwXUt6N4RYZe4dnN9ZEHfXzJMERJLOwkvXYQTw7MZmM/oJv1VVn3IbojyAOXkIhqWZgwjg/XSB7MaxA6+ShlJkjdQayCLLYxaiDIQfwjJJRQJPV/UQpWBHkd3nzI848kGNyuz2GBWXjikzh0DyjYRD+jI3Bh/gIaMuNsU5QeLFs90RyOSkBCNl6+sIpxs0byQIxR7CLAbOYgsTaL/G/RqRBwEL3uCxhCycyi4gUpUeJqBHlg7JC68BVynK9vn4cnATXhUK+h2wqTjGmUgkdwAigeMH8FP+JETJEhh2nAkeShWwKwrsErms3m/v5+8eJiL58vl8v9VqvRGCsM0m5XRh68q4Bzv+El7kncGEYMtRaQgy/yT2Y72oUJ7yq0camlyLsKJnqHJKbbtrQxppv0iTkA6WMrIw9fz9PLXG9l4X3EaboSpETLc+zhi2lTswXv107md6hPBbf+I8lDqb2kKzwGQSlLEndsheThExKusFQBF0+YZgI/4/t5jZDFy8GbYjMZyygrGyZv1oqiZJRI8qDh1uoi9mCWvySbdHXk4SmTJkZxZmjZgiJudDSdoZgVUm3OyOkIatORmXxDfLVdb4W6VlIqLfpyJbyGr+G5V4Mmx5QcV66QPHTXxG+LXn5mZZbtXLsMyyKk57OVRMVcNM2TY7Naw899kRx9Rmcbpeaxqnuzo6B2IS5PoEAevBzlDTSH77kCvD4tvs23WvLEVRyI7leU0IVVL7W5IAp/jU1Vjj5ngxzBmY1mNZx2ruaNJqchGgU+FAoKCI7TrfDN98IFLFwgu823WvIWLhZF52PYNjac0SCjefdIUOKAlQQhhjkyjTeowwJtIVst+ruTAti1XK9h4Meo9KR5leSlcsh1VkC43iLcxCuAcpWUFhQ0hgp5+JJ22q88Ui/7eznXEFYwcWTcrZY8QQWGKPDpsL2FErP4LBVnuaRmpfJVkpFGg52c8IGIe0srJi/VWyA1ANVsFC57EvD1Ixep/DgLtcJxC48QXXoLY/XkpZqx2bPg8IvPHq7bKarSoQTFepvPaqWwOYWjuFs5ebErZaL5IniRXA6OKWbLqqNpgVOFCdqRFcgB8GBbL3kpJ05LKBXGcWPVOybUEYgRVsgJS2jEvhk7BS7oIwONuvfCsHry1D6qMO4D2acVYlQa17oSOU0Vq6bll6rujiqLSV9nqhy5r4G8VE1UK5H7y748lb2vuGDpZWnqSDuybD7x5sGS31VoxihGT7W+Uq7LOshjplOh2/WqrLSGj15VRY4RNYprefnndaxuafkvmhTqiuX5qTVSPG5fD3mpbDPiG0BUrxYVPieVLRL5h0KobigsHqmcMBqa1vS6wx5Z/ltCbVf61ZsARHcdBYV9qFaDAKcVMIkBbJwsmJpnF11d1O+U6N2iYpJcp9jlPr/2KkfTn5qKcnJ7psXJoZpl7o0/B7djvX6c7fX/Y/Im/zD9RYchyazTr0rHGtGq/Wf1r8btG2YY3Oc0GPbAc5A8/rmqIK/S3s27hI8eEp26+XaM/Ea7ne+K5JRUPgY3Rscpu0bwScC0/zFA3axfTL9JmHs64BBEHlv8D08iBgrFJ0HElGqaeVCUxjK5lhd4oAa/9XMBaqVmwzS8CRKc/XtT0TAbzTg9LpEzXEBObreYb7jdUbdRLg53Y/WkMnJMV6K9lsKmhKU9GN3889/zvr8T2cJO2xk2i8Xm0GnvxP9UqEDOW6r49ii0nWa+VR8ZxshtlC96bdlXR/8Pw0acRIJQrcoAAAAASUVORK5CYII=",
          "url": "https://lms.bht-berlin.de/login/index.php"
        }],
      "textFields" : [],
      "dual": [],
    },        // 14:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 15,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Versammlung zum 90. Jahrestag der Hochschule",
      "title": "Event des Jahres",
      "image": "assets/img/backgrounds/klassenraum01.jpg",
      "chat": true,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: rgb(50 50 240 / 52%);
          }
        #error {
          color: rgb(112 0 0);
          }
        #chat{
          background-color: #000000a8;
          }
          #h5live-playerDiv2 {
            background-color: #303030 !important; 
          } 
          #h5live-playerDiv1 {
            background-color: black !important; 
          }
              `,
      "textFields" : [
        { "title": "Informationen"
        },
        { "header": "Sammelpunkt",
          "text": "<i>Haus F Raum 981b</i>"
        },
        { "header": "Wichtige Gäste",
          "text": "<i>Dr. Willi W. Ichtig<br>Dr. Frau</i>"
        },
      ],
    },        // 15:00
    {
      "startDate": "2021, 1, 1",
      "endDate": "2032, 1, 1",
      // "Sunday (0)","Monday (1)","Tuesday (2)","Wednesday (3)","Thursday (4)","Friday (5)","Saturday (6)" seperated thru comma (,)
      "weekDay": "0,1,2,3,4,5,6,7",
      "hour": 16,
      "minute": 0,
      // duration in minutes
      "duration": 60,
      "titleTop": "Eisberge und deren Bedeutung für den BER",
      "title": "Eine Analyse des Schmelzpunktes von Eisbergen auf dem BER",
      "image": "assets/img/backgrounds/climate-background.jpg",
      "chat": false,
      "customStyle": `
        .textFieldTitle{ color: white; }
        #titleSub {
            background-color: #0098a1;
          }`,
      "partnerBox": [],
      "linkBox": [],
      "textFields" : [],
      "dual": [],
    }         // 16:00
  ]
});