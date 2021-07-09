# ETC Composition Docker

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/educational-technology-collective/etc_composition_docker.git/main?urlpath=lab&filepath=Untitled.ipynb)

# ETC Composition Docker

## Description

This repository is a Binder-ready repository.  This Binder-ready repository includes a simple webserver with your Binder deployment.  The web server can be used in order to serve HTML documents that may link to your JupyterLab instance.

## Usage

### Configure the document root.

You may optionaly configure the document root.  The `Dockerfile` is located in the `./binder` directory of the repository. Open the `Dockerfile` and set the environment variable named STATIC_FILE_HANDLER_DOC_ROOT to a path that the Tornado Web Server will use for serving web pages.  For example, the following setting sets the `public_html` directory in the root of the Binder-ready repository as the document root.

```dockerfile
ENV STATIC_FILE_HANDLER_DOC_ROOT ${HOME}/public_html
```
You can then place your `index.html` file in the document root folder.  Tornado will serve the `index.html` file when given the path described below.

### URL Paths
The URL path that will load the `index.html` in the specified document root is:
https://mybinder.org/v2/gh/educational-technology-collective/etc_composition_docker.git/main?urlpath=public-html/index.html

The URL Path that will load the JuptyerLab Notebook that is in the root of the Binder-ready repository is:
https://mybinder.org/v2/gh/educational-technology-collective/etc_composition_docker.git/main?urlpath=lab&filepath=Untitled.ipynb

### Link to the JupyterLab Notebook
Add an `A` tag to your `index.html` file with the `href` attribute assigned to the URL of the JupyterLab Notebook.  For example:

```html
<a href="https://mybinder.org/v2/gh/educational-technology-collective/etc_composition_docker.git/main?urlpath=lab&filepath=Untitled.ipynb">JupyterLab Notebook</a>
```

Fri Jul  9 04:45:14 PM EDT 2021