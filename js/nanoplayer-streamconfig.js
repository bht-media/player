
// define ABR playback stream names
// stream groups: each stream group has 3 ABR streams

/**
 * The Streams and its custom styles bundled in an Array
 * @type {*[]}
 */
let streams = [];

/**
 * STREAM ROHLING -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "rohlingTag",
  "titleTop": "Titel",
  "title": "Untertitel",
  "image": "/assets/img/background.jpg",
  /**
   *
   "customStyle": `
   #titleSub {
            background-color: RED;
            }`,
   "partnerBox": [
   {
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    }],
   "textFields" : [
   { "title": "Titel"
    },
   { "header": "Information",
      "text": "Beschreibung"
    }
   ],
   "linkBox": [
   {
      "text": "Logobeschreibung", // high
      "image": "/assets/beuthbox-logo.png",
      "url": "1234"
    }
   ],
   **/
  "entries":[
    {
      "streamname": "...", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "...", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "...", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "...", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "...", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "...", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "debug": false,
  "chat": true
});

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
      "streamname": "216818c6-0698-4f38-8ced-a55dd9375db9", // high
      "info": { "bitrate": 1200, "width": 1280, "height": 720, "framerate": 30 }
    },
    {
      "streamname": "0b2edcf1-1f0d-4c28-9d15-5d4dec789e1e", // medium
      "info": { "bitrate": 800, "width": 854, "height": 480, "framerate": 15 }
    },
    {
      "streamname": "873ddae6-677d-4783-ab56-ea92db7313c8", // low
      "info": { "bitrate": 400, "width": 640, "height": 360, "framerate": 15 }
    }
  ]
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
      "streamname": "65e74382-e62e-4703-8417-84aa4d178a27", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "9c035751-656f-4f19-9a87-dbab579b05c9", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "4e4e056b-1a97-42de-b160-11c7fe2c4835", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "84cc569f-9b9b-4e87-96d5-13a0bb5fe504", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "ef15e119-8576-4e97-b339-d156103f023b", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "dcee01fc-a188-4cd1-9501-e9e5e0692c2b", // low
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
      "streamname": "85bff9cc-c341-4a50-908b-e68b74ad2016", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "65d9fb5b-0c99-4a61-a375-abc3acf4f5db", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "4175f50c-ba66-4d8c-a049-34445bd53a5e", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "8ee7d669-7baa-44eb-bba3-fdffd5d833d4", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "e9d0097f-4a41-473a-b2a1-1076976b5af8", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "818bd537-036d-4766-9aef-9e5500847520", // low
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
      "streamname": "71315302-69b0-4c47-8e16-0dd9a03b7a58", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "b5031cdd-da0a-4cee-b38e-e3533b0a48b2", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "a93089d9-ae2c-4b5c-a05c-813a6111361f", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "6778f483-6065-4e84-b706-3e1fc92cfdeb", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "4fe610b9-e66f-4849-92f7-fc191ad49706", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "4fce2e50-e7f2-4ab7-948e-67ac54a7b8bf", // low
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
      "streamname": "7d46e6a9-6da8-473b-b842-4f685c34bff3", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "40d2f0ff-f6c7-46b1-b17f-efed79ffdb9b", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "2e41ae65-ed52-43ac-a925-3fcaa701b8b3", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "8c149731-ebcc-4f7f-9bc2-5ded8b02a351", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "580d09af-7cba-4bd0-9607-19f7d88cf337", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "a7100d17-126a-458c-89d0-42b9b8bc546b", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 *  Stream Hochschultag (Every year) --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "hochschultag",
  "titleTop": "Hochschultag",
  "title": "Berliner Hochschule für Technik",
  "image": "",
  "debug": false,
  "chat": false,
  "customStyle": `
  
  body{
    background-image: url("assets/img/backgrounds/2022_Hochschultag.jpg");
    background-size: cover;
    background-position: center;
    font-family: "BHT-CaseMicro", sans-serif;
  }
  
  #header{ 
    height: 60px;
    
    margin: 0;
  }
  
  #footer{
    background-image: linear-gradient(to top, white 0%, #ffffffc7 50%);
    background-color: #ffffff00;
    font-family: "BHT-Case", sans-serif;
  }
  
  #error{
    font-family: "BHT-Case", sans-serif;
  }
  
  
  #main{
      background-color: rgb(234 234 234 / 0%);
  }


            `,
  "linkBox": [
    { "text": "Hochschultag",
      "image": "",
      "url": "https://www.bht-berlin.de/hochschultag"
    }],
  "entries":[
    {
      "streamname": "fa302dd6-1da0-4442-bcae-d4d7247ba55c", // high
      "info": { "bitrate": 4600, "width": 1920, "height": 1080, "framerate": 30 }
    },
    {
      "streamname": "5ab5107a-ba48-4e9d-a6f1-7aec9271aebc", // medium
      "info": { "bitrate": 2000, "width": 1280, "height": 720, "framerate": 30 }
    },
    {
      "streamname": "91c862fa-4099-4170-a80d-7be1a82b368b", // low
      "info": { "bitrate": 800, "width": 852, "height": 480, "framerate": 30 }
    }],
  "dual": [],
});

