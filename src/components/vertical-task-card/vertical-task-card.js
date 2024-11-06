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

const makeTemplate = () => {
  const pathName = window.location.pathname;
  const rootPath =
    pathName.includes("index.html") ||
    pathName.endsWith("pmv-si-2023-2-pe1-t2-conecta/")
      ? "./"
      : "../../";
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="root">
        <div class="vertical-task-card" onclick="modal($(this), event);">
            <div class="card-section-wrapper">
                <div class="card-header">
                    <div class="task-info">
                        <p class="task-name" </p>
                        <p class="task-owner" onclick="fotoClick(event)"></p>
                        <div class="location-button-wrapper" onclick="fotoClick(event)">
                            <img class="image-location" src="${rootPath}/assets/icons/location.png" alt="Location">
                            <div class="location-tag"></div>
                        </div>
                    </div>
                    <a class="image-org" href="" onclick="fotoClick(event)">
                        <div class="profile-image-card-container">
                            <img src="" alt="Profile image">
                        </div>
                    </a>
                </div>
                <div class="task-description">
                    <p class="task-description-text">
                    </p>
                    <p class="show-more">saber mais</p>
                </div>
                    <div class="help-button-wrapper">
                        <div>
                            <a href="" class="help-button" onclick="fotoClick(event)">QUERO AJUDAR</a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
`;

  return template;
};

const cssStyle = `
    * {
        z-index: 2;
        margin: 0;
    }
    
    html, .root {
        overflow-x:hidden;
        height: 100%;
    }
    
    .root {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
    }
    
    .vertical-task-card {
        width: 250px;
        height: 420px;

        border-radius: 16px;
        padding: 16px 24px;

        background: var(--cor-card);
    }
    
    .card-section-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .card-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .task-name {
        font-size: 20px;
        font-weight: 700;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .task-description-text {
        display: block;

        font-size: 16px;
        font-weight: 400;

        overflow: hidden;
        line-height: 24px;
        text-overflow: ellipsis;

        max-height: 200px;
        cursor: pointer;
        word-break: break-word;
}
    
    .task-info {
        width: 60%;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .task-owner {
        font-size: 16px;
        font-weight: 700;
    }
    
    .task-description {
        color: #1E1E1E;
        font-size: 15px;
        font-weight: 400;
        font-style: normal;
        line-height: normal;

        padding-right: 8px;
    }
    
    .help-button-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 45%;
        height: 50px;
        
        align-self: end;

        border-radius: 8px;

        background: var(--cor-titulo);
        color: var(--cor-fundo);

        font-weight: 700;
    }
    
    .help-button {
        padding: 8px;

        font-size: 12px;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        color: var(--cor-fundo);
    }
    
    .location-button-wrapper {
        gap: 16px;  
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    .location-tag {
        color: var(--cor-fundo);
        text-decoration: none;
        font-weight: 700;
        font-size: 12px;
        padding: 8px;
        text-align: center;
    }
    
    .image-location {
        width: 20px;
        height: 20px;
    }
    
    .profile-image-card-container {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 50%;
    }
    
    .profile-image-card-container > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media screen and (max-width: 768px) {
        .vertical-task-card {
            display: none;
        }
`;

export class VerticalTaskCard extends HTMLElement {
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

  connectedCallback() {
    if (this.name) {
      const name = this.root.querySelector(".task-name");
      name.innerText = this.name;
    }

    if (this.organizationId) {
      const organizationId = this.root.querySelector(".image-org");
      organizationId.href =
        getPagePath("pagina-da-ong") + "?id=" + this.organizationId;
    }

    if (this.owner) {
      const owner = this.root.querySelector(".task-owner");
      owner.innerText = this.owner;
    }

    if (this.description) {
      const description = this.root.querySelector(".task-description-text");
      description.innerText = this.description;
    }

    if (this.type) {
      const type = this.root.querySelector(".location-tag");
      type.innerText = this.type;
    }

    if (this.image) {
      const image = this.root.querySelector(
        ".profile-image-card-container > img"
      );
      image.src = this.image;
    }

    if (this.destination) {
      const helpButton = this.root.querySelector(".help-button");
      helpButton.href = this.destination;
    }

    if (this.address) {
      const address = this.root.querySelector(".address");
      address.innerText = this.address;
    }
  }

  static get observedAttributes() {
    return [
      "name",
      "owner",
      "description",
      "type",
      "image",
      "destination",
      "address",
    ];
  }

  get name() {
    return this.getAttribute("name");
  }

  set name(value) {
    this.setAttribute("name", value);
  }

  get owner() {
    return this.getAttribute("owner");
  }

  set owner(value) {
    this.setAttribute("owner", value);
  }

  get description() {
    return this.getAttribute("description");
  }

  set description(value) {
    this.setAttribute("description", value);
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(value) {
    this.setAttribute("type", value);
  }

  get image() {
    return this.getAttribute("image");
  }

  set image(value) {
    this.setAttribute("image", value);
  }

  get destination() {
    return this.getAttribute("destination");
  }

  set destination(value) {
    this.setAttribute("destination", value);
  }

  get address() {
    return this.getAttribute("address");
  }

  set address(value) {
    this.setAttribute("address", value);
  }
}

customElements.define("vertical-task-card-component", VerticalTaskCard);
