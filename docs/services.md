### Webserver
- From docker-homestead run command
```bash
$ docker-compose exec webserver bash
```
- Now run ```$ ls``` command, all the respositories which are inside Projects can be seen 
- Go to your project in which you want to play by ```$ cd project-repo``` 
- php_cli related commands can be accomplish from here
- Have Fun !

### Playground
- From docker-homestead run command
```bash
$ docker-compose exec playground bash
```
- Now run ```$ ls``` command, all the respositories which are inside Projects can be seen 
- Go to your project in which you want to play by ```$ cd project-repo``` 
- php_cli, composer, npm etc related commands can be accomplish from here
- Have Fun !
 
### Mysql
- From docker-homestead run command 
```bash
$ docker-compose exec mysql bash
```
- Run the following command, and login to mysql
```bash
$ mysql -u homestead -p
```

- Then You will be able to do any database operation from command line.