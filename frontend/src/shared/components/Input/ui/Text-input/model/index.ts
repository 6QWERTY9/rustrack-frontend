import type { InputHTMLAttributes } from "react";

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
    placeholder?: string;
    error?: string;
}
