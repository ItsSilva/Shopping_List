import ShoppingItem from "../ShoppingItem/ShoppingItem.js";

class ShoppingList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.items = [];
    }

    connectedCallback() {
        this.render();

        const form = this.shadowRoot.querySelector('.form-container');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputName = this.shadowRoot.querySelector('.input-name').value;
            const inputQuantity = this.shadowRoot.querySelector('.input-quantity').value;

            this.items.push({ title: inputName, quantity: inputQuantity, delete: false });
            this.addItem({ title: inputName, quantity: inputQuantity, delete: false });

            form.reset();
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
        <form class='form-container'>
            <input class='input-name' type='text' placeholder='Add the item name' required/>
            <input class='input-quantity' type='number' placeholder='Add the item quantity' required/>
            <button>Add the item to the cart</button>
        </form>
        <ul class='list-container'></ul>
        `;
        this.items.forEach(item => this.addItem(item));
    }

    addItem({ title, quantity, delete: deleteItem }) {
        const item = document.createElement('shopping-item');
        item.setAttribute('title', title);
        item.setAttribute('quantity', quantity);
        item.setAttribute('delete', deleteItem);

        this.shadowRoot.querySelector('.list-container').appendChild(item);
    }
}

customElements.define('shopping-list', ShoppingList);
export default ShoppingList;
