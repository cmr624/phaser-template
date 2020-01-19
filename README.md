# Phaser Typescript Template

## Features

From Yandeu - Typescript, Scaffold, Webpack configuration, etc.

### Library Submodule

Library submodule set up, with default text in `mainScene.ts`

### (Not tested) Preload Script

run `npm run preload`

This gets the string keys of the items in the `/assets/` folder and creates a scene file (currently) in

`./src/utils/dist/preloadScene.ts`

that also outputs a "keys" const called `PRELOADED_KEYS` we can use to access all the preloaded assets
