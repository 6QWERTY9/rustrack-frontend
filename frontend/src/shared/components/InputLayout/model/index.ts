export type InputLayoutProps = {
    type: 'text' | 'email' | 'search' | 'tel' | 'radio' | 'checkbox' | 'date';
    id: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    className?: string;
};

export type InputIconProps = {
    type: 'cross' | 'search';
    onClick: (React.MouseEventHandler<HTMLWebViewElement> & React.MouseEventHandler<SVGSVGElement>) | undefined;
};
