/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Functionality for debugging the DualPlayer Website
+ In cooperation with the Berliner Hochschule für Technik (https://www.beuth-hochschule.de/)
+ Copyright (c) 2021 Steve Margenfeld (margenfeld.s@gmail.com)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Injects the code after fully loading the Website
 */
document.addEventListener('DOMContentLoaded', function () {
    if (getStreamConfig(getStreamID()).debug) {
        activateDebug();
    }
});

/**
 * The predefined display attribute of StatusChat
 */
let displayAttributeStatusChat;

/**
 * The predefined display attribute of linkBox
 */
let displayAttributeLinkBox;

/**
 * The predefined display attribute of PartnerBox
 */
let displayAttributePartnerBox;

/**
 * The predefined display attribute of dualPlayer
 */
let displayAttributeDualPlayer;

/**
 * The predefined display attribute of StatusChat
 */
let displayAttributeSwitchControl;

/**
 * Displays/Hides the contentChat(Chat) div Element
 */
let showChat = function (){
    let chatElement = document.getElementById("contentChat");
    if (displayAttributeStatusChat === undefined) displayAttributeStatusChat = chatElement.style.display;
    if (chatElement.style.display === "none") chatElement.style.display = displayAttributeStatusChat;
    else chatElement.style.display = "none";
}

/**
 * Displays/Hides the linkBox (Brückenkurs) div Element
 */
let showBrueckenkurs = function (){
    let brueckenkursElement = document.getElementById("linkBox");
    if (displayAttributeLinkBox === undefined) displayAttributeLinkBox = brueckenkursElement.style.display;
    if (brueckenkursElement.style.display === "none") brueckenkursElement.style.display = displayAttributeLinkBox;
    else brueckenkursElement.style.display = "none";
}

/**
 * Displays/Hides the partner-box div Element
 */
let showPartnerBox = function (){
    let partnerBoxElement = document.getElementById("partner-wrapper");
    if (displayAttributePartnerBox === undefined) displayAttributePartnerBox = partnerBoxElement.style.display;
    if (partnerBoxElement.style.display === "none") partnerBoxElement.style.display = displayAttributePartnerBox;
    else partnerBoxElement.style.display = "none";
}

/**
 * Displays/Hides the playerDiv2 (second player) div Element
 */
let showDualPlayer = function (){
    let dualPlayerElement = document.getElementById("playerDiv2");
    if (displayAttributeDualPlayer === undefined) displayAttributeDualPlayer = dualPlayerElement.style.display;
    if (dualPlayerElement.style.display === "none") dualPlayerElement.style.display = displayAttributeDualPlayer;
    else dualPlayerElement.style.display = "none";

    let switchControlElement = document.getElementById("switch-PlayerDiv");
    if (displayAttributeSwitchControl === undefined) displayAttributeSwitchControl = switchControlElement.style.display;
    if (switchControlElement.style.display === "none") switchControlElement.style.display = displayAttributeSwitchControl;
    else switchControlElement.style.display = "none";

    let halfScreenControlElement = document.getElementById("halfScreen-PlayerDiv");
    if (displayAttributeSwitchControl === undefined) displayAttributeSwitchControl = halfScreenControlElement.style.display;
    if (halfScreenControlElement.style.display === "none") halfScreenControlElement.style.display = displayAttributeSwitchControl;
    else halfScreenControlElement.style.display = "none";

    let changePositionControlElement = document.getElementById("changePosition-PlayerDiv");
    if (displayAttributeSwitchControl === undefined) displayAttributeSwitchControl = changePositionControlElement.style.display;
    if (changePositionControlElement.style.display === "none") changePositionControlElement.style.display = displayAttributeSwitchControl;
    else changePositionControlElement.style.display = "none";
}

/**
 * gives action Listeners to the debug menu
 */
let activateDebug = function (){
    document.getElementById("debug").style.display = "block";
    document.getElementById("debug-chat").onclick = showChat;
    document.getElementById("debug-brueckenkurs").onclick = showBrueckenkurs;
    document.getElementById("debug-partner").onclick = showPartnerBox;
    document.getElementById("debug-dualPlayer").onclick = showDualPlayer;
}

