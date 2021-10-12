/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ A simple style injector for educational use only
+ In cooperation with the Berliner Hochschule für Technik (https://www.beuth-hochschule.de/)
+ and Nanocosmos Berlin (https://www.nanocosmos.de/)
+ Copyright (c) 2021 Steve Margenfeld (margenfeld.s@gmail.com)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Applies in nanoplayer-streamconfig saved settings to the website style
 */
let applyStreamStyle = function (){

    console.log("Applying Stream Style...");
    let streamID = getStreamID();
    if (streamID !== undefined){
        console.log("StreamID detected : " + streamID);
        let streamConfig = getStreamConfig(streamID);

        setPageTitle(streamConfig);
        setTitleTop(streamConfig);
        setDescription(streamConfig);
        setDualPlayer(streamConfig);
        setChatBox(streamConfig);
        setBackgroundImage(streamConfig);
        setLinkBox(streamConfig);
        setPartnerBox(streamConfig);

        console.log("Stream Style applied")
    }else {
        console.log("Default Stream Style applied")
    }
}

/**
 * Sets the page title of the Streaming page
 * @param streamConfig the stream config
 */
let setPageTitle = function (streamConfig){
    document.title = streamConfig.titleTop;
}

/**
 * Sets the title of the Streaming page
 * @param streamConfig the stream config
 */
let setTitleTop = function (streamConfig){
    setDocumentIDElementInnerText(document.getElementById('titleTop'), streamConfig.titleTop)
}

/**
 * Sets the description of the streaming page
 * @param streamConfig the stream config
 */
let setDescription = function (streamConfig){
    setDocumentIDElementInnerText(document.getElementById('titleSub'), streamConfig.title)
}

let setDualPlayer = function (streamConfig){
    if (streamConfig.dual === undefined){
        toggleElementVisibility(document.getElementById("playerDiv2"));
        toggleElementVisibility(document.getElementById("switch"));
        toggleElementVisibility(document.getElementById("changePosition"));
        toggleElementVisibility(document.getElementById("halfScreen"));
    }
}

/**
 * Enables the chat Box if it is set true in the stream config
 * @param streamConfig the stream config
 */
let setChatBox = function (streamConfig){

    if (streamConfig.chat === undefined || streamConfig.chat !== true) {
        toggleElementVisibility(document.getElementById("contentChat"));
    }
}

/**
 * Sets the background Image of the "middle-box-background" div
 * @param streamConfig the stream config
 */
let setBackgroundImage = function (streamConfig){
    if (streamConfig.image !== undefined) {
        let rootElem = document.getElementById("main");
        rootElem.style.backgroundImage = "url(" + streamConfig.image + ")";
    }
}

/**
 * Activates the link box if it is set true in the stream config
 * @param streamConfig the stream config
 */
let setLinkBox = function (streamConfig){

    let linkBoxElement = document.getElementById("linkBox");


    if (streamConfig.linkBox !== undefined) {
        let linkBoxes = streamConfig.linkBox;
        console.log("LINKBOXES : " + streamConfig.linkBox.length);
        for (let i = 0; i < streamConfig.linkBox.length; i++){

            let a = document.createElement("a");
            a.href = linkBoxes[i].url;
            a.target = "_blank";
            a.className = "linkButton";

            let div = document.createElement("div");
            div.className = "linkText";
            div.innerText = linkBoxes[i].text;
            a.appendChild(div);
            //a.innerText = linkBoxes[i].text;
            //a.style.backgroundImage = "url(" + linkBoxes[i].image + ")";


            let image = document.createElement("img");
            image.src = linkBoxes[i].image;
            a.appendChild(image);

            linkBoxElement.appendChild(a);
        }
    }
}

/**
 * Activates the partner box if it is set true in the stream config
 * @param streamConfig the stream config
 */
let setPartnerBox = function (streamConfig){

    if (streamConfig.partnerBox !== undefined && streamConfig.partnerBox) {
        document.getElementById("partner-wrapper").style.display = "block";
    } else {
        document.getElementById("partner-wrapper").style.display = "none";
    }

    let partnerBoxElement = document.getElementById("partner-box");

    if (streamConfig.partnerBox !== undefined) {
        let linkBoxes = streamConfig.partnerBox;
        console.log("PARTNERBOXES : " + streamConfig.partnerBox.length);
        for (let i = 0; i < streamConfig.partnerBox.length; i++){

            let a = document.createElement("a");
            a.href = linkBoxes[i].url;
            a.target = "_blank";
            a.innerText = linkBoxes[i].text;
            a.style.backgroundImage = "url(" + linkBoxes[i].image + ")";
            a.className = "linkButton";

            partnerBoxElement.appendChild(a);
        }
    }
}

/**
 * Injector to start this script
 */
document.addEventListener('DOMContentLoaded', function () {
    applyStreamStyle();
    //TODO Muss ausgelagert werden
    startNanoPlayerMain();
});