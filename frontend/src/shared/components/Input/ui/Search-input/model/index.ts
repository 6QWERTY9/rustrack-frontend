import type { InputHTMLAttributes } from "react";

export interface ISearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value?:  string;
    onChange?: (value:string) => void;
    placeholder?: string;
    radius?: boolean;
}
