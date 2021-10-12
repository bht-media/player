/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ A simple toolkit for educational use only
+ In cooperation with the Berliner Hochschule für Technik (https://www.beuth-hochschule.de/)
+ Copyright (c) 2021 Steve Margenfeld (margenfeld.s@gmail.com), Julia Hoffmann (julia.h.design@gmail.com)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Sets given text to given element as inner html
 * WARNING : function maybe unnecessary
 * @param element element where the text should be added
 * @param text the text to be added into the given element
 */
let setDocumentIDElementInnerText = function (element, text){
    if (document.getElementById(element) !== undefined) {
        element.innerText = text;
    } else {
        console.error("cannot find Document Element :" + element);
    }
}

/**
 * Returns the meta value of the "channel" attribute
 * @returns {String} meta value of the "channel" attribute
 */
let getStreamID = function (){
    return getHTTPParam('channel') || getHTTPParam('stream') || getHTTPParam('streamname');
}

/**
 * Searches for given stream tag in the nanoplayer-streamconfig.js and returns it as an Array
 * @param streamTag the tag of the config
 * @returns {Array} containing all the relevant stream config data
 */
let getStreamConfig = function (streamTag) {
    // default: stream 0
    let streamConfig = streams[0];
    try {
        if (Number(streamTag)) {
            // find stream by index
            //stream = streams[id].streamnames;
            streamConfig = streams[streamTag];
        } else if (typeof (streamTag) == "string") {
            // find stream by tag
            streamConfig = streams.find(str => str.tag == streamTag) || streamTag;
        }
    } catch (e) {
        console.error("stream not found");
        return -1;
    }
    return streamConfig;
}

/**
 * Toggle the element between visibility
 * @param element html element node
 */
let toggleElementVisibility = function(element){

    let buttonElement = element;
    let computedStyle = window.getComputedStyle(element).getPropertyPriority("display");
    let displayAttribute;

    if (displayAttribute === undefined){
        if (buttonElement.style.display !== undefined){
            if (buttonElement.style.display === "none") displayAttribute = "block"
            else displayAttribute = buttonElement.style.display;
        }else if (computedStyle !== undefined) {
            if (computedStyle === "none") {
                displayAttribute = "block"
                buttonElement.style.display = computedStyle;
            }
            else {
                displayAttribute = computedStyle;
                buttonElement.style.display = computedStyle;
            }
        }else displayAttribute = "block";
    }

    if (buttonElement.style.display !== displayAttribute) {
        buttonElement.style.display = displayAttribute;
    } else buttonElement.style.display = "none";
}