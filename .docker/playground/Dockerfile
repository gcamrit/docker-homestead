FROM ubuntu:16.04

MAINTAINER MAINTAINER Amrit G.C. <music.demand01@gmail.com>

RUN DEBIAN_FRONTEND=noninteractive \
    apt-get update && \
    apt-get install -y language-pack-en-base &&\
    export LC_ALL=en_US.UTF-8 && \
    export LANG=en_US.UTF-8

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y software-properties-common
RUN DEBIAN_FRONTEND=noninteractive LC_ALL=en_US.UTF-8 add-apt-repository ppa:ondrej/php
RUN DEBIAN_FRONTEND=noninteractive LC_ALL=en_US.UTF-8 \
    apt-get update && apt-get install -y

ARG PUID=1000
ARG PGID=1000
ARG DOCKER_USER=homestead

RUN groupadd -g $PGID $DOCKER_USER && useradd -u $PUID -g $DOCKER_USER -m $DOCKER_USER && adduser $DOCKER_USER sudo
RUN \
  apt-get install -y curl git\
  php7.0 \
  php7.0-fpm \
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
  php7.0-sqlite3

ARG INSTALL_XDEBUG
RUN if [ ${INSTALL_XDEBUG} = true ]; then \
    apt-get install php7.0-xdebug \
;fi

ARG INSTALL_COMPOSER
RUN if [ ${INSTALL_COMPOSER} = true ]; then \
    curl -s http://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer \
;fi

ARG INSTALL_NODE_INSTALLER
RUN if [ ${INSTALL_NODE_INSTALLER} = true ]; then \
  curl -sL https://deb.nodesource.com/setup_7.x | bash && \
  apt-get install nodejs \
;fi

USER $DOCKER_USER
RUN echo "export PATH=${PATH}:~/.composer/vendor/bin" >> ~/.bashrc

ARG INSTALL_LARAVEL_INSTALLER
RUN if [ ${INSTALL_LARAVEL_INSTALLER} = true ]; then \
  composer global require "laravel/installer"  \
;fi

ARG INSTALL_SYMFONY_INSTALLER
RUN if [ ${INSTALL_SYMFONY_INSTALLER} = true ]; then \
  curl -LsS https://symfony.com/installer -o ~/.composer/vendor/bin/symfony  && \
  chmod a+x ~/.composer/vendor/bin/symfony \
;fi

WORKDIR /var/www/

RUN . ~/.bashrc
