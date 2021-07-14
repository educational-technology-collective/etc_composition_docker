FROM jupyter/minimal-notebook:ubuntu-20.04

USER root

RUN if test -d ./tmp; then rm -rf ./tmp; fi && mkdir ./tmp

COPY requirements.txt ./tmp/requirements.txt 

RUN conda install --file ./tmp/requirements.txt 

ENV STATIC_FILE_HANDLER_DOC_ROOT ${HOME}/public_html
#  This environment variable specifies the document root for HTML files.

##
RUN pip install build && \
if test -d ./tmp; then rm -rf ./tmp; fi && \
mkdir ./tmp && \
git clone https://github.com/educational-technology-collective/etc_jupyterlab_http_static_file_handler.git ./tmp/etc_jupyterlab_http_static_file_handler && \
python -m build ./tmp/etc_jupyterlab_http_static_file_handler && \
pip install ./tmp/etc_jupyterlab_http_static_file_handler/dist/etc_jupyterlab_http_static_file_handler-*-py3-none-any.whl
##  This layer adds the HTTP server capabilities to the Binder deployment.

##
RUN if test -d ./tmp; then rm -rf ./tmp; fi && \
mkdir ./tmp && \
git clone https://github.com/educational-technology-collective/etc_jupyterlab_telemetry.git ./tmp/etc_jupyterlab_telemetry && \
python -m build ./tmp/etc_jupyterlab_telemetry && \
pip install ./tmp/etc_jupyterlab_telemetry/dist/etc_jupyterlab_telemetry-*-py3-none-any.whl
##  Add additional extensions here.

RUN if test -d ./tmp; then rm -rf ./tmp; fi
#  Finally, remove the ./tmp directory if it exists.

ARG NB_USER
ARG NB_UID
ENV USER ${NB_USER}
ENV HOME /home/${NB_USER}