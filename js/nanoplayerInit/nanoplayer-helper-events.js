/* eslint-disable no-undef, no-console, no-unused-vars */

// nanoplayer-helper-events
// nanoplayer sample event handlers and logging
// (c) 2018-2021, nanocosmos gmbh
// https://www.nanocosmos.de

var events = {};

events.onReady = function () {
    logStatus('ready');
};
events.onPlay = function (e) {
    logStatus('playing');
    log('play stats: ' + JSON.stringify(e.data));
    //hideErrorWarning();
};
events.onPause = function (e) {
    var reason = (e.data.reason !== 'normal') ? ' ($reason$)'.replace('$reason$', e.data.reason) : '';
    logStatus('pause' + reason);
};
events.onLoading = function () {
    logStatus('loading');
};
events.buffering = {
    start: 0,
    end: 0
};
events.onStartBuffering = function () {
    events.buffering.start = new Date();
    setTimeout(function () {
        if (events.buffering.start) {
            logStatus('buffering');
        }
    }, 2000);
};
events.onStopBuffering = function () {
    events.buffering.stop = new Date();
    if (events.buffering.start) {
        var duration = Math.abs(events.buffering.stop - events.buffering.start);
        if (duration > 1000) {
            logStatus('buffering ' + duration + 'ms');
        }
        events.buffering.stop = events.buffering.start = 0;
    }
    logStatus('playing');
};
events.onError = function (e) {
    try {
        var err = JSON.stringify(e);
        if (err === '{}') {
            err = e.message;
        }
        e = err;
    }
    catch (err) { }
    log('Error = ' + e);
    var error_text = e;
    var json = JSON.parse(e);
    if(json && json.data.message) {
      error_text = json.data.message;
    } 
    var events_error_id = document.getElementById('error');
    if(events_error_id) 
      events_error_id.innerText = error_text;
    else
      alert(error_text);
};
events.onWarning = function (e) {
    logStatus('Warning = ' + e.data.message);
};
events.onMetaData = function (e) {
    var metadata = JSON.stringify(e.data);
    (metadata.length > 100) && (metadata = metadata.substr(0, 100) + '...');
    log('onMetaData');
    log(e, true);
};
events.onStats = function (e) {
    var stats = e.data.stats;
    /*
    console.log(stats);
    document.getElementById('currentTime').textContent = stats.currentTime.toFixed(1);
    document.getElementById('playTimeStart').textContent = stats.playout.start.toFixed(1);
    document.getElementById('playTimeEnd').textContent = stats.playout.end.toFixed(1);
    document.getElementById('bufferTimeStart').textContent = stats.buffer.start.toFixed(1);
    document.getElementById('bufferTimeEnd').textContent = stats.buffer.end.toFixed(1);
    document.getElementById('bufferTimeDelay').textContent = stats.buffer.delay.avg.toFixed(1);
    document.getElementById('bufferTimeDelayMin').textContent = stats.buffer.delay.min.toFixed(1);
    document.getElementById('bufferTimeDelayMax').textContent = stats.buffer.delay.max.toFixed(1);
    if (document.getElementById('bufferTimeDelayDeviation')) document.getElementById('bufferTimeDelayDeviation').textContent = stats.buffer.delay.deviation.toFixed(2);
    if (stats.bitrate) {
        document.getElementById('bitrateAvg').textContent = (stats.bitrate.avg / 1000).toFixed(0) + ' kbps';
        document.getElementById('bitrateMin').textContent = (stats.bitrate.min / 1000).toFixed(0) + ' kbps';
        document.getElementById('bitrateMax').textContent = (stats.bitrate.max / 1000).toFixed(0) + ' kbps';
        if (document.getElementById('bitrateDeviation')) document.getElementById('bitrateDeviation').textContent = (stats.bitrate.deviation / 1000).toFixed(0) + ' kbps';
    }
    if (stats.framerate) {
        document.getElementById('framerateCurrent').textContent = stats.framerate.current + ' fps';
        document.getElementById('framerateAvg').textContent = (stats.framerate.avg).toFixed(1) + ' fps';
        document.getElementById('framerateMin').textContent = stats.framerate.min + ' fps';
        document.getElementById('framerateMax').textContent = stats.framerate.max + ' fps';
        if (document.getElementById('framerateDeviation')) document.getElementById('framerateDeviation').textContent = stats.framerate.deviation.toFixed(2) + ' fps';
    }
    if (stats.adaptive && (stats.adaptive.deviationOfMean || stats.adaptive.deviationOfMean2) && document.getElementById('adaptiveBufferTimeDelayDeviation')) {
        document.getElementById('adaptiveBufferTimeDelayDeviation').textContent = stats.adaptive.deviationOfMean ? stats.adaptive.deviationOfMean.buffer.delay.deviation.toFixed(2) : stats.adaptive.deviationOfMean2.buffer.delay.deviation.toFixed(2);
    }*/
};
events.onMute = function () {
    log('onMute');
};
events.onUnmute = function () {
    log('onUnmute');
};
events.onVolumeChange = function (e) {
    log('onVolumeChange ' + e.data.volume * 100);
};
events.onStreamInfo = function (e) {
    var streamInfo = JSON.stringify(e.data.streamInfo);
    log('onStreamInfo: ' + streamInfo);
};
events.onStreamInfoUpdate = function (e) {
    var streamInfo = JSON.stringify(e.data.streamInfo);
    logStatus('onStreamInfoUpdate: ' + streamInfo);
};
events.onDestroy = function () {
    logStatus('destroy');
};
events.onUpdateSourceInit = function (e) {
    var data = JSON.stringify(e.data);
    logStatus('onUpdateSourceInit: ' + data);
};
events.onUpdateSourceSuccess = function (e) {
    var data = JSON.stringify(e.data);
    logStatus('onUpdateSourceSuccess: ' + data);
};
events.onUpdateSourceFail = function (e) {
    var data = JSON.stringify(e.data);
    logStatus('onUpdateSourceFail: ' + data);
};
events.onUpdateSourceAbort = function (e) {
    var data = JSON.stringify(e.data);
    log('onUpdateSourceAbort: ' + data);
};
events.onSwitchStreamInit = function (e) {
    var data = JSON.stringify(e.data);
    logStatus('onSwitchStreamInit: ' + data);
};
events.onSwitchStreamSuccess = function (e) {
    var data = JSON.stringify(e.data);
    logStatus('onSwitchStreamSuccess: ' + data);
};
events.onSwitchStreamFail = function (e) {
    var data = JSON.stringify(e.data);
    logStatus('onSwitchStreamFail: ' + data);
};
events.onSwitchStreamAbort = function (e) {
    var data = JSON.stringify(e.data);
    log('onSwitchStreamAbort: ' + data);
};

