import { defineQuery } from "next-sanity";

export const Sofas = defineQuery(`
    
    *[_type == "sofa"]{ 
       id,
        name,
        size,
        slug,
        description,
        price,
           "imageUrl": image.asset->url,
        
        }
        
         
            `);
export const Chairs = defineQuery(`
    
       *[_type == "chairs"]{ 
            
        name,
        slug,
        description,
        price,
        size,
      "imageUrl": image.asset->url,

        }
                `);
export const Sets = defineQuery(`
    
          *[_type == "set"]{
            
            name,
            slug,
            description,
            price,
          "imageUrl": image.asset->url,
            sizes,
            }
                     `);

export const Tables = defineQuery(`
    
               *[_type == "table"]{
              
            name,
            slug,
            description,
            price,
            brand,
          "imageUrl": image.asset->url,
            }
                           `);

export const Outdoors = defineQuery(`
    
                *[_type == "outdoor"]{
          
        name,
        slug,
        description,
        price,
       "imageUrl": image.asset->url,
        
}
                                `);
 export const AllProducts = defineQuery(`
    *[_type in ["sofa", "chairs", "set", "table", "outdoor"]]{
        name,
        slug,
        description,
        price,
        _type,
        "imageUrl": image.asset->url
    }
`);

                                                                    
                                                                                                                
                                 