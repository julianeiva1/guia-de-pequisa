# 📚 Guia de Pesquisa - Acesso ao Conhecimento

Uma landing page moderna e responsiva para apresentar o **Guia de Pesquisa**, um material educativo completo que ajuda estudantes, pesquisadores e interessados a conduzirem pesquisas de forma estruturada e profissional.

## 🎯 Sobre o Projeto

O **Guia de Pesquisa** nasceu da convicção de que o conhecimento deve ser acessível a todos. Este projeto é uma plataforma digital que oferece orientações práticas, exemplos reais e uma estrutura clara para transformar uma simples ideia em um trabalho de pesquisa bem fundamentado.

### Missão
Transformar a forma como pessoas conduzem pesquisas através de orientações práticas e acessíveis, mantendo o rigor acadêmico e científico.

### Valores
- **Propósito**: Orientações práticas e acessíveis
- **Acessibilidade**: Conhecimento claro para qualquer nível de experiência
- **Organização**: Estrutura lógica em cada etapa
- **Apoio**: Suporte contínuo aos pesquisadores

---

## ✨ Funcionalidades

### 1. **Header Fixo com Navegação**
- Barra superior fixa com logo e menu de navegação
- Menu responsivo com hamburger para dispositivos móveis
- Efeito de compressão do header ao fazer scroll (economiza espaço na viewport)
- Links para todas as seções principais da página

### 2. **Seção Hero**
- Imagem impactante do guia
- Título e descrição chamativa
- Botão de call-to-action (CTA) destacado

### 3. **Seção Sobre o Projeto**
- Contexto e missão do projeto
- 4 pilares principais em cards coloridos:
  - Propósito
  - Acessibilidade
  - Organização
  - Apoio

### 4. **Seção Conteúdo**
- 6 cards informativos numerados apresentando os tópicos principais:
  1. Definição do Tema
  2. Organização de Ideias
  3. Levantamento de Fontes
  4. Estruturação do Trabalho
  5. Planejamento das Etapas
  6. Boas Práticas de Escrita

### 5. **Carousel de Feedbacks**
- Carrossel interativo com 9 depoimentos de usuários
- Navegação por botões (anterior/próximo)
- Suporte a drag com mouse (desktop)
- Suporte a toque e deslizamento (mobile)
- Loop infinito circulante

### 6. **Seção de Contato**
- Informações de contato por múltiplos canais:
  - Email
  - WhatsApp
  - Instagram
  - LinkedIn
- Descrição da disponibilidade para suporte

### 7. **CTA Final**
- Última chamada para ação para incentivar acesso ao guia
- Design minimalista e direto

### 8. **Animações**
- **Scroll Reveal**: Elementos aparecem suavemente ao entrar na viewport
- **Hover Effects**: Botões e cards com efeito 3D
- **Transições Suaves**: Animações fluidas em toda a página

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+**: Interatividade pura (sem frameworks)

### APIs Nativas
- **Intersection Observer**: Para animações de scroll reveal
- **Touch/Drag Events**: Para navegação no carousel
- **CSS Custom Properties**: Sistema de design com variáveis

### Características
- ✅ Sem dependências externas
- ✅ 100% Vanilla JavaScript
- ✅ Totalmente responsivo (desktop, tablet, mobile)
- ✅ Otimizado para performance
- ✅ Acessível e semântico

---

## 📱 Design Responsivo

A página se adapta perfeitamente para diferentes tamanhos de tela:

- **Desktop**: 1200px e acima
- **Tablet**: 768px a 1199px
- **Mobile**: Até 767px

### Breakpoints Utilizados
```css
/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

---

## 🎨 Paleta de Cores

Sistema de design com 6 cores pop vibrantes:

- **Rosa Forte** `#dd2f54` - Cor primária
- **Verde Claro** `#91dd36` - Cor secundária
- **Coral Claro** `#ff7777` - Cor destaque
- **Roxo Escuro** `#401b47` - Cor neutra escura
- **Amarelo Claro** `#ffffc5` - Cor de fundo
- **Azul Petróleo** `#198faf` - Cor terciária

---

## 📂 Estrutura do Projeto

```
landing page catarina/
├── index.html           # Estrutura HTML da página
├── styles.css           # Estilos CSS com design system
├── script.js            # JavaScript com 4 módulos IIFE
├── assets/
│   └── guia-cover.jpg   # Imagem da capa do guia
└── README.md            # Este arquivo
```

### Arquivos Principais

#### `index.html` (~350 linhas)
- Estrutura semântica com 6 seções principais
- Comentários descritivos em português
- IDs únicos para navegação
- Meta tags de responsividade

#### `styles.css` (~1800 linhas)
- 14 seções organizadas logicamente
- Variáveis CSS consolidadas
- Media queries consolidadas
- Documentação completa em português

#### `script.js` (~320 linhas)
- 4 módulos IIFE independentes:
  - `CarouselManager`: Controle do carousel
  - `MobileMenuManager`: Menu responsivo
  - `ScrollRevealManager`: Animações de reveal
  - `HeaderScrollManager`: Efeito do header

---

## 🚀 Como Usar

### 1. Clonar o Repositório
```bash
git clone https://github.com/julianeiva1/guia-de-pequisa.git
cd guia-de-pequisa
```

### 2. Abrir no Navegador
- Abra o arquivo `index.html` em seu navegador
- Ou use um servidor local (recomendado):

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com live-server)
npx live-server
```

Acesse: `http://localhost:8000`

### 3. Editar o Conteúdo
- **Textos**: Edite diretamente em `index.html`
- **Estilos**: Modifique `styles.css`
- **Comportamentos**: Ajuste `script.js`
- **Imagem**: Substitua `assets/guia-cover.jpg`

