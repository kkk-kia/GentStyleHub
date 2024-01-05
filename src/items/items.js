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
    imgSrc:"https://www.bing.com/th?id=OIP.hW-CBCzHdNEpH_nb7ba31QHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
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
