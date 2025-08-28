export type ButtonProps = {
    children: React.ReactNode;
    theme: 'normal' | 'border' | 'icon';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