/**
 * 2024 NOTFALLSITZUNG Hack -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "notfallsitzung",
  "titleTop": "Notfall-Stream Berliner Hochschule für Technik",
  "title": "Wichtige Informationsveranstaltung",
  "image": "",

   "customStyle": `
   #main {background-color: #212121;}
   #titleTop { background-color: #a50000; color: rgb(253 253 253); }
   #textField { background-color: none; }
   .textBox_text{ height: 10em; font-size: larger; }       
   `,
   "partnerBox": [
   {
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    }],
  "entries":[
    {
      "streamname": "f125f602-3a14-4ff8-bb72-298de8c05b85", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "cae2a779-a6ed-4001-b823-356a73874205", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "fa911661-f179-43d3-b7f6-62dca365fd33", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [],
  "debug": false,
  "chat": false
});

/**
 * 2023 Harald Lesch Dual-------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "lesch",
  "titleTop": "Klimawandel: verstehen und handeln",
  "title": "Prof. Dr. Harald Lesch",
  "image": "assets/img/backgrounds/2023Lesch/klima3.jpg",

   "customStyle": `
   #titleTop {  background-color: #a91100f0; 
                color: white;
                font-size: xx-large;}
   #titleSub { color: #ffffffad; background-color: #4d0f0fbd; font-size: 18px; }             
   #page, #header, #footer { background-color: #000000; }
   #beuth-logo, #beuthbox-logo { filter: invert(100%); }
   #footer a:hover{ color: white; }
   #footer a { color: #00d0ff; }
   #error   { display:none; }
   #textField, .textBox { background-color: #00000000; }
   
   .linkButton { padding-left: 2em; padding-right: 2em; color: #ffffffad; background-color: #4d0f0fbd; font-size: 12px; }
   .linkButton:last-child { background-color: #00000000; box-shadow: none; }
   .textBox { max-width: 1080px; margin: 2em; }
   .textFieldTitle { display: none; }
   .textBox_text {  padding: 1em; border-bottom-right-radius: 1em;
                    border-bottom-left-radius: 1em;  background-color: #ffffffd4;}
   .textBox_header { padding: 1em; font-size: 18px; border-top-right-radius: 1em;
                    border-top-left-radius: 1em; color:white; background-color: #c90000e6; }
   .linkBoxImages { height: 4em; }
   `,

    /**
     *
   "partnerBox": [
   {
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    }],*/
   "textFields" : [
   { "title": ""
    },
   { "header": "7.7.2023 um 10-13 Uhr im Ingeborg-Meising-Saal an der BHT ",
      "text": "Diese Veranstaltung richtet sich an Lehrkräfte und deren Schüler*innen an Berliner und Brandenburger Oberschulen.<br><br>" +
          "Die Jugend von heute wird in der Zukunft alltäglich mit dem Klimawandel auseinandersetzen müssen. Nur wer die wissenschaftlichen Hintergründe versteht, " +
          "kann überzeugend argumentieren und nachhaltig handeln. Die Schüler*innen erfahren, wie sie die Energiewende in Deutschland mitgestalten und realisieren können.<br><br>" +
          "Prof. Dr. Harald Lesch eröffnet die Veranstaltung mit einem Vortrag zum Thema Klimawandel. Dr. Cecilia Scorza-Lesch stellt den Klimakoffer vor und zeigt die damit möglichen Experimente, die für den Unterricht konzipiert wurden.<br><br>"
    }
   ],
   "linkBox": [
   {
      "text": "", // high
      "image": "assets/img/logos/Instagram_logo_2022.svg.png",
      "url": "https://www.instagram.com/p/CuG8UuXA1S9/?hl=de"
    }
   ],

  "entries":[
    {
      "streamname": "792ca09d-890a-4203-b823-e1d65b1f2edc", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "c2f00a2d-b11d-4157-961e-072f7bfe87db", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "b00940d9-8c2b-485c-a960-2f22309ceaa9", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "03421cd5-ac0b-4732-8057-84b20ad890c1", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "b2c448ae-f60b-4255-9c32-ebaa514b717c", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "71e0f2b6-57b1-41b5-88d1-5971c000052a", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "debug": false,
  "chat": false
});

/**
 * 2023 Harald Lesch Single -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "harald.lesch",
  "titleTop": "Klimawandel: verstehen und handeln",
  "title": "Prof. Dr. Harald Lesch",
  "image": "assets/img/backgrounds/2023Lesch/klima3.jpg",

  "customStyle": `
   #titleTop {  background-color: #a91100f0; 
                color: white;
                font-size: xx-large;}
   #titleSub { color: #ffffffad; background-color: #4d0f0fbd; font-size: 18px; }             
   #page, #header, #footer { background-color: #000000; }
   #beuth-logo, #beuthbox-logo { filter: invert(100%); }
   #footer a:hover{ color: white; }
   #footer a { color: #00d0ff; }
   #error   { display:none; }
   #textField, .textBox { background-color: #00000000; }
   
   .linkButton { padding-left: 2em; padding-right: 2em; color: #ffffffad; background-color: #4d0f0fbd; font-size: 12px; }
   .linkButton:last-child { background-color: #00000000; box-shadow: none; }
   .textBox { max-width: 1080px; margin: 2em; }
   .textFieldTitle { display: none; }
   .textBox_text {  padding: 1em; border-bottom-right-radius: 1em;
                    border-bottom-left-radius: 1em;  background-color: #ffffffd4;}
   .textBox_header { padding: 1em; font-size: 18px; border-top-right-radius: 1em;
                    border-top-left-radius: 1em; color:white; background-color: #c90000e6; }
   .linkBoxImages { height: 4em; }
   `,

  /**
   *
   "partnerBox": [
   {
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    }],*/
  "textFields" : [
    { "title": ""
    },
    { "header": "7.7.2023 um 10-13 Uhr im Ingeborg-Meising-Saal an der BHT ",
      "text": "Diese Veranstaltung richtet sich an Lehrkräfte und deren Schüler*innen an Berliner und Brandenburger Oberschulen.<br><br>" +
          "Die Jugend von heute wird in der Zukunft alltäglich mit dem Klimawandel auseinandersetzen müssen. Nur wer die wissenschaftlichen Hintergründe versteht, " +
          "kann überzeugend argumentieren und nachhaltig handeln. Die Schüler*innen erfahren, wie sie die Energiewende in Deutschland mitgestalten und realisieren können.<br><br>" +
          "Prof. Dr. Harald Lesch eröffnet die Veranstaltung mit einem Vortrag zum Thema Klimawandel. Dr. Cecilia Scorza-Lesch stellt den Klimakoffer vor und zeigt die damit möglichen Experimente, die für den Unterricht konzipiert wurden.<br><br>"
    }
  ],
  "linkBox": [
    {
      "text": "", // high
      "image": "assets/img/logos/Instagram_logo_2022.svg.png",
      "url": "https://www.instagram.com/p/CuG8UuXA1S9/?hl=de"
    }
  ],

  "entries":/* [{ "streamname": "CD6oL-2kE1g" }] */[
    {
      "streamname": "792ca09d-890a-4203-b823-e1d65b1f2edc", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "c2f00a2d-b11d-4157-961e-072f7bfe87db", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "b00940d9-8c2b-485c-a960-2f22309ceaa9", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "debug": false,
  "chat": false
});