---

## 💻 Funcionalidades JavaScript Detalhadas

### CarouselManager
Gerencia o carrossel de feedbacks com:
- Navegação por botões anterior/próximo
- Arrasto com mouse (drag)
- Toque e deslizamento (mobile)
- Loop infinito circulante
- Responsividade dinâmica ao redimensionar janela

```javascript
// Estado privado
const state = {
  cards,              // Array de cards
  currentIndex: 0,    // Índice atual
  isDragging: false,  // Flag de arrasto
  startX: 0,          // Posição inicial X
  dragDistance: 0     // Distância arrastada
};

// Métodos públicos
nextSlide()   // Próximo slide
prevSlide()   // Slide anterior
```

### MobileMenuManager
Controla o menu mobile:
- Toggle com botão hamburger
- Fecha ao clicar em link
- Fecha ao clicar fora do header

### ScrollRevealManager
Anima elementos ao scroll:
- Usa Intersection Observer para performance
- Threshold: 10% visível
- Margem de detecção: -50px abaixo

### HeaderScrollManager
Efeito de compressão do header:
- Ativa ao scroll > 40px
- Reduz padding para economizar espaço
- Transição suave de 0.3s

---

## 🔧 Configuração e Customização

### Adicionar Novo Feedback
No arquivo `index.html`, adicione um novo card:

```html
<div class="feedback-card">
    <div class="feedback-header">
        <h4 class="feedback-name">Nome da Pessoa</h4>
        <p class="feedback-role">Profissão/Posição</p>
    </div>
    <p class="feedback-text">
        "Seu depoimento aqui..."
    </p>
</div>
```

### Mudar Cores
Em `styles.css`, edite as variáveis CSS no `:root`:

```css
:root {
    --rosa-forte: #dd2f54;      /* Sua cor */
    --verde-claro: #91dd36;     /* Sua cor */
    /* ... */
}
```

### Ajustar Breakpoints
Em `styles.css`, procure por `@media` e ajuste os valores:

```css
/* Novo breakpoint */
@media (max-width: 600px) {
    /* Seus estilos */
}
```

---

## 🐛 Problemas Resolvidos

### ✅ Horizontal Scroll Bug
**Problema**: Página exibia scroll horizontal na primeira rolagem
**Causa**: Scroll reveal aplicando transforms conflitantes
**Solução**: Removidos reveals de elementos de carousel e seções

### ✅ Duplicate Media Queries
**Problema**: 4 blocos @media duplicados para 480px
**Causa**: Desenvolvimento incremental sem consolidação
**Solução**: Consolidadas em um único bloco organizado

### ✅ Código Desorganizado
**Problema**: JavaScript global e CSS sem padrão
**Causa**: Sem arquitetura modular
**Solução**: Refatorado para IIFE modules + CSS sistemático

---

## 📊 Performance

- **Tamanho Total**: ~32KB CSS + ~32KB JS
- **Sem dependências externas**: Zero overhead
- **Carregamento rápido**: Inline CSS recomendado para production
- **Otimizações**:
  - CSS custom properties
  - `will-change` em animações
  - `passive: true` em event listeners
  - Lazy loading possible (não implementado)

---

## ♿ Acessibilidade

- Semântica HTML5 adequada
- Labels ARIA em elementos interativos
- Contraste de cores WCAG AA
- Navegação por teclado funcional
- Scroll smooth com fallback
- Links com texto descritivo

---

## 📝 Comentários e Documentação

Todo o código possui comentários em **português** explicando:
- Seções e módulos
- Variáveis e estado
- Funções e métodos
- Eventos e listeners
- Estilos e design tokens

Exemplo:
```javascript
/**
 * Calcula quantos pixels pular para ir de um card a outro
 * (largura + gap)
 */
const getCardStep = () => state.cards[0].offsetWidth + getGap();
```

---

## 🚢 Deployment

### Opções de Hospedagem Recomendadas

1. **GitHub Pages** (Gratuito)
   ```bash
   git push origin main
   ```
   Ative no Settings > Pages

2. **Netlify** (Gratuito)
   - Conecte seu repositório GitHub
   - Deploy automático a cada push

3. **Vercel** (Gratuito)
   - Import do repositório GitHub
   - Deploy em segundos

4. **Servidor Próprio**
   - Copie os arquivos para seu servidor
   - Configure HTTPS

---

## 📋 Checklist de Funcionalidades

- [x] Header fixo com navegação
- [x] Seção Hero com imagem
- [x] Seção Sobre com 4 pilares
- [x] Seção Conteúdo com 6 cards
- [x] Carousel de feedbacks
- [x] Suporte a drag/touch
- [x] Menu mobile responsivo
- [x] Animações de scroll reveal
- [x] Efeito de scroll do header
- [x] Design responsivo
- [x] Sem scroll horizontal
- [x] Documentação completa
- [x] Código comentado em português

---

## 📞 Contato

Para dúvidas, sugestões ou feedback sobre o projeto:

- **Email**: contato@guiadepesquisa.com
- **WhatsApp**: (11) 99999-9999
- **Instagram**: @guiadepesquisa
- **LinkedIn**: /guia-de-pesquisa

---

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

**Julia Neiva**

---

## 🙏 Agradecimentos

Obrigado a todos os usuários que forneceram feedback e ajudaram a melhorar este projeto!

---

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [ARIA - Accessible Rich Internet Applications](https://www.w3.org/WAI/ARIA/apg/)

---

**Última atualização**: Maio 2024

✨ Desenvolvido com dedicação ao conhecimento.
