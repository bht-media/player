// nanoplayer-helper
// config and start player

function startNanoPlayerMain() {
    var stream = getHTTPParam('channel') || getHTTPParam('stream') || getHTTPParam('streamname');
    // streams is the global stream list (optional in nanoPlayer-streamconfig.js)
    // stream is an index to the stream list or a streamname
    startNanoPlayer("playerDiv", stream, streams);
}

// console log
var log = function (e) {
    if (typeof e === 'object') {
        try {
            e = JSON.stringify(e);
        } catch (err) {
        }
    }
    console.log(e);
};

// html status update
var logStatus = function (s) {
    log(s);
    //  document.getElementById('status').innerText = s;
};

// get browser url parameters e.g. ?stream_number=1&stream_time=5
var getUrlParam = function (name) {
    var params = (new URL(document.location)).searchParams;
    var param = params.get(name);
    return param;
}

// global player and config
var player;
var player2;
var config;
var config2;

// startNanoPlayer
// playerDiv: html div element to embed the player
// streams: array of stream groups (stream names)
// id: number or tag which stream to play first
// if the player is running, it auto-switches the config if updated
var startNanoPlayer = function (playerDiv, id, streams) {
    // default: stream 0
    var stream = streams[0];
    try {
        if (Number(id)) {
            // find stream by index
            //stream = streams[id].streamnames;
            stream = streams[id];
        } else if (typeof (id) == "string") {
            // find stream by tag
            stream = streams.find(str => str.tag == id) || id;
        }
    } catch (e) {
        console.error("stream not found");
        return -1;
    }
    startPlayerSimpleConfig(playerDiv, stream);
}

function startPlayerSimpleConfig(playerDiv, stream) {

    //logStatus("startNanoPlayer: " + " " + stream.join());
    var startIndex = 1;

    // default h5live config
    var config_h5live_default = {
        "server":
            {
                "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream/stream.mp4",
                "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
            }, "rtmp": {"url": "rtmp://localhost/play"}
    };

    // create source entries from stream
    var entries = [];
    let entries2 = [];
    if (typeof (stream) === "string") {
        // stream is a simple stream name
        let entry = {};
        entry.h5live = config_h5live_default;
        entry.h5live.rtmp.streamname = stream;
        entries.push(entry);
    } else {
        // stream is a simple stream config array
        for (var i = 0; i < stream.entries.length; i++) {
            let entry = {"index": i, "tag": stream.tag, "info": stream.info};
            entry.h5live = JSON.parse(JSON.stringify(config_h5live_default));
            entry.h5live.rtmp.streamname = stream.entries[i].streamname;
            entries.push(entry);
        }

    }

    config = {
        "source": {
            "entries": entries,
            "options": {
                "adaption": {
                    "rule": "deviationOfMean2"
                },
                "switch": {}
            },
            "startIndex": startIndex
        },
        "playback": {
            "autoplay": true, "automute": true, "muted": false
        },
        "style": {
            "displayMutedAutoplay": false,
            "controls": false,
            "view": false
        },
        "events": events // event handlers from js/nanoplayer-helper-events.js
    };

    // set player metrics is available
    if (window.nanoPlayerMetricsConfig) {
        config.metrics = window.nanoPlayerMetricsConfig;
    }
    startPlayer(playerDiv, config);

    // PLAYER2 Start
    if (typeof (stream) === "string") {
        console.log("No dual Stream detected")
        // Doin nothing cause no Dual Stream detected
    }
    else if (stream.dual !== undefined && stream.dual.length > 0) {
        console.log("Initialize dual Stream")
        for (let i = 0; i < stream.dual.length; i++) {
            let entry = {"index": i, "tag": stream.tag, "info": stream.info};
            entry.h5live = JSON.parse(JSON.stringify(config_h5live_default));
            entry.h5live.rtmp.streamname = stream.dual[i].streamname;
            entries2.push(entry);
            console.log("DEBUG HERE" + entries2.length)
        }
        if (entries2.length > 1) {
            config2 = {
                "source": {
                    "entries": entries2,
                    "options": {
                        "adaption": {
                            "rule": "deviationOfMean2"
                        },
                        "switch": {}
                    },
                    "startIndex": startIndex
                },
                "playback": {
                    "autoplay": true, "automute": true, "muted": false
                },
                "style": {
                    "displayMutedAutoplay": false,
                    "controls": false,
                    "backgroundColor": "red",
                    "view": false
                },
                "events": events // event handlers from js/nanoplayer-helper-events.js
            };

            if (window.nanoPlayerMetricsConfig) {
                config2.metrics = window.nanoPlayerMetricsConfig;
            }
            console.log("DEBUG HERE :" + playerDiv + "2")
            startPlayer2(playerDiv + "2", config2);
        }
    }
}

function startPlayer(playerDiv, config) {
    if (player) {
        // update existing player
        player.updateSource(config.source);
    } else {
        // create new player
        player = new NanoPlayer(playerDiv);
        player.setup(config).then(function (config) {
            console.log("setup success");
            console.log("config: " + JSON.stringify(config, undefined, 4));
        }, function (error) {
            console.error(error.message);
        });
    }
}

function startPlayer2(playerDiv, config) {
    if (player2) {
        // update existing player
        player2.updateSource(config.source);
    } else {
        // create new player
        player2 = new NanoPlayer(playerDiv);
        player2.setup(config).then(function (config) {
            console.log("setup success");
            console.log("config: " + JSON.stringify(config, undefined, 4));
        }, function (error) {
            console.error(error.message);
        });
    }
}

var stream_number = 0;

// test: auto-switch stream groups
function startStreamSwitchTimer(switch_time_seconds) {
    var switchTime = 1000 * switch_time_seconds;
    setInterval(function () {
        log("timer: switching streams");
        if (stream_number == "0")
            stream_number = "1";
        else
            stream_number = "0";
        startNanoPlayer("playerDiv", streams, stream_number);
    }, switchTime);
}

