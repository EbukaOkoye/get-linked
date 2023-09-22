import { partner, purple } from "../../../utilities/utils";
import "../banner.css";

const Partners = () => {
  return (
    <>
      <div className="bg-mainBlue p-4 left-banner-left banner-left-blur flex flex-col items-center">
        <h2 className="text-center text-white lg:text-3xl text-xl font-bold font-custom mt-24">
          Partners and Sponsors
        </h2>
        <p className="text-center text-white text-sm font-mont my-2">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <img className="w-4 h-4 mt-10 ml-16" src={purple} alt="" />
        <img className="mt-8 mb-16" src={partner} alt="" />
      </div>
    </>
  );
};

export default Partners;
