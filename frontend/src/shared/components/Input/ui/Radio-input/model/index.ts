import type { InputHTMLAttributes } from 'react';

export interface IRadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
}
