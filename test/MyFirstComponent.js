class MyFirstComponent extends HTMLElement{
    constructor() {
        super()

        this.attachShadow({mode: 'open'})

        const newDiv = document.createElement('div')
        newDiv.textContent = 'My first component'
        newDiv.style.backgroundColor = 'red'

        this.shadowRoot.append(newDiv)
    //     this.shadowRoot.innerHTML = `
    //     <style>
    //         .character-counter {
    //             max-width: 300px;
    //             margin-bottom: 10px;
    //         }
    //     </style>
    //     <div class="character-counter">
    //         <input type="text" id="inputText" maxlength="180">
    //         <p id="characterCount">0 / 180</p>
    //     </div>
    // `;
    }

    connectedCallback(){
        console.log("componend initialized!")
    }

    disconnectedCallback(){
        console.log("disconnected!")
    }

}

customElements.define('my-first-component',MyFirstComponent)