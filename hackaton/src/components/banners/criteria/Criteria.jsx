import criteria from "../../../assets/criteria.svg";
import ButtonCustom from "../../../customs/ButtonCustom";
import { criterium, purple, white } from "../../../utilities/utils";
import "../banner.css";

const Criteria = () => {
  return (
    <>
      <div className="px-8 py-6 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-5 bg-mainBlue left-flare">
        <div className="left w-full relative">
          <img className="w-4 h-4 absolute left-1/4" src={purple} alt="" />
          <img className="mt-8 py-10" src={criteria} alt="" />
          <img className="w-4 h-4 absolute right-10" src={white} alt="" />
        </div>
        <div className="right">
          <h2 className="text-center lg:text-left text-xl lg:text-3xl text-white font-custom font-bold">
            Judging Criteria
          </h2>
          <h2 className="text-center lg:text-left text-xl lg:text-3xl text-brightPurple font-custom font-bold">
            Key attributes
          </h2>
          <div className="criteria-map">
            {criterium?.map((criterea, index) => (
              <div className="my-6" key={index}>
                <p className="text-center lg:text-left">
                  <span className="font-mont text-redPink text-sm">
                    {criterea?.title}
                  </span>
                  <span className="font-mont text-white text-sm">
                    {criterea?.sub}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <ButtonCustom
            text="Read More"
            className="flex mx-auto lg:block lg:mx-0"
          />
        </div>
      </div>
    </>
  );
};

export default Criteria;