/**
 * 2023 Lange Nacht der Wissenschaften -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "LNdW",
  "titleTop": "Lange Nacht der Wissenschaften",
  "title": "Übertragung aus dem Lehrfilmstudio",
  "image": "assets/img/backgrounds/2023LNdW/LNdW01.JPG",
  "customStyle": `
      body {   font-family: BHT-Case; }
      
      body:after { 
               position:absolute; 
               width:0; 
               height:0; 
               overflow:hidden; 
               z-index:-1; 
               content:url(assets/img/backgrounds/2023LNdW/1lfs-normal.JPG) 
               url(assets/img/backgrounds/2023LNdW/2lfs-white.JPG) 
               url(assets/img/backgrounds/2023LNdW/3lfs-green.JPG) 
               url(assets/img/backgrounds/2023LNdW/4lfs-green_blue.JPG) 
               url(assets/img/backgrounds/2023LNdW/5lfs-blue.JPG) 
               url(assets/img/backgrounds/2023LNdW/6lfs-blue_red.JPG) 
               url(assets/img/backgrounds/2023LNdW/7lfs-red.JPG)
               url(assets/img/backgrounds/2023LNdW/8lfs-red_green02.JPG);
             }
                   
      #titleSub {
            background-color: #213670ab;
            font-family: BHT-Case;
            font-size: 18px;
            color: #ffffffc4;
            }
            
      #titleTop { 
            background-color: #000312;
            font-family: BHT-CaseMicro;
            color: white;
            font-size: 24px
              }
      
      #error   { display:none; }
   
      #main    {
            -webkit-transition: fadeBackground 1800s  infinite;
            -moz-animation: fadeBackground 1800s  infinite;
            -o-animation: fadeBackground 1800s  infinite;
            animation: fadeBackground 1800s  infinite;
            }
                   
      @keyframes fadeBackground {
            0%, 100%    { background-image: url("assets/img/backgrounds/2023LNdW/2lfs-white.JPG"); background-position: center; }
            13%         { background-image: url("assets/img/backgrounds/2023LNdW/3lfs-green.JPG"); background-position: center; }
            26%         { background-image: url("assets/img/backgrounds/2023LNdW/4lfs-green_blue.JPG"); background-position: left; }
            39%         { background-image: url("assets/img/backgrounds/2023LNdW/5lfs-blue.JPG"); background-position: right; }
            52%         { background-image: url("assets/img/backgrounds/2023LNdW/6lfs-blue_red.JPG"); background-position: center; }
            75%         { background-image: url("assets/img/backgrounds/2023LNdW/7lfs-red.JPG"); background-position: left; }
            88%         { background-image: url("assets/img/backgrounds/2023LNdW/8lfs-red_green02.JPG"); background-position: right; }
            }
          
          @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
             transform: translateX(0%);
          }
      }    
             
      @media screen and (min-width:1400px) {
            #main{ background-size: 120%; }
            }
            
      
      body, #page, #header, #footer{
            background-color: black;
      }
      
      #header img, #partner-box a img{
           filter: invert(100%);
      }
      
      #footer{ 
            background-image: url("assets/img/backgrounds/sternenhimmel.jpg"); 
            background-repeat: no-repeat;
            background-size: cover;
            font-size: 11px;
      }
      
      .partnerBoxImages {
            height: 3em;
      }
      
      .textFieldTitle {
            flex: 0;
            font-size: 21px;
            color: white;
            margin-bottom: 15px;
      }
      
      #textField{
            width: 90%;
            border-radius: 10px;
            max-width: 1080px;
      }
      .textFieldContent{
            flex: auto;
            width: 99%;
            height: 200px;
            text-wrap: balance;
            flex-direction: row;
            flex-wrap: wrap;
            overflow-y: scroll;
            justify-content: space-between;
      }
      
      
      .textFieldContent::-webkit-scrollbar{
            width: 0.5em;
            background-color:  #000b1200;
      }
      
      .textFieldContent::-webkit-scrollbar-thumb{
            background-color:  #a7a7a7a3;
            max-width: 10px;
            border-radius: 10px;
      }
      
      .textFieldContent::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
      border-radius: 10px;
      }
      
      .textBox_header{ 
            background-color: #00000000; 
            color: #ff8f00;
            font-style: normal;
      }
      
      .textBox{
            opacity: 0.9;
            max-width: 250px;
            min-width: 200px;
            background-color: #00022bba;
            border-style: solid;
            border-color: #2b00ad61; 
      }
      
      .textBox:first-child{
            border-style: solid;
            border-color: #1bff00;
            background-color: #1bff0085;
            color: #25ff00;
      }
      
      .textBox:first-child .textBox_header, .textBox:last-child .textBox_header{
            color: white;
      }
      
      .textBox:first-child .textBox_text{
            color: #434343;
            background-color: #0aff1199;
      }
      
      .textBox:last-child{
            border-style: solid;
            border-color: #ff0000;
            background-color: #ff0000b5;
            color: #ff0000;
      }
      
      .textBox:last-child .textBox_text{
            color: #434343;
            background-color: #ff00008f;
      }
      
      .textBox:hover{
            opacity: 1;
      }
      
      .textBox_text{
            background-color: #06007973;
            border-radius: 5px;
            min-height: 80px;
            text-align: center;
            justify-content: center;
            color: #8fbbff;
            margin: 4px;
      }
      .textBox_text a, .textBox_text a:visited, .textBox_text a:active{
            color: #fbff02;
      }
      .textBox_text a:hover{
            color: #8ffb00;
      }
      
      .linkButton{
            color: rgb(189 187 187);
      }
      
      #partner-box a{ background-color: black; }
      .linkButton{ background-color: #000b12b3; }
      a:link { color: #d5d5d5;}
      a:hover{ color: #0092ff; }
}
            `,
  "partnerBox": [
    {
      "text": "MediaBox", // high
      "image": "assets/img/logos/mediabox-small-logo.jpg",
      "url": "https://www.bht-berlin.de/digitale-medien"
    },
    {
      "text": "LNdW", // high
      "image": "assets/img/logos/lndw_logo_N8_weiß.jpg",
      "url": "https://www.bht-berlin.de/lndw"
    }],
  "textFields" : [
    { "title": "Programm am 17.06.23 von 17:00 bis 00:00 Uhr"
    },
    { "header": "<p style=''>17:00</p>&nbsp; - &nbsp;Start",
      "text": "Die Tore des LFS werden geöffnet"
    },
    { "header": "17:30 - Begrüßung",
      "text": "Prof. Dr. Strzebkowski & Herr Antoniazzi"
    },
    { "header": "17:40 - Einblick",
      "text": "Lassen Sie sich von Uns hinter die Kulissen führen"
    },
    { "header": "18:00 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Prof. Dr. Sven Tschirley"
    },
    { "header": "18:30 - &nbsp;<p style='color:white;'>Interview</p>",
      "text": "Prof. Dr-Ing. Ivo Boblan"
    },
    { "header": "18:45 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Dipl.-Ing. Tasso Mulzer"
    },
    { "header": "19:00 - &nbsp;<p style='color:white;'>Interview</p>",
      "text": "Prof. Dipl.-Kfm. Kai Kummert"
    },
    { "header": "19:20 - &nbsp;<p style='color:white;'>Interview</p>",
      "text": "Erik Bussek"
    },
    { "header": "19:30 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Prof. Dr. Ilona Buchem"
    },
    { "header": "20:00 - &nbsp;<p style='color:white;'>Interview</p>",
      "text": "Ralf Zehr & Frau - RBB 88.8"
    },
    { "header": "20:20 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Dr. Justinus Pieper"
    },
    { "header": "20:35 - MOLLY",
      "text": "<a href='https://player.bht-media.de/index.html?channel=molly' target='_blank'>Lecture Streaming & Recording - Dual View Base</a>"
    },
    { "header": "21:00 - &nbsp;<p style='color:white;'>Interview</p>",
      "text": "Elli Strauven-Dejean & Alexander Götz"
    },
    { "header": "21:15 - &nbsp;<p style='color:white;'>Interview</p>",
      "text": "Mustafa Tevik Lafci"
    },
    { "header": "21:30 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Rainer Kirchknopf - ZDF"
    },
    { "header": "21:45 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Marie Hennings"
    },
    { "header": "22:00 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Friederike Fröbel"
    },
    { "header": "22:15 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Prof. Dr. Steffen Prowe"
    },
    { "header": "22:30 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Prof. Dr. Florian Schindler & Wolfgang Hahn"
    },
    { "header": "22:50 - &nbsp;<p style='color:white;'>Interview</p>",
          "text": "Lukas Runge"
    },
    { "header": "23:20 - Resüme",
      "text": "Eine Zusammenfassung des Tages"
    },
    { "header": "23:40 - Abschied",
      "text": "Abmoderation des Events"
    },
    { "header": "00:00 - Ende",
      "text": "Das LFS geht ins Wochenende"
    },
  ],
  "linkBox": [
    {
      "text": "Lange Nacht der Wissenschaften", // high
      "image": "",
      "url": "https://www.bht-berlin.de/lndw"
    }
  ],
  "entries":[
    {
      "streamname": "b76a9d3e-6274-45fe-8cf2-3994e406901b", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "9e7f5844-0c33-473c-8cf0-d36c7b795d20", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "8ae15759-5625-4cdd-ac25-34386019458d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  /**"dual": [
    {
      "streamname": "9c8d279d-30f1-4702-b3ea-01ae2390091a", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "d66675bd-7a79-4f18-af77-3e985ea4e060", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "8fc6817d-7a74-4a05-bccf-c06c41525282", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],*/
  "debug": false,
  "chat": false
});

