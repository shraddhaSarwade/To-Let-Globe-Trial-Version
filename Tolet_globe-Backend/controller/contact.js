const { Contact, ContactUser } = require("../models/contact");
const { main } = require("../helpers/nodeMailer");
const updateEmailTemplate = require("../helpers/updateEmailTemplate");

//admin controller to get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const allContactDetails = await Contact.find();
    res.status(200).send(allContactDetails);
  } catch (e) {
    console.log("Something went wrong", error);
    res.status(500).send("Internal server error");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allContactDetails = await ContactUser.find();
    res.status(200).send(allContactDetails);
  } catch (e) {
    console.log("Something went wrong", error);
    res.status(500).send("Internal server error");
  }
};

// Assuming this is in your server-side file (e.g., routes/admin.js or controllers/adminController.js)
// Import your Contact model
exports.updateStatus = async (req, res) => {
  try {
    const { id, newStatus } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { status: newStatus },
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).send("Contact not found");
    }
    const html = updateEmailTemplate(
      updatedContact.name,
      updatedContact.topic,
      updatedContact.status
    );
    main(updatedContact.email, "Status Updated", html);
    res.status(200).json(updatedContact); // Send back the updated contact
  } catch (e) {
    console.error("Something went wrong", e);
    res.status(500).send("Internal server error");
  }
};

const emailTemplate = require("../helpers/emailTemplate");
const validateContact = require("../middlewares/authMiddleware");

// User controller to raise a new contact request
exports.createNewContact = async (req, res) => {
  const { error } = validateContact.validate(req.body);

  if (error) {
    // If input is invalid, return without saving
    return res
      .status(400)
      .json({ error: "Bad Request", message: error.details[0].message });
  }

  try {
    // Check if the user exists based on email
    let user = await ContactUser.findOne({ email: req.body.email });

    if (!user) {
      // If user does not exist, create a new user
      user = await ContactUser.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phoneNumber,
      });
    }

    // Create the new contact
    let Status = "Pending";
    if (req.body.topic == "Feedback") {
      Status = "Feedback";
    }

    await Contact.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      topic: req.body.topic,
      message: req.body.message,
      status: Status,
      user: user._id, // Link to the user object ID
    });
    const html = emailTemplate(req.body.name, req.body.topic);
    main(req.body.email, "Thanks For Contacting TO LET GLOBE", html);
    // Send success response
    return res.status(200).json({ message: "Contact created successfully" });
  } catch (error) {
    // If error occurs
    console.error("Error creating contact:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Failed to create contact",
    });
  }
};
