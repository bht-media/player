///////////////////////////////
// STREAMNAME HIER
const params = getUrlVars();
const room = params.channel || 'default';
///////////////////////////////

// Helper function for arraybuffer
function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

// EMOJIS https://emoji-button.js.org/

// adding received
function addReceived(msg) {
    let doc = document.getElementById("all_messages");
    if (msg.user === document.getElementById('name').value) {
        doc.innerHTML +=
            `<div class="outgoing_msg">
            <span class="time_date">` + convertTime(msg.time) + `</span><b class="outgoing-user-name">` + msg.user + ` </b></div>
            <div class="incoming_withd_msg">
            <p class="outgoing_single_msg">` + msg.payload + `</p>
            </div>
        </div>
    </div>`
    }
    else {
        doc.innerHTML +=
            `<div class="incoming_msg" id="msg-` + msg["$loki"] + `">
      <b class="incoming-user-name">` + msg.user + ` </b><span class="time_date">` + convertTime(msg.time) + `</span></div>
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

function enterMessage(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        sendChatMessage();
    }
}

function convertTime(timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(timestamp);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    return formattedTime;
}

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

function sendChatMessage() {
    // Web Socket is connected, send data using send()
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
        return;
    }

    // Lock username
    document.getElementById('name').readOnly = true;

    const thisSend = str2ab(JSON.stringify(obj));
    ws.send(thisSend);
    document.getElementById('message').value = ""
}

ws.onmessage = function (evt) {
    // console.log(evt);
    var received_msg = JSON.parse(evt.data);
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

ws.onclose = function () {
    // websocket is closed.
    alert("Connection is closed...");
};