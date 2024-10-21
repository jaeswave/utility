import NavBar from "../../../common/NavBar";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import BuyEnergyForm from "../BuyEnergyForm";
import { useState } from "react";
import BuyAirtimeData from "../BuyAirtimeData";

const SectionOne = () => {
  const [displayPurchase, setDisplayPurchase] = useState(false);

  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat bg-scroll w-full h-auto md:h-screen">
      <NavBar />
      <section className="grid grid-rows-2 py-4 px-4 place-items-center md:grid md:grid-cols-2 md:py-11 md:px-7">
        <div className="border border-x-yellow-950 w-full md:w-[80%]">
          <h1 className="w-full text-white text-5xl text-center font-bold">
            Consolidate Your Utility Payments in a Single Platform.
          </h1>
          <p className="text-white mt-5 text-1.5xl font-semibold text-center">
            Easily purchase energy and pay your phone bills — fast and
            stress-free.
          </p>
          <div className="grid grid-cols-2 place-items-center px-5 bg-white min-w-20 h-[15vh] rounded-lg mt-5">
            <span
              onClick={() => setDisplayPurchase(false)}
              className="grid grid-rows-2 place-items-center cursor-pointer"
            >
              <MdEnergySavingsLeaf className="text-red-700 text-3xl font-semibold" />
              <h3 className="font-semibold text-center">Purchase energy</h3>
            </span>
            <span
              onClick={() => setDisplayPurchase(true)}
              className="grid grid-rows-2 place-items-center cursor-pointer"
            >
              <CiMobile3 className="text-3xl text-black font-semibold" />
              <h3 className="font-semibold text-center">
                Purchase airtime/data
              </h3>
            </span>
          </div>
        </div>
        <div className=" border border-yellow-950w-[50%] mb-10">
          {displayPurchase ? <BuyAirtimeData /> : <BuyEnergyForm />}
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
