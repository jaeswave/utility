const InputField = (prop) => {
  const { type, placeholder, name, value, title } = prop;
  return (
    <div>
      <label className="block text-sm font-bold">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
