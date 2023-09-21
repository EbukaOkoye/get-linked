import axios from 'axios'
import image from "../../assets/contact-img.svg";
import { grey, purple } from "../../utilities/utils";
import man from "../../assets/walking-man.svg";
import woman from "../../assets/walking-girl.svg";
import "../banners/banner.css";
import { useState } from 'react';

const RegisterBanner = () => {
    const [ category, setCategory ] = useState([])

    const getCategory = () => {

    }

  return (
    <>
      <div className="register-banner bg-mainBlue grid grid-cols-1 lg:grid-cols-2 gap-5 p-8 left-banner banner-left-blur">
        <div className="left-img">
          <img className="w-5 h-5 ml-12" src={purple} alt="" />
          <img src={image} alt="" />
          <img className="w-5 h-5 mb-8" src={grey} alt="" />
        </div>
        <div className="right-form">
          <div className="form-container  bg-gradient-to-tl from-transparent to-mainBlue py-4 px-8">
            <img className="w-5 h-5 ml-auto mr-20" src={purple} alt="" />
            <h2 className="text-xl lg:text-3xl text-brightPurple font-custom font-bold py-3">
              Register
            </h2>
            <p className="flex items-end">
              <span className="text-xs text-white font-mont">
                Be part of this movement!
              </span>
              <span>
                <img src={woman} alt="" />
              </span>
              <span>
                <img src={man} alt="" />
              </span>
            </p>
            <p className="text-xl lg:text-2xl text-white font-mont pt-4 pb-6">
              CREATE YOUR ACCOUNT
            </p>
            <form className="w-full mt-4">
              <div className="team-and-phone grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="team grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="team"
                  >
                    Team’s Name
                  </label>
                  <input
                    id="team"
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="text"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="phone grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="email-and-topic grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                <div className="email grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="topic grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="topic"
                  >
                    Project Topic
                  </label>
                  <input
                    id="topic"
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="text"
                    placeholder="What is your group project topic"
                  />
                </div>
              </div>
              <div className="category-and-size">
                <div className="category">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="category"
                  >
                    Category
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterBanner;
