import Button from "../../../common/Button";
import InputField from "../../../common/InputField";
import SelectField from "../../../common/SelectField";

const BuyEnergyForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto mt-8 grid">
      <h2 className="text-xl font-bold mb-4">Purchase energy</h2>
      <form>
        <SelectField
          label="Energy provider"
          option1="Ikeja Electric"
          option2="EKKEDC"
        />

        <SelectField label="Meter type" option1="Prepaid" option2="Postpaid" />

        <InputField
          title="Meter number"
          placeholder="Enter meter number"
          type="text"
        />

        <label className="block mb-2 font-bold">Amount to purchase</label>
        <div className="flex items-center justify-evenly">
          <Button
            title="₦1,000"
            className="!bg-gray-100 px-4 py-2 !text-black font-medium"
          />
          <Button
            title="₦10,000"
            className="!bg-gray-100 px-4 py-2 !text-black font-medium"
          />
          <Button
            title="₦20,000"
            className="!bg-gray-100 px-4 py-2 !text-black font-medium"
          />
        </div>

        <Button
          type="submit"
          title="Purchase Now"
          className="bg-orange-500 w-full mt-6 py-3 text-white"
        />
      </form>
    </div>
  );
};

export default BuyEnergyForm;
