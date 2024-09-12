class ShoppingItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'quantity', 'delete']; 
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('.delete-button').addEventListener('click', () => {
            this.remove(); 
        });
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attrName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <li>
            <h3>${this.getAttribute('title')}</h3>
            <p>Quantity: ${this.getAttribute('quantity')}</p>
            <input class='delete-button' type='button' value='Delete'/>
        </li>
        `;
    }
}

customElements.define('shopping-item', ShoppingItem);
export default ShoppingItem;
