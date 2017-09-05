//This file handles GET and POST requests for API routes

module.exports = {
  GET: {
    contacts: function getContacts(req, res) {
      console.log('api/contacts get request', req);
    }
  },
  POST: {
    contacts: function postContacts(req, res) {
      console.log('api/contacts post request', req);
    }
  }
}
