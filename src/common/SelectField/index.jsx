const SelectField = (prop) => {
  const {
    label,
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
    option8,
    option9,
    option10,
  } = prop;
  return (
    <div>
      <label className="block text-sm font-bold  mb-2">{label}</label>
      <select className="block w-full p-2 mb-4 border">
        <option>{option1}</option>
        <option>{option2}</option>
        <option>{option3}</option>
        <option>{option4}</option>
        <option>{option5}</option>
        <option>{option6}</option>
        <option>{option7}</option>
        <option>{option8}</option>
        <option>{option9}</option>
        <option>{option10}</option>
      </select>
    </div>
  );
};

export default SelectField;
