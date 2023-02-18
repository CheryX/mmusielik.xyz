---
layout: ../../layouts/PostLayout.astro
title: Discord RPC slideshow tutorial
pubDate: 2022-10-22
description: 'How to make an animated status on discord using JavaScript.'
---

In this tutorial I will explain how to create your own discord rich presence slideshow!

## I did a little trolling

Ever wanted to *troll* your friends with a fake activity on discord, but a classic static image won't do the trick? Good news! I was really bored and decided to do just that!

<!-- Just realized i never added any video on a site -->
<video width="400" controls>
  <source src="/assets/blog/rpc.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>

With this setup, you can make literal slideshows using rich presence. ¯\\\_(ツ)\_/¯

## The actual tutorial

Prerequisites:

- A discord account
- Assets for the image, minimum 512px × 512px.
- Lines of text filled with the content
- Any knowledge about basic JavaScript
- Friends (you can always troll yourself)

Let's say you are a Richard Stallman enthusiast and you really want to tell people that GNU/Linux is the correct form of mentioning Linux, and you decide to put [the Stallman Copypasta](https://stallman-copypasta.github.io/) with some nerd (🤓) images.

### Preparing the assets

Try downloading some .jpgs from the internet, or you can create your own! For the purpose of the tutorial I drew 2 nerd faces using Krita (they will be shown later).

Now we are going to create an application on [discord.dev](https://discord.dev):

![](/assets/blog/rpc2.png)

In the **Rich Presence > Art Assets** tab, upload your assets, then approve changes.

> Note: You need to wait 3-5 minutes for assets to cache. Until that happens, you can prepare the code. 

![](/assets/blog/rpc3.png)

At last, copy your application ID that is seen in the **General Information** tab (This is not private information, you can share it)

### Doing JavaScript

I won't attempt to make my own RPC framework just to troll some people online, so I will use a npm package [discord-rich-presence 0.0.8](https://www.npmjs.com/package/discord-rich-presence).

Create a new Node.js project and install the package **discord-rich-presence** using `npm i discord-rich-presence`. Inside the `index.js` file we are going to create 2 const arrays: one with the text, one with the assets' names. 

```js
//PS: Try to keep the amount of lines even

const lines = [
  // Lines used with the 1st asset
  [
    `I'd just like to`,
    `interject for a moment.`,
    `What you're refering`,
    `to as Linux, is in fact,`,
    `GNU/Linux, or as I've`,
    `recently taken to calling it,`,
    ...
  ],
  // Lines used with the 2st asset
  [
    `Many computer users run`,
    `a modified version of`,
    `the GNU system every day,`,
    `without realizing it.`,
    ...
  ]
]

const assets = ["nerd", "nerd2"]
```

Then create the client and a sleep function, which we will use later:

```js
APP_ID = "123123123";

const client = require('discord-rich-presence')(APP_ID);
const sleep = ms => new Promise(r => setTimeout(r, ms));
```

The only part left is the code to change the RPC:

```js
async function main() {
  while (true) {
    for (let j in lines) {
      for (let i = 0; i < Math.floor(lines[j].length / 2); i++) {
  
        client.updatePresence({
          state: lines[j][2*i+1],
          details: lines[j][2*i],
          startTimestamp: 0,
          largeImageKey: assets[j],
          instance: true,
        });

        await sleep(5000);
  
      }
    }
  }  
}

main()
```

Congratulations! You can now run the code using `node .` while running discord, and troll your friends