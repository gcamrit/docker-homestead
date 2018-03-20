### Installation
- Run the playground service using ```$ docker-compose exec playground bash```
 
- Install via Composer Create-Project

  ```bash
  $ composer create-project --prefer-dist laravel/laravel blog
  ```
  
- Install via Laravel Installer

  ```bash
  $ laravel new blog
  ```  
  
- Example config file for laravel application
  Inside the config/sites directory just create laravel-blog.conf and configuration be something like this
  
  ```bash
  server {
    listen 80;
    listen [::]:80;
  
    server_name laravel-blog.local;
    root /var/www/laravel-blog/public;
  
    index index.php index.html index.htm index.nginx-debian.html;
  
      
    location / {
      try_files $uri $uri/ /index.php?$query_string;
    }
  
    location ~ \.php$ {
      include snippets/fastcgi-php.conf;
      fastcgi_pass 0.0.0.0:9000;
    }
  
    location ~ /\.ht {
      deny all;
    }
  
    location ~ /.well-known {
      allow all;
    }
  }
  ```
  Do not forget to register the domain in /etc/hosts
  ```bash
  127.0.0.1  laravel-blog.local
  ```
 - In your laravel project .env file set following 
   ```
   DB_HOST=mysql
   DB_USERNAME=homestead
   DB_PASSWORD=secret
   REDIS_HOST=redis
   ```
 - Now Open you browser and type `http://laravel-blog.local/` it will run in php7.2 if you want to run in php7.1 type `http://laravel-blog.local:81/`
