import "../../style/property/property.css";
import image1 from "../../assets/image/property/img1.svg";
import image2 from "../../assets/image/property/img2.svg";
import image3 from "../../assets/image/property/img3.svg";
import image4 from "../../assets/image/property/img4.svg";
import { Row, Col } from "react-bootstrap";
import { Footer } from "../footer";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

export const Property = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <section className="property">
        <div className="property-header">
          <h1>Find Your Dream Rental Property</h1>
          <p>
            we are recognized for exceeding client expectation and delivering
            great results through dedication, ease of process, and extraordinary
            services to our landlords and tenant
          </p>
        </div>

        <Row className="mt-5 mb-5">
          <Col>
            <div className="property-detail" style={{ textAlign: "left" }}>
              <h2>Find the best To-Let in Lucknow </h2>
              <p>With No Brokerage on rental PGs | Flats | Houses | Offices.</p>
              <a
                href="#"
                onClick={() => navigate("/listing")}
                class="join-button"
              >
                Join Us
              </a>
            </div>
          </Col>
          <Col>
            <img src={image1} alt="PropImage" />
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <img src={image2} alt="PropImage" />
          </Col>
          <Col>
            <div className="property-detail" style={{ textAlign: "right" }}>
              <h2>Find the best To-Let in Ayodhya </h2>
              <p>With No Brokerage on rental PGs | Flats | Houses | Offices.</p>
              <a
                href="#"
                onClick={() => navigate("/nf")}
                class="join-button"
                alt="PropImage"
              >
                Join Us
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <div className="property-detail" style={{ textAlign: "left" }}>
              <h2>Find the best To-Let in Vellore </h2>
              <p>With No Brokerage on rental PGs | Flats | Houses | Offices.</p>
              <a
                href="#"
                onClick={() => navigate("/nf")}
                class="join-button"
                alt="PropImage"
              >
                Join Us
              </a>
            </div>
          </Col>
          <Col>
            <img src={image3} alt="PropImage" />
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <img src={image4} alt="PropImage" />
          </Col>
          <Col>
            <div className="property-detail" style={{ textAlign: "right" }}>
              <h2>Find the best To-Let in Kota </h2>
              <p>With No Brokerage on rental PGs | Flats | Houses | Offices.</p>
              <a href="#" onClick={() => navigate("/nf")} class="join-button">
                Join Us
              </a>
            </div>
          </Col>
        </Row>
        <Footer />
      </section>
    </>
  );
};
