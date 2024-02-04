"use strict";

let documents = []
const INNER_YOUTUBE_API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"

const payload = [
  {
    "setVideoId": "14F8A10E6D7256D8",
    "action": "ACTION_REMOVE_VIDEO"
  }
]


function main() {
  createButtonToToggle();
}

function createButtonToToggle() {
  const button = document.createElement('button');

  /* style button in bottom left corner */
  button.style.position = 'absolute';
  button.style.bottom = '10px';
  button.style.left = '10px';
  button.style.zIndex = '9999';
  button.style.backgroundColor = 'red';
  button.style.color = 'white';
  button.style.padding = '10px';
  button.style.border = 'none';
  button.innerHTML = 'Toggle';
  button.onclick = function() {
    getElements();
  }
  document.body.appendChild(button);
}

function getElements() {
  const elName = 'ytd-playlist-video-renderer';
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

  const el = documents[0]
  console.log(el);
  /* const tabIndex = 0 */
  /* const propertyName = "tabindex" */
  /* const tagName = "ytd-menu-service-item-renderer" */
  /* const selector = el.querySelectorAll(`${tagName}[${propertyName}=${tabIndex}]'`); */

  /* console.log(`selector ${selector}`) */
}


main();
