import { ChangeEvent } from "react";

interface InputProps {
  nome: string;
  placeholder: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

function Input({ nome, placeholder, label, onChange, value }: InputProps) {
  return (
    <div>
      <div className="font-poppins font-medium text-sm">{label}*</div>
      <input
        value={value}
        className="bg-white py-2 px-4 rounded-[12px] w-full"
        name={nome}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
