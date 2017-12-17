# Web VR Experiments
This is a collection of projects that I developed using mozilla's A-Frame. Most of the functionality is powered by JavaScript. During my time at AltspaceVR, I spent time learning and developing in A-Frame because it was part of the SDK stack that allowed people to publish and display content directly in the AltspaceVR social VR network. These efforts helped play a role in some of the earliest User Generated Content in VR.

**Compatability Warning: A-frame will only run on certain browsers: https://webvr.rocks/**

## Radial Menu
Developed a 3D radial menu. The menu is dynamically generated based on the number of entity tags that exist inside of a wrapper class. Was looking for a good way to view a list of content in VR at the time and the radial menu seemed to be a good option. https://github.com/nickcottrell/vr/tree/master/examples/radial_menu

![Radial Menu](/img/example-radial-menu.png)
http://nickcottrell.info/vr/examples/radial_menu/


## JSON Consumption
This was a scene that features elements that are determined by a static block of JSON. The idea was to have the modile consume JSON in the simplest way, so it could be used as a basic building block. https://github.com/nickcottrell/vr/tree/master/examples/eat_json
![JSON Consumption](/img/example-jay-son.png)
http://nickcottrell.info/vr/examples/eat_json/

## Sushi Bar
Published a basic 360 scene. I created the environment and props in Maya and brought the items in as a frame entities. https://github.com/nickcottrell/vr/tree/master/examples/sushi_bar
![Sushi Bar Web VR](/img/example-sushi-bar-web-vr.png)
http://nickcottrell.info/vr/examples/sushi_bar/


## TiltBrush Import
Created a drawing in Tiltbrush and imported it into the a-frame scene. This was back when TiltBrush was an experimental app on the vive. https://github.com/nickcottrell/vr/tree/master/examples/tiltbrush_import
![TiltBrush Import](/img/example-tiltbrush-import.png)
http://nickcottrell.info/vr/examples/tiltbrush_import/



<hr>
The base of this is forked from
https://aframe.io/aframe-boilerplate/



<hr>
<hr>

### Install


    npm install
	npm start
    open http://localhost:3000/

<hr>


### Publishing your scene

To publish scene to GitHub Pages:

    npm run deploy

<hr>

To know which GitHub repo to deploy to, the `deploy` script first looks at the optional [`repository` key](https://docs.npmjs.com/files/package.json#repository) in the [`package.json` file](package.json) (see [npm docs](https://docs.npmjs.com/files/package.json#repository) for sample usage). If the `repository` key is missing, the script falls back to using the local git repo's remote origin URL (you can run the local command `git remote -v` to see all your remotes; also, you may refer to the [GitHub docs](https://help.github.com/articles/about-remote-repositories/) for more information).

<hr>


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site:

[__http://localhost:3000/__](http://localhost:3000/)

If you wish to serve the site from a different port:

    PORT=8000 npm start


### License

This program is free software and is distributed under an [MIT License](LICENSE).
