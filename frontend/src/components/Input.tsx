import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  label: string;
  Icon?: LucideIcon;
  defaultValue?: string;
  placeholder?: string;
  id: string;
  type?: string;
}

const Input: React.FC<Props> = ({
  label,
  Icon,
  defaultValue = "",
  placeholder = "",
  id = "",
  type = "text",
}) => {
  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="current-location"
        className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
      >
        {label}
      </label>
      <div className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 shadow-sm focus-within:border-neutral-400">
        {Icon && <Icon className="size-5 shrink-0 text-neutral-500" />}
        <input
          id={id}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full bg-transparent text-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
