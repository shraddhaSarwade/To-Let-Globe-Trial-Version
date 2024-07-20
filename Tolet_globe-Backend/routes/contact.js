const express = require("express");
const { createNewContact } = require("../controller/contact.js");
const {
  getAllContacts,
  updateStatus,
  getAllUsers,
} = require("../controller/contact.js");
const router = express.Router();

//user route
router.route("/newContact").post(createNewContact);
//admin route

//admin routes

//get all contacts
router.route("/admin/Contacts").get(getAllContacts);
router.route("/admin/update").put(updateStatus);

//get all users
router.route("/admin/Users").get(getAllUsers);

module.exports = router;
