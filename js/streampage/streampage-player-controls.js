/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ A simple style injector for educational use only
+ In cooperation with the Berliner Hochschule für Technik (https://www.beuth-hochschule.de/)
+ and Nanocosmos Berlin (https://www.nanocosmos.de/)
+ Copyright (c) 2021 Steve Margenfeld (margenfeld.s@gmail.com) & Julia Hoffmann (julia.h.design@gmail.com)
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * actual position of the second player
 * @type {string} position in clear name
 */
let secondPlayerPosition = "bottomRight";

let sideBySide = false;

let timerStack = {};

/**
 * Applies in nanoplayer-streamconfig saved settings to the website style
 */
let initializeControls = function () {
    initPlayerControls();
    nanocosmosBugfix();
}

/**
 * Init all Player controls
 */
let initPlayerControls = function () {

    document.getElementById("playButton").onclick = function () {
        playerStartPlayPlayback();
        hideShowPlayButton();
        hideShowPauseButton();
    }
    document.getElementById("pauseButton").onclick = function () {
        playerStopPlayback();
        hideShowPlayButton();
        hideShowPauseButton();
    }
    document.getElementById("soundMuteButton").onclick = function () {
        playerMute();
        hideShowSoundMuteButton();
        hideShowSoundUnmuteButton();
    }
    document.getElementById("soundUnmuteButton").onclick = function () {
        playerUnmute();
        hideShowSoundMuteButton();
        hideShowSoundUnmuteButton();
    }
    document.getElementById("volume").onchange = function () {
        changeVolume();
    }
    document.getElementById("fullscreen").onclick = function () {
        hideShowFullscreenButton();
        hideShowExitFullscreenButton();
        playerFullscreen();
    }
    document.getElementById("exitFullscreen").onclick = function () {
        playerExitFullscreen();
        hideShowFullscreenButton();
        hideShowExitFullscreenButton();
    }
    document.getElementById("switch").onclick = function () {
        rotatePlayerTwoAlignment.switchPosition(secondPlayerPosition);
    }

    document.getElementById("halfScreen").onclick = function () {
        sideBySide = !sideBySide
        sideBySideFunction.changeSideBySide();

    }

    document.getElementById("changePosition").onclick = function () {
        switchPlayerPosition();
    }

    document.getElementById("playerDivs").onmousemove = function () {
        fadeControls.start();
        fadeControls.pause();
    }
}

/**
 * Some bugfixes for unexpected actions
 */
let nanocosmosBugfix = function () {

    // Nanocosmos player changes the attributes of the second(mini) player after fullscreen event is fired
    let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutations) {
            if(!sideBySide) {
                rotatePlayerTwoAlignment.refresh();
            }
            else {
                sideBySideFunction.checkSideBySide();
            }
            console.log(sideBySide)
        })
    });
    observer.observe(document.getElementById("playerDiv2"), {
        attributes: true
    })
}

/**
 * Start all Player Videos
 */
let playerStartPlayPlayback = function () {
    players.forEach(e => {
        e.player.play();
    })
}

/**
 * Stop all Player Videos
 */
let playerStopPlayback = function () {
    players.forEach(e => {
        e.player.pause();
    })
}

/**
 * Mute the Player
 */
let playerMute = function () {
    players.forEach(e => {
        e.player.mute();
    })
}

/**
 * Unmute the Player
 */
let playerUnmute = function () {
    players.forEach(e => {
        e.player.unmute();
    })
}

/**
 * Change the Volume of the Player
 */
let changeVolume = function () {
    let volumeValue = document.getElementById("volume").value;
    let value = volumeValue / 100;

    players.forEach(e => {
        e.player.setVolume(value);
    })
}


/**
 * Make the Player to fullscreen (Button)
 */
let playerFullscreen = function () {
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
 * Exit the Fullscreen (Button)
 */
let playerExitFullscreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

/**
 * Exit the fullscreen (ESC)
 */
function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        hideShowExitFullscreenButton();
        hideShowFullscreenButton();
    }
}

/**
 * Holder for rotating functions of the player
 * @type {{getLastState: ((function(): (string))|*), switchPosition: rotatePlayerTwoAlignment.switchPosition, refresh: rotatePlayerTwoAlignment.refresh}}
 */
