### Play with webserver
- 
- From docker-homestead run command
```bash
$ docker-compose exec webserver bash
```
- Now run ```$ ls``` command, all the respositories which are inside Projects can be seen 
- Go to your project in which you want to play by ```$ cd project-repo``` 
- php and composer related commands can be accomplish from here
- Have Fun !

### Play with playground
- 
- From docker-homestead run command
```bash
$ docker-compose exec playground bash
```
- Now run ```$ ls``` command, all the respositories which are inside Projects can be seen 
- Go to your project in which you want to play by ```$ cd project-repo``` 
- php related commands can be accomplish from here
- Have Fun !
 
### How to work on mysql database ?
-
- From docker-homestead run command 
```bash
$ docker-compose exec mysql bash
```
- You will be able to do any database operation from command line.