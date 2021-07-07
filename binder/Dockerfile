FROM jupyter/minimal-notebook:ubuntu-20.04

ENV HOME /home/${NB_USER}

# Make sure the contents of our repo are in ${HOME}
COPY . ${HOME}
USER root
RUN chown -R ${NB_UID} ${HOME}
USER ${NB_USER}

ENV STATIC_FILE_HANDLER_PUBLIC_DIR ${HOME}/public

RUN pip install build && \
if test -d ./tmp; then rm -rf ./tmp; fi && \
mkdir ./tmp && \
git clone https://github.com/educational-technology-collective/etc_jupyterlab_http_static_file_handler.git ./tmp/etc_jupyterlab_http_static_file_handler && \
git clone https://github.com/educational-technology-collective/etc_jupyterlab_telemetry.git ./tmp/etc_jupyterlab_telemetry && \
python -m build ./tmp/etc_jupyterlab_http_static_file_handler && \
python -m build ./tmp/etc_jupyterlab_telemetry && \
pip install ./tmp/etc_jupyterlab_http_static_file_handler/dist/etc_jupyterlab_http_static_file_handler-*-py3-none-any.whl && \
pip install ./tmp/etc_jupyterlab_telemetry/dist/etc_jupyterlab_telemetry-*-py3-none-any.whl