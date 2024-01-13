export const initialState = [
  {
    name: "tv",
    id:0,
    imgSrc: "https://prismplus.sg/cdn/shop/files/Q55-QEa_800x.jpg?v=1682525755",
    number: 0,
    addToCart:false,
  },
  {
    name: "ball",
    id:1,
    imgSrc:"https://store.fcbarcelona.com/cdn/shop/products/unnamed_070943b0-10c9-48db-9762-d0218c3746c7.jpg?v=1690354576&width=493",
    number: 0,
    addToCart:false,
  },
  {
    name: "shirt",
    id:2,
    imgSrc:"https://cdn11.bigcommerce.com/s-lk0gwzb/images/stencil/1280x1280/products/1645/7555/forestgreen-front__14847.1674780012.jpg?c=2",
    number: 0,
    addToCart:false,
  },
  {
    name: "chair",
    id:3,
    imgSrc:"https://grandrapidschair.com/wp-content/uploads/2016/01/250_Brady_Graphite_Honey-1.jpg",
    number: 0,
    addToCart:false,
  },
  {
    name: "headphone",
    id:4,
    imgSrc:"https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/global/serp/studiopro-pdp-global-serp-black.jpg",
    number: 0,
    addToCart:false,
  },
  {
    name: "pencil",
    id:5,
    imgSrc:"https://hbw.ph/wp-content/uploads/2017/10/yellow-pencil-1.jpg",
    number: 0,
    addToCart:false,
  },
  {
    name: "ps5",
    id:6,
    imgSrc:"https://images.tv9bangla.com/wp-content/uploads/2023/02/PS5-Restock-Begins.jpg",
    number: 0,
    addToCart:false,
  },
  
];

export const reducer = (state, action) => {
  switch (action.type) { 
    case "increase":
      return state.map(item=>
        item.id===action.data ? {...item,number:item.number+1}  : item
      )
    case "decrease":
      return state.map(item=>
        item.id===action.data ? {...item,number:item.number-1}  : item
      )
    case "addToCart" :
      return state.map(item=>
        item.id === action.data ? {...item,addToCart:true} : item
        )   
    case "removeFromCart" :
      return state.map(item=>
        item.id === action.data ? {...item,addToCart:false,number:0} : item
        )   

    default:
      return state;
  }
};
