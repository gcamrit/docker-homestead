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

MYSQL_VERSION=5.7 # available mysql version are 5.5, 5.6, 5.7
MYSQL_DATABASE=homestead
MYSQL_USER=homestead
MYSQL_PASSWORD=secret
MYSQL_ROOT_PASSWORD=root
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

7 - Supported Software (image)

- Database Engine: MySql
- Cache Engine: Redis
- PHP Server: Nginx
- PHP Compiler: PHP FPM
- Random Tools: Laravel Installer, Symfony Installer
- NodeJs