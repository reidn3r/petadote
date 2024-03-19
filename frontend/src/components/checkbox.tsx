import { ChangeEvent } from "react";

interface CheckboxProps {
  nome: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ nome, label, onChange }: CheckboxProps) {
  return (
    <div className="flex items-center gap-4">
      <input
        className="w-4 h-4"
        name={nome}
        type="checkbox"
        onChange={onChange}
      />
      <label className="font-poppins font-medium text-sm">{label}*</label>
    </div>
  );
}

export default Checkbox;
