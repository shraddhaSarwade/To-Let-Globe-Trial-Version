import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../../style/contact/contactus.css";
import "animate.css";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent the user from sending a message with more than 500 characters
    if (message.length > 500) {
      toast.error("Message should not exceed 500 characters.");
      return;
    }

    setButtonText("Sending...");

    const formDetails = {
      name,
      email,
      phoneNumber,
      message,
      topic: "Other",
    };

    try {
      const response = await axios.post(
        "https://contact-page-backend.onrender.com/api/v1/newContact",
        formDetails
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Something went wrong, please try again later.");
    } finally {
      setButtonText("Send Message");
    }
  };

  const googlemaps =
    "https://www.google.com/maps/place/To-Let+Globe/@26.8465566,80.9797793,15z/data=!4m6!3m5!1s0x399bfd77577ba78f:0xd2d6f22d1b246815!8m2!3d26.8465566!4d80.9797793!16s%2Fg%2F11vhrqqb45?entry=ttu";

  return (
    <div className="innerdiv1">
      <Toaster />
      <a href={googlemaps} className="googlemaplink">
        <div className="imagediv2">
          <p className="imagediv2h1"></p>
        </div>
      </a>
      <div className="headingd1">
        <p className="headingh1">GET IN TOUCH</p>
        <p className="headingh2">Have some questions?</p>
        <p className="headingh2">Feel free to ask them anytime</p>

        <form className="contactusform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="contactusinput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contactusinput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="contactusinput"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Message"
            className="contactusinput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="contactusbutt" type="submit">
            {buttonText} &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};
