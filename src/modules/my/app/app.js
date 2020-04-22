import { LightningElement } from 'lwc';

const CONTACTS_URL = 'api/contacts';

export default class App extends LightningElement {

    contacts = [];

    connectedCallback() {
        fetch(CONTACTS_URL).then(response => {
            return response.json();
        }).then( contacts => {
            this.contacts = contacts;
        });
    }

}