/**
 * 2023 Molly -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "molly",
  "titleTop": "Molly Live Stream aus dem LFS",
  "title": "Dies ist ein Live Stream vom Molly",
  "image": "assets/img/backgrounds/2023Molly/MollyBoxSmall.jpg",

   "customStyle": `
   #error   { display:none; }
   -.linkButton:first-child{
        content: image-set("assets/img/logos/mediabox-big-logo.jpg");
        height: 90%;
   }
   #footer{ font-size: 11px; }   
   `,
   "linkBox": [
   {
      "text": "Lange Nacht der Wissenschaften", // high
      "image": "",
      "url": ""
    }
   ],
  "entries":[
    {
      "streamname": "5cd4adca-1413-489c-92dd-30255a2ce8f4", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "d971f681-3c22-4a15-a875-bb47b64c02d0", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "34208b7d-ad27-4784-9102-eacbc94ceb00", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "48c8a32f-778a-496e-9f91-93be94b4fe8c", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "857a2fca-5bcc-48e9-8f4e-8a98d935356a", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "39f8e63c-f917-4f09-a073-9cb0e738c219", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "debug": false,
  "chat": false
});

/**
 * 2023 Stream Star Trek Vorlesung ------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "startrek",
  "titleTop": "12. Intergalaktische Gastvorlesung",
  "title": "Wissenschaft und Science-Fiction mit Captain Zitt",
  "image": "",
  "debug": false,
  "chat": false,
  "customStyle": `
  
  body, #footer{ background-color: #00000075 }
  
  #header{ 
  background-color: black;
  height: 70px;
  margin: 0;
  }
  
  #beuth-logo {
    padding: 12px;
}

  #footer{
    font-family: 'Impact', serif;
    letter-spacing: 0.05em;
    font-size: 12px;
  }
  
  #footer a{
    color: #9795fb;
  }
  #footer a:hover {
    color: red;
  }
  #footer a:visited {
  color: #ed9692;
  }
  #titleTop{
    font-family: 'Startrekfuture', serif;
    font-size: 60px;
    margin-left: 1.3em;
    padding-right: 1.3em;
    border-top-left-radius: 20px;
    background-color: #00000000;
    color: white;
  }
  #titleSub{
    font-family: 'Sterilict', serif;
    color: black;
    font-style: italic;
    background-color: rgb(204 204 254);
    margin-top: 0.3em;
    font-size: 18px;
    letter-spacing: 0.1em;
  }
  
  #subBackground{
  padding-bottom: 0px;
  width: auto;
  }
  
  #playerSubtitle {
    display:none;
    }
  
  #contentBox{
    width: 100%;
  }
  #content{ 
    width: 80%;
  }
  
  #contentPlayer{
     margin-top: 1em;
     margin-bottom: 1em;
  }
  
  #linkBox{
  display: none; 
  }
  
  .linkButton{
    background-color:#ff000000;
  }
  .linkButton img {
    height: 200px;
  }
  #partner-title{
    color: #ff000000 !importent;
  }
  
  body{
    font-family: 'Sterilict', serif;
  }
  
  #beuth-logo, #beuthbox-logo{
     -webkit-filter: invert(1);
    filter: invert(1);
  }
 
  
  #textField{
    width: 90%;
    display: block;
    background-color: #00000000;
  }
  
  #h5live-playerDiv1{
    background: black url("assets/img/startrek/offline1.jpg") ;
    background-size: cover;
    background-position: 50% 50%;
  }
  
  #main{ background-color: #00000000; }
  
  #page{ position: absolute; }
  
  /* MENU -----------------------------------------*/
  .textBox{
    Display: flex;
    font-family: "Impact", sans-serif;
    text-transform: uppercase;
    margin: 10px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
  }
  
  .textBox:first-child{
    padding:0;
    font-size: 1.5em;
    align-items: flex-end;
    border-bottom-left-radius: 5em;
    border-top-left-radius: 5em;
    background-color: #98ccfe;
  }
  
  .textBox:first-child .textBox_text{
    text-align: right;
  }
  
  .textBox .textBox_header{
    display: none;
    
  }
  .textBox:nth-child(2), .textBox:nth-child(5){
    background-color: #6598fe;
    border-radius: 0;
    flex: initial;
    writing-mode: vertical-rl;
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    align-items: flex-end;
  }
  
  
  .textBox:nth-child(3){
    margin-right: 0;
    flex-direction: column;
    background-color: yellow;
    background-color: #f0f8ff00;
  }
  
  .textBox:nth-child(3) .textBox_text{
    text-align: right;
    letter-spacing: 0.2em;
    color: white;
  }
  
  .textBox:nth-child(4){
    flex-direction: column;
    background-color: #00000000;
  }
  
  .textBox:nth-child(4) a{
    text-decoration: none;
    letter-spacing: 0.2em;
    font-size: 1em;
    font-style: normal;
    color: #fd9800;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  .textBox:nth-child(4) .textBox_header:hover, .textBox:nth-child(4) .textBox_text:hover{
    background-color: red;
  }
    
  .textBox:nth-child(4) .textBox_header{
    display: flex;
    text-align: center;
    flex-direction: column;
    background-color: #ffea9f;
    border-radius: 0;
    flex: 1;
    margin-bottom: 0.5em;
  }

  .textBox:nth-child(4) .textBox_text{
    background-color: #fd9800;
    flex-direction: column;
    flex: 1;
    margin-top: 0.5em;
  }
  
  .textBox:nth-child(4) .textBox_text a{
    display: flex;
    color: #ffea9f;
  }
  
  .textBox:last-child{
    background-color: #336799;
    border-bottom-right-radius: 5em;
    border-top-right-radius: 5em;
    align-items: flex-start;
    font-size: 1.5em;
  }
  
  .textBox:last-child .textBox_text{
    text-align:left;
  }
  
  
  .textFieldTitle {
  flex: 0.4;
  padding-top: 0;
  border-radius: 5px;
  overflow: hidden;
  }
  
  .textFieldContent{
    overflow: inherit;
    overflow-x: inherit;
    flex: 0;
  }
