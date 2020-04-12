export interface Catigory{

    id : string  ;
    name: string ;
    photo : string ;
    description : string ;
    _links :{
        self :{
            href: string; 
        },
        catigory: {
            href: string ;
        },
        products :{
            href :string;
        }
    }

}