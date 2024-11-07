const getPagePath = (pageName) => {
  const currentPath = window.location.pathname;

  if (currentPath.includes(`${pageName}.html`)) {
    return `./${pageName}.html`;
  }

  if (currentPath.includes("/pages")) {
    return `../${pageName}/${pageName}.html`;
  }

  return `./pages/${pageName}/${pageName}.html`;
};

const makeTemplate = (variant) => {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="root">
   
    <footer>
        <div class="footer-wrapper">
            <a href=${getPagePath(
              "como-comecar"
            )} class="footer-item">Como começar?</a>
            <a href=${getPagePath(
              "sobre-o-voluntariado"
            )} class="footer-item">Sobre o voluntariado</a>
            <a href=${getPagePath(
              "por-que-ser-voluntario"
            )} class="footer-item">Porque ser voluntário</a>
            <a href=${getPagePath(
              "perguntas-frequentes"
            )} class="footer-item">Perguntas frequentes</a>
            <a href=${getPagePath(
              "historias-sucesso"
            )} class="footer-item">Histórias de sucesso</a>
        </div>
    </footer>
    
    </div>
`;

  return template;
};

const cssStyle = `  
   
    footer {
        background: var(--cor-link2);
        padding: 20px;
        display: flex;
    }
    
    .footer-wrapper {
        width: 100vw;

        display: flex;
        justify-content: space-evenly;
    }
    
    .footer-item {
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        color: var(--cor-texto);

        padding: 10px;
    }
    
    .footer-item:hover {
        text-decoration: underline;        
    }
    
    @media screen and (max-width: 768px) {
        footer {
            display: none;
        }
    }
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(cssStyle);
    this.root.adoptedStyleSheets = [stylesheet];

    const template = makeTemplate(this.variant);

    const clone = template.content.cloneNode(true);

    this.root.append(clone);
  }

  static get observedAttributes() {
    return ["variant"];
  }

  get variant() {
    return this.getAttribute("variant");
  }

  set variant(value) {
    this.setAttribute("variant", value);
  }
}

customElements.define("footer-component", FooterComponent);
