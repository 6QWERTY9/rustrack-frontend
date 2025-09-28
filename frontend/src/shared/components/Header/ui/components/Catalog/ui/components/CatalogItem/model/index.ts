export interface ICatalogItemProp {
    
    id: string;

    title: string;
    links: ILinks[];

    isSelect:  boolean;
}

export interface ILinks {
    to: string;
    text: string;
}