import phoneImg from "../../../assets/phone.png";
const SectionTwo = () => {
  return (
    <section className="grid w-full h-screen">
      <div className="grid grid-rows-2 place-items-center gap-5 py-10 px-10 md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold mb-3">Our Services</h2>
          <div className="flex flex-col gap-7 pl-7">
            <div>
              <h2 className="text-2xl text-left font-bold">Utility Payments</h2>
              <p>
                Easily pay for electricity, airtime, and data with reliability
                and convenience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-left font-bold">
                Energy Management Solutions
              </h2>
              <p>
                Monitor and optimize your energy usage to reduce costs and save
                money.
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto place-items-center">
          <img
            className="max-w-[50%] md:max-w-[80%]"
            src={phoneImg}
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
