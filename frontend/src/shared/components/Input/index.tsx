import type { InputProps } from './model';
import { CheckboxInput, RadioInput, TextInput, SearchInput } from './ui';


export const Input: React.FC<InputProps> = (props) => {
    switch (props.type) {
        case 'search':
            return <SearchInput {...props} />;
        case 'checkbox':
            return <CheckboxInput {...props} />;
        case 'radio':
            return <RadioInput {...props} />;
        default: 
            return <TextInput {...props}/>
    }
};

