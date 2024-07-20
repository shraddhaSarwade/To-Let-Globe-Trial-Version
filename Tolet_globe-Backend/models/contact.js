const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require("./dotenv"); // Ensure the dotenv configuration is loaded

// const connectDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.DB);
//     console.log("Connected to database successfully");
//   } catch (error) {
//     console.error("Error connecting to database:", error);
//     console.log("Could not connect database!");
//   }
// };

// Name
// Email (required)
// Phone number (optional)
// Topic selection (dropdown menu or radio buttons)
// Query/Message (text area with appropriate character limits to prevent overly long
// messages)
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
  },

  { timestamps: true }
);

const ContactUser = mongoose.model("ContactUser", UserSchema);

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String, // optional field
    },
    topic: {
      type: String,
      required: true,
      enum: ["Inquiry", "Report Bug", "Support", "Feedback", "Other"],
    },
    message: {
      type: String,
      required: true,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["Pending", "Resolved", "InProgress", "Feedback"],
      default: "Pending",
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = { Contact, ContactUser };
