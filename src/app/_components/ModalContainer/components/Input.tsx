import { InputField } from "../types/modalContainer.types";

const Input = ({
  id,
  label,
  type,
  placeholder,
  errors,
  onChange,
}: InputField) => {
  return (
    <div className="text-main flexCol gap-1">
      <div className="flexRowCenter gap-2">
        <label htmlFor={id}>{label}</label>
        <p className="text-xs font-medium text-red-500">{errors}</p>
      </div>
      <input
        type={type}
        id={id}
        className="border outline-none p-2 rounded-md text-black"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
