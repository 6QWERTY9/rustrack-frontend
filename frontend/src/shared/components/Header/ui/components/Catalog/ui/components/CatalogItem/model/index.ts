export interface ICatalogItemProp {
    
    id: string;

    title: string;
    links?: ILinks[];

    isSelect:  boolean;
    isExpanded?: boolean; // Показывать ли ссылки
    onSelect?: (id: string) => void; // Обработчик клика
       
}

export interface ILinks {
    to: string;
    text: string;
}