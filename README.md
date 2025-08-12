# Central de Comandos

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9mqQfseRfpiL6LRAyO6Nxe6kj3Xv93OGpIGg4Y5pJhrjTbR2Y7I9vmcmNCCZSo99C51vxV_XGqXj-JO3wfCi2G5so-sel3b0wGF2Wx3fGwZ0EvAkoYTkAxFUwMgahTm9lqHfgtz9xlOA/s652/getgo.gif" width=1200>

## Sumário das Centrais

- [Comandos Docker](#-comandos-docker)
- [Comandos Git](#-comandos-git)

> **Comandos Windows**
- [Comandos CMD](#-comandos-cmd-prompt-de-comando)
- [Comandos Executar](#comandos-executar)

> **Comandos Linux**
- [Comandos Basicos e Avançados (Ubuntu/Lubuntu)](#-comandos-linux-ubuntulubuntu)
---

> **Ferramentas**

## 🐳 Comandos Docker
[Voltar ao Início](#central-de-comandos)

<img src="https://blog.elaniin.com/content/images/size/w1600/2022/08/Docker_jpg.jpeg" width=1200px height="400">

### Sumário

- [Instalação e Configuração](#️-instalação-e-configuração)
- [Imagens](#-imagens)
- [Containers](#-containers)
- [Volumes](#-volumes)
- [Redes](#-redes)
- [Docker Compose](#-docker-compose)
- [Outros Comandos Úteis](#-outros-comandos-úteis)


### ⚙️ Instalação e Configuração

- **Verificar instalação:** `docker --version`  
- **Verificar status do serviço Docker:** `systemctl status docker`  
- **Iniciar o serviço Docker:** `sudo systemctl start docker`  
- **Habilitar Docker na inicialização:** `sudo systemctl enable docker`  
- **Executar Docker sem sudo (Linux):** `sudo usermod -aG docker $USER && newgrp docker`  


### 📥 Imagens

- **Listar imagens locais:** `docker images`  
- **Buscar imagem no Docker Hub:** `docker search <nome>`  
- **Baixar imagem:** `docker pull <nome-da-imagem>`  
- **Remover imagem:** `docker rmi <imagem>`  
- **Criar imagem a partir de Dockerfile:** `docker build -t <nome-da-imagem> .`  


### 🧱 Containers

- **Listar containers em execução:** `docker ps`  
- **Listar todos os containers (inclusive parados):** `docker ps -a`  
- **Criar e executar container:** `docker run -d --name <nome> <imagem>`  
- **Executar container com terminal interativo:** `docker run -it <imagem> /bin/bash`  
- **Parar container:** `docker stop <container>`  
- **Iniciar container parado:** `docker start <container>`  
- **Remover container:** `docker rm <container>`  
- **Acessar terminal do container:** `docker exec -it <container> /bin/bash`  


### 💾 Volumes

- **Criar volume:** `docker volume create <nome>`  
- **Listar volumes:** `docker volume ls`  
- **Usar volume no container:** `docker run -v <nome-volume>:/caminho/no/container <imagem>`  
- **Remover volume:** `docker volume rm <nome>`  


### 🌐 Redes

- **Listar redes:** `docker network ls`  
- **Criar nova rede:** `docker network create <nome>`  
- **Conectar container à rede:** `docker network connect <rede> <container>`  
- **Remover rede:** `docker network rm <nome>`  


### 🧩 Docker Compose

- **Subir serviços definidos no `docker-compose.yml`:** `docker-compose up -d`  
- **Parar os serviços:** `docker-compose down`  
- **Ver logs dos serviços:** `docker-compose logs`  
- **Reconstruir serviços:** `docker-compose up --build`  


### 🛠 Outros Comandos Úteis

- **Ver uso de recursos (CPU, RAM):** `docker stats`  
- **Ver detalhes do container:** `docker inspect <container>`  
- **Copiar arquivo para container:** `docker cp <arquivo> <container>:/caminho`  
- **Copiar arquivo do container:** `docker cp <container>:/caminho <destino-local>`  
- **Limpar containers/parados e imagens não utilizadas:** `docker system prune`  

---


## 🧠 Comandos Git

[Voltar ao Início](#central-de-comandos)


<img src="https://steelcityamir.com/blog/git-error-fatal-not-a-valid-object-name-master/cover.png" width=1000px height="400px" >

### Sumário

- [Inicialização e Configuração](#️-inicialização-e-configuração)
- [Status e Histórico](#-status-e-histórico)
- [Trabalhando com Commits](#-trabalhando-com-commits)
- [Branches (Ramificações)](#-branches-ramificações)
- [Merge e Rebase](#-merge-e-rebase)
- [Repositório Remoto](#-repositório-remoto)
- [Stash (Guardar alterações temporárias)](#-stash-guardar-alterações-temporárias)
- [Submódulos](#-submódulos)


### ⚙️ Inicialização e Configuração

- **Iniciar repositório local:** `git init`  
- **Clonar repositório remoto:** `git clone <url>`  
- **Configurar nome de usuário:** `git config --global user.name "Seu Nome"`  
- **Configurar e-mail:** `git config --global user.email "email@exemplo.com"`  
- **Ver configurações atuais:** `git config --list`  


### 🔍 Status e Histórico

- **Ver status dos arquivos:** `git status`  
- **Ver histórico de commits:** `git log`  
- **Ver histórico resumido (um por linha):** `git log --oneline`  
- **Ver diferenças em arquivos modificados:** `git diff`  


### 📝 Trabalhando com Commits

- **Adicionar arquivo ao staging:** `git add <arquivo>`  
- **Adicionar todos os arquivos modificados:** `git add .`  
- **Criar commit com mensagem:** `git commit -m "mensagem"`  
- **Editar o último commit (mensagem):** `git commit --amend`  


### 🌿 Branches (Ramificações)

- **Criar nova branch:** `git branch <nome-da-branch>`  
- **Mudar para outra branch:** `git checkout <nome-da-branch>`  
- **Criar e mudar para nova branch:** `git checkout -b <nome-da-branch>`  
- **Listar todas as branches:** `git branch`  
- **Excluir branch local:** `git branch -d <nome-da-branch>`  


### 🔀 Merge e Rebase

- **Mesclar branch na atual:** `git merge <nome-da-branch>`  
- **Rebase da branch atual:** `git rebase <branch-base>`  


### 🌐 Repositório Remoto

- **Adicionar repositório remoto:** `git remote add origin <url>`  
- **Ver remotos configurados:** `git remote -v`  
- **Enviar alterações para remoto:** `git push origin <branch>`  
- **Buscar alterações remotas:** `git fetch`  
- **Atualizar branch local:** `git pull`  


### ♻️ Restauração e Reset

- **Desfazer alterações não comitadas:** `git restore <arquivo>`  
- **Remover arquivo do staging:** `git restore --staged <arquivo>`  
- **Resetar commit anterior (mantendo alterações):** `git reset --soft HEAD~1`  
- **Resetar e apagar alterações:** `git reset --hard HEAD~1`  


### 🧳 Stash (Guardar alterações temporárias)

- **Guardar alterações temporariamente:** `git stash`  
- **Listar alterações guardadas:** `git stash list`  
- **Aplicar stash mais recente:** `git stash apply`  
- **Remover stash mais recente:** `git stash drop`  


### 📦 Submódulos

- **Adicionar submódulo:** `git submodule add <url>`  
- **Inicializar submódulos:** `git submodule init`  
- **Atualizar submódulos:** `git submodule update`  

---

> **WINDOWS**

## 💻 Comandos CMD (Prompt de Comando)
[Voltar ao Início](#central-de-comandos)

<img src="https://miro.medium.com/1*zGZSsGmCMrAF3PEkrvUgKg.gif" width=100% height=500px>

### Sumário

- [Acesso e Ajuda](#acesso-e-ajuda)
- [Navegação no Sistema](#navegação-no-sistema)
- [Manipulação de Arquivos e Pastas](#manipulação-de-arquivos-e-pastas)
- [Rede e Conexões](#rede-e-conexões)
- [Sistema e Informações](#sistema-e-informações)
- [Utilitários Avançados](#utilitários-avançados)
- [Outros Comandos Úteis](#outros-comandos-úteis)

### ❓ Acesso e Ajuda

- **Abrir o CMD:** `Win + R`, digite `cmd`, pressione `Enter`
- **Ajuda de um comando:** `<comando> /?`
- **Listar todos os comandos disponíveis:** `help`

### 📂 Navegação no Sistema

- **Mostrar diretório atual:** `cd`
- **Mudar diretório:** `cd <caminho>`
- **Voltar um nível:** `cd ..`
- **Listar arquivos e pastas:** `dir`
- **Limpar tela:** `cls`


### 📁 Manipulação de Arquivos e Pastas

- **Criar pasta:** `mkdir <nome-da-pasta>`
- **Remover pasta:** `rmdir <nome-da-pasta>`
- **Criar arquivo de texto vazio:** `type nul > <arquivo.txt>`
- **Renomear arquivo/pasta:** `ren <atual> <novo>`
- **Copiar arquivo:** `copy <origem> <destino>`
- **Mover arquivo:** `move <origem> <destino>`
- **Excluir arquivo:** `del <arquivo>`
- **Excluir pasta e conteúdo:** `rmdir /s <pasta>`


### 🌐 Rede e Conexões

- **Ver endereço IP:** `ipconfig`
- **Renovar IP:** `ipconfig /renew`
- **Liberar IP:** `ipconfig /release`
- **Testar conexão (ping):** `ping <endereço>`
- **Ver conexões de rede ativas:** `netstat`
- **Ver tabela de roteamento:** `route print`


### 🖥 Sistema e Informações

- **Informações do sistema:** `systeminfo`
- **Ver variáveis de ambiente:** `set`
- **Ver processos em execução:** `tasklist`
- **Encerrar processo:** `taskkill /IM <nome>.exe /F`
- **Desligar o computador:** `shutdown /s /t 0`
- **Reiniciar o computador:** `shutdown /r /t 0`


### 🧰 Utilitários Avançados

- **Abrir Editor de Registro:** `regedit`
- **Abrir Gerenciador de Tarefas:** `taskmgr`
- **Abrir Editor de Política de Grupo:** `gpedit.msc` *(edições Pro e superiores)*
- **Agendador de Tarefas:** `taskschd.msc`
- **Abrir Configurações do Sistema (msconfig):** `msconfig`
- **Gerenciamento de Disco:** `diskmgmt.msc`
- **Gerenciamento de Computador:** `compmgmt.msc`


### 🛠 Outros Comandos Úteis

- **Ver histórico de comandos digitados:** `doskey /history`
- **Executar como outro usuário:** `runas /user:<usuário> <comando>`
- **Ver tempo de atividade do sistema:** `net statistics workstation`
- **Montar unidade de rede:** `net use Z: \\servidor\compartilhamento`
- **Ver compartilhamentos ativos:** `net share`
- **Listar usuários do sistema:** `net user`
- **Criar novo usuário:** `net user <nome> <senha> /add`
- **Adicionar usuário a um grupo:** `net localgroup <grupo> <usuário> /add`

---


## Comandos Executar
[Voltar ao Início](#central-de-comandos)

<img src="data:image/png;base64,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" width=650 height= 250>

- Abre filtro AC3 (se instalado) = ac3filter.cpl

- Acerca do Windows (Ver a versão do Windows) = winver

- Actualizações automáticas = wuaucpl.cpl

- Adicionar ou remover programas = appwiz.cpl

- Administrador da origem de dados de ODBC = odbccp32.cpl

- Informações do Sistema = msinfo32

- Armazenamento amovível = ntmsmgr.msc

- Assistente de acessibilidade = accwiz

- Assistente de câmara ou scanner = wiaacmgr

- Assistente de configuração de rede = netsetup.cpl

- Assistente de cópia de segurança ou restauro = ntbackup

- Assistente de ligação à Internet = icwconn1 / inetwiz

- Assistente de transferência de definições e de ficheiros = migwiz

- Assistente de transferência de ficheiros do Bluetooth = fsquirt

- Assistente para adicionar hardware = hdwwiz.cpl

- Calculadora= calc

- Centro de segurança do Windows = wscui.cpl

- Certificados = certmgr.msc

- Cliente Telnet = telnet

- Configuração de protocolo de Internet (apagar informações de DNS ) = ipconfig /flushdns

- Configuração de protocolo de Internet (Todas as conexões ) = ipconfig /release

- Configuração de protocolo de Internet (ver DNS ) = ipconfig /displaydns

- Configuração de protocolo de Internet (ver tudo) = ipconfig /all

- Configuração de protocolo de Internet (Modificar DHCP Class ID) = ipconfig /setclassid

- Configuração do IP = ipconfig

- Conjunto de politicas resultante (XP Prof) = rsop.msc

- Constas de utilizadores = nusrmgr.cpl

- Controladores de jogos = joy.cpl

- Definições da segurança local = secpol.msc

- Desfragmentador do disco = dfrg.msc

- Desliga o utilizador do Windows = logoff

- Editor de carácter privado = eudcedit

- Editor de configuração do sistema = sysedit

- Editor de registo = regedit / regedit32

- Encerramento do Windows = shutdown

- Explorador do Windows = explorer

- Ferramenta de diagnóstico do Direct X = dxdiag

- Ferramenta de importação de livro de endereços = wabmig

- Ferramenta de remoção de software malicioso Microsoft Windows = mrt

- Ferramentas administrativas = control admintools

- Firewall do Windows = firewall.cpl

- Fontes = fonts

- Gestão de computadores = compmgmt.msc

- Gestão de discos = diskmgmt.msc

- Gestor de dispositivos = devmgmt.msc

- Gestor de objectos – pacote = packager

- Gestor de partições do disco = diskpart

- Gestor de tarefas do Windows = taskmgr

- Gestor de utilitários = utilman

- Gestor de verificador de controladores = verifier

- HyperTerminal = hypertrm

- Iexpress Wizard = iexpress

- Impressoras e faxes = control printers

- Infra-estrutura de gestão do Windows = wmimgmt.msc

- Iniciar Windows Update = wupdmgr

- Itens a sincronizar = mobsync

- Internet Explorer = iexplore

- Introdução do Windows XP = tourstart

- Jogo de cartas Copas = mshearts

- Jogo de cartas FreeCell = freecell

- Jogo de cartas Spider Solitare = spider

- Jogo Minesweeper = winmine

- Ligação ao ambiente de trabalho remoto = mstsc

- Ligações de rede = ncpa.cpl / control netconnections

- Limpeza do disco = cleanmgr

- Linha de comandos = cmd

- Lista telefónica = rasphone

- Livro de endereços = wab

- Mapa de caracteres = charmap

- Marcador telefónico = dialer

- Microsoft Access (se instalado ) = access.cpl

- Microsoft Chat = winchat

- Microsoft Excel (se instalado ) = excel

- Microsoft Frontpage (se instalado ) = frontpg

- Microsoft Movie Maker = moviemk

- Microsoft Paint = mspaint

- Microsoft Powerpoint (se instalado ) = powerpnt

- Microsoft Word (se instalado ) = winword

- Nero (se instalado) = nero

- Netmeeting = conf

- Notepad = notepad

- Nview Desktop Manager (se instalado) = nvtuicpl.cpl

- Opções de acessibilidade = access.cpl

- Opções de pastas = control folders

- Opções regionais e de idioma = intl.cpl

- Outlook Express = msimn

- Painel de controlo = control

- Painel de controlo Direct X (se instalado) = directx.cpl

- Painel de controlo Java (se instalado) = jpicpl32.cpl

- Paint = pbrush

- Partilhas DDE = ddeshare

- Pasta de impressoras = printers

- Pastas partilhadas = fsmgmt.msc

- Pedidos do operador de armazenamento amovível = ntmsoprq.msc

- Performance Monitor = perfmon

- Performance Monitor = perfmon.msc

- Phone and Modem Options = telephon.cpl

- Pinball para Windows = pinball

- Politica de grupo (XP Prof) = gpedit.msc

- Power Configuration = powercfg.cpl

- Procura rápida (quando ligada) = findfast.cpl

- Propriedade de visualização = control color

- Propriedades da internet = inetcpl.cpl

- Propriedades de data e hora = timedate.cpl

- Propriedades de senhas = password.cpl

- Propriedades de som e dispositivos de áudio = mmsys.cpl

- Propriedades de visualização = control desktop/desk.cpl

- Propriedades do rato = main.cpl / control mouse

- Propriedades do sistema = sysdm.cpl

- Propriedades do teclado = control keyboard

- Protecção de base de dados do Windows = syskey

- Protecção de ficheiros do Windows (analisar em cada arranque) sfc /scanboot

- Protecção de ficheiros do Windows (analisar no próximo arranque) = sfc /scanonce

- Protecção de ficheiros do Windows (analisar) = sfc /scannow

- Protecção de ficheiros do Windows (repor configuração de fábrica) = sfc /revert

- Quicktime (se instalado) = QuickTime.cpl

- Real Player (se instalado) = realplay

- Scanners e câmaras = sticpl.cpl

- Serviço de indexação = ciadv.msc

- Serviços = services.msc

- Serviços componentes = dcomcnfg

- Tarefas agendadas = control schedtasks

- Teclado de ecrã = osk

- Tipos de letra = control fonts

- Tweak UI (se instalado ) = tweakui

- Utilitário de configuração do sistema = msconfig

- Utilitário de rede do cliente de SQL Server = cliconfg

- Utilitário de verificação de ficheiros do sistema = sfc

- Utilitário de verificação do disco = chkdsk

- Utilitário Dr. Watson para o Windows = drwtsn32

- Utilizadores e grupos locais = lusrmgr.msc

- Verificação de assinatura do ficheiro = sigverif

- Visualizador da área de armazenamento = clipbrd

- Visualizador de aplicações de java (se instalado) = javaws

- Visualizador de eventos = eventvwr.msc

- Windows Magnifier = magnify

- Windows Media Player = wmplayer

- Windows Messenger (Executar MSN) = msmsgs

---

> **LINUX**

## 🐧 Comandos Linux (Ubuntu/Lubuntu)
[Voltar ao Início](#central-de-comandos)

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210825224545/1.gif" width=1200px height=.600px>

### Sumário

**Basicos**
- [Acesso e Ajuda](#acesso-e-ajuda)
- [Navegação no Sistema](#navegação-no-sistema)
- [Manipulação de Arquivos e Pastas](#manipulação-de-arquivos-e-pastas)
- [Rede e Conexões](#rede-e-conexões)
- [Sistema e Informações](#sistema-e-informações)
- [Permissões e Usuários](#permissões-e-usuários)
- [Utilitários Avançados](#utilitários-avançados)
- [Outros Comandos Úteis](#outros-comandos-úteis)

**Avançados**
- [Scripts e Automação](#scripts-e-automação)
- [Gerenciamento de Pacotes Avançado](#gerenciamento-de-pacotes-avançado)
- [Gerenciamento de Serviços (systemd)](#gerenciamento-de-serviços-systemd)
- [Segurança e Firewall](#segurança-e-firewall)
- [Processos e Monitoramento](#processos-e-monitoramento)
- [Avançado com Arquivos](#avançado-com-arquivos)
- [Rede Avançada](#rede-avançada)
- [Permissões e Controle Avançado](#permissões-e-controle-avançado)
- [Diagnóstico e Recuperação](#diagnóstico-e-recuperação)


### 🧠 Comandos Básicos

#### ❓ Acesso e Ajuda

- **Abrir o terminal:** `Ctrl + Alt + T`
- **Ajuda de um comando:** `<comando> --help` ou `man <comando>`
- **Pesquisar por comandos:** `apropos <termo>`
- **Histórico de comandos:** `history`


#### 📂 Navegação no Sistema

- **Mostrar diretório atual:** `pwd`
- **Mudar diretório:** `cd <caminho>`
- **Voltar um nível:** `cd ..`
- **Ir para o diretório pessoal:** `cd ~` ou apenas `cd`
- **Listar arquivos e pastas:** `ls`
- **Listar com detalhes:** `ls -l`
- **Incluir arquivos ocultos:** `ls -a`
- **Limpar a tela:** `clear`


#### 📁 Manipulação de Arquivos e Pastas

- **Criar pasta:** `mkdir <nome-da-pasta>`
- **Criar várias pastas:** `mkdir -p pasta1/pasta2`
- **Remover pasta vazia:** `rmdir <nome-da-pasta>`
- **Remover pasta e conteúdo:** `rm -r <pasta>`
- **Criar arquivo vazio:** `touch <arquivo.txt>`
- **Ver conteúdo de arquivo:** `cat <arquivo.txt>`
- **Renomear ou mover arquivo/pasta:** `mv <origem> <destino>`
- **Copiar arquivo:** `cp <origem> <destino>`
- **Copiar pasta (recursivo):** `cp -r <origem> <destino>`
- **Excluir arquivo:** `rm <arquivo>`


#### 🌐 Rede e Conexões

- **Ver IP (modo texto):** `ip a` ou `hostname -I`
- **Ver status da rede:** `nmcli` ou `ifconfig` *(pode precisar instalar o pacote `net-tools`)*
- **Testar conexão (ping):** `ping <endereço>`
- **Ver rotas de rede:** `ip route`
- **Ver conexões ativas:** `netstat -tuln` *(precisa instalar o `net-tools`)*
- **Ver DNS configurado:** `cat /etc/resolv.conf`


#### 🖥 Sistema e Informações

- **Informações do sistema:** `uname -a`
- **Informações detalhadas do sistema:** `neofetch` *(pode ser necessário instalar)*
- **Ver tempo de atividade:** `uptime`
- **Ver uso do disco:** `df -h`
- **Ver uso da memória:** `free -h`
- **Ver processos ativos:** `top` ou `htop` *(htop pode precisar instalar)*
- **Encerrar processo:** `kill <PID>` ou `killall <nome-do-processo>`
- **Reiniciar o sistema:** `sudo reboot`
- **Desligar o sistema:** `sudo shutdown now`
- **Agendar desligamento:** `sudo shutdown +10` *(em 10 minutos)*


#### 🔐 Permissões e Usuários

- **Ver usuário atual:** `whoami`
- **Listar todos os usuários:** `cat /etc/passwd`
- **Criar novo usuário:** `sudo adduser <nome>`
- **Alterar senha:** `passwd <nome>`
- **Adicionar usuário a grupo:** `sudo usermod -aG <grupo> <usuário>`
- **Ver grupos de um usuário:** `groups <usuário>`
- **Listar permissões de arquivos:** `ls -l`
- **Alterar permissões:** `chmod <modo> <arquivo>`
- **Alterar dono e grupo:** `chown <dono>:<grupo> <arquivo>`


#### 🧰 Utilitários Avançados

- **Editar arquivos via terminal:** `nano <arquivo>` ou `vim <arquivo>`
- **Buscar arquivos:** `find <caminho> -name "<nome>"`
- **Buscar conteúdo dentro de arquivos:** `grep "<texto>" <arquivo>`
- **Arquivar e compactar (tar.gz):** `tar -czvf arquivo.tar.gz pasta/`
- **Descompactar:** `tar -xzvf arquivo.tar.gz`
- **Atualizar lista de pacotes:** `sudo apt update`
- **Atualizar sistema:** `sudo apt upgrade`
- **Instalar pacote:** `sudo apt install <pacote>`
- **Remover pacote:** `sudo apt remove <pacote>`
- **Ver pacotes instalados:** `dpkg -l`


#### 🛠 Outros Comandos Úteis

- **Ver data e hora atual:** `date`
- **Alterar data e hora (sudo):** `sudo date MMDDhhmmYYYY`
- **Ver caminho de um comando:** `which <comando>`
- **Ver tipo de arquivo:** `file <arquivo>`
- **Montar dispositivo:** `sudo mount /dev/sdX /mnt`
- **Desmontar dispositivo:** `sudo umount /mnt`
- **Ver dispositivos conectados:** `lsblk` ou `df -h`
- **Criar alias de comando:** `alias nome='comando'`
- **Executar como root:** `sudo <comando>`

### 🧠 Comandos Avançados

#### 🧪 Scripts e Automação

- **Executar script bash:** `bash script.sh` ou `./script.sh`
- **Tornar script executável:** `chmod +x script.sh`
- **Rodar script no boot (systemd):** `sudo systemctl enable nome.service`
- **Executar comando automaticamente com @reboot:** `crontab -e` → `@reboot /caminho/comando.sh`
- **Agendar tarefas com cron:** `crontab -e` → `* * * * * comando`

#### 📦 Gerenciamento de Pacotes Avançado

- **Limpar pacotes não utilizados:** `sudo apt autoremove`
- **Limpar cache do apt:** `sudo apt clean`
- **Reconfigurar pacote instalado:** `sudo dpkg-reconfigure <pacote>`
- **Corrigir pacotes quebrados:** `sudo apt --fix-broken install`
- **Forçar reinstalação de pacote:** `sudo apt install --reinstall <pacote>`

#### 🛠 Gerenciamento de Serviços (systemd)

- **Ver status de um serviço:** `systemctl status <serviço>`
- **Iniciar serviço:** `sudo systemctl start <serviço>`
- **Parar serviço:** `sudo systemctl stop <serviço>`
- **Reiniciar serviço:** `sudo systemctl restart <serviço>`
- **Habilitar serviço no boot:** `sudo systemctl enable <serviço>`
- **Desabilitar serviço no boot:** `sudo systemctl disable <serviço>`

#### 🔒 Segurança e Firewall

- **Status do firewall (ufw):** `sudo ufw status`
- **Habilitar firewall:** `sudo ufw enable`
- **Bloquear porta:** `sudo ufw deny 22`
- **Permitir porta:** `sudo ufw allow 22`
- **Resetar configurações do ufw:** `sudo ufw reset`

#### 🔄 Processos e Monitoramento

- **Ver árvore de processos:** `pstree`
- **Buscar processo por nome:** `ps aux | grep <nome>`
- **Ver consumo de recursos por processo:** `top` ou `htop`
- **Ver logs do sistema:** `journalctl -xe`
- **Ver logs em tempo real:** `tail -f /var/log/syslog`

#### 🧰 Avançado com Arquivos

- **Ver espaço de uma pasta:** `du -sh <pasta>`
- **Listar maiores arquivos/pastas:** `du -ah . | sort -rh | head -n 10`
- **Comparar arquivos:** `diff arquivo1 arquivo2`
- **Sincronizar diretórios (backup):** `rsync -avh origem/ destino/`
- **Montar ISO:** `sudo mount -o loop arquivo.iso /mnt`

#### 📡 Rede Avançada

- **Ver portas abertas:** `sudo lsof -i -P -n`
- **Escutar porta local (netcat):** `nc -lvp 8080`
- **Ver tráfego de rede:** `iftop` *(pode precisar instalar)*
- **Testar velocidade de conexão:** `speedtest-cli` *(instalar com `pip install speedtest-cli`)*
- **Ver tabela ARP:** `arp -a`

#### 🔐 Permissões e Controle Avançado

- **Dar permissão total (⚠️ risco):** `chmod 777 <arquivo>`
- **Dar permissão de execução apenas:** `chmod +x <arquivo>`
- **Trocar dono de vários arquivos recursivamente:** `sudo chown -R usuario:grupo pasta/`
- **Bloquear conta de usuário:** `sudo usermod -L <usuario>`
- **Desbloquear conta:** `sudo usermod -U <usuario>`

#### 💣 Diagnóstico e Recuperação

- **Ver erros de boot:** `dmesg | less`
- **Ver logs do boot atual:** `journalctl -b`
- **Resgatar sistema via root:** `sudo -i`
- **Recuperar GRUB:**  
  `sudo grub-install /dev/sdX`  
  `sudo update-grub`

---
