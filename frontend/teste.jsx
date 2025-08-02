import React, { useState, useEffect } from 'react';
import { Search, Copy, Terminal, GitBranch, Settings, Check, Zap, Moon, Sun, Palette } from 'lucide-react';

const CentralComandos = () => {
  const [activeTab, setActiveTab] = useState('git');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState('');
  const [theme, setTheme] = useState('retro'); // retro, dark, day, pro
  const [glitchText, setGlitchText] = useState('CENTRAL DE COMANDOS');

  // Temas disponíveis
  const themes = {
    retro: {
      name: '🎮 Retrô',
      bg: 'bg-black',
      gradientBg: 'from-black via-purple-900/20 to-black',
      text: 'text-cyan-300',
      accent: 'text-pink-400',
      border: 'border-cyan-400',
      button: 'from-cyan-500 to-pink-500',
      card: 'bg-black/80 border-cyan-400/30',
      code: 'text-green-400',
      glitch: true
    },
    dark: {
      name: '🌙 Escuro',
      bg: 'bg-gray-900',
      gradientBg: 'from-gray-900 via-blue-900/30 to-purple-900/30',
      text: 'text-blue-100',
      accent: 'text-purple-400',
      border: 'border-blue-400',
      button: 'from-blue-600 to-purple-600',
      card: 'bg-gray-800/80 border-blue-400/30',
      code: 'text-blue-300',
      glitch: false
    },
    day: {
      name: '☀️ Dia',
      bg: 'bg-gray-50',
      gradientBg: 'from-blue-50 via-purple-50 to-blue-50',
      text: 'text-gray-800',
      accent: 'text-blue-600',
      border: 'border-blue-300',
      button: 'from-blue-500 to-purple-500',
      card: 'bg-white/90 border-blue-200',
      code: 'text-purple-600',
      glitch: false
    },
    pro: {
      name: '⚡ Pro',
      bg: 'bg-slate-900',
      gradientBg: 'from-slate-900 via-slate-800 to-slate-900',
      text: 'text-slate-100',
      accent: 'text-blue-400',
      border: 'border-slate-600',
      button: 'from-blue-500 to-slate-600',
      card: 'bg-slate-800/90 border-slate-600/50',
      code: 'text-green-400',
      glitch: false
    }
  };

  const currentTheme = themes[theme];

  // Efeito de glitch no título (apenas para tema retro)
  useEffect(() => {
    if (!currentTheme.glitch) return;
    
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = 'CENTRAL DE COMANDOS';
    
    const glitchInterval = setInterval(() => {
      let glitched = originalText;
      if (Math.random() < 0.1) {
        const pos = Math.floor(Math.random() * originalText.length);
        const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        glitched = originalText.substring(0, pos) + char + originalText.substring(pos + 1);
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 50);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [theme, currentTheme.glitch]);

  const gitCommands = [
    {
      category: '⚙️ INIT & CONFIG',
      commands: [
        { name: 'Iniciar repositório local', code: 'git init' },
        { name: 'Clonar repositório remoto', code: 'git clone <url>' },
        { name: 'Configurar nome de usuário', code: 'git config --global user.name "Seu Nome"' },
        { name: 'Configurar e-mail', code: 'git config --global user.email "email@exemplo.com"' },
        { name: 'Ver configurações atuais', code: 'git config --list' }
      ]
    },
    {
      category: '🔍 STATUS & LOG',
      commands: [
        { name: 'Ver status dos arquivos', code: 'git status' },
        { name: 'Ver histórico de commits', code: 'git log' },
        { name: 'Ver histórico resumido', code: 'git log --oneline' },
        { name: 'Ver diferenças em arquivos', code: 'git diff' }
      ]
    },
    {
      category: '📝 COMMITS',
      commands: [
        { name: 'Adicionar arquivo ao staging', code: 'git add <arquivo>' },
        { name: 'Adicionar todos os arquivos', code: 'git add .' },
        { name: 'Criar commit com mensagem', code: 'git commit -m "mensagem"' },
        { name: 'Editar o último commit', code: 'git commit --amend' }
      ]
    },
    {
      category: '🌿 BRANCHES',
      commands: [
        { name: 'Criar nova branch', code: 'git branch <nome-da-branch>' },
        { name: 'Mudar para outra branch', code: 'git checkout <nome-da-branch>' },
        { name: 'Criar e mudar para nova branch', code: 'git checkout -b <nome-da-branch>' },
        { name: 'Listar todas as branches', code: 'git branch' },
        { name: 'Excluir branch local', code: 'git branch -d <nome-da-branch>' }
      ]
    },
    {
      category: '🌐 REMOTE',
      commands: [
        { name: 'Adicionar repositório remoto', code: 'git remote add origin <url>' },
        { name: 'Ver remotos configurados', code: 'git remote -v' },
        { name: 'Enviar alterações para remoto', code: 'git push origin <branch>' },
        { name: 'Buscar alterações remotas', code: 'git fetch' },
        { name: 'Atualizar branch local', code: 'git pull' }
      ]
    }
  ];

  const cmdCommands = [
    {
      category: '💻 CMD COMMANDS',
      commands: [
        { name: 'Linha de comandos', code: 'cmd' },
        { name: 'Configuração do IP', code: 'ipconfig' },
        { name: 'Ver todas as configurações IP', code: 'ipconfig /all' },
        { name: 'Limpar DNS', code: 'ipconfig /flushdns' },
        { name: 'Verificação do disco', code: 'chkdsk' },
        { name: 'Verificação de arquivos do sistema', code: 'sfc /scannow' }
      ]
    }
  ];

  const executarCommands = [
    {
      category: '🖥️ APPS & UTILS',
      commands: [
        { name: 'Calculadora', code: 'calc' },
        { name: 'Notepad', code: 'notepad' },
        { name: 'Paint', code: 'mspaint' },
        { name: 'Windows Media Player', code: 'wmplayer' },
        { name: 'Explorador do Windows', code: 'explorer' },
        { name: 'Gerenciador de Tarefas', code: 'taskmgr' }
      ]
    },
    {
      category: '⚙️ SYSTEM CONFIG',
      commands: [
        { name: 'Painel de Controle', code: 'control' },
        { name: 'Editor de Registro', code: 'regedit' },
        { name: 'Configuração do Sistema', code: 'msconfig' },
        { name: 'Informações do Sistema', code: 'msinfo32' },
        { name: 'Serviços', code: 'services.msc' }
      ]
    },
    {
      category: '🎮 RETRO GAMES',
      commands: [
        { name: 'FreeCell', code: 'freecell' },
        { name: 'Spider Solitaire', code: 'spider' },
        { name: 'Minesweeper', code: 'winmine' },
        { name: 'Hearts', code: 'mshearts' }
      ]
    }
  ];

  const allCommands = {
    git: gitCommands,
    cmd: cmdCommands,
    executar: executarCommands
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(''), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  const filterCommands = (commands) => {
    if (!searchTerm) return commands;
    
    return commands.map(category => ({
      ...category,
      commands: category.commands.filter(cmd => 
        cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.commands.length > 0);
  };

  const GifPlaceholder = ({ position, emoji, size = "w-32 h-32" }) => (
    <div className={`${size} bg-gradient-to-br ${currentTheme.gradientBg} rounded-lg border-2 ${currentTheme.border}/50 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group`}>
      {/* Para usar GIFs reais, substitua por: */}
      {/* <img src="your-gif-url.gif" alt="Animated GIF" className={`${size} rounded-lg object-cover`} /> */}
      
      <div className="text-center">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{emoji}</div>
        <div className={`text-xs ${currentTheme.accent} font-mono`}>GIF SPACE</div>
        <div className={`text-xs ${currentTheme.text} font-mono opacity-70`}>{position}</div>
      </div>
    </div>
  );

  const CommandItem = ({ command }) => (
    <div className={`${currentTheme.card} rounded-lg p-4 border-2 hover:${currentTheme.border} transition-all duration-300 hover:transform hover:scale-[1.02] group relative overflow-hidden ${theme === 'retro' ? 'retro-glow' : 'shadow-lg'}`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.button}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative z-10">
        <div className={`${currentTheme.text} font-bold mb-2 group-hover:${currentTheme.accent} transition-colors ${theme === 'retro' ? 'font-mono text-sm' : 'text-sm'} uppercase tracking-wider`}>
          {command.name}
        </div>
        <div className={`flex items-center justify-between ${theme === 'day' ? 'bg-gray-100' : 'bg-gray-900/80'} rounded-md p-3 border ${currentTheme.border}/20`}>
          <code className={`${currentTheme.code} font-mono text-sm flex-1 mr-3 font-bold`}>
            {command.code}
          </code>
          <button
            onClick={() => copyToClipboard(command.code)}
            className={`bg-gradient-to-r ${currentTheme.button} hover:scale-110 ${theme === 'day' ? 'text-white' : 'text-black'} font-bold p-2 rounded-md transition-all duration-300 flex items-center gap-1`}
          >
            {copiedCommand === command.code ? (
              <Check size={16} />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const Category = ({ category }) => (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-6 flex items-center gap-3 ${theme === 'retro' ? 'font-mono' : 'font-bold'} uppercase tracking-wider`}>
        <Zap className={currentTheme.text} />
        {category.category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.commands.map((command, index) => (
          <CommandItem key={index} command={command} />
        ))}
      </div>
    </div>
  );

  const filteredCommands = filterCommands(allCommands[activeTab]);

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} p-6 relative overflow-hidden transition-all duration-500`}>
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradientBg}`}></div>
        {theme === 'retro' && <div className="retro-grid"></div>}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Theme Selector */}
        <div className="fixed top-4 right-4 z-50">
          <div className="flex gap-2">
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                  theme === key
                    ? `${currentTheme.card} ${currentTheme.border} scale-110`
                    : `${currentTheme.card} ${currentTheme.border}/30 hover:${currentTheme.border}/60`
                }`}
                title={themeData.name}
              >
                {key === 'retro' && '🎮'}
                {key === 'dark' && '🌙'}
                {key === 'day' && '☀️'}
                {key === 'pro' && '⚡'}
              </button>
            ))}
          </div>
        </div>

        {/* Header with GIF Spaces */}
        <div className="text-center mb-10 relative">
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* GIF Space 1 */}
            <GifPlaceholder position="LEFT" emoji="🎮" />

            <div className="text-center">
              <h1 className={`text-5xl lg:text-6xl font-bold ${theme === 'retro' ? 'font-mono' : ''} uppercase tracking-wider mb-4 ${theme === 'retro' ? 'retro-glow-text glitch-text' : ''}`}>
                {theme === 'retro' ? glitchText : 'CENTRAL DE COMANDOS'}
              </h1>
              <div className={`flex items-center justify-center gap-4 text-xl ${theme === 'retro' ? 'font-mono' : ''} uppercase tracking-widest`}>
                <span className={currentTheme.accent}>GIT</span>
                <span className={currentTheme.text}>•</span>
                <span className={currentTheme.accent}>CMD</span>
                <span className={currentTheme.text}>•</span>
                <span className={currentTheme.accent}>RUN</span>
              </div>
            </div>

            {/* GIF Space 2 */}
            <GifPlaceholder position="RIGHT" emoji="⚡" />
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${currentTheme.accent}`} size={20} />
            <input
              type="text"
              placeholder={theme === 'retro' ? 'SEARCH COMMANDS... [RETRO MODE]' : 'Buscar comandos...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 ${currentTheme.card} border-2 ${currentTheme.border}/50 rounded-lg ${currentTheme.text} placeholder-${currentTheme.text}/70 focus:outline-none focus:${currentTheme.border} ${theme === 'retro' ? 'font-mono uppercase tracking-wider retro-input retro-glow' : ''} transition-all`}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          {[
            { key: 'git', icon: GitBranch, label: 'GIT' },
            { key: 'cmd', icon: Terminal, label: 'CMD' },
            { key: 'executar', icon: Settings, label: 'RUN' }
          ].map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${theme === 'retro' ? 'font-mono' : ''} uppercase tracking-wider font-bold transition-all duration-300 border-2 ${
                activeTab === key
                  ? `bg-gradient-to-r ${currentTheme.button} ${theme === 'day' ? 'text-white' : 'text-black'} ${currentTheme.border} ${theme === 'retro' ? 'retro-glow' : 'shadow-lg'} scale-105`
                  : `${currentTheme.card} ${currentTheme.text} ${currentTheme.border}/50 hover:${currentTheme.border} hover:${currentTheme.accent}`
              }`}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((category, index) => (
              <div key={index} className={`${currentTheme.card} backdrop-blur-sm rounded-xl p-6 border-2 ${currentTheme.border}/30 ${theme === 'retro' ? 'retro-panel retro-scanlines' : 'shadow-xl'}`}>
                <Category category={category} />
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">{theme === 'retro' ? '💀' : '🔍'}</div>
              <p className={`${currentTheme.accent} text-xl ${theme === 'retro' ? 'font-mono' : ''} uppercase tracking-wider`}>
                {theme === 'retro' ? `COMMAND NOT FOUND: "${searchTerm}"` : `Nenhum comando encontrado para "${searchTerm}"`}
              </p>
              {theme === 'retro' && <p className={`${currentTheme.text} font-mono mt-2`}>SYSTEM ERROR 404</p>}
            </div>
          )}
        </div>

        {/* Toast */}
        {copiedCommand && (
          <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-400 ${theme === 'day' ? 'text-white' : 'text-black'} ${theme === 'retro' ? 'font-mono' : ''} font-bold px-6 py-3 rounded-lg z-50 flex items-center gap-2 ${theme === 'retro' ? 'retro-glow border-2 border-green-400' : 'shadow-lg'}`}>
            <Check size={20} />
            {theme === 'retro' ? 'COMMAND COPIED!' : 'Comando copiado!'}
          </div>
        )}
      </div>

      {/* Retro Styles */}
      {theme === 'retro' && (
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
          
          .retro-grid {
            background-image: 
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: grid-move 20s linear infinite;
          }

          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          .retro-glow {
            box-shadow: 
              0 0 10px rgba(0, 255, 255, 0.3),
              inset 0 0 10px rgba(0, 255, 255, 0.1);
          }

          .retro-glow-text {
            text-shadow: 
              0 0 10px currentColor,
              0 0 20px currentColor,
              0 0 30px currentColor;
          }

          .retro-input {
            box-shadow: 
              inset 0 0 10px rgba(0, 255, 255, 0.2),
              0 0 10px rgba(0, 255, 255, 0.1);
          }

          .retro-scanlines::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 255, 0.03) 2px,
              rgba(0, 255, 255, 0.03) 4px
            );
            pointer-events: none;
          }
        `}</style>
      )}
    </div>
  );
};

export default CentralComandos;