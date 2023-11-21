import { Images } from "../assets/Images"

export const data = {
    header:
    {
        phone:"(225) 555-0118",
        mail:"michelle.rivera@example.com",
        offerMsg:"Follow Us and get a chance to win 80% off",
        socialsURL: {instagram:"instagram.com",youtube:"youtube.com", facebook:"facebook.com", twitter:"twitter.com"},
        companyName:"Bandage",
    },
    home:
    {
        hero:{
            slides : 
            [
                {
                    h5: "SUMMER 2020",
                    h1: "NEW COLLECTION",
                    h4: "We know how large objects will act, but things on a small scale.",
                    altText: 'Summer 2020 Products',
                    caption: 'Summer 2020',
                    src: Images.hero.summer,
                    key: 1,
                },
                {
                    h5: "WINTER 2020",
                    h1: "NEW COLLECTION",
                    h4: "We know how large objects will act, but things on a small scale.",
                    altText: 'Winter 2020 Products',
                    caption: 'Winter 2020',
                    src: Images.hero.winter,
                    key: 2,
                },
            ]
        },
        categories:
        {
            men:{name:"men",img:Images.categories.men},
            women:{name:"women",img:Images.categories.women},
            accessories:{name:"accessories", img:Images.categories.accessories},
            kids:{name:"kids", img:Images.categories.kids},
        },
        bestSellerProducts:
        [
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product1},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product2},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product3},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product4},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product5},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product6},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product7},
            {name:"Graphic Design", category:"English Department", price:16.48, discountedPrice:6.48,colors:["blue","green","orange","purple"], img:Images.bestSellerProducts.product8},
        ]
        
    },
    
}