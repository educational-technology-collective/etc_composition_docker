# ETC Composition Docker

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/educational-technology-collective/etc_composition_docker/main?filepath=Untitled.ipynb)

# ETC Composition Docker

## Description

This repository is a Binder-ready repository.  This Binder-ready repository includes a simple webserver with your Binder deployment.  The web server can be used in order to serve HTML documents that may link to your JupyterLab instance.

## Usage

### Configure the document root.

You may optionaly configure the document root.  The `Dockerfile` is located in the `./binder` directory. Set the environment variable named STATIC_FILE_HANDLER_DOC_ROOT to the document root of the Tornado Web Server.  For example, the following setting sets the `public_html` directory in the root of the Binder-ready repository as the document root.

```dockerfile
ENV STATIC_FILE_HANDLER_DOC_ROOT ${HOME}/public_html
```
You can then place your `index.html` file in the document.
