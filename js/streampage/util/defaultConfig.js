/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ A general config creator for the streams
+ Copyright (c) 2022 Steve Margenfeld (margenfeld.s@gmail.com) | Bachelor Thesis
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Returns the for our streams "default" configuration (old)
 * @param entries
 * @returns {{playback: {reconnect: {minDelay: number, maxDelay: number, maxRetries: number, delaySteps: number}, automute: boolean, muted: boolean, autoplay: boolean}, style: {displayMutedAutoplay: boolean, view: boolean, controls: boolean, width: string, height: string}, source: {entries, startIndex: number, options: {adaption: {rule: string}, switch: {}}}, events: {}}}
 */
let getDefaultConfig = function (entries) {

    return {
        "source": {
            "entries": entries,
            "options": {
                "adaption": {
                    "rule": "deviationOfMean2"
                },
                "switch": {}
            },
            "startIndex": 1
        },
        "playback": {
            "autoplay": true, "automute": true, "muted": false,
            "reconnect": {
                "minDelay": 2,
                "maxDelay": 10,
                "delaySteps": 10,
                "maxRetries": 99999
            }
        },
        "style": {
            "displayMutedAutoplay": false,
            "controls": false,
            "view": false,
            "width": "auto",
            "height": "auto"

        },
        "events": events // event handlers from js/nanoplayer-helper-events.js
    };
}

/**
 * Returns the Nanocosmos bintu stream server configuration (old)
 * @returns {{rtmp: {url: string}, server: {websocket: string, progressive: string, hls: string}}}
 */
let getH5live_defaultConfig = function (){

    return {
        "server":
            {
                "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream/stream.mp4",
                "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
            }, "rtmp": {"url": "rtmp://localhost/play"}

    }
};
