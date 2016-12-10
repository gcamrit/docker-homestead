# docker-homestead
Docker Homestead is PHP development environment, and It contains pre-packaged Docker Images that provides you a wonderful *development* environment without requiring you to install PHP, NGINX, Composer, Nodejs, MySQL, REDIS, and any other software on your machines.

## Requirements

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker/)
- [Docker Compose](https://www.docker.com/products/docker-compose)

## Installation
1 - Clone this repository anywhere on your machine:

```bash
git clone https://github.com/gcamrit/docker-homestead.git
```
2 - Now you have to configure you development environment
```bash
cd docker-homestead && cp .env.example .env
```
3 - `.env` contains some configuration you might want to adjust as your need.
```bash
# this is what it contains by default feel free to change as you need

DOCKER_USER=homestead   # you username of your local machine
PROJECT_ROOT=~/Projects # where you put all you project on your machine

INSTALL_XDEBUG=false
INSTALL_OPCACHE=true
INSTALL_COMPOSER=true
INSTALL_LARAVEL_INSTALLER=true
INSTALL_SYMFONY_INSTALLER=true

MYSQL_DATABASE: homestead
MYSQL_USER: homestead
MYSQL_PASSWORD: secret
MYSQL_ROOT_PASSWORD: root
```
4 - Run Containers: *(Make sure you are in the `docker-homestead` folder before running the `docker-compose` commands).*
```bash
docker-compose up -d
```
5 - As this stack contains nginx all your project configuration file can be created in `config/sites` directory.
6 - You must add the "domains" for your Nginx sites to the hosts file on your machine.On Mac and Linux, this file is located at `/etc/hosts`. On Windows, it is located at  `C:\Windows\System32\drivers\etc\hosts.` The lines you add to this file will look like the following:
```bash
127.0.0.1  homestead.app
```

### I want to run some commands, What now ?

You can run commands from the Playground container.

1 - Enter the *playground* container:

```bash
docker-compose exec playground bash
```
4 - Run anything you want :)

```bash
php -v
```
```bash
composer
```
```bash
laravel
```
