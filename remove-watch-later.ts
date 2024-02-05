/* global onElementReady, queryForElements:true */
"use strict";

type HTMLReturnType = ReturnType<typeof document.getElementsByTagName>;

let documents: HTMLReturnType;

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
  };
  document.body.appendChild(button);
}

function getElements() {
  const elName = "ytd-playlist-video-renderer";
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

  const el = documents[0];
  /* const elem = el.getElementsByTagName('menu') */

  console.log(el);
  const dupa = el.querySelector("[id=menu]");
  if (!dupa) return;
  const iconButton = dupa.getElementsByTagName(
    "yt-icon-button",
  )[0] as HTMLButtonElement;
  iconButton.click();

  // @ts-ignore
  onElementReady(
    ".style-scope .ytd-menu-popup-renderer",
    { findOnce: false },
    (menuButton) => {
      console.log(menuButton);
      if (menuButton.textContent.includes("Remove from")) {
        menuButton.click();
      }
    },
  );

  /* const tagName = "tp-yt-iron-dropdown"; */
  /* const item = el.getElementsByTagName(tagName); */
}

main();
