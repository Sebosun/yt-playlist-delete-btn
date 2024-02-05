/* global onElementReady, queryForElements:true */
"use strict";
var documents;
var INNER_YOUTUBE_API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
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
    };
    document.body.appendChild(button);
}
function getElements() {
    var elName = "ytd-playlist-video-renderer";
    documents = document.getElementsByTagName(elName);
    handleElements();
}
function handleElements() {
    /* documents.forEach((el) => { */
    /*   const tabIndex = 0 */
    /*   const propertyName = "tabindex" */
    /*   const selector = el.querySelector(`[${propertyName}=${tabIndex}]`) */
    /*   console.log(`selector ${selector}`) */
    /**/
    /* }); */
    var el = documents[0];
    /* const elem = el.getElementsByTagName('menu') */
    console.log(el);
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
main();
