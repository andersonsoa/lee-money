import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <label>
      <span className="mb-1 block text-sm text-gray-400">{props.label}</span>
      <input
        {...props}
        ref={ref}
        className="bg-dark-800 w-full rounded py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
      />
    </label>
  );
});

Input.displayName = "Input";
