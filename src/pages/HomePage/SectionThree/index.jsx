import phoneImg from "../../../assets/phone.png";
const SectionThree = () => {
  return (
    <section className="grid w-full h-auto md:h-screen">
      <div className="grid grid-rows-2 place-items-center gap-4 py-10 px-10 md:grid-cols-2">
        <div className="w-auto place-items-center">
          <img
            className="max-w-[50%] md:max-w-[80%]"
            src={phoneImg}
            alt="phone"
          />
        </div>
        <div className="h-[20vh]">
          <h2 className="text-center text-5xl font-bold mb-3">
            Benefits for your loyalty.
          </h2>
          <div className="flex flex-col gap-5 pl-7">
            <div>
              <p>
                The more you engage with our services, the more points you
                collect
              </p>
            </div>
            <div>
              <p>Use your points to unlock exclusive deals and discounts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
