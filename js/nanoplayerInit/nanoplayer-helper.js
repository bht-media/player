/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ nanoPlayer Helper Scripts for educational use only
+ some of this code is a direct copy or evolution from the "old" code from nanocosmos gmbh
+ In cooperation with the Berliner Hochschule für Technik (https://www.bht-berlin.de/)
+ and Nanocosmos gmbh Berlin (https://www.nanocosmos.de/)
+ Copyright (c) 2022 Steve Margenfeld (margenfeld.s@gmail.com) | Bachelor Thesis
+ and Nanocosmos gmbh
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* eslint-disable no-undef, no-console, no-unused-vars */

/**
 * Contains the http parameter of the page
 */
let _HTTPParams = undefined;

/**
 * Gathers all http parameters from the url
 * format for parameters : ....html?"parameter name"="parameter value"&"parameter name"="parameter value",&...
 * @returns {*} all http parameters of the page
 */
let getHTTPParam = function (paramKey) {
    // if params dont exist, create/read them
    if (!_HTTPParams) {
        _HTTPParams = [];
        let strGET = document.location.search.substr(1, document.location.search.length);
        if (strGET === '' && document.location.href.indexOf('?') !== -1) {
            let pos = document.location.href.indexOf('?') + 1;
            strGET = document.location.href.slice(pos);
        }
        if (strGET !== '') {
            let gArr = strGET.split('&');
            for (let i = 0; i < gArr.length; ++i) {
                let v = '';
                let vArr = gArr[i].split('=');
                let k = vArr[0];
                if (vArr.length > 1) {
                    v = vArr[1];
                }
                // to ensure we wont get encode errors (letters like ? & ö)
                _HTTPParams[decodeURIComponent(k)] = decodeURIComponent(v);
            }
        }
    }
    // return requested param, if exists
    try {
        return _HTTPParams[paramKey];
    } catch (e) {
        undefined;
    }
};

let logCount = 0;

/**
 * logs given object into the console/pagelog
 * @param e object to be logged
 * @param consoleOnly if true prints only in browser console
 */
function log (e, consoleOnly) {
    if (typeof e === 'object') {
        try {
            e = JSON.stringify(e);
        }
        catch (err) { }
    }
    e = new Date().toLocaleTimeString() + ': ' + e;
    console.log(e);
    if (!consoleOnly) {
        if (logCount > 1000) {

            document.getElementById('log').innerText = '';
            logCount = 0;
        }
        let span = document.createElement('span'), br = document.createElement('br');
        span.textContent = e;
        document.getElementById('log').insertBefore(br, document.getElementById('log').firstChild);
        document.getElementById('log').insertBefore(span, br);
        logCount += 1;
    }
}

/**
 * Hooks into the Nanocosmos Player warnings
 * @param message warning message to be displayed
 */
function warning (message) {
    document.getElementById('warning').innerText = message;
    document.getElementById('warning-container').style.display = 'block';
    log('Warning: ' + message);
}

