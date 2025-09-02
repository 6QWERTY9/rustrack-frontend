/* 
import { TextInputProps } from './text-input/model';
import { SearchInputProps } from './search-input/model';
import { RadioInputProps } from './radio-input/model';
import { CheckboxInputProps } from './checkbox-input/model';

export type InputType = 'text' | 'search' | 'radio' | 'checkbox' | 'email' | 'password' | 'tel';

export interface BaseInputProps {
    type?: InputType;
    className?: string;
}

export type InputProps = 
    | ({ type?: 'text' | 'email' | 'password' | 'tel' } & TextInputProps)
    | ({ type: 'search' } & SearchInputProps)
    | ({ type: 'radio' } & RadioInputProps)
    | ({ type: 'checkbox' } & CheckboxInputProps);

*/

import type { ITextInputProps } from "../ui/Text-input";
import type { ISearchInputProps } from "../ui/Search-input";
import type { IRadioInputProps } from "../ui/Radio-input";
import type { ICheckboxInputProps } from "../ui/Checkbox-input";


export type InputType = 'text' | 'search' | 'radio' | 'checkbox' | 'tel' | 'email';

export interface IBaseInputProps {
    type?: InputType;
}

export type InputProps = 
    | ({type?: 'text' | 'email' | 'tel'} & ITextInputProps) 
    | ({type: 'search'} & ISearchInputProps) 
    | ({type: 'radio'} & IRadioInputProps) 
    | ({type: 'checkbox'} & ICheckboxInputProps);