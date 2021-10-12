/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ A simple style injector for educational use only
+ In cooperation with the Berliner Hochschule für Technik (https://www.beuth-hochschule.de/)
+ and Nanocosmos Berlin (https://www.nanocosmos.de/)
+ Copyright (c) 2021 Steve Margenfeld (margenfeld.s@gmail.com)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * actual position of the second player
 * @type {string} position in clear name
 */
let secondPlayerPosition = "bottomRight";

let sideView = true;

/**
 * Applies in nanoplayer-streamconfig saved settings to the website style
 */
let initializeControls = function (){
    initPlayerControls();
    nanocosmosBugfix();
}

/**
 * Init all Player controls
 */
let initPlayerControls = function (){

    document.getElementById("playButton").onclick = function (){
        playerStartPlayPlayback();
        hideShowPlayButton();
        hideShowPauseButton();
    }
    document.getElementById("pauseButton").onclick = function (){
        playerStopPlayback();
        hideShowPlayButton();
        hideShowPauseButton();
    }
    document.getElementById("soundMuteButton").onclick = function (){
        playerMute();
        hideShowSoundMuteButton();
        hideShowSoundUnmuteButton();
    }
    document.getElementById("soundUnmuteButton").onclick = function () {
        playerUnmute();
        hideShowSoundMuteButton();
        hideShowSoundUnmuteButton();
    }
    document.getElementById("volume").onchange = function (){
        changeVolume();
    }
    document.getElementById("fullscreen").onclick = function (){
        hideShowFullscreenButton();
        hideShowExitFullscreenButton();
        playerFullscreen();
    }
    document.getElementById("exitFullscreen").onclick = function (){
        hideShowFullscreenButton();
        hideShowExitFullscreenButton();
        playerExitFullscreen();
    }
    document.getElementById("switch").onclick = function (){
        rotatePlayerTwoAlignment.switchPosition(secondPlayerPosition);
    }

    document.getElementById("halfScreen").onclick = function (){
        halfScreenPlayer();
    }

    document.getElementById("changePosition").onclick = function (){
        switchPlayerPosition();
    }
}

/**
 * Some bugfixes for unexpected actions
 */
let nanocosmosBugfix = function (){

    // Nanocosmos player changes the attributes of the second(mini) player after fullscreen event is fired
    let observer = new MutationObserver(function (mutations){
        mutations.forEach(function (mutations){
            //if (!sideView) rotatePlayerTwoAlignment.refresh();
            rotatePlayerTwoAlignment.refresh();
        })
    });
    observer.observe(document.getElementById("playerDiv2"), {
        attributes : true
    })
}

/**
 * Start all Player Videos
 */
let playerStartPlayPlayback = function (){
    player.play();
    if (player2 !== undefined) player2.play();
}

/**
 * Stop all Player Videos
 */
let playerStopPlayback = function (){
    player.pause();
    if (player2 !== undefined)  player2.pause();
}

/**
 * Mute the Player
 */
let playerMute = function(){
    player.mute();
    if (player2 !== undefined)  player2.mute();
}

/**
 * Unmute the Player
 */
let playerUnmute = function (){
    player.unmute();
    if (player2 !== undefined)  player2.unmute();
}

/**
 * Change the Volume of the Player
 */
let changeVolume = function (){
    let volumeValue = document.getElementById("volume").value;
    let value = volumeValue / 100;

    player.setVolume(value);
    if (player2 !== undefined)  player2.setVolume(value);
}

/**
 * Make the Player to fullscreen
 */
let playerFullscreen = function (){
    let playerDivs = document.getElementById("playerDivs")

    if (playerDivs.requestFullscreen) {
        playerDivs.requestFullscreen();
    } else if (playerDivs.webkitRequestFullscreen) { /* Safari */
        playerDivs.webkitRequestFullscreen();
    } else if (playerDivs.msRequestFullscreen) { /* IE11 */
        playerDivs.msRequestFullscreen();
    }
}

/**
 * Exit the Fullscreen
 */
let playerExitFullscreen = function (){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

/**
 * Holder for rotating functions of the player
 * @type {{getLastState: ((function(): (string))|*), switchPosition: rotatePlayerTwoAlignment.switchPosition, refresh: rotatePlayerTwoAlignment.refresh}}
 */
let rotatePlayerTwoAlignment = {

    /**
     * Switches position of the player to given position (in plain text)
     * @param position position to be switched to in plain text camel cased (e.g. "bottomRight")
     */
    switchPosition : function (position){
        let playerElement = document.getElementById("playerDiv2");
        let states = {
            "bottomRight": function (){
                playerElement.style.top = null;
                playerElement.style.bottom = "0";
                playerElement.style.left = null;
                playerElement.style.right = "0";
            },
            "bottomLeft": function (){
                playerElement.style.top = null;
                playerElement.style.bottom = "0";
                playerElement.style.left = "0";
                playerElement.style.right = null;
            },
            "topLeft": function (){
                playerElement.style.top = "0";
                playerElement.style.bottom = null;
                playerElement.style.left = "0";
                playerElement.style.right = null;
            },
            "topRight": function (){
                playerElement.style.top = "0";
                playerElement.style.bottom = null;
                playerElement.style.left = null;
                playerElement.style.right = "0";
            }
        }

        switch (position){
            case "bottomRight" :
                states.bottomLeft();
                secondPlayerPosition = "bottomLeft"
                break;
            case "bottomLeft" :
                states.topLeft();
                secondPlayerPosition = "topLeft"
                break;
            case "topLeft" :
                states.topRight();
                secondPlayerPosition = "topRight"
                break;
            case "topRight" :
                states.bottomRight();
                secondPlayerPosition = "bottomRight"
                break;
        }
    },
    /**
     * returns the last (not the actual!) position of the player in plain text camel cased (e.g. "bottomRight")
     * needed for internal functionality
     * @returns {string} last position of the player
     */
    getLastState : function (){
        if (secondPlayerPosition === "bottomRight") return "topRight";
        else if (secondPlayerPosition === "topRight") return "topLeft";
        else if (secondPlayerPosition === "topLeft") return "bottomLeft";
        else return "bottomRight";
    },

    /**
     * Refreshes the position of the second (small) player
     */
    refresh : function (){
        this.switchPosition(this.getLastState());
    }
}

/**
 * Switches the position of the two players
 */
let switchPlayerPosition = function (){

    let videoOneElement = document.getElementById("h5live-playerDiv");
    let videoTwoElement = document.getElementById("h5live-playerDiv2");

    videoOneElement.id = "h5live-playerDiv2";
    videoTwoElement.id = "h5live-playerDiv";

    document.getElementById("playerDiv").appendChild(videoTwoElement);
    document.getElementById("playerDiv2").appendChild(videoOneElement);
}

/**
 *
 */
let halfScreenPlayer = function (){
    let player = document.getElementById("playerDiv");
    let player2 = document.getElementById("playerDiv2");

    if(player2.style.top)

    if(player2.style.width === "30%"){

        sideView = true;
        player.style.width = "50%";

        player2.style.width = "50%";
        player2.style.height = "100%";
        player2.style.margin = "0";
        player2.style.borderRadius = "0";

        document.getElementById("switch").style.display = "none";
    }else{

        sideView = false;
        player.style.width = "100%";

        player2.style.width = "30%";
        player2.style.height = "auto";
        player2.style.margin = "5px";
        player2.style.borderRadius = "10px";

        document.getElementById("switch").style.display = "block";
    }
}
/*
player.onmouseover = function (){
    setTimeout(function (){
        document.getElementById("playerDivs").style.visibility = "none";
    }, 3000);
}
 */


/**
 * Switch between hide and show of the play button
 */
let hideShowPlayButton = function (){
    toggleElementVisibility(document.getElementById("playButton"));
}

/**
 * Switch between hide and show of the pause button
 */
let hideShowPauseButton = function (){
    toggleElementVisibility(document.getElementById("pauseButton"));
}

/**
 * Switch between hide and show of the mute button
 */
let hideShowSoundMuteButton = function (){
    toggleElementVisibility(document.getElementById("soundUnmuteButton"));
}

/**
 * Switch between hide and show of the unmute button
 */
let hideShowSoundUnmuteButton = function () {
    toggleElementVisibility(document.getElementById("soundMuteButton"));
}

/**
 * Switch between hide and show of the fullscreen button
 */
let hideShowFullscreenButton = function () {
    toggleElementVisibility(document.getElementById("fullscreen"));
}

/**
 * Switch between hide and show of the exit fullscreen button
 */
let hideShowExitFullscreenButton = function () {
    toggleElementVisibility(document.getElementById("exitFullscreen"));
}

/**
 * Injector to start this script
 */
document.addEventListener('DOMContentLoaded', function () {
    initializeControls();
});