let rotatePlayerTwoAlignment = {

    //TODO not suitable for more than 2 divs
    /**
     * Switches position of the player to given position (in plain text)
     * @param position position to be switched to in plain text camel cased (e.g. "bottomRight")
     */
    switchPosition: function (position) {
        let playerElement = document.getElementById("playerDiv2");
        let states = {
            "bottomRight": function () {
                playerElement.style.top = null;
                playerElement.style.bottom = "0";
                playerElement.style.left = null;
                playerElement.style.right = "0";
            },
            "bottomLeft": function () {
                playerElement.style.top = null;
                playerElement.style.bottom = "0";
                playerElement.style.left = "0";
                playerElement.style.right = null;
            },
            "topLeft": function () {
                playerElement.style.top = "0";
                playerElement.style.bottom = null;
                playerElement.style.left = "0";
                playerElement.style.right = null;
            },
            "topRight": function () {
                playerElement.style.top = "0";
                playerElement.style.bottom = null;
                playerElement.style.left = null;
                playerElement.style.right = "0";
            }
        }

        switch (position) {
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
    getLastState: function () {
        if (secondPlayerPosition === "bottomRight") return "topRight";
        else if (secondPlayerPosition === "topRight") return "topLeft";
        else if (secondPlayerPosition === "topLeft") return "bottomLeft";
        else return "bottomRight";
    },

    /**
     * Refreshes the position of the second (small) player
     */
    refresh: function () {
        this.switchPosition(this.getLastState());
    }
}

/**
 * Switches the position of the two players
 */
let switchPlayerPosition = function () {

    //TODO NOT suitable for more than 2 players
    let videoOneElement = document.getElementById("h5live-playerDiv1");
    let videoTwoElement = document.getElementById("h5live-playerDiv2");

    videoOneElement.id = "h5live-playerDiv2";
    videoTwoElement.id = "h5live-playerDiv1";

    document.getElementById("playerDiv1").appendChild(videoTwoElement);
    document.getElementById("playerDiv2").appendChild(videoOneElement);
}

/**
 * switch the screen to half screen (side by side mode)
 */
let sideBySideFunction = {

    /**
     *  change the side by side mode (ON/OFF)
     */
    changeSideBySide: function () {
        if (sideBySide) {
            console.log("Side by side on")
            this.sideBySideOn();
            document.getElementById("halfScreen").style.backgroundColor = "grey" ;

        } else {
            console.log("Side by side off")
            this.sideBySideOff();
            document.getElementById("halfScreen").style.backgroundColor = null ;
        }
    },

    /**
     * activate side by side
     */
    sideBySideOn: function (){
        let player = document.getElementById("playerDiv1");
        let player2 = document.getElementById("playerDiv2");


        player.style.width = "50%";

        player2.style.width = "50%";
        player2.style.height = "100%";
        player2.style.right = "0";
        player2.style.left = null;
        player2.style.margin = "0";
        player2.style.borderRadius = "0";

        console.log("setting side by side true")

        if (document.getElementById("switch").style.display !== "none"){
            toggleElementVisibility(document.getElementById("switch"));
        }
    },
    /**
     * deactivate side by side
     */
    sideBySideOff: function (){
        let player = document.getElementById("playerDiv1");
        let player2 = document.getElementById("playerDiv2");

        player.style.width = "100%";

        player2.style.width = "30%";
        player2.style.height = "auto";
        player2.style.margin = "5px";
        player2.style.borderRadius = "10px";

        if (document.getElementById("switch").style.display === "none"){
            toggleElementVisibility(document.getElementById("switch"));
        }
    },

    /**
     * check the mode of side by side (ON/OFF)
     */
    checkSideBySide: function () {
        if(sideBySide) {
            this.sideBySideOn();
        }
        else this.sideBySideOff();
    }

}


/**
 * out / in Fade from the control panel
 */
let fadeControls = {

    timer: function (callback, delay) {
        // States : -1 = timer is off, 0 = timer is paused, 1 = timer runs
        let state = null;
        let start, remaining = delay;
        let timerId;

        this.pause = function () {
            if (state !== 0){
                window.clearTimeout(timerId);
                remaining -= Date.now() - start;
                state = 0;
                console.log("pause fade");
            }
        };

        this.resume = function () {
            start = Date.now();
            window.clearTimeout(timerId);
            timerId = window.setTimeout(callback, remaining);
            state = 1;
        };

        this.stop = function () {
            window.clearTimeout(timerId);
            state = -1;
        }
        this.resume();
    },

    start: function () {
        if (timerStack.playBarTimer === undefined){
            let timeout;
            document.onmousemove = function(){
                clearTimeout(timeout);
                timeout = setTimeout(function(){
                    fadeControls.resume();
                }, 1000);
            }
        }
        if (!timerStack.playBarTimer) {
            document.getElementById("controls-playerDiv").style.display = "flex";
            this.timer(function () {
                document.getElementById("controls-playerDiv").style.display = "none";
                timerStack.playBarTimer = false;
            }, 1000);
            timerStack.playBarTimer = true;
        }
    },

    pause: function (){
        this.timer.pause();
    },

    resume: function (){
        this.timer.stop();
        this.start();
    }
}

/**
 * Switch between hide and show of the play button
 */
let hideShowPlayButton = function () {
    toggleElementVisibility(document.getElementById("playButton"));
}

/**
 * Switch between hide and show of the pause button
 */
let hideShowPauseButton = function () {
    toggleElementVisibility(document.getElementById("pauseButton"));
}

/**
 * Switch between hide and show of the mute button
 */
let hideShowSoundMuteButton = function () {
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
document.addEventListener('DOMContentLoaded',function () {
    initializeControls();
});


