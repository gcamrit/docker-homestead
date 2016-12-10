FROM ubuntu:16.04

MAINTAINER MAINTAINER Amrit G.C. <music.demand01@gmail.com>

RUN \
  apt-get update && \
  apt-get install -y nginx \
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
  php7.0-sqlite3 && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf

ARG INSTALL_XDEBUG=false
RUN if [ ${INSTALL_XDEBUG} = true ]; then \
    apt-get install php7.0-xdebug \
;fi

ARG INSTALL_OPCACHE=false
RUN if [ ${INSTALL_OPCACHE} = true ]; then \
    apt-get install php7.0-opcache \
;fi

RUN sed -i '/;daemonize /c \
daemonize = no' /etc/php/7.0/fpm/php-fpm.conf

RUN sed -i '/^listen /c \
listen = 0.0.0.0:9000' /etc/php/7.0/fpm/pool.d/www.conf

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/

EXPOSE 80
CMD service php7.0-fpm start && nginx
