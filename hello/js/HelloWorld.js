// web component
class HelloWorld extends HTMLElement {
  
  constructor() {
    super();
    this.name = 'World';
  }
  
  // component attributes
  static get observedAttributes() {
    return ['name'];
  }
  
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {

    if (oldValue === newValue) return;
    this[ property ] = newValue;
    
  }
  
  // connect component
  connectedCallback() {
    
    const shadow = this.attachShadow({ mode: 'open' });
    
    shadow.innerHTML = `
      <style>
        p {
          text-align: center;
          font-weight: normal;
          padding: 1em;
          margin: 0 0 2em 0;
          background-color: #eee;
          border: 1px solid #666;
        }
      </style>

      <p>Hello ${ this.name }!</p>`;
    
  }
  
}

// register component
customElements.define( 'hello-world', HelloWorld );



