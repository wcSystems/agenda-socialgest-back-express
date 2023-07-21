class Contact {

    constructor(data) {
       this.name = data.name;
       this.last_name = data.last_name;
       this.phone = data.phone;
       this.email = data.email;
    }
 
    addContact() {
       return `INSERT INTO contacts(name, last_name, phone, email) \
                    VALUES('${this.name}','${this.last_name}', '${this.phone}', '${this.email}')`;
    }
 
    updateContact(id) {
       return `UPDATE contacts SET name = '${this.name}', last_name = '${this.last_name}', phone = '${this.phone}', email = '${this.email}' WHERE id = ${id}`;
    }
 
    static getContactById(id) {
       console.log(id);
       return `SELECT * FROM contacts WHERE id = ${id}`;
    }
 
    static deleteContactById(id) {
       return `DELETE FROM contacts WHERE id = ${id}`;
    }
 
    static getAllContacts() {
       return `SELECT * FROM contacts`;
    }
 }
 
 module.exports = Contact;