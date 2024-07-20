import "../../style/contact/contact.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import messageIMG from "../../assets/img/message-img.png";
import callIMG from "../../assets/img/call-img.png";
import { Footer } from "../footer";
import NavBar from "../NavBar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
    topic: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Submit query");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //The user cannot sent message more than 500 characters
    if (formDetails.message.length > 500) {
      alert("Message should not exceed 500 characters.");
      return;
    }

    setButtonText("Sending...");
    axios
      .post(
        "https://contact-page-backend.onrender.com/api/v1/newContact",
        formDetails
      )
      .then((response) => {
        toast.success("Message sent successfully");
        setFormDetails(formInitialDetails);
        setStatus({ succes: true, message: "Message sent successfully" });
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later.",
        });
      })
      .finally(() => {
        setButtonText("Submit query");
      });
  };

  return (
    <>
      <NavBar/>
     <section className="contact" id="contact">
      <Toaster />
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col size={12} md={5} className="contact-us">
            <TrackVisibility>
              {/* {({ isVisible }) => */}
              {/* <div className={isVisible ? "animate__animated animate__backInRight" : ""}> */}
              <h1 style={{ marginBottom: "30px", fontSize: "35px" }}>
                Contact Us, We're Ready to Help!
              </h1>
              <p className="conpara" style={{ letterSpacing: "1px" }}>
                We strive to provide you with the best
              </p>
              <p className="conpara" style={{ letterSpacing: "1px" }}>
                experience and the best platform to find your
              </p>
              <p className="conpara" style={{ letterSpacing: "1px" }}>
                {" "}
                choice.
              </p>
              <p className="conpara" class="space">
                Post us any queries and we’ll get back to you.
              </p>

              <Row className="mb-3 mt-5">
                <Col md={2}>
                  <img
                    src={messageIMG}
                    alt="Header Img"
                    className="message-img"
                  />
                </Col>
                <Col>
                  <h3>
                    <span className="highlight">Chat with us !!</span>
                  </h3>
                  <p className="conpara">Our friendly team is here to help</p>
                  <span>to_let@gmail.com</span>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <img src={callIMG} alt="Header Img" className="message-img" />
                </Col>
                <Col>
                  <h3>
                    {" "}
                    <span className="highlight">Call us...</span>{" "}
                  </h3>
                  <p className="conpara">Mon - fri 8 am to 10 pm</p>
                  <span>+91 9876543210</span>
                </Col>
              </Row>
              {/* </div>} */}
            </TrackVisibility>
          </Col>
          <Col size={12} md={5} className="form-container">
            <TrackVisibility>
              <div>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={13}>
                      <label htmlFor="topic">Topic</label>
                      <select
                        id="topic"
                        name="topic"
                        value={formDetails.topic}
                        onChange={(e) => onFormUpdate("topic", e.target.value)}
                        className="form-control mb-2"
                        style={{
                          backgroundColor: "black", // White background
                          color: "#84847f", // White text
                          borderColor: "#ffffff", // White border
                        }}
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="Inquiry">Inquiry</option>
                        <option value="Report Bug">Report Bug</option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>

                      <label for="name">Name</label>
                      <input
                        type="text"
                        id="inputID"
                        value={formDetails.name}
                        placeholder="johndoe"
                        onChange={(e) => onFormUpdate("name", e.target.value)}
                        className="form-control mb-1"
                        required
                      />

                      <label for="email">Email</label>
                      <input
                        type="email"
                        id="inputID"
                        value={formDetails.email}
                        placeholder="name@provider.com"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        className="form-control mb-2"
                        required
                      />
                      <label for="message">Message</label>
                      <textarea
                        rows="5"
                        id="message"
                        value={formDetails.message}
                        placeholder=" Type your Message...."
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                        className="form-control mb-3"
                        required
                      ></textarea>
                      <div className="text-center submit">
                        <button type="submit" className="btn1 cls2">
                          <span className="buttoncolor">{buttonText}</span>
                        </button>
                        {status.message && (
                          <p
                            className={
                              status.success === false
                                ? "text-danger"
                                : "text-success"
                            }
                          >
                            {status.message}
                          </p>
                        )}
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
        <Footer />
      </Container>
    </section>
    
    
    </>
   

  );
};
