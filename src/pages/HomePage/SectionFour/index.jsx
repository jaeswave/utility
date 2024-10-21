import storeLinks from "../../../assets/this.png";
const SectionFour = () => {
  return (
    <div className="grid place-items-center w-full h-auto py-5">
      <div className="w-[70%]">
        <div>
          <h4 className="text-4xl text-center font-bold">
            Unlock the full potential of our app and enjoy its benefits!
          </h4>
          <p className="text-center mt-5 text-2xl">
            Download for iPhone or Android and simplify your life with just a
            few taps.
          </p>
        </div>
        <div className="grid place-items-center">
          <img className="w-36" src={storeLinks} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
