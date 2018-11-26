class Person extends HTMLElement {

    set person(person) {
        this.innerHTML = `
            <div>
            <span class="name">${person.name}</span> 
            <span class="email">E-Mail: <a href="mail:${person.email}">${person.email}</a></span>
            <span class="Phone">Phone: ${person.phone}</span>
            </div>
        `;
    }

}

customElements.define('person-element', Person);