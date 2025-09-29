export interface ICatalogProps {
    isOpen?: boolean;
    items?: IItemsProps[];
}

export interface IItemsProps {
    to?: string;
    text?: string[];
    title?: string;
    id?: string;
}


