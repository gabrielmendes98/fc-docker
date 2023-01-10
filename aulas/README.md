# Docker

Repositório criado para praticar os conceitos do Docker e Docker Compose

## Comandos utilizados

- docker build -t gabrielmssantiago/nginx-com-vim:latest .
- o ponto no final, indica em qual pasta está o dockerfile

<br/>

- docker images
- mostra minhas imagens

<br/>

- docker run -it gabrielmssantiago/nginx-com-vim bash
- entra na imagem que eu criei

<br />

- dica: docker rm $(docker ps -a -q) -f
- remove todos os containers ativos e inativos

<br />

- docker build -t gabrielmssantiago/laravel:latest .
- docker run --rm -d --name laravel -p 8000:8000 gabrielmssantiago/laravel
- roda o container do laravel

<br />

- Rodando servidor laravel com nginx como proxy reverso:
- docker build -t gabrielmssantiago/laravel:prod laravel -f laravel/Dockerfile.prod
- docker build -t gabrielmssantiago/nginx:prod nginx -f nginx/Dockerfile.prod
- docker network create laranet
- docker run -d --network laranet --name laravel gabrielmssantiago/laravel:prod
- docker run -d --network laranet --name nginx -p 8080:80 gabrielmssantiago/nginx:prod
- acessar localhost:8080

## Docker networks

- bidge: tipo mais comum e usado por default. Faz com que um container se comunique com outro.
- host: mescla a network do docker com a network do host do docker.
- overlay: não é muito comum. faz com que containers de maquinas diferentes se comuniquem. geralmente é usado no docker swarm.
- macvlan
- none: nenhuma rede
