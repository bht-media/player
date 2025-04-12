///////////////////////////////
// STREAMNAME HIER
const params = getUrlVars();
const room = params.channel || 'default';
///////////////////////////////
const localTime = new Date();

/**
 * Helper function for arraybuffer
 * @param str
 * @returns {ArrayBuffer}
 */
function str2ab(str) {
    let buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    let bufView = new Uint16Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

/**
 * ??? TODO parts not used, check function
 * @returns {{}}
 */
function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


/**
 * adding received
 * (EMOJIS https://emoji-button.js.org/)
 * @param msg
 */
function addReceived(msg) {
    console.log("MASSAGE: " +msg);
    let doc = document.getElementById("all_messages");
    if (msg.user === document.getElementById('name').value) {
        doc.innerHTML +=
            `<div class="outgoing_msg">
            <b class="outgoing-user-name">` + msg.user + ` </b><span class="time_date">` + convertTime(msg.time, true) + `</span></div>
            <div class="incoming_withd_msg">
            <p class="outgoing_single_msg">` + msg.payload + `</p>
            </div>
        </div>
    </div>`
    }
    else {
        doc.innerHTML +=
            `<div class="incoming_msg" id="msg-` + msg["$loki"] + `">
      <b class="incoming-user-name" style=" color: ">` + msg.user + ` </b><span class="time_date">` + convertTime(msg.time, true) + `</span></div>
      <div class="received_msg">
        <div class="received_withd_msg">
          <p class="incoming_single_msg">` + msg.payload + ` </p>
      </div>
    </div>`
    }
    doc.scrollTo({
        top: doc.scrollHeight,
        left: 0,
        behavior: 'smooth'
    })
}

/**
 * Create a new JavaScript Date object based on the timestamp
 * @param timestamp date
 * @param form true or false
 * @returns {string} date & time
 */
//Commit: 01.08.2022 - add Date in the convertTime (JH)
function convertTime(timestamp, form) {

    let date = new Date(timestamp);

    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let formattedTime;
    let formattedDate = day + '.' + month + '.' + year;
    // Display time in 00:00
    if(form){
        formattedTime = hours + ':' + minutes.substr(-2)
    }
    // Display time in 00:00:00
    else{
        formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    }
    return formattedDate + ' | ' + formattedTime;
}


/**
 * Send the chat message if the SEND key enter
 * @param e
 */
/*function enterMessage(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        sendChatMessage();
    }
}*/


//TODO Warum ist diese Abfrage ausserhalb der Funktion "sendChatMessage"?
if ("WebSocket" in window) {
    // Let us open a web socket
    // replaced 'room' with real streamname
    // var ws = new WebSocket("ws://127.0.0.1:9001/" + room);
    var ws = new WebSocket("wss://chat-dev-hc-01.nanocosmos.de/chat/" + room);
}
else {
    // The browser doesn't support WebSocket
    alert("WebSocket NOT supported by your Browser!");
}

/**
 * Web Socket is connected, send data using send()
 */
function sendChatMessage() {
    let obj = {
        room: "/" + room,
        user: document.getElementById('name').value,
        action: "send",
        payload: document.getElementById('message').value
    }

    if (obj.user === "" || !obj.user) {
        alert("Please choose a username!");
        return;
    }

    if (obj.payload === "") {
        alert("Please choose a message!");
        return;
    }

    // Lock username
    document.getElementById('name').readOnly = true;

    const thisSend = str2ab(JSON.stringify(obj));
    ws.send(thisSend);
    document.getElementById('message').value = ""
}

/**
 * Add received message
 * @param evt
 */
ws.onmessage = function (evt) {
    // console.log(evt);
    let received_msg = JSON.parse(evt.data);
    // console.log(received_msg.length)
    if (Array.isArray(received_msg)) {
        if (received_msg.length > 0) {
            received_msg.map(msg => {
                addReceived(msg);
            })
        }
    }
    else {
        addReceived(received_msg)
    }
};

/**
 * close the websocket connection

ws.onclose = function () {
    // websocket is closed.
    alert("Connection is closed...");
}; */