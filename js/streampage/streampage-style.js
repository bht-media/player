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
        setTextFields(streamConfig);
        applyExtraStyle(streamConfig);

        console.log("Stream Style applied")
    }else {
        console.log("Default Stream Style applied")
    }
}

/**
 * Set the player picture
 * @param streamConfig
 */
let setPlayerPicture = function (streamConfig){
    let errorElement = document.getElementById("error");
    if(errorElement != null){
        document.getElementById("playerDiv").style.backgroundImage = "../assets/img/error/stream-offline.jpg";
    }else{}
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

        // For every LinkBox item
        for (let i = 0; i < streamConfig.linkBox.length; i++){

            let a = document.createElement("a");
            a.href = linkBoxes[i].url;
            a.target = "_blank";
            a.className = "linkButton";

            if(linkBoxes[i].text !== "" && linkBoxes[i].image === ""){
                let div = document.createElement("div");
                div.className = "linkText";
                div.innerText = linkBoxes[i].text;
                a.appendChild(div);
            } else{
                let image = document.createElement("img");
                image.src = linkBoxes[i].image;
                image.className = "linkBoxImages";
                a.appendChild(image);
            }
            //a.innerText = linkBoxes[i].text;
            //a.style.backgroundImage = "url(" + linkBoxes[i].image + ")";

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
        //console.log("PARTNERBOXES : " + streamConfig.partnerBox.length);
        for (let i = 0; i < streamConfig.partnerBox.length; i++){

            let a = document.createElement("a");
            a.href = linkBoxes[i].url;
            a.target = "_blank";
            if(linkBoxes[i].text !== "undefined" && linkBoxes[i].image === undefined){
                a.innerText = linkBoxes[i].text;
            }else{
                let image = document.createElement("img");
                image.src = linkBoxes[i].image;
                image.className = "partnerBoxImages";
                a.appendChild(image);
                //a.style.backgroundImage = "url(" + linkBoxes[i].image + ")";
            }
            a.className = "linkButton";

            partnerBoxElement.appendChild(a);
        }
    }
}

/**
 * Activate and Set the Text Field content
 * @param streamConfig the stream config
 */
let setTextFields = function (streamConfig){
    let textFieldDivs = document.getElementById("textField");


    if (streamConfig.textFields !== undefined && streamConfig.textFields) {

        let textFieldTitleDiv = document.createElement("div");
        textFieldTitleDiv.className = "textFieldTitle";
        textFieldTitleDiv.innerHTML = streamConfig.textFields[0].title;
        textFieldDivs.appendChild(textFieldTitleDiv);

        let textFieldContentDiv = document.createElement("div");
        textFieldContentDiv.className = "textFieldContent";
        textFieldDivs.appendChild(textFieldContentDiv);

        for (let i = 1; i < streamConfig.textFields.length; i++){

            //let frameDiv = document.createElement("div");
            //frameDiv.className = "textField_content";
            let textBoxDiv = document.createElement("div");
            textBoxDiv.className = "textBox"
            let headerDiv = document.createElement("div");
            headerDiv.className = "textBox_header";
            headerDiv.innerHTML = streamConfig.textFields[i].header;
            let textDiv = document.createElement("div");
            textDiv.className = "textBox_text";
            textDiv.innerHTML = streamConfig.textFields[i].text;

            textBoxDiv.appendChild(headerDiv);
            textBoxDiv.appendChild(textDiv);
            //textFieldDivs.appendChild(textBoxDiv);

            textFieldContentDiv.appendChild(textBoxDiv);
        }
    }else {
        textFieldDivs.parentNode.removeChild(textFieldDivs);
    }
}

/**
 * Overwrite the standard css with "this" css configs
 * @param streamConfig the stream config
 */
let applyExtraStyle = function (streamConfig){
    if (streamConfig.customStyle !== undefined && streamConfig.customStyle){
        let style = document.createElement("style")
        style.id = getStreamID() + "_style";
        style.appendChild(document.createTextNode(""));
        style.textContent = streamConfig.customStyle;
        document.head.appendChild(style);
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