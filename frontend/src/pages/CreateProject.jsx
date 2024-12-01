import React from "react";

function CreateProject() {
  const [formData, setFormData] = React.useState({
    image: "",
    chain: "",
    abi: "",
    contractAddress: "",
    callbacks: [{ name: "", inputType: "", outputType: "", prompt: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCallbackChange = (index, e) => {
    const { name, value } = e.target;
    const newCallbacks = [...formData.callbacks];
    newCallbacks[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      callbacks: newCallbacks,
    }));
  };

  const addCallback = () => {
    setFormData((prevData) => ({
      ...prevData,
      callbacks: [
        ...prevData.callbacks,
        { name: "", inputType: "", outputType: "", prompt: "" },
      ],
    }));
  };

  return (
    <div className="p-4 container mx-auto">
      <form className=" mx-auto grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Game Name
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="chain"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Deployed Chain
          </label>
          <select
            id="chain"
            name="chain"
            value={formData.chain}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a chain</option>
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="abi"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ABI
          </label>
          <textarea
            id="abi"
            name="abi"
            value={formData.abi}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="contractAddress"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Smart Contract Address
          </label>
          <input
            type="text"
            id="contractAddress"
            name="contractAddress"
            value={formData.contractAddress}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </form>

      <div className="mb-5">
        <h3 className="text-2xl font-medium leading-6 text-white text-left">
          Callback Functions
        </h3>
        {formData.callbacks.map((callback, index) => (
          <div key={index} className=" grid grid-cols-2  mb-5">
            <input
              type="text"
              name="name"
              value={callback.name}
              placeholder="Function Name"
              onChange={(e) => handleCallbackChange(index, e)}
              className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              name="inputType"
              value={callback.inputType}
              placeholder="Input Type"
              onChange={(e) => handleCallbackChange(index, e)}
              className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              name="outputType"
              value={callback.outputType}
              placeholder="Output Type"
              onChange={(e) => handleCallbackChange(index, e)}
              className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <textarea
              name="prompt"
              value={callback.prompt}
              placeholder="Prompt"
              onChange={(e) => handleCallbackChange(index, e)}
              className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  callbacks: prevData.callbacks.filter((_, i) => i !== index),
                }))
              }
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Cancel
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addCallback}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Callback
        </button>
      </div>
    </div>
  );
}

export default CreateProject;
