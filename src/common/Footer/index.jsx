const Footer = () => {
  return (
    <div>
      <footer className="bg-black h-[30vh] grid place-items-center">
        <div className="max-w-[80%]">
          <div className="flex flex-col items-center justify-center h-full">
            <h5 className="text-2xl text-white">Assistance</h5>
            <div className="text-white text-center space-y-1">
              <p>Frequently Asked Questions (FAQ) </p>
              <p>Terms and Conditions</p>
              <p>Email: info@zulfahgroup.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
