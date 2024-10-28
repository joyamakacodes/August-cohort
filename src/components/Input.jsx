/* eslint-disable react/prop-types */

const Input = ({inputValue, inputType, change,}) => {
  return (
    <div>
        <input type= {inputType} value={inputValue} onChange={change} required className="border-purple-900 border-2 rounded-full py-2 px-4"/>
    </div>
  );
}

export default Input;
