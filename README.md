# Central de Comandos

## Sumário das Centrais



---

## 🧠 Comandos Git

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

## Comandos CMD


---

## Comandos Executar

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
