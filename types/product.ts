
export interface Product {
    image: any;
    id: any;
    name: string;
    slug:{
        current: string;
        _type: "slug";
    }
    description: string;
    price: number;
    imageUrl?: {
        asset: {
            url: string;
        }
    }
    _type: "product";
    _id: string;
    
}