class CharacterCounter extends HTMLElement {
  constructor() {
      super();

      // Crear un shadow DOM
      this.attachShadow({ mode: 'open' });

      // Definir el contenido del componente
      this.shadowRoot.innerHTML = `
          <style>
              .character-counter {
                  max-width: 300px;
                  margin-bottom: 10px;
              }
          </style>
          <div class="character-counter">
              <input type="text" id="inputText" maxlength="180">
              <p id="characterCount">0 / 180</p>
          </div>
      `;
  }

  connectedCallback() {
      // Agregar el evento de entrada de texto al cuadro de texto
      const inputText = this.shadowRoot.getElementById("inputText");
      inputText.addEventListener("input", this.updateCharacterCount.bind(this));
  }

  updateCharacterCount() {
      const inputText = this.shadowRoot.getElementById("inputText");
      const characterCount = this.shadowRoot.getElementById("characterCount");

      const currentCount = inputText.value.length;
      characterCount.textContent = `${currentCount} / 180`;
  }
}

// Definir el elemento personalizado 'character-counter'
customElements.define('character-counter', CharacterCounter);

