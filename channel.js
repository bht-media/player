// getChannelConfig
// get url href parameter "?channel=XXX"
// and sets player config and title

// this is an ABR config based on
// ingest stream "RBJ00-ZxYi1"
// 3 profiles: passthrough 1280x720 3M, 1280x720 1.2M, 852x480 800k
var configSource1 = {
  entries: [
    {
      index: 0,
      label: 'stream 1',
      tag: '',
      info: {
        bitrate: 3000,
        width: 1280,
        height: 720,
        framerate: 25,
      },
      hls: '',
      h5live: {
        rtmp: {
          url: 'rtmp://localhost/play',
          streamname: 'RBJ00-ZxYi1',
        },
        server: {
          websocket: 'wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4',
          hls: 'https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        token: '',
        security: {},
      },
      bintu: {},
    },
    {
      index: 1,
      label: 'stream 2',
      tag: '',
      info: {
        bitrate: 1200,
        width: 1280,
        height: 720,
        framerate: 25,
      },
      hls: '',
      h5live: {
        rtmp: {
          url: 'rtmp://localhost/play',
          streamname: 'RBJ00-c4NS0',
        },
        server: {
          websocket: 'wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4',
          hls: 'https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        token: '',
        security: {},
      },
      bintu: {},
    },
    {
      index: 2,
      label: 'stream 3',
      tag: '',
      info: {
        bitrate: 800,
        width: 852,
        height: 480,
        framerate: 25,
      },
      hls: '',
      h5live: {
        rtmp: {
          url: 'rtmp://localhost/play',
          streamname: 'RBJ00-uSwNt',
        },
        server: {
          websocket: 'wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4',
          hls: 'https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        token: '',
        security: {},
      },
      bintu: {},
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
};

// test stream (abr)
var configSource2 = {
  entries: [
    {
      index: 0,
      label: 'stream 1',
      tag: '',
      info: {
        bitrate: 1500,
        width: 0,
        height: 0,
        framerate: 0,
      },
      hls: '',
      h5live: {
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:80/play',
          streamname: 'HX26g-NRbx9',
        },
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        token: '',
        security: {},
      },
      bintu: {},
    },
    {
      index: 1,
      label: 'stream 2',
      tag: '',
      info: {
        bitrate: 800,
        width: 0,
        height: 0,
        framerate: 0,
      },
      hls: '',
      h5live: {
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:80/play',
          streamname: 'HX26g-uVn3M',
        },
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        token: '',
        security: {},
      },
      bintu: {},
    },
    {
      index: 2,
      label: 'stream 3',
      tag: '',
      info: {
        bitrate: 200,
        width: 0,
        height: 0,
        framerate: 0,
      },
      hls: '',
      h5live: {
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:80/play',
          streamname: 'HX26g-VbAxm',
        },
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        token: '',
        security: {},
      },
      bintu: {},
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 2,
};

var config_ABR_1 = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-PedKZ',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-ncALg',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-yMGa9',
        },
      },
    },
    {
      index: 3,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-QDLBk',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

var config_MS_1 = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-W4xU1',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-M7JHe',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-Oe97A',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

var config_MS_2 = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-zh5NC',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-Cuqve',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-2mjS4',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

var config_MS_3 = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-BUlFc',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-w2ehP',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-OQA1A',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

var config_MS_4 = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-SE30h',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-cBrkW',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-WkojJ',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

var config_MS_5 = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-Hq9sw',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-PcX5R',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-jyGEG',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

var config_PV = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-efvMJ',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-0o6Hs',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-R5bs8',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};


var config_AV = {
  entries: [
    {
      index: 0,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-6CxLI',
        },
      },
    },
    {
      index: 1,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-cTKMk',
        },
      },
    },
    {
      index: 2,
      h5live: {
        server: {
          websocket:
            'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
          hls:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
          progressive:
            'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4',
        },
        rtmp: {
          url: 'rtmp://bintu-play.nanocosmos.de:1935/play',
          streamname: 'RBJ00-tGBKp',
        },
      },
    },
  ],
  options: {
    adaption: {
      rule: 'deviationOfMean2',
    },
    switch: {},
  },
  startIndex: 0,
  playback: {
    autoplay: true,
    automute: true,
    muted: false,
    flashplayer: '//demo.nanocosmos.de/nanoplayer/nano.player.swf',
  },
};

// set player config based on "channel" parameter
function getChannelConfig(config) {
  var channel = getHTTPParam('channel');
  var title = 'Beuth Box Live Stream';
  var buttonBB = true;
  if (channel == 'test1') {
    config.source.h5live.rtmp.streamname = 'CD6oL-2kE1g';
    title = 'Beuth Box Test Stream';
  } else if (channel == 'test2') {
    config.source.h5live.rtmp.streamname = 'HX26g-NRbx9';
    title = 'Beuth Box Test Stream 2';
  } else if (channel == 'bht1') {
    config.source.h5live.rtmp.streamname = 'RBJ00-IYDH9';
    title = 'Ilona Buchem / Rainer Schneider';
  } else if (channel == 'bht2abr') {
    config.source = configSource1;
    title = 'Ilona Buchem / Rainer Schneider';
  } else if (channel == 'test2abr') {
    config.source = configSource2;
    title = 'Test Stream / ABR';
  } else if (channel == 'test-abr-3') {
    config.source = config_ABR_1;
    title = 'Begrüßung der Erstsemester im Fachbereich 5';
  } else if (channel == 'asta-wahl-2020') {
    config.source.h5live.rtmp.streamname = 'RBJ00-FzI9V';
    title = 'AStA Wahl 2020';
  } else if (channel == 'b101-stream') {
    config.source.h5live.rtmp.streamname = 'RBJ00-PedKZ';
    title = 'B101 Stream';
  } else if (channel == 'media-stream-1') {
    config.source = config_MS_1;
    title = 'Media Stream 1';
  } else if (channel == 'media-stream-2') {
    config.source = config_MS_2;
    title = 'Media Stream 2';
  } else if (channel == 'media-stream-3') {
    config.source = config_MS_3;
    title = 'Media Stream 3';
  } else if (channel == 'media-stream-4') {
    config.source = config_MS_4;
    title = 'Media Stream 4';
  } else if (channel == 'media-stream-5') {
    config.source = config_MS_5;
    title = 'Media Stream 5';
  } else if (channel == 'beuth-pv-2020') {
    config.source = config_PV;
    title = 'Beuth-Personalversammlung 2020';
    buttonBB = false;
  } else if (channel == 'beuth-av-2021') {
    config.source = config_AV;
    title = 'Beuth Akademische Versammlung 2021';
    buttonBB = false;
  } else if (channel == 'brueckenkurs') {
    config.source = config_AV;
    title = 'Brückenkurs Sommersemester 2021';
    buttonBB = false;
  }

  // set "title2" element text
  document.getElementById('title2').innerText = title;
  // set Brückenkurs-Button visibility
  if(buttonBB){
    document.getElementById('bb_link').style.display = "block";
  } else {
    document.getElementById('bb_link').style.display = "none";
  }
  return config;
}
