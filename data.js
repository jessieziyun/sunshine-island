//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "sunshineisland",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

module.exports.ROOMS = {
    sunshineisland: {
        bg: "menu.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#ffffff",
        area: "white.png",
        tint: "#ffffff",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        music: "coconut-nut.mp3",
    },
};