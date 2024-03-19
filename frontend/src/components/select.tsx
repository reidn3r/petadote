import { ChangeEvent } from "react";

interface SelectProps {
  nome: string;
  placeholder: string;
  label: string;
  opcoes: Opcoes[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: any;
}

interface Opcoes {
  value: string | number;
  label: string;
}

function Select({
  nome,
  placeholder,
  label,
  opcoes,
  onChange,
  value,
}: SelectProps) {
  return (
    <div>
      <div className="font-poppins font-medium text-sm">{label}*</div>
      <select
        className="bg-white py-2 px-4 rounded-[12px] w-full block"
        name={nome}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
        <option selected>Selecione o {label.toLocaleLowerCase()}</option>
        {opcoes.map((opcao) => (
          <option value={opcao.value}>{opcao.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
