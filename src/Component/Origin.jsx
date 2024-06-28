import React from "react";
import Services from "./Feature";
import Navigation from "./Navigation";
import Property from "./Properpage";
import Landing from "./Frontpage";
import Info from "./Employee";
import Footer from "./Footer";
import Action from "./Effect";
import Contact from "./Contact";

function Main() {
  return (
    <>
      <div className="mt-10 ml-20 mr-20 ">
        <div className="flex bg-white-600 h-16 w-full items-center p-4">
          <div className="flex items-center">
            <img
              src="osumlogo.png"
              alt="Osumare logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="ml-auto text-black pl-14 h-[6vh] border-2 border-black p-2 red rounded-full w-[15vw]">
            Contact Us
          </div>
        </div>

        <div
          className="text-center mt-20"
          style={{ backgroundImage: "url('Ellipse.png')" }}
        >
          <p className="text-4xl font-Montserrat  ">
            Elevate{" "}
            <span className="text-blue-600 font-bold">
              {" "}
              Real Estate Success{" "}
            </span>{" "}
            with <br />
            Osumare's Digital Expertise
          </p>

          <p className="text-sm mt-3 ">
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
          <button
            className="bg-blue-600 colorchange p-1.5 rounded-full mt-3 text-white "
            style={{ width: "16rem" }}
          >
            Get Started{" "}
          </button>
        </div>

        <div className="flex items-center justify-center mt-9">
          <img
            src="homelogo.png"
            alt="wemakelogo"
            style={{ height: "20rem", width: "30rem" }}
          />
        </div>
        <br />

        <p className="flex justify-center items-center  p-12 font-Montserrat text-lg">
          {" "}
          <b> Real Estate-Focused Digital Mastery</b>
        </p>

        <div
          className="flex justify-start ml-6 "
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="setting.png"
            alt="Landing Logo"
            style={{ width: "19rem", height: "13rem" }}
          />

          <div className="  mr-6  gap-2 ">
            <h3 className=" text-lg font-bold font-Montserrat ">
              Unlock the Potential of Digital <br /> Real Estate Excellence
            </h3>
            <p className="mt-2">
              At Osumare, we understand that the real estate landscape <br />
              demands a digital presence that aligns with the intricacies of{" "}
              <br /> property marketing. Our range of specialized services is{" "}
              <br /> meticulously designed to catapult your brand's success in
              the <br /> ever-evolving digital property market.
            </p>
            <button className="bg-blue-500 h-[6vh] w-[13vw] font-thin rounded-full p-1 m-2 ml-0 text-white">
              Get Started
            </button>
          </div>
        </div>

        <Services />

        <Navigation />

        <Property />

        <Landing />

        <Action />

        <Info />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Main;
