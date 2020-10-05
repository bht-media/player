
// player.js
// nanoPlayer main functions
// startPlayer and config

var player, config;
var streamname = "CD6oL-2kE1g"; // default: test stream 

function getPlayerConfig(config) {
    config = {
        "source": {
            "h5live": {
                "server": {
                    "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream",
                    "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                    "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
                },
                "rtmp": {
                    "url": "rtmp://bintu-play.nanocosmos.de:80/play",
                    "streamname": streamname
                }
            },
            "entries": [],
            "options": {
                "adaption": {},
                "switch": {}
            },
            "startIndex": 0
        },
        "playback": {
            "autoplay": true,
            "automute": false,
            "muted": false,
            "flashplayer": "//demo.nanocosmos.de/nanoplayer/nano.player.swf"
        },
        "style": {
            "displayMutedAutoplay": true
        }
    };

    config = getNanoPlayerParameters(config);

    if (window.nanoPlayerMetricsConfig) {
        config.metrics = window.nanoPlayerMetricsConfig;
    }
    if (window.getChannelConfig) {
        config = getChannelConfig(config);
    }
    return config;
}

function startPlayer(config) {
    if (!player) {
        player = new NanoPlayer('playerDiv');
    }
    config = config || this.config;

    if (window.nanoPlayerMetricsConfig) {
        config.metrics = window.nanoPlayerMetricsConfig;
    }

    player.setup(config).then(function (conf) {
        try {
            conf = JSON.stringify(conf);
        } catch (err) { }
        log('setup ok: ' + conf);
    }, function (error) {
        if (error.message) {
            error = error.message;
        } else {
            try {
                var err = JSON.stringify(error);
                if (err === '{}') {
                    err = error.message;
                }
                error = err;
            } catch (err) { }
        }
        log('Setup Error: ' + error);
        alert(error);
        //document.getElementById('status').innerText = 'Setup Error: ' + error;
    });
}				

function initPlayer() {
    config = getPlayerConfig(config);
    startPlayer(config);
    console.log(config);
}
