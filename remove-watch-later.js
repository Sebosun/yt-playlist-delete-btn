/* global onElementReady, queryForElements:true */
"use strict";
var documents;
function main() {
    createButtonToToggle();
}
function createButtonToToggle() {
    var button = document.createElement("button");
    /* style button in bottom left corner */
    button.style.position = "absolute";
    button.style.bottom = "10px";
    button.style.left = "10px";
    button.style.zIndex = "9999";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.padding = "10px";
    button.style.border = "none";
    button.innerHTML = "Toggle";
    button.onclick = function () {
        getElements();
        addDeleteButtons();
    };
    document.body.appendChild(button);
}
function getElements() {
    var elName = "ytd-playlist-video-renderer";
    documents = document.getElementsByTagName(elName);
}
function addDeleteButtons() {
    for (var index = 0; index < documents.length; index++) {
        var doc = documents[index];
        createDeleteButton(doc);
    }
}
function createDeleteButton(el) {
    var button = document.createElement("button");
    button.style.position = "relative";
    button.style.top = "0px";
    button.style.left = "25px";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.padding = "10px";
    button.style.border = "none";
    button.style.zIndex = "9999";
    button.innerHTML = "Delete";
    button.onclick = function () {
        handleDeleteVideo(el);
    };
    el.appendChild(button);
}
function handleDeleteVideo(el) {
    var dupa = el.querySelector("[id=menu]");
    if (!dupa)
        return;
    var iconButton = dupa.getElementsByTagName("yt-icon-button")[0];
    iconButton.click();
    // @ts-ignore
    onElementReady(".style-scope .ytd-menu-popup-renderer", { findOnce: false }, function (menuButton) {
        console.log(menuButton);
        if (menuButton.textContent.includes("Remove from")) {
            menuButton.click();
        }
    });
    /* const tagName = "tp-yt-iron-dropdown"; */
    /* const item = el.getElementsByTagName(tagName); */
}
// @ts-ignore
/* onElementReady( */
/*   "ytd-playlist-video-renderer.ytd-playlist-video-list-renderer", */
/*   { findOnce: false }, */
/*   addPlaylistVideoDeleteButton, */
/* ); */
/**/
main();
