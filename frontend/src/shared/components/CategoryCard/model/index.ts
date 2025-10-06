export interface ICategoryCardProps {
    catgoryID?: string;
     title?: string;
     preTitle?: string;

     img: IImgProps;
}

export interface IImgProps {
    src?: string;
    imgSmall?: string;
    imgMedium?: string; 
}
