let mobile;
let talkButton = document.getElementsByClassName("talk-button")[0];
let joinButton = document.getElementsByClassName("join-button")[0];
let interface = document.getElementById("interface");

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isMobile() {
    return isAndroid() || isiOS();
}

function adjustForMobile() {
    mobile = isMobile();

    if (mobile) {
        talkButton.style.minWidth = "70px";
        talkButton.style.width = "80px";
        talkButton.style.paddingLeft = "8px";
        talkButton.style.paddingRight = "8px";
        interface.style.bottom = "10px";
        textOffset = 100;
        arrowOffset = 50;
        console.log("MOBILE");
    }

    if (!mobile) {
        textOffset = 150;
        arrowOffset = 0;
    }
}