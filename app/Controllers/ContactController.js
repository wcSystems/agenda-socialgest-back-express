const db = require('../../migration');
const Contact = require('../Models/Contact');

module.exports = {

   /**
    * store contact details.
    */
   contactStore: (req, res, next) => {
      const contactData = {
         name: req.body.name,
         last_name: req.body.last_name,
         phone: req.body.phone,
         email: req.body.email
      }
      const contact = new Contact(contactData);

      db.query(contact.addContact(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
               'error_line': err.files,
            })
         };

         db.query(Contact.getContactById(result.insertId), (err, contactData) => {
            res.status(200).json({
               'data': contactData[0],
            });
         })
      });
   },

   /**
    * Get the lists of all contacts.
    */
   contactsLists: (req, res, next) => {
      db.query(Contact.getAllContacts(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
            })
         }

         res.status(200).json({
            'data': result,
         });
      })
   },

   /**
    * Update contact details.
    */
   updateContact: (req, res, next) => {
      const contactData = {
         name: req.body.name,
         last_name: req.body.last_name,
         phone: req.body.phone,
         email: req.body.email
      }

      const contact = new Contact(contactData);
      const id = req.params.id;
      db.query(contact.updateContact(id), (err, result) => {
         if(err) {
            res.status(400).json({
               'error': err.message,
            });
         }

         db.query(Contact.getContactById(id), (err, contactData) => {

            if (err) {
               res.status(400).json({
                  'error': err.message,
               });
            }

            res.status(200).json({
               'message': 'Contact updated successfully.',
               'data': contactData[0],
            });
         });
      });
   },
   /**
    * get contact details by contact id.
    */
   getContactById: (req, res, next) => {
      const id = req.params.id;
      db.query(Contact.getContactById(id), (err, result) => {
         if(err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'data': result[0],
         });
      })
   },

   deleteContact: (req, res, next) => {
      const id = req.params.id;
      db.query(Contact.deleteContactById(id), (err, result) => {
         if (err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'message': 'Contact deleted successfully.',
         });
      })
   }
}