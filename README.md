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

## Docker networks

- bidge: tipo mais comum e usado por default. Faz com que um container se comunique com outro.
- host: mescla a network do docker com a network do host do docker.
- overlay: não é muito comum. faz com que containers de maquinas diferentes se comuniquem. geralmente é usado no docker swarm.
- macvlan
- none: nenhuma rede
