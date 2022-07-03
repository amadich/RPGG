![image](https://user-images.githubusercontent.com/74735976/177026408-bf3ab665-ded1-44d6-a6f3-1bdd75bde620.png)
![image](https://user-images.githubusercontent.com/74735976/177026418-326e1e77-4df7-40cb-94eb-76e37ef9a84d.png)
![image](https://user-images.githubusercontent.com/74735976/177026428-8dc24c19-98a5-4e68-bf8c-22db6ac9a26a.png)

# Basic JavaScript project template

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/PhaserEditor2D/starter-template-basic-javascript)

This is a Phaser Editor 2D v3 project template.

## Configuration

* It includes the latest Phaser v3 runtime (in the `lib/` folder).
* It is coded in JavaScript.
* It includes a VS Code project configuration (`jsconfig.json` file) and the type definitions (in the `types/` folder).

## Run the editor

If you have NodeJS installed, you can run the editor using the `editor` NPM script, defined in the `package.json` file:

```bash
$ npm install
$ npm run editor
```

If you are in a remote environment (like the Gitpod.io IDE), then run the editor like this:

```bash
$ npm run editor-remote
```

If you want to see all the editor options, run:

```bash
$ npx phasereditor2d-launcher -help
```

If Phaser Editor 2D Core is globally installed, you can run:

```bash
$ PhaserEditor2D -project .
```
