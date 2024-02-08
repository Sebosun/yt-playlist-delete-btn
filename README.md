# About

Little script that generates 'Delete' buttons on yt playlist pages.

Ideally I'd want to delete in bulk, but it's buggy and I couldn't back-engineer direct requests.

Add to your tampermonkey.

# Setup

You can enable reading from files in Tampermonkey, so basically i point it at my dist/index.js file

We listen to changes with `fs.watch` and launch a script that compiles script that way, then I can just refresh the page without worrying too much about running the right script.

`utils/deploy.js` just appends bunch of user-script required data in case I want to upload it in full somewhere
