FROM amritgc/nginx-php:php7.0

MAINTAINER Amrit G.C. <music.demand01@gmail.com>
RUN apt-get update

ARG INSTALL_XDEBUG
RUN if [ ${INSTALL_XDEBUG} = true ]; then \
    apt-get install php7.0-xdebug \
;fi

RUN sed -i '/;daemonize /c \
daemonize = no' /etc/php/7.0/fpm/php-fpm.conf

RUN sed -i '/^listen /c \
listen = 0.0.0.0:9000' /etc/php/7.0/fpm/pool.d/www.conf

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/

EXPOSE 80
CMD service php7.0-fpm start && nginx
