FROM amritgc/nginx-php

LABEL MAINTAINER="Amrit G.C. <music.demand01@gmail.com>"

ARG DOCKER_USER=homestead
ARG PUID=1000
ARG PGID=1000

RUN groupadd -g $PGID $DOCKER_USER && useradd -u $PUID -g $DOCKER_USER -m $DOCKER_USER && adduser $DOCKER_USER sudo


RUN curl -s http://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer 
RUN chown homestead:homestead /usr/local/bin/composer


RUN curl -sL https://deb.nodesource.com/setup_9.x | bash && \
  apt-get install nodejs


USER $DOCKER_USER
RUN mkdir -p /home/homestead/.composer/cache && chown homestead:homestead /home/homestead/.composer/cache \
&& chmod 777 -R /home/homestead/.composer

RUN echo "export PATH=${PATH}:~/.composer/vendor/bin" >> ~/.bashrc

RUN composer global require "hirak/prestissimo"
RUN composer global require "laravel/installer"

RUN curl -LsS https://symfony.com/installer -o ~/.composer/vendor/bin/symfony  && \
  chmod a+x ~/.composer/vendor/bin/symfony


USER root

RUN apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* 

USER $DOCKER_USER

WORKDIR /var/www/

RUN . ~/.bashrc
CMD [ "bash" ]