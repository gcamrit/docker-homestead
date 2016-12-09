FROM ubuntu:16.04

MAINTAINER MAINTAINER Amrit G.C. <music.demand01@gmail.com>

ARG PUID=1000
ARG PGID=1000
ARG DOCKER_USER=amritgc

RUN groupadd -g $PGID $DOCKER_USER && useradd -u $PUID -g $DOCKER_USER -m $DOCKER_USER && adduser $DOCKER_USER sudo

RUN apt-get update && \
  apt-get install -y \
  build-essential \
  php7.0 \
  php7.0-cli \
  php7.0-common \
  php7.0-mbstring \
  php7.0-mcrypt \
  php7.0-json \
  php7.0-gd \
  php7.0-mysql \
  php7.0-curl \
  php7.0-zip \
  php7.0-xml \
  php7.0-sqlite3 \
  git \
  curl 

ARG INSTALL_XDEBUG=false
RUN if [ ${INSTALL_XDEBUG} = true ]; then \
    apt-get install php7.0-xdebug \
;fi

ARG INSTALL_OPCACHE=false
RUN if [ ${INSTALL_OPCACHE} = true ]; then \
    apt-get install php7.0-opcache \
;fi

RUN rm -r /var/lib/apt/lists/*


ARG INSTALL_COMPOSER=true
RUN if [ ${INSTALL_COMPOSER} = true ]; then \
    curl -s http://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer \
;fi

ARG INSTALL_NODE_INSTALLER=true
RUN if [ ${INSTALL_NODE_INSTALLER} = true ]; then \
  curl -sL https://deb.nodesource.com/setup_7.x | bash && \
  apt-get install nodejs \
;fi

USER $DOCKER_USER
RUN echo "export PATH=${PATH}:~/.composer/vendor/bin" >> ~/.bashrc

ARG INSTALL_LARAVEL_INSTALLER=true
RUN if [ ${INSTALL_LARAVEL_INSTALLER} = true ]; then \
  composer global require "laravel/installer"  \
;fi

WORKDIR /var/www/

RUN . ~/.bashrc
