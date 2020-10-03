
// getChannelConfig
// get url href parameter "?channel=XXX"
// and sets player config and title

var configSource1 = 
{
  "entries": [
        {
        "index": 0,
        "label": "stream 1",
        "tag": "",
        "info": {
            "bitrate": 3000,
            "width": 1280,
            "height": 720,
            "framerate": 25
        },
        "hls": "",
        "h5live": {
            "rtmp": {
                "url": "rtmp://bintu-play.nanocosmos.de/play",
                "streamname": "RBJ00-ZxYi1"
            },
            "server": {
                "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4",
                "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
            },
            "token": "",
            "security": {}
        },
        "bintu": {}
    },
    {
        "index": 1,
        "label": "stream 2",
        "tag": "",
        "info": {
            "bitrate": 1200,
            "width": 1280,
            "height": 720,
            "framerate": 25
        },
        "hls": "",
        "h5live": {
            "rtmp": {
                "url": "rtmp://bintu-play.nanocosmos.de/play",
                "streamname": "RBJ00-c4NS0"
            },
            "server": {
                "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4",
                "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
            },
            "token": "",
            "security": {}
        },
        "bintu": {}
    },
    {
        "index": 2,
        "label": "stream 3",
        "tag": "",
        "info": {
            "bitrate": 800,
            "width": 852,
            "height": 480,
            "framerate": 25
        },
        "hls": "",
        "h5live": {
            "rtmp": {
                "url": "rtmp://bintu-play.nanocosmos.de/play",
                "streamname": "RBJ00-uSwNt"
            },
            "server": {
                "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4",
                "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
            },
            "token": "",
            "security": {}
        },
        "bintu": {}
    }
  ],
    "options": {
        "adaption": {
            "rule": "deviationOfMean2"
        },
        "switch": {}
    },
    "startIndex": 0
};

function getChannelConfig(config) {
    var channel = getHTTPParam('channel');
    if (channel == "test1") {
        config.source.h5live.rtmp.streamname = "CD6oL-2kE1g";
        title = "Beuth Box Test Stream";
    } else if (channel == "test2") {
        config.source.h5live.rtmp.streamname = "HX26g-NRbx9";
        title = "Beuth Box Test Stream 2";
    } else if (channel == "bht1") {
        config.source.h5live.rtmp.streamname = "RBJ00-IYDH9";
        title = "Ilona Buchem / Strzebkowski";
    } else if (channel == "bht2abr") {
        config.source = configSource1;
        title = "Ilona Buchem / Strzebkowski / ABR";
    }

    document.getElementById('title2').innerText = title;
    return config;
}