import React from "react";
import "../style/service.css";
import Image1 from "../assets/image/service/image18.png";
import Image2 from "../assets/image/service/image21.png";
import Image3 from "../assets/image/service/image23.png";
import Image4 from "../assets/image/service/image25.png";
import Image5 from "../assets/image/service/image27.png";
import Image6 from "../assets/image/service/image29.png";
// import { Footer } from './footer'

export const Service = () => {
  return (
    <>
      <div className="serviceouterdiv">
        <div className="serviced2">
          <p class="serviceh1">Services</p>
          <p class="serviceh2">
            SKIP THE MIDDLEMAN : RENT OR LEASE DIRECTLY ON TO-LET GLOBE
          </p>
        </div>

        <div class="row-container">
          <div class="serviced1">
            <div class="box1">
              <div class="box12">
                <img class="servicepageimage" src={Image1} alt=""></img>
              </div>
              <div class="box13">
                <p class="servicepagetext">Paying Guest</p>
                <div class="box14">
                  Find budget-frinedly and Convient paying guest accomadations
                  for a Comfortable stay away from home
                </div>
              </div>
            </div>

            <div class="box1">
              <div class="box12">
                <img class="servicepageimage" src={Image2} alt="" />
              </div>
              <div class="box23">
                <p class="servicepagetext">Flat</p>
                <div class="box14">
                  Discover a diverse range of apartments for rent, customize to
                  suit your lifestyle and budget
                </div>
              </div>
            </div>

            <div class="box1">
              <div class="box12">
                <img class="servicepageimage" src={Image3} alt=""></img>
              </div>
              <div class="box13">
                <p class="servicepagetext">House</p>
                <div class="box14">
                  Search for your dream home, available for rent or sale,
                  tailored to your lifestyle and preferences
                </div>
              </div>
            </div>
          </div>
          <div class="serviced1">
            <div class="box1">
              <div class="box12">
                <img class="servicepageimage" src={Image4} alt=""></img>
              </div>
              <div class="box23">
                <p class="servicepagetext">Shop</p>
                <div class="box14">
                  Explore a variety of retail spaces and shops available for
                  lease, ideal for growing your business
                </div>
              </div>
            </div>

            <div class="box1">
              <div class="box12">
                <img class="servicepageimage" src={Image5} alt=""></img>
              </div>
              <div class="box13">
                <p class="servicepagetext">Office</p>
                <div class="box14">
                  Elevate your workspace and productivity with modern office
                  spaces for ent, designed for success
                </div>
              </div>
            </div>
            <div class="box1">
              <div class="box12">
                <img class="servicepageimage" src={Image6} alt=""></img>
              </div>
              <div class="box23">
                <p class="servicepagetext">Warehouse</p>
                <div class="box14">
                  Secure the perfect godwon space for rent, offering ample
                  storage and logistics solutions
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
};
