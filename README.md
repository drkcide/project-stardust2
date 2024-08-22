# PjS System

![Foundry v11](https://img.shields.io/badge/foundry-v11-green) ![Foundry v12](https://img.shields.io/badge/foundry-v12-green)

This system is the project-stardust system that you can use as a starting point for building your own custom sci-fi system based on the Star Wars universe and uses a modifed version of "The Morrow Project" system. 

> **System Updates are WIP**
> 
> The v12 branch of PjS has switched to using Foundry's ApplicationV2 version of document sheets, and the updates for the accompanying tutorial on the wiki are still in progress.You'll need to use the comments within the actor and item sheet classes for context on what's happening.

## Usage



Check out the [Official Foundry VTT Discord](https://discord.gg/foundryvtt)! The #system-development channel has helpful pins and is a good place to ask questions about any part of the foundry application.

For more static references, the [Knowledge Base](https://foundryvtt.com/kb/) and [API Documentation](https://foundryvtt.com/api/) provide different levels of detail. For the most detail, you can find the client side code in your foundry installation location. Classes are documented in individual files under `resources/app/client` and `resources/app/common`, and the code is collated into a single file at `resources/app/public/scripts/foundry.js`.


## Compiling the CSS

This repo includes both CSS for the theme and SCSS source files. If you're new to CSS, it's probably easier to just work in those files directly and delete the SCSS directory. If you're interested in using a CSS preprocessor to add support for nesting, variables, and more, you can run `npm install` in this directory to install the dependencies for the scss compiler. After that, just run `npm run build` to compile the SCSS and start a process that watches for new changes.

![image](http://mattsmith.in/images/project-stardust2.png)
