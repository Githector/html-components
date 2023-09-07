// web component
class CustomButton extends HTMLElement {
  
    constructor() {
      super();
      this.name = 'Button';
      this.textContent =  this.name;

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
          a {
            text-align: center;
            padding: 1em;
            color: white;
            background-color: red;
            border: 1px solid #666;
            margin-top: 3px;
          }
        </style>
  
        <a>${ this.name }!</a>`;
      
    }
    
  }
  
  // register component
  customElements.define( 'custom-button', CustomButton );
  
  