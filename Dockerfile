FROM jupyter/minimal-notebook:ubuntu-20.04

USER root

WORKDIR ${HOME}

ENV STATIC_FILE_HANDLER_DOC_ROOT ${HOME}/public_html
#  This environment variable specifies the document root for HTML files.

COPY requirements.txt ./tmp/requirements.txt 
COPY ["resources", "Untitled.ipynb", "./"]
COPY ["public_html", "scripts", "./public_html/"]

RUN conda install --file ./tmp/requirements.txt && \
if test -d ./tmp; then rm -rf ./tmp; fi && mkdir ./tmp && \
git clone https://github.com/educational-technology-collective/etc_jupyterlab_http_static_file_handler.git ./tmp/etc_jupyterlab_http_static_file_handler && \
python -m build ./tmp/etc_jupyterlab_http_static_file_handler && \
pip install ./tmp/etc_jupyterlab_http_static_file_handler/dist/etc_jupyterlab_http_static_file_handler-*-py3-none-any.whl && \ 
if test -d ./tmp; then rm -rf ./tmp; fi && \
mkdir ./tmp && \
git clone https://github.com/educational-technology-collective/etc_jupyterlab_telemetry.git ./tmp/etc_jupyterlab_telemetry && \
python -m build ./tmp/etc_jupyterlab_telemetry && \
pip install ./tmp/etc_jupyterlab_telemetry/dist/etc_jupyterlab_telemetry-*-py3-none-any.whl && \
if test -d ./tmp; then rm -rf ./tmp; fi && chown -R ${NB_UID} ${HOME}

USER ${NB_USER}
