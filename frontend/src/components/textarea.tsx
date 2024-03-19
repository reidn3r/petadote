import { ChangeEvent } from "react";

interface TextAreaProps {
  nome: string;
  placeholder: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: any;
}

function TextArea({
  nome,
  placeholder,
  label,
  onChange,
  value,
}: TextAreaProps) {
  return (
    <div>
      <div className="font-poppins font-medium text-sm">{label}*</div>
      <textarea
        className="bg-white py-2 px-4 rounded-[12px] w-full resize-none"
        name={nome}
        placeholder={placeholder}
        rows={3}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
