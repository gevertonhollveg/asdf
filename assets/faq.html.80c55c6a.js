import{_ as t,r,o as d,c as i,a as e,b as a,e as o,d as n}from"./app.20341b03.js";const c={},u=e("h1",{id:"perguntas-frequentes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#perguntas-frequentes","aria-hidden":"true"},"#"),o(" Perguntas frequentes")],-1),h=e("p",null,[o("Aqui est\xE3o algumas perguntas comuns sobre "),e("code",null,"asdf"),o(".")],-1),l=e("h2",{id:"suporte-wsl1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#suporte-wsl1","aria-hidden":"true"},"#"),o(" Suporte WSL1?")],-1),_=o("WSL1 ("),m={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux",target:"_blank",rel:"noopener noreferrer"},p=o("Windows Subsystem for Linux"),f=o(" 1) n\xE3o \xE9 oficialmente suportado. Alguns aspectos do "),g=e("code",null,"asdf",-1),b=o(" podem n\xE3o funcionar corretamente. N\xE3o temos a inten\xE7\xE3o de adicionar suporte oficial para WSL1."),x=e("h2",{id:"suporte-wsl2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#suporte-wsl2","aria-hidden":"true"},"#"),o(" Suporte WSL2?")],-1),S=o("WSL2 ("),k={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_2",target:"_blank",rel:"noopener noreferrer"},v=o("Subsistema Windows para Linux"),q=o(" 2) deve funcionar usando as instru\xE7\xF5es de configura\xE7\xE3o e depend\xEAncia para a distribui\xE7\xE3o WSL escolhida."),w=n('<p>\xC9 importante ressaltar que o WSL2 <em>apenas</em> deve funcionar corretamente quando o diret\xF3rio de trabalho atual \xE9 uma unidade Unix e n\xE3o uma unidade Windows vinculada.</p><p>Pretendemos executar o conjunto de testes no WSL2 quando o suporte ao host runner estiver dispon\xEDvel nas A\xE7\xF5es do GitHub; atualmente, esse n\xE3o parece ser o caso.</p><h2 id="exectable-recem-instalado-nao-esta-funcionando" tabindex="-1"><a class="header-anchor" href="#exectable-recem-instalado-nao-esta-funcionando" aria-hidden="true">#</a> Exectable rec\xE9m-instalado n\xE3o est\xE1 funcionando?</h2><blockquote><p>Acabei de instalar o <code>npm -g yarn</code>, mas n\xE3o consigo executar o <code>yarn</code>. O que da?</p></blockquote>',4),L=e("code",null,"asdf",-1),W=o(" usa "),E={href:"https://en.wikipedia.org/wiki/Shim_(computing)",target:"_blank",rel:"noopener noreferrer"},y=o("shims"),A=o(" para gerenciar execut\xE1veis. Aqueles instalados por plug-ins t\xEAm shims criados automaticamente, enquanto a instala\xE7\xE3o de execut\xE1veis \u200B\u200Bpor meio de uma ferramenta gerenciada "),N=e("code",null,"asdf",-1),O=o(" exigir\xE1 que voc\xEA notifique o"),P=e("code",null,"asdf",-1),V=o(" sobre a necessidade de criar shims. Neste caso, para criar um shim para "),B={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},I=o("Yarn"),T=o(". Veja a documenta\xE7\xE3o do comando ["),j=e("code",null,"asdf reshim",-1),z=o("](/ manage / core.md # reshim)."),D=n('<h2 id="shell-nao-detecta-shims-recem-instalados" tabindex="-1"><a class="header-anchor" href="#shell-nao-detecta-shims-recem-instalados" aria-hidden="true">#</a> Shell n\xE3o detecta shims rec\xE9m-instalados?</h2><p>Se <code>asdf reshim</code> n\xE3o est\xE1 resolvendo seu problema, ent\xE3o \xE9 mais prov\xE1vel devido ao sourcing de<code>asdf.sh</code> ou <code>asdf.fish</code> <em>n\xE3o</em> estar no ** BOTTOM ** de seu arquivo de configura\xE7\xE3o Shell (<code>.bash_profile</code>, <code>.zshrc</code>, <code>config.fish</code>, etc). Ele precisa ser fornecido <strong>DEPOIS</strong> de voc\xEA definir seu <code>$PATH</code> e <strong>DEPOIS</strong> de ter fornecido seu framework (oh-meu-zsh etc), se houver.</p>',2);function H(C,G){const s=r("ExternalLinkIcon");return d(),i("div",null,[u,h,l,e("p",null,[_,e("a",m,[p,a(s)]),f,g,b]),x,e("p",null,[S,e("a",k,[v,a(s)]),q]),w,e("p",null,[L,W,e("a",E,[y,a(s)]),A,N,O,P,V,e("a",B,[I,a(s)]),T,j,z]),D])}const U=t(c,[["render",H],["__file","faq.html.vue"]]);export{U as default};
