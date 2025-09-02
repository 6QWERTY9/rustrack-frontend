import type { InputHTMLAttributes } from "react";

export interface ICheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
    sizeCheckbox?: 'normal' | 'small';
}