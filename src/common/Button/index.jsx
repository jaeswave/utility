const Button = (prop) => {
  const { title, onClick, className } = prop;
  return (
    <button
      onClick={onClick}
      className={`text-white bg-green-500 hover:bg-inherit rounded-full text-md px-5 py-2.5 text-center ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
