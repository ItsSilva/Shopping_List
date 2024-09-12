import * as components from './components/index.js';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    };

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>Shopping List</h2>    
        <shopping-list></shopping-list>
        `;
    }
};
customElements.define('app-container', AppContainer);