import ReactSelect from "react-select";

type Option = {
  value?: any;
  label?: any;
};

interface SelectProps {
  name: string;
  options?: Option[];
  value: Option | null;
  onChange: (value: Option) => void;
  placeholder?: string;
  isLoading?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  placeholder,
  value,
  onChange,
  isLoading = false,
}) => {
  return (
    <ReactSelect
      className="w-full rounded bg-slate-800 shadow-md outline-none ring-fuchsia-700 focus-within:ring"
      placeholder={placeholder}
      noOptionsMessage={() => "Nenhuma opção encontrada"}
      options={options}
      isSearchable={true}
      isLoading={isLoading}
      styles={{
        container: (base) => ({
          ...base,
          border: "none",
        }),
        control: (base) => ({
          ...base,
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }),
        option: (base, state) => ({
          ...base,

          background: state.isSelected
            ? " rgb(134 25 143)"
            : state.isFocused
            ? "#565656"
            : "trasparent",
        }),
        singleValue: (base) => ({
          ...base,
          color: "#fafafa",
        }),
        input: (base) => ({
          ...base,
          color: "#fafafa",
        }),
        menu: (base) => ({
          ...base,
          background: "#232323",
        }),
        dropdownIndicator: (base, state) => ({
          ...base,
          color: "#fafafa",
        }),
      }}
      onChange={(option) => {
        option && onChange(option);
      }}
      value={value}
      name={name}
    />
  );
};