/* Partnerbox ---------------------------------------------------*/
  
  #partner-title {
    display: none;
}
  
/* Scroll Text Animation ---------------------------------------------------*/
  #scroll-text {
  max-width: 988px;
  color: white;
  margin-bottom: 2em;
  margin-top: 0.5em;
  text-align: center;
  letter-spacing: 0.15em;
}
/* Background Animation -------------------------------------------------- */
@keyframes move-background {
    0% {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    50% {
        -webkit-transform: translate3d(500px, 0px, 500px);
    }
    100% {
        -webkit-transform: translate3d(1000px, 0px, 1000px);
    }
}
@-webkit-keyframes move-background {
    0% {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    50% {
        -webkit-transform: translate3d(500px, 0px, 500px);
    }
    100% {
        -webkit-transform: translate3d(1000px, 0px, 1000px);
    }
}
@-moz-keyframes move-background {
    0% {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    50% {
        -webkit-transform: translate3d(500px, 0px, 500px);
    }
    100% {
        -webkit-transform: translate3d(1000px, 0px, 1000px);
    }
}
@-webkit-keyframes move-background {
    0% {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    50% {
        -webkit-transform: translate3d(500px, 0px, 500px);
    }
    100% {
        -webkit-transform: translate3d(1000px, 0px, 1000px);
    }
}

@keyframes star {
    0% {opacity: 0.7; }
    80% {opacity: 0;}
    100% { opacity: 0.7; }
}

.background-container{
    position: fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
}

.stars{
  background: black url("assets/img/startrek/weltraum.jpg") ;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 0;
}
.clouds {
    width:200%;
    height: 100%;
    background: transparent url("assets/img/startrek/weltraumWolken.png") repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    -moz-animation:move-background 50s linear infinite;
    -ms-animation:move-background 50s linear infinite;
    -o-animation:move-background 50s linear infinite;
    -webkit-animation:move-background 50s linear infinite;
    animation:move-background 50s linear infinite;
}
.clouds2 {
    width:200%;
    height: 100%;
    background: transparent url("assets/img/startrek/weltraumWolken2.png") repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    -moz-animation:move-background 25s linear infinite;
    -ms-animation:move-background 25s linear infinite;
    -o-animation:move-background 25s linear infinite;
    -webkit-animation:move-background 25s linear infinite;
    animation:move-background 25s linear infinite;
}
#scroll-text a:link, #scroll-text a:visited{
    color: #fd9800;
    text-decoration: none;
}
  
   `,

  "textFields" : [
    { "title": "<div id=\"scroll-text\">\n" +
          "Dozent Hubert Zitt von der Hochschule Kaiserslautern <br>" +
          "erlaeutert, ob die technischen Visionen " +
          "aus der Fernsehserie Star Trek in Zukunft " +
          "umsetzbar sind. <br><br>" +
          "Fuer zusaetzliche informationen besuchen Sie bitte die <a href='https://projekt.bht-berlin.de/nsh/wissenschaft-science-fiction' target='_blank'>Offizielle Veranstaltungsseite.</a><br>" +
          "</div>"
    },
    { "header": "",
      "text": "23.11.<br>2023<br><br><br><br>15:00<br>Uhr"
    },
    { "header": "",
      "text": "-299102.4"
    },
    { "header": "",
      "text": "Ingeborg-Meising-Saal (BHT)<br><br><br>Haus Grashof <br><br><br>Luxemburger Str. 10<br> 13353 Berlin"
    },
    { "header": "<a href='https://projekt.bht-berlin.de/fileadmin/projekt/nsh/Dokumente/Bordkarte_2023.pdf' target=\"_blank\">Star Trek Bordkarte</div>",
      "text": "<a href='https://www.startrekvorlesung.de/crew' target=\"_blank\">Dr.-Ing. Hubert Zitt</div>"
    },
    { "header": "",
      "text": "-299102.16"
    },
    { "header": "",
      "text": "Ende <br><br><br><br><br> 17:00 <br> Uhr"
    },
  ],
  /*"linkBox": [
      {
      "text": "Star Trek Vorlesung",
      "image": "",
      "url": ""
      },
  ],*/
  "partnerBox": [
    {
      "image":"assets/img/logos/startrek/ZITT_ScienceFiction.png",
      "url": "https://www.startrekvorlesung.de"

    }],

  "entries":[
    {
      "streamname": "52a5e47e-fb1f-440e-bd2b-0f02aaaf948f", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "c16bf2b2-03b8-4189-ab09-a5906f10291e", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "81b38d0b-3092-4e76-a5cf-90157242eec7", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [],
});

/**
 * 2023.4.29 Vorstellung Kandidaten Präsidium -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "praesidium",
  "titleTop": "Wahlen zum Präsidium der Berliner Hochschule für Technik",
  "title": "in der Akademischen Versammlung am 13 Juli 2023",
  "image": "assets/img/backgrounds/2023praesidium.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            #textField {
              flex-wrap: wrap;
              min-width: 50px;
              width: 80%;
              max-width: 1020px;
              background-color: #ffffffe3;
              border-radius: 10px;
              padding-bottom: 20px;
            }
            
            #footer{
              font-size: 0.70em;
            }
            
            .textFieldContent {
            flex: auto;
              width: 99%;
              text-wrap: balance;
              flex-direction: row;
              flex-wrap: wrap;
              overflow-y: auto;
              justify-content: center;
            }
    
            .textBox {
              display: flex;
              flex-direction: column;
              background-color: rgb(255 255 255 / 0%);
              min-width: 150px;
              max-width: 150px;
            }
            
            .textBox_header{
              padding: 0;
            }
            
            .textBox_header img{
              width: 100%;
              height: auto;
              border-top-right-radius: 10px;
              border-top-left-radius: 10px;
            }
            
            .textBox_text{
              display: flex;
              justify-content: flex-start;
              background-color: #0089ff40;
              height: 70px;
              border-bottom-right-radius: 10px;
              border-bottom-left-radius: 10px;
              flex-direction: column;
            }
            
            .textBox_text h6{
            padding-bottom: 5px;
            }
            
            .linkButton {
              background-color: #ffffffe3;
            }
            
            `,
  "linkBox": [
    {
      "text": "BHT Präsidium",
      "image": "",
      "url": "https://www.bht-berlin.de/praesidium"
    },
    {
      "text": "BHT Zentraler Wahlvorstand",
      "image": "",
      "url": "https://www.bht-berlin.de/zwv"
    }],
  "textFields" : [
    { "title": "Kandidaten für die Wahl zum Präsidium"
    },
    { "header": "<img src='assets/img/foto/2023wahl/christine-edmaier.jpg'>",
      "text": "<h6>Präsident</h6> <p>Christine Edmaier</p>"
    },
    { "header": "<img src='assets/img/foto/2023wahl/Dr-Julia-Neuhaus.jpg'>",
      "text": "<h6>Präsident</h6> <p>Dr. Julia Neuhaus</p>"
    },
    { "header": "<img src='assets/img/foto/2023wahl/wolfgang-Kesseler.jpg'>",
      "text": "<h6>Präsident</h6> <p>Prof. Dr. Wolfgang Kessler</p>"
    },{ "header": "<img src='assets/img/foto/2023wahl/prof-dr-rainer-schneider.jpg'>",
      "text": "<h6>1 Vizepräsident</h6> <p>Prof. Dr. Reiner Schneider</p>"
    },
    { "header": "<img src='assets/img/foto/2023wahl/ripphausen-lipa.jpg'>",
      "text": "<h6>weiterer Vizepräsident</h6> <p>Prof. Dr. Heike Ripphausen-Lipa</p>"
    },
    { "header": "<img src='assets/img/foto/2023wahl/Joachim-Villwock.jpg'>",
      "text": "<h6>weiterer Vizepräsident</h6> <p>Prof. Dr. Joachim Villwock</p>"
    },
  ],
  "entries":[
    {
      "streamname": "6c123d94-1c7a-4c5f-a3f8-fed22ac8517f", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "2a17ab90-d706-4e7c-bec3-8deb74dcc4e3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "d9e7bc9f-a523-483c-8568-a9909099b152", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "73ebfeef-d517-4d19-8a2f-a02326e10fb0", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "f9774b96-285f-4948-bd53-998c6df48997", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "f7d14388-e107-4257-9316-48375680089d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 * 2023.3.30 Augenoptiker Event -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "augenoptik",
  "titleTop": "Jahreshauptversammlung 2023",
  "title": "Förderverein Augenoptiker/ Optometrie der Berliner Hochschule für Technik e.V.",
  "image": "assets/img/backgrounds/2023-Augenoptiker-Hintergrund02.jpg",
  "debug": false,
  "chat": false,
  /*"partnerBox": [
    {
      "image":"",
      "url": ""
    }],*/
  "linkBox": [
    {
      "text": "Studiengang Augenoptik/Optometrie",
      "image": "",
      "url": "https://studiengang.bht-berlin.de/ao/"
    }],
  "entries":[
    {
      "streamname": "6c123d94-1c7a-4c5f-a3f8-fed22ac8517f", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "2a17ab90-d706-4e7c-bec3-8deb74dcc4e3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "d9e7bc9f-a523-483c-8568-a9909099b152", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "73ebfeef-d517-4d19-8a2f-a02326e10fb0", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "f9774b96-285f-4948-bd53-998c6df48997", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "f7d14388-e107-4257-9316-48375680089d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 * 2023.2.11 Facility Management D352L -------------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "facility-management",
  "titleTop": "Facility Management",
  "title": "Eine Vorlesung aus dem Raum D352L",
  "image": "assets/img/backgrounds/klassenraum01.jpg",
  "debug": false,
  "chat": false,
  "linkBox": [
    {
      "text": "Labor Facility Management",
      "image": "",
      "url": "https://www.bht-berlin.de/labor/detail/FAMA"
    }],
  "entries":[
    {
      "streamname": "8a490c5d-82ca-419e-82bf-8be14d6be3b4", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "f8a1766e-eb2d-4a8f-ab54-c25b932bad9e", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "fd309ca8-a292-4826-b205-804d9a2cc42e", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "ffe35b4d-b1a1-4531-a836-48da7009333a", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "5e9a18d7-22f0-437c-b913-6f98b4c6c1d2", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "78c6948a-f15e-4ef3-b6ea-bd1ad5059fa3", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// BHT Personalversammlung --------------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "bht-pv",
  "title": "BHT Personalversammlung",
  "entries": [
    {
      "streamname": "417d19bb-4740-487b-996b-8736bba7f807", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "edb9b776-1785-4d28-9a2c-c3d17125784f", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "fd9e264d-eae5-4304-8905-f50f20688bbc", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
});

/**
 * 2022 Stream für den Raum D338: Thema anpassbar -------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "Berufungskommission",
  "titleTop": "Berufungskommission Architektur 1106",
  "title": "Fachbereich IV",
  "image": "",
  "debug": false,
  "chat": false,
  /*"partnerBox": [{}],*/
  "linkBox": [{
      "text": "Fachbereich IV (Architektur)",
      "image": "",
      "url": "https://www.bht-berlin.de/iv"
    }],
  "entries":[
    {
      "streamname": "9ec2fb7b-b58f-4f4f-8b83-a6a4f93f91b5", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "64ece552-8090-40c2-a309-565a627ec9c9", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "339fdb2b-8a47-476c-8344-82df85b48cb0", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "660432e0-d921-4cd5-a263-a6b407d876d6", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "5f41f116-01d1-4cab-91d7-7c61e4ee140d", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "db04095b-f04b-4bcf-80d4-4a49774220e9", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// 2022 Lange Nacht der Wissenschaften ----------------------------------------------------------------------------------------------------
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
  "entries":[
    {
      "streamname": "...", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "...", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "...", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// 2022 BHT FabLab Stream (24.05.2022) ------------------------------------------------------------------------------------------------------------
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
  "entries":[
    {
      "streamname": "6c123d94-1c7a-4c5f-a3f8-fed22ac8517f", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "2a17ab90-d706-4e7c-bec3-8deb74dcc4e3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "d9e7bc9f-a523-483c-8568-a9909099b152", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "73ebfeef-d517-4d19-8a2f-a02326e10fb0", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "f9774b96-285f-4948-bd53-998c6df48997", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "f7d14388-e107-4257-9316-48375680089d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// 2022 Digitalisierungs Kommission ----------------------------------------------------------------------------------------------------
streams.push({
  "tag": "dk-2022",
  "titleTop": "Digitalisierungs Kommission",
  "title": "BHT Berlin",
  "image": "assets/img/backgrounds/dk-background.jpg",
  "debug": false,
  "chat": false,
  "customStyle": `
            
            `,
  "entries":[
    {
      "streamname": "4a83c576-a5d0-4594-893a-0dfbba568f1b", // high
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
 * 2022 Akademische Versammlung ------------------------------------------------------------------------------------------------------------------
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
  "linkBox": [
    {       "text": "Akademische Versammlung",
      "image": "",
      "url": "https://www.bht-berlin.de/av"
    }],
  "entries":[
    {
      "streamname": "a5ffa698-79f0-405f-8af6-b51374126d4e", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "7af514ba-81ac-42e3-9716-219f49d2fbf1", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "b7e10c4f-1e9d-4f20-9175-756294b251ca", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "b677ad82-452e-4085-8696-21f393f8ed15", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "64facedf-f0bc-4da9-8599-0e38d311d687", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "f30ceb3e-fd16-4adc-bebe-ef7e326d5153", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// 2022 BHT Young Scientist Minds (28.04.2022 - 07.07.2022) ------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "young-scientist-minds",
  "titleTop": "BHT Young Scientist Minds",
  "title": "Hochschulöffentliche Vortragsreihe zur Vorstellung von Forschungsprojekten",
  "image": "assets/img/backgrounds/BHT-Kartenbild-middle.jpg",
  "debug": false,
  "chat": false,
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
    }],/**
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
      "streamname": "6c123d94-1c7a-4c5f-a3f8-fed22ac8517f", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "2a17ab90-d706-4e7c-bec3-8deb74dcc4e3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "d9e7bc9f-a523-483c-8568-a9909099b152", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "73ebfeef-d517-4d19-8a2f-a02326e10fb0", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "f9774b96-285f-4948-bd53-998c6df48997", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "f7d14388-e107-4257-9316-48375680089d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

/**
 * 2021.10.28 FSI Stream -------------------------------------------------------------------------------------------------------------------------------------
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
  "entries":[
    {
      "streamname": "ff91d0ee-1c8f-42ff-8ec9-9691e2265a96", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "ac68f75a-b13b-4d06-813c-b5c8db11a1c2", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "a368dc5c-b194-4aeb-8023-da1b4cdb674a", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "64b4c9d3-e3ac-4d85-aebb-342f1a63c8f4", // high
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
 * 2021.9.11 Wissenschaftspreis -------------------------------------------------------------------------------------------------------------------------
*/
streams.push({
  "tag": "Rupp+Hubrach-Wissenschaftspreis",
  "titleTop": "Festveranstaltung zur Verleihung des Rupp+Hubrach-Wissenschaftspreises",
  "title": "Virtual-Reality-basierte Untersuchung des Orientierungsverhaltens bei Glaukom",
  "image": "assets/img/backgrounds/R+H_backgroundWHITE2021.jpg",
  "debug": false,
  "chat": false,
  "linkBox": [
    {
      "text": "",
      "image": "assets/img/logos/logoR+H2021.png",
      "url": "https://www.rh-brillenglas.de/"
    }],
  "entries":[
    {
      "streamname": "7e9ddf0e-8f80-40c0-94dd-a86650b280bf", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "e51c5a76-8a5d-4564-ba89-63ef57db3f33", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "62c3d63a-c573-4af6-a17f-59f6485290ce", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "98b8cbec-7f39-47e6-a2bb-27cc8253bbc8", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "6158558c-db77-4c8b-a778-585cad9dd2f3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "1ec9da3e-4af2-4a62-9649-77a91bfb2001", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// 2021 Akademische Versammlung ------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "bht-av",
  "titleTop": "Akademische Versammlung 2021",
  "title" : "BHT Berlin",
  "linkBox": [{
    "text": "Akademische Versammlung",
    "image": "",
    "url": "https://www.bht-berlin.de/av"
  }],
  "entries": [
    {
      "streamname": "73b5dc75-8e97-4d1d-99ca-19a78c89094d", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "2378724c-3e04-4791-9b1c-da950d4287cc", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "af3b7c05-5fee-4d91-bd7a-f07c961e693d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]

});

/**
 * 2021 Akademischer Senats Sitzung ------------------------------------------------------------------------------------------------------------------
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
      "streamname": "579ebd64-70cb-410e-8462-2e3defd6a0aa", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "0925f6a9-36a4-402b-abee-cfe6518a7212", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "daa8062e-2239-4c12-9242-6b2359d8cc72", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "4abe7684-3fb2-4a1d-a632-5de64acf1e85", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "a30af27d-fdd2-4f5a-b725-40f3e2f846fd", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "40f4036c-14fc-4de9-89d5-dc237ce69da5", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
});

// 2021 getreide-informationstagung ------------------------------------------------------------------------------------------------------------------------------
streams.push({
  "tag": "getreide-informationstagung17Juni2021",
  "titleTop": "50. Wissenschaftliche Informationstagung am 17. Juni 2021",
  "title": "Berlin-Brandenburgische Gesellschaft für Getreideforschung e.V.",
  "image": "https://player.bht-media.de/assets/img/getreidetagung-background-2.jpg",
  "entries": [
    {
      "streamname": "67bd29c7-c1b8-46a2-9d1c-56c4b02ca2cb", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "1a4cc4c6-ec8d-42de-88d6-c6740e9c6901", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "236d8f30-fe9a-4991-8151-24e7bb4db882", // low
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
      "streamname": "a98c3eeb-1058-4153-8eaa-931801734485", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "de125e6c-5596-4e83-bebd-96a8d942977d", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 25 }
    },
    {
      "streamname": "872e10ec-7028-4650-afa2-145e07178859", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }
  ]
});

/**
* 2021.11.24 Personalversammlung -----------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "Personalversammlung",
  "titleTop": "Personalversammlung",
  "title": "24.11.2021",
  "image": "",
  "debug": false,
  "chat": true,
  "entries":[
    {
      "streamname": "6d06f825-ddea-4f04-86d3-46ad5fca4fe4", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "c2825716-2819-462e-bf2d-a965d4d74a63", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "aac9f599-cc04-478f-b3b1-03e7d6fb75fan", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }]
});

/**
 * 2021 Planet [A]rch (Info Page ohne Stream) -----------------------------------------------------------------------------------------------------
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
 * 2021 Roberts Stream - usability-engineering --------------------------------------------------------------------------------------------------------------------------------
 */
streams.push({
  "tag": "usability-engineering",
  "titleTop": "Human-Computer Interaction",
  "title": "Lehrveranstaltung von Prof. Dr. Robert Strzebkowski",
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
    
            `,
  // ---------------------------- LR-Wagen 01 ------------------------------------ //
  "entries":[
    {
      "streamname": "6c123d94-1c7a-4c5f-a3f8-fed22ac8517f", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "2a17ab90-d706-4e7c-bec3-8deb74dcc4e3", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "d9e7bc9f-a523-483c-8568-a9909099b152", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "73ebfeef-d517-4d19-8a2f-a02326e10fb0", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "f9774b96-285f-4948-bd53-998c6df48997", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "f7d14388-e107-4257-9316-48375680089d", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
    /**{ ---------------------------------------------- Stream IDs für diesen Kurs -----------------------------------------------
      "streamname": "528f160c-22a6-4b0e-a401-9bef3ab71f9c", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "fc3c281b-413d-4c78-9209-6d4efcb2596a", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "90787ec7-4479-4a0b-b0e6-06caae42e24a", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "8d3719a1-7c55-447a-b1b6-0f400c491083", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "efb77292-33c3-4b0c-bf95-4b1160f4d319", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "dc02b232-b889-4155-9bc3-7dd4bce6f093", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],**/
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
      "streamname": "1d31aa1a-c7f8-4316-8103-2b72d16a3284", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "c0547d00-ac3d-4335-8021-19ec0d1ce20d", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "cd1416b0-f6c5-4166-91a6-ed5d43f2f3ac", // low
      "info": { "bitrate": 800, "width": 640, "height": 360, "framerate": 25 }
    }],
  "dual": [
    {
      "streamname": "a13d0c6d-f9f3-49d8-9101-d4d05c14ce03", // high
      "info": { "bitrate": 3000, "width": 1280, "height": 720, "framerate": 25 }
    },
    {
      "streamname": "3227ab13-1363-42cf-ad75-23f81e566c32", // medium
      "info": { "bitrate": 1200, "width": 852, "height": 480, "framerate": 30 }
    },
    {
      "streamname": "534470a6-356b-4269-8dc9-0568a3ba21be", // low
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
          "image": "data:image/png;base64,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",
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
