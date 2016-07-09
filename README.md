# WebVR scenes using A-Frame.

Cloned from
https://aframe.io/aframe-boilerplate/



### Install


    npm install
	npm start
    open http://localhost:3000/

<hr>


## Publishing your scene

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


## License

This program is free software and is distributed under an [MIT License](LICENSE).
