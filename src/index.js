/* global onElementReady, queryForElements:true */
"use strict";
let documents;
function main() {
    createButtonToToggle();
}
function createButtonToToggle() {
    const button = document.createElement("button");
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
    const elName = "ytd-playlist-video-renderer";
    documents = document.getElementsByTagName(elName);
}
function addDeleteButtons() {
    for (let index = 0; index < documents.length; index++) {
        const doc = documents[index];
        createDeleteButton(doc);
    }
}
function createDeleteButton(el) {
    const button = document.createElement("button");
    button.style.position = "relative";
    button.style.top = "0px";
    button.style.left = "25px";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.padding = "10px";
    button.style.border = "none";
    button.style.zIndex = "9999";
    button.style.cursor = "pointer";
    button.innerHTML = "Delete";
    button.onclick = function () {
        handleDeleteVideo(el);
    };
    el.appendChild(button);
}
function handleDeleteVideo(el) {
    const dupa = el.querySelector("[id=menu]");
    if (!dupa)
        return;
    const iconButton = dupa.getElementsByTagName("yt-icon-button")[0];
    iconButton.click();
    // @ts-expect-error - Library imported via cdn
    onElementReady(".style-scope .ytd-menu-popup-renderer", { findOnce: false }, 
    // @ts-expect-error - Library imported via cdn
    (menuButton) => {
        if (menuButton.textContent.includes("Remove from")) {
            menuButton.click();
        }
    });
    /* const tagName = "tp-yt-iron-dropdown"; */
    /* const item = el.getElementsByTagName(tagName); */
}
main();
