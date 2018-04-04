### Installation
- Run the playground service using ```$ docker-compose exec playground bash```
 
- Install via Composer Create-Project

  ```bash
  $ composer create-project symfony/website-skeleton blog
  ```
  
- Install via Symfony Installer

  ```bash
  $ symfony new blog
  ```  
  
- Example config file for symfony application
  Inside the config/sites directory just create symfony-blog.conf and configuration be something like this
  
  ```bash
  server {
    listen 80;
    listen [::]:80;
  
    server_name symfony-blog.local;
    root /var/www/symfony-blog/public;
  
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
  127.0.0.1  symfony-blog.local
  ```
 - In your symfony project .env file set following 
   ```bash
   DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
   ```   
   For e.g.

   ```bash
   DATABASE_URL=mysql://homestead:secret@127.0.0.1:3306/db_name
   ```