/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ A simple style injector for educational use only
+ In cooperation with the Berliner Hochschule für Technik (https://www.beuth-hochschule.de/)
+ and Nanocosmos Berlin (https://www.nanocosmos.de/)
+ Copyright (c) 2021 Steve Margenfeld (margenfeld.s@gmail.com)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Array containing all player objects
 * @type {*[]} Array
 */
let players = [];

/**
 * id of the div where logs schould be dispolayed
 * @type {string} string
 */
let logDiv = "status";

/**
 * Loggs given object to the console
 * @param e object to be logged
 */
var log = function (e) {
    if (typeof e === 'object') {
        try {
            e = JSON.stringify(e);
        } catch (err) {
        }
    }
    console.log(e);
};

/**
 * helper function to add the possibility to log the actual status of an object into the html
 * @param s
 */
let logStatus = function (s, divName) {
    log(s);
    //if (divName) logDiv = divName;
    //document.getElementById(logDiv).innerText = s;
};

/**
 * Initiates all players found on the page
 */
function initiateNanoplayers() {
    let channel = getHTTPParam('channel');

    let counter = 1;
    let streamDivs = [];

    //TODO FUTURE : one html div with playerdiv and javascript iterate thru streamconfig and create a
    // corresponding number of streams mentioned in the entries array
    while (document.getElementById("playerDiv" + counter) != null){
        streamDivs.push(document.getElementById("playerDiv" + counter));
        counter++;
    }

    streamDivs.forEach(function (div){
        console.log(div)
        startNanoPlayer(div, channel);
    })
}

/**
 * Checks if the actual streamid/Tag exists and starts the nanostream Player
 * this function will in future have more purpose or will be merged with @startPlayerDefaultConfig()
 * @param playerDiv html div element to embed the player into
 * @param channel channel name
 * @returns {number} -1 if no stream was found
 */
function startNanoPlayer(playerDiv, channel) {
    let stream;

    // find stream by index
    if (Number(channel)) {
        stream = streams[channel];
    } // find stream by tag
    else if (typeof (channel) == "string") {
        stream = streams.find(stream => stream.tag === channel);
    } // cannot find either
    else {
        console.log("cannot find stream");
        return -1;
    }
    console.log("startNanoPlayer final")
    startPlayerDefaultConfig(playerDiv, stream);
}

/**
 * Initiates a Nanostream in given playerDiv corresponding to its stream name/id/tag
 * @param playerDiv div to inject the player into
 * @param stream Streamname/Tag of the stream
 */
function startPlayerDefaultConfig(playerDiv, stream) {

    // default h5live config
    let h5live_config = getH5live_defaultConfig();

    // create source entries from stream
    let entries = [];

    if (typeof (stream) === "string") {
        // stream is a string stream name
        let entry = {};
        entry.h5live = h5live_config;
        entry.h5live.rtmp.streamname = stream;
        entries.push(entry);
    } else {
        // stream is a simple stream config array
        // TODO needs change for more than 2 (needs changes in config entries1, entries2, entries3, ...)
        let configEntries;
        if (playerDiv.id === "playerDiv1") configEntries = stream.entries;
        else configEntries = stream.dual;

        console.log(configEntries.length)

        for (let i = 0; i < configEntries.length; i++) {
            let entry = {"index": i, "tag": stream.tag, "info": stream.info};
            entry.h5live = JSON.parse(JSON.stringify(h5live_config));
            entry.h5live.rtmp.streamname = configEntries[i].streamname;
            entries.push(entry);
        }

    }

    let config = getDefaultConfig(entries);

    // set player metrics is available
    // if (window.nanoPlayerMetricsConfig) {
    //     config.metrics = window.nanoPlayerMetricsConfig;
    // }

    console.log("startplayerdefaultconfig final")
    startPlayer(playerDiv, config);
}

/**
 * Starts the nanocosmos player with given config
 * @param playerDiv div the player should be injected
 * @param config config for the player
 */
function startPlayer(playerDiv, config) {

    let player = players.find(name => name === playerDiv);

    if (player !== undefined) {
        // update existing player
        player.player.updateSource(config.source);
    } else {
        // create new player
        player = new NanoPlayer(playerDiv.id);
        player.setup(config).then(function (config) {
            console.log("setup success");
            console.log("config: " + JSON.stringify(config, undefined, 4));
        }, function (error) {
            console.error(error.message);
        });

        players.push({
            name : playerDiv,
            player : player
        });
    }

    console.log("startplayer final")